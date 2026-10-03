import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbcR9DKjUgGc7V66e6vQvmv3mNHgifc6U",
  authDomain: "spotlesssights-6f2f3.firebaseapp.com",
  projectId: "spotlesssights-6f2f3",
  storageBucket: "spotlesssights-6f2f3.firebasestorage.app",
  messagingSenderId: "697933885182",
  appId: "1:697933885182:web:21265d9015d8ea078f3faf",
  measurementId: "G-J75G45STYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);