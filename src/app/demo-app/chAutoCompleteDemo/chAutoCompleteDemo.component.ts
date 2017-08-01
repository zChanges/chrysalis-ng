import { Http } from '@angular/http';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-chAutoCompleteDemo',
  templateUrl: './chAutoCompleteDemo.component.html',
  styleUrls: ['./chAutoCompleteDemo.component.scss']
})
export class ChAutoCompleteDemoComponent implements OnInit {
  items = [
    { value: '1', text: 'aaaca', name: '111111' },
    { value: '2', text: 'bbbba', name: '2222' },
    { value: '3', text: 'cccf', name: '3333' },
    { value: '4', text: 'eefece', name: '4444' },
    { value: '5', text: 'ffffa', name: '5555' }
  ];
  data: any;
  value: any;
  dataService: any;
  constructor(private http: Http) {
    this.dataService =
      this.http.get('https://www.googleapis.com/books/v1/volumes?q=angular').subscribe(res => {
        return res.json()
      })
  }

  ngOnInit() {
  }

  inputChange(event) {
    console.log(event);
    this.data = event;
  }

  selectedInput(event) {
    console.log(event);
    this.value = JSON.stringify(event);
  }

}
