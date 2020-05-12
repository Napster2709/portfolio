import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCpF5GHZkO5vMStS7PPBKK9BMgDpVQuV4Y',
  authDomain: 'abiding-state-141309.firebaseapp.com',
  databaseURL: 'https://abiding-state-141309.firebaseio.com',
  projectId: 'abiding-state-141309',
  storageBucket: 'abiding-state-141309.appspot.com',
  messagingSenderId: '196970721514',
  appId: '1:196970721514:web:0a810c5d42120fd120a793',
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
