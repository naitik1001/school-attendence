import * as firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyAjBQElqJqUX7utgCF2ECWhmk6mclHq9iY",
    authDomain: "project-c60-50ade.firebaseapp.com",
    databaseURL: "https://project-c60-50ade-default-rtdb.firebaseio.com",
    projectId: "project-c60-50ade",
    storageBucket: "project-c60-50ade.appspot.com",
    messagingSenderId: "404024766123",
    appId: "1:404024766123:web:cea4d8ef8db31c15db51ee"
  };

  // Initialize Firebase
 // const app = initializeApp(firebaseConfig);
//</script>
  firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  