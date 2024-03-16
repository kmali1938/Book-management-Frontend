import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BookListComponent,HttpClientModule,RouterLink,FormsModule,UpdateBookComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Alltech Consulting Book Management Application';
}

