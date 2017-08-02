import { HttpModule, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DemoRequestService {
    constructor(private http: Http) {
    }
    search(query: string) {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
        return this.http.get(url);
    }

}
