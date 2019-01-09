import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDVqc0ycMa-VsV_Jo8P40V2jGsQ2Cj4mZY',
	authDomain: 'catch-of-the-day-austin-simon.firebaseapp.com',
	databaseURL: 'https://catch-of-the-day-austin-simon.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

// this is a default export
export default base;
