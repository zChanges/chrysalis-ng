import { Component, Input, HostListener, ElementRef, Output, EventEmitter, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { DOWN_ARROW, UP_ARROW, ESCAPE, ENTER, autocompleteItms } from './../chrysalis-config';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'ch-autoComplete',
  templateUrl: './ch-autoComplete.component.html',
  styleUrls: ['./ch-autoComplete.component.scss']
})
export class ChAutoCompleteComponent implements OnChanges, OnInit {

  _inputValue = '';
  selectedItem = 0;
  _list: Array<any> = [];
  _itms = [];
  _disabled = false;
  _required = false;
  _isApiRequest = false;
  noBlur = false;
  isOnSelected = false;
  keyboard$: Subject<any> = new Subject<any>();
  @Input()
  set items(value: Array<any>) {
    this._itms = value;
  }
  @Input('item-value') valueKey = '';
  @Input('item-text') textKey = null;
  @Input() minSearchLength = 0;
  @Input() placeholder = '';
  @Input() inputName = '';
  @Input()
  set required(value: any) {
    this._required = value === 'true';
  };
  get required() {
    return this._required;
  }

  @Input()
  set disabled(value: any) {
    this._disabled = value === 'true';
  }
  get disabled() {
    return this._disabled;
  }

  @Input()
  set isApiRequest(value) {
    this._isApiRequest = value === 'true';
  }

  get isMenuShow() {
    return this.noBlur;
  }


  @Output() inputChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() selectedInput: EventEmitter<any> = new EventEmitter<any>();



  @HostListener('document:click', ['$event'])
  onDocClick(event: KeyboardEvent) {
    const isContains = this.elementRef.nativeElement.contains(event.target);
    if (!isContains) {
      if (!this.isOnSelected) {
        this._inputValue = '';
        this.selectedItem = 0;
        this.isOnSelected = false;
        this.emitInput({ iskeyboard: false, data: this._inputValue });
        this.emitSelectedInput(false);
      }
      this.mouseLeave();
    }
  }


  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.keyboard$.debounceTime(500)
      .subscribe(data => {
       if (this.isUpdate()) {return; };
        this.emitInput({ iskeyboard: true, data: this._inputValue });
      })
  }

  // 键盘事件
  _keyboard($event: KeyboardEvent) {
    switch ($event.keyCode) {
      case ENTER:
        if (this.isMenuShow) {
          this.onSelected($event, this.selectedItem);
        }
        break;
      case DOWN_ARROW:
        $event.preventDefault();
        if (this.isMenuShow) {
          this.selectedItem = (this.selectedItem === this._list.length - 1) ? 0
            : Math.min(this.selectedItem + 1, this._list.length - 1);
        }
        break;
      case UP_ARROW:
        $event.preventDefault();
        if (this.isMenuShow) {
          this.selectedItem = (this.selectedItem === 0) ? this._list.length - 1
            : Math.max(0, this.selectedItem - 1);
        }
        break;
      case ESCAPE:
        this.mouseLeave();
        break;
      default:
        this.keyboard$.next();
        this.isOnSelected = false;
        if (!this._isApiRequest) {
          setTimeout(() => { this.upDateItms(); }, 0);
        }
        break;
    }
  }



  query() {
    this._list = this._itms.map((i) => new autocompleteItms(i, this.textKey, this.valueKey))
      .filter(i => new RegExp(this._inputValue, 'ig').test(i.text));
  }

  apiRequestQuery() {
    if (this._itms) {
      this._list = this._itms.map((i) => new autocompleteItms(i, this.textKey, this.valueKey));
    }
  }

  upDateItms() {
    if (this.isUpdate()) {return; };
    if (this._isApiRequest) {
      this.apiRequestQuery();
    } else {
      this.query();
    }
    this.mouseenter();
  }


  ngOnChanges(change: SimpleChanges) {
    if (this._isApiRequest && change.items) {
      this._itms = change.items.currentValue;
      this.upDateItms();
    }
  }

  onFocus() {
    if (this._inputValue.length > 0) { return; };
    this.upDateItms();
    this.selectedItem = 0;
  }

  onSelected(event, index) {
    this.isOnSelected = true;
    this._inputValue = this._list[index].text;
    this.mouseLeave();
    this.emitSelectedInput(true, this._list[index], this._inputValue);

    this.emitInput({ iskeyboard: false, data: this._inputValue });
  }

  mouseLeave() {
    this.noBlur = false;
  }

  mouseenter() {
    this.noBlur = true;
  }

  emitInput(data) {
    this.inputChange.emit(data);
  }

  emitSelectedInput(isSelected?: boolean, data?: any, input?: string) {
    this.selectedInput.emit({ isSelected: isSelected, data: { data: data, value: input } });
  }

  isUpdate() {
    if (this._inputValue.length < this.minSearchLength || this._inputValue.length < 1) {
      this.mouseLeave();
    }
    return this._inputValue.length < this.minSearchLength || this._inputValue.length < 1;
  }


}

/**
 * 1.缺少多text值
 * 2.是否只能选择一条。可否自己输入数据。
 * 3.ajax
 * 4.item-text 无法实现嵌套如 data.value
 * 5添加http加载loading效果
 * 6.父组件无法获取到required
 */
