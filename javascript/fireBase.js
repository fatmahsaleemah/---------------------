var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyB5EKnD0Hv4WHa3y4MigJq40MHakC800Ng",
        authDomain: "test-1509e.firebaseapp.com",
        databaseURL: "https://test-1509e.firebaseio.com",
        projectId: "test-1509e",
        storageBucket: "test-1509e.appspot.com",
        messagingSenderId: "791588909011",
        appId: "1:791588909011:web:ab67c6b1fada66dfcf0926",
        measurementId: "G-0ZPBSE15YS"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}





// var app_fireBase = {};

// (function(){

//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyB5EKnD0Hv4WHa3y4MigJq40MHakC800Ng",
//     authDomain: "test-1509e.firebaseapp.com",
//     databaseURL: "https://test-1509e.firebaseio.com",
//     projectId: "test-1509e",
//     storageBucket: "test-1509e.appspot.com",
//     messagingSenderId: "791588909011",
//     appId: "1:791588909011:web:ab67c6b1fada66dfcf0926",
//     measurementId: "G-0ZPBSE15YS"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

//   app_fireBase = firebase;

// })()