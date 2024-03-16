import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { CommonModule } from '@angular/common';
import { BookService } from '../book.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{

  book:Book[];

  constructor(private bookService : BookService,
    private router : Router
    ){
    this.book=[];
  }

  ngOnInit(): void {
    // this.book = [{
    //   "id":1,
    // "title" : "A",
    // "price" : 100
      
    // }];
    this.getBook();
  }

    private getBook(){
      this.bookService.getBooks().subscribe(data =>
        {
          this.book=data;
        });
    }

    updateBook(id: number){
      this.router.navigate(['update-book', id]);
    }

    deleteBook(id:number){
      this.bookService.deleteBook(id).subscribe(data =>{
        console.log(data);
        this.getBook();
      })
    }
    
  viewBook(id:number){
    this.router.navigate(['view-book', id]);
  }

}
