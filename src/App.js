import React, { useEffect } from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/messaging';

import { firebaseCloudMessaging } from './worker/index';

// const HomePage = () => {
//   useEffect(() => {
//     setToken();
//     // this is working
//     if ('serviceWorker' in navigator) {
//       navigator.serviceWorker.addEventListener('message', event => console.log('event for the service worker', event));
//     }
//     async function setToken() {
//       try {
//         const token = await firebaseCloudMessaging.init();
//         if (token) {
//           console.log('token', token);
//           // not working
//           getMessage();
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   });
//   function getMessage() {
//     console.log('message functions');
//     const messaging = firebase.messaging();
//     messaging.onMessage(message => console.log('foreground', message));
//   }
//   return (
//           <div className="capitalize" data-cy="welcome-page">
//             Welcome to React Next Base
//           </div>
//   );
// };

function App() {

  useEffect(() => {
    setToken();
    // this is working
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('message', event => console.log('event for the service worker', event));
    }
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          console.log('token', token);
          // not working
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
  function getMessage() {
    console.log('message functions');
    const messaging = firebase.messaging();
    messaging.onMessage(message => console.log('foreground', message));
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload. kek
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
