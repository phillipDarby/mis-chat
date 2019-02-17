import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

//add config from firebase

firebase.initializeApp(config);

export default firebase;
