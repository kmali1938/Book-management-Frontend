import { Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookListComponent } from './book-list/book-list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';

export const routes: Routes = [
    { path: '', 
    component: BookListComponent 
    }, // Set about as default route
    { path:'create-book' ,
     component: CreateBookComponent
    },
    { path:'update-book/:id' ,
     component: UpdateBookComponent
    },
    { path:'view-book/:id' ,
     component: ViewBookComponent
    }

];
