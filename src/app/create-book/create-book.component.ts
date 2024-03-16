import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { FormsModule } from '@angular/forms';
import { BookService } from '../book.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent implements OnInit{

book:Book = new Book();
constructor(private bookService:BookService,
  private router : Router){ }

  ngOnInit():void{

  }

  saveBook(){
    this.bookService.createBook(this.book).subscribe(data=>{
      console.log(data);
      this.goToBookList();
    },
    error=>console.log(error));
  }

  goToBookList(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.book);
    this.saveBook();
  }

}
