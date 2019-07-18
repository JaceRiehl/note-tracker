import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyB973zuixqbWm3Y3RCd6wZ6JN09Oyhcl8s",
    authDomain: "notekeeper-82146.firebaseapp.com",
    databaseURL: "https://notekeeper-82146.firebaseio.com",
    projectId: "notekeeper-82146",
    storageBucket: "",
    messagingSenderId: "472750000898",
    appId: "1:472750000898:web:35291c9af29e41d4"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
