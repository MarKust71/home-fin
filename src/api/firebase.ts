import * as firebase from 'firebase/app';

import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

export const db = () => {
  const apps = firebase.getApps();

  if (!apps.length) {
    return firebase.initializeApp(firebaseConfig);
  }

  return apps[0];
};
