import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = "http://localhost:8080/bookapi";
  constructor(private httpClient: HttpClient) { }

  getBooks() : Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}/findall`);
  }

  createBook(book: Book): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/create` , book);
  }

  getBookById(id:number): Observable<Book>{
    return this.httpClient.get<Book>(`${this.baseUrl}/findbyid/${id}`)
  }

  updateBook(id: number,book:Book):Observable<Object>
{
  return this.httpClient.put(`${this.baseUrl}/update/${id}` , book);
}

deleteBook(id:number): Observable<Object>{
  return this.httpClient.delete(`${this.baseUrl}/delete/${id}`)
}

}
