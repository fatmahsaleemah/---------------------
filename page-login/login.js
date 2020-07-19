
// <!-- TODO: Add SDKs for Firebase products that you want to use
    //  https://firebase.google.com/docs/web/setup#available-libraries -->





  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAZ7F2LUzXyZpDE-v3BWTXvNdfs4WfFrzQ",
    authDomain: "login-a153a.firebaseapp.com",
    databaseURL: "https://login-a153a.firebaseio.com",
    projectId: "login-a153a",
    storageBucket: "login-a153a.appspot.com",
    messagingSenderId: "341558789978",
    appId: "1:341558789978:web:dae5d357127fdf0e845563"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");

      const promise = auth.createUserWithEmailAndPassword(email.value , password.value);
      promise.catch(e => alert(e.message));

      alert("Signed Up");
  }

  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    // const promise = firebase.auth.singInWithEmailAndPassword(email.value , password.value);
    // promise.catch(e => alert(e.message));
    firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
      console.log(error);
      promise.catch(e => alert(e.message));

    
    });
  }
     

  function signout(){
      auth.signout();
      alert("Signed out");

  }

  auth.onAuthStateChanged(function(user){
		
		if(user){
			
			var email = user.email;
			alert("Active User " + email);
			
			//Take user to a different or home page

			//is signed in
			
		}else{
			
			alert("No Active User");
			//no user is signed in
		}
  });


//   if (user) {
//     // User is signed in.
//     onsole.log("stay");
//     mainContainer.style.display = "";
//   }else{
//       mainContainer.style.display = "none";
//     console.log("redirect");
//     window.location.replace("login.html");
//   }


// firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // ... 
    //   // alert("Signed In" +email.value);
    //   if (errorCode === 'auth/wrong-password') {
    //     alert('Wrong password.');
    //   } else {
    //     alert(errorMessage);
    //   }
    //   console.log(error);


    // const login = (email, password) => {
    //   return firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    //  }
    //  function getFirebaseDB (db) {
    //   return firebase
    //    .auth()
    //    .signInWithEmailAndPassword(firebaseEmail, firebasePassword)
    //    .then(() => firebase.database())
    //  }

    //  async login() {

    //   DismissKeyboard();
  
    //   try {
    //     await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
  
    //     this.setState({
    //       response: "Logged In!"
    //     });
  
    //     setTimeout(() => {
    //       this.props.navigator.push({
    //         name: "Home"
    //       })
    //     }, 1500);
  
    //   } catch (error) {
    //     this.setState({
    //       response: error.toString()
    //     })
    //   }
  
    // }

    // firebase.auth()
    //   .signInWithEmailAndPassword(email.value, password.value)
    //   .catch((error) => {
    //     // Handle Errors here.
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     this.setState({
    //       errorMessage,
    //       loading: false
    //     })
    //   });
    // alert("Signed In" +email.value);
    // if(email === promise){
    // alert("تم تسجيل دخولك")
    // }else{
    //     alert("حاول مره اخرى")
    // }
  // }