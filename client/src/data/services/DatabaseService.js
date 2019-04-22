import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export class DatabaseService {

  static CONFIG = {
    apiKey: 'AIzaSyDi_apMXJ_rOqqZj2NnjaVJhWEuf1YJUic',
    authDomain: 'e-notes-pro.firebaseapp.com',
    databaseURL: 'https://e-notes-pro.firebaseio.com',
    projectId: 'e-notes-pro',
    storageBucket: 'e-notes-pro.appspot.com',
    messagingSenderId: '261901029166'
  };

  connect() {
    firebase.initializeApp(DatabaseService.CONFIG);
    this.database = firebase.database();
  }

  disconnect() {
    // todo
  }

  create(path, item) {
    // todo
  }

  read(path) {
    // todo
  }

  update(path, item) {
    // todo
  }

  save(path, item) {
    // todo
  }

}
