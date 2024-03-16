import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css'
})
export class ViewBookComponent implements OnInit{
  id:number =0
  book: Book = new Book;

  constructor(private route:ActivatedRoute,
    private bookService: BookService){

  }

  ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];

      this.book= new Book();
      this.bookService.getBookById(this.id).subscribe(data =>
        {
          this.book=data;
        })
  }

}
