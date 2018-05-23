import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'kc-google-books',
  templateUrl: './google-books.component.html',
  styleUrls: ['./google-books.component.css']
})
export class GoogleBooksComponent implements OnInit {

  public clave: string;
  private urlBase: string;
  public aLibros: Array<string>;
  constructor(public http: HttpClient) { }1

  ngOnInit() {
    this.aLibros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:'
  }

  buscar() {
    const url = this.urlBase + this.clave;
    this.http.get(url).pipe(
      map( (response: any) => response.items)
    ) // Fin del pipe
    .pipe(
      map((response: any) => {
        const aDatos = [];
        response.forEach(element =>
          aDatos.push(element.volumeInfo.title)
        );
        return aDatos; }) // Fin del map
    ) // Fin del pipe
    .subscribe(
      (response: [any]) => this.aLibros = response
    );
    this.clave = '';
  }
}
