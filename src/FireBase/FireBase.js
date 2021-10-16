import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDqGQj4PMieBzMasfNL9fLVRzGRSDmOHOw",
    authDomain: "studentform-sakthi.firebaseapp.com",
    projectId: "studentform-sakthi",
    storageBucket: "studentform-sakthi.appspot.com",
    messagingSenderId: "234969715901",
    appId: "1:234969715901:web:41e420c90ead6e249293d4"
  };

firebase.initializeApp(firebaseConfig);

const storage=firebase.storage();

export {storage,firebase as default}