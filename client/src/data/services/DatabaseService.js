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

  static instance = null;

  static getInstance() {

    if (DatabaseService.instance === null) {
      DatabaseService.instance = new DatabaseService();
      DatabaseService.instance.initialize();
    }

    return DatabaseService.instance;
  }

  initialize() {
    firebase.initializeApp(DatabaseService.CONFIG);
    this.database = firebase.database();
    this.auth = firebase.auth();
  }

  create(path, item) {
    return this.database.ref(path).set(item);
  }

  async readOnce(path) {
    const result = await this.database.ref(path).once('value');
    return result.val();
  }

  update(path, item) {
    return this.database.ref(path).set(item);
  }

  remove(path) {
    return this.database.ref(path).remove();
  }

  subscribe(path, listener) {
    return this.database.ref(path).on('value', listener);
  }

}
