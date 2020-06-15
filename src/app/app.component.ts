import {Component} from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor() {
// Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDsvA6q_58dhOIQHS6hkJeJxuSzb6zHdlU",
      authDomain: "books-8bf09.firebaseapp.com",
      databaseURL: "https://books-8bf09.firebaseio.com",
      projectId: "books-8bf09",
      storageBucket: "books-8bf09.appspot.com",
      messagingSenderId: "847506123216",
      appId: "1:847506123216:web:20d90248d51db1fbcd71d5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
