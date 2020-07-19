var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    // apiKey: "AIzaSyAq5EuwGXS1vRpD8vdmvTQnRWHT3r8nIpA",
    // authDomain: "aimhelper-8510a.firebaseapp.com",
    // databaseURL: "https://aimhelper-8510a.firebaseio.com",
    // projectId: "aimhelper-8510a",
    // storageBucket: "aimhelper-8510a.appspot.com",
    // messagingSenderId: "43997639659"
    apiKey: "AIzaSyDhP8cncH7JUq0VA_fF80eiqDuIE1FjOZ8",
    authDomain: "mine1-4d527.firebaseapp.com",
    databaseURL: "https://mine1-4d527.firebaseio.com",
    projectId: "mine1-4d527",
    storageBucket: "mine1-4d527.appspot.com",
    messagingSenderId: "303406244024",
    appId: "1:303406244024:web:a50b64765f3527b4bc144d"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}


