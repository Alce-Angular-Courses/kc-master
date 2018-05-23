import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { GoogleBooksComponent } from './google-books/google-books.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    LibrosRoutingModule
  ],
  declarations: [LibrosComponent, GoogleBooksComponent]
})
export class LibrosModule { }
