import { Component, OnInit, } from '@angular/core';
import { DemoRequestService } from './../../shared/demo/demo-request.service';

@Component({
  selector: 'chAutoCompleteDemo',
  templateUrl: './chAutoCompleteDemo.component.html',
  styleUrls: ['./chAutoCompleteDemo.component.scss']
})
export class ChAutoCompleteDemoComponent implements OnInit {
  items = [{ name: 'Vadodara', value: '1' },
  { title: 'angular', id: '2' },
  { title: 'vue', id: '3' },
  { title: 'react', id: '4' },
  { title: 'ionic', id: '5' },
  { title: 'ngrx/store', id: '6' }];
  data: any;
  value: any;
  dataService: any;
  input: string;

  minSearchLength = 0;
  disabled = false;
  required = false;

  constructor(private demoRequestService: DemoRequestService) {
  }



  ngOnInit() {
  }

  inputChange(event) {
    if (event === '' || this.data === event) { return; };
    this.data = event.data;
  }

  inputChangeRequire(event) {
    if (event === '' || this.data === event) { return; };
    this.data = event.data;
    if (event.iskeyboard) {
      this.demoRequestService.search(event.data).subscribe(res => {
        console.log(res.json().items)
        const newData = [];
        res.json().items.forEach(element => {
          newData.push({ id: element.id, title: element.volumeInfo.title })
        });
        this.items = newData;
      });
    }
  }

  selectedInput(event) {
    if (event.isSelected) {
      console.log(event);
      this.value = JSON.stringify(event.data);
    }
  }

}
