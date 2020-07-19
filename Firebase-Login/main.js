var mainApp = {};
(function(){
var mainContainer = document.getElementById("main_container");

    var logtout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            alert("تم تسجيل الخروج ");
            window.location.replace("../page1/book.html");
            // alert("تم تسجيل الخروج ");
        },function(){})
    }

var init = function(){
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log("stay");
          mainContainer.style.display = "../page1/book.html";
        } else {
          // No user is signed in.
          mainContainer.style.display = "none";
          console.log("redirect");
          window.location.replace("index.html");
        }
      });
}
    
init();

mainApp.logout = logtout;
})();



// var btn = document.querySelector('button'),
// inpt = document.querySelector('input'),
//  dv = document.querySelector('div'),
//  txt = document.querySelector('textarea');




// btn.onclick = function() {

// 'use strict';

// if (inpt.value && txt.value !='') {

// dv.innerHTML += '<h4>' + inpt.value + '</h4>'  + '<p>' + txt.value + '</p>';
// txt.value = ''; 

// var pp = document.querySelectorAll('p');

// for (var i = 0; i < pp.length; i++) {
 
// } 
  
// }

// };
