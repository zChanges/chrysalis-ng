import { Component, Input, HostListener, ElementRef } from '@angular/core';
import { DOWN_ARROW, UP_ARROW, ESCAPE, ENTER, autocompleteItms } from './../chrysalis-config';

@Component({
  selector: 'ch-autoComplete',
  templateUrl: './ch-autoComplete.component.html',
  styleUrls: ['./ch-autoComplete.component.scss']
})
export class ChAutoCompleteComponent {

  _inputValue = '';
  selectedItem = 0;
  _list = [];
  _itms = [];
  _disabled = false;
  noBlur = false;
  @Input()
  set items(value: Array<any>) {
    this._itms = value;
  }
  @Input('item-value') valueKey = '';
  @Input('item-text') textKey = null;
  @Input() minLeng = 0;
  @Input() placeholder = '';
  @Input()
  set disabled(value: any) {
    this._disabled = value === 'true';
  }
  get disabled() {
    return this._disabled;
  }

  @HostListener('document:click', ['$event'])
  onDocClick(event: KeyboardEvent) {
    const isContains = this.elementRef.nativeElement.contains(event.target);
    if (!isContains) {
      this.mouseLeave();
    }
  }


  constructor(private elementRef: ElementRef) { }

  // 键盘事件
  /**
   * input event listner
   * @param event
   */
  _keyboard($event: KeyboardEvent) {
    switch ($event.keyCode) {
      case ENTER:
        if (this.isMenuShow) {
          this.onSelected($event, this.selectedItem);
        }
        break;
      case DOWN_ARROW:
        if (this.isMenuShow) {
          this.selectedItem = (this.selectedItem === this._list.length - 1) ? 0
            : Math.min(this.selectedItem + 1, this._list.length - 1);
        }
        break;
      case UP_ARROW:
        if (this.isMenuShow) {
          this.selectedItem = (this.selectedItem === 0) ? this._list.length - 1
            : Math.max(0, this.selectedItem - 1);
        }
        break;
      case ESCAPE:
        this.mouseLeave();
        break;
      default:
        setTimeout(() => { this.query(); }, 0);
        break;
    }
  }

  query() {
    if (this._inputValue.length < this.minLeng || this._inputValue.length < 1) { this.mouseLeave(); return; };
    this.mouseenter();
    this._list = this._itms.map((i) => new autocompleteItms(i, this.textKey, this.valueKey))
      .filter(i => new RegExp(this._inputValue, 'ig').test(i.text));
  }

  get isMenuShow() {
    return this.noBlur;
  }

  onFocus() {
    if (this._inputValue.length > 0) { return; };
    this.query();
    this.selectedItem = 0;
  }

  onSelected(event, index) {
    this._inputValue = this._list[index].text;
    this.mouseLeave();
  }

  mouseLeave() {
    this.noBlur = false;
  }

  mouseenter() {
    this.noBlur = true;
  }


}
