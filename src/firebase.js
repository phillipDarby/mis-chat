import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var config = {
  apiKey: 'AIzaSyCOxLNgd2VGaNa5tZ8wN_Fqdl9sKUBaL6Y',
  authDomain: 'mis-chat-c3988.firebaseapp.com',
  databaseURL: 'https://mis-chat-c3988.firebaseio.com',
  projectId: 'mis-chat-c3988',
  storageBucket: 'mis-chat-c3988.appspot.com',
  messagingSenderId: '809652115000'
};

firebase.initializeApp(config);

export default firebase;
