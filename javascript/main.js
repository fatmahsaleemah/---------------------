var mainApp = {};

(function(){
var mainContainer = document.getElementById("main_container");

var logtout =  function(){
    firebase.auth().signOut().then(function(){
        console.log('success');
        window.location.replace("login.html");
    },function(){})
}

var init = function(){
//var firebase =app_fireBase
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          onsole.log("stay");
          mainContainer.style.display = "";
        }else{
            mainContainer.style.display = "none";
          console.log("redirect");
          window.location.replace("login.html");
        }
      });

    //   function logOut(){
    //     firebase.auth().signOut();
      }
      init();

      mainApp.logOut = logOut ;
})();