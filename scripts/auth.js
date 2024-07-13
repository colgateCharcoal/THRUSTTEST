// listen for auth status changes
  // Get a reference to the signup form and its elements
  // const signupForm = document.querySelector('#signup-form');
  // const signupEmail = document.querySelector('#input-email-signup');
  // const signupPassword = document.querySelector('#input-password-signup');
  // const signupPasswordConfirm = document.querySelector('#input-password-confirm');
  // const loginSignupDiv = document.querySelector("#login-signup-div")
  // const loginForm = document.querySelector('#login-form');
  document.addEventListener("click", function() {
    const menu = document.getElementById("authentication-bar");
    if(menu.style. width === "8%"){
      menu.style. width = "15%"
    }else{
      menu.style. width = "8%"
    }
    if (menu.style. height === "7%") {
      menu.style. height = "35%";
    } else {
      menu.style. height = "7%";
    }
  });
  
  
  

// Check the user's authentication status
auth.onAuthStateChanged((user) => {
  const loginSignupDiv = document.getElementById("login-signup-div");

  if (user) {
    // User is authenticated, hide the login and signup elements
    loginSignupDiv.style.display = "none";
  } else {
    // User is not authenticated, show the login and signup elements
    loginSignupDiv.style.display = "block";
  }
});


auth.onAuthStateChanged(user => {
    if (user) {
      console.log("user logged in");
      console.log(user);
      setupUI(user);
      var uid = user.uid;
      console.log(uid);
    } else {
      console.log("user logged out");
      setupUI();
    }
   });
   
  //  login
  //  loginForm.addEventListener('submit', (e) => {
  //   e.preventDefault();

    // login
  const loginForm = document.querySelector('#login-form');
   loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // get user info
    const email = loginForm['input-email'].value;
    const password = loginForm['input-password'].value;
    // log the user in
    auth.signInWithEmailAndPassword(email, password).then((cred) => {
      // close the login modal & reset form
      loginForm.reset();
      console.log(email);
      signupForm.style.display = 'none';
      loginSignupDiv.style.display = 'none';
      loginForm.style.display = 'none';
    })
    .catch((error) =>{
      const errorCode = error.code;
      const errorMessage = error.message;
      document.getElementById("error-message").innerHTML = errorMessage;
      console.log(errorMessage);
    });
   });





   function showSignUpForm() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";
  }
  


  function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
  }
      // Add an event listener to toggle between login and signup forms
      document.getElementById("toggle-login-signup").addEventListener("change", function() {
        if (this.checked) {
            showSignUpForm();
        } else {
            showLoginForm();
        }
    });

  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var email = document.getElementById("input-email-signup").value;
    var password = document.getElementById("input-password-signup").value;
    var confirmPassword = document.getElementById("input-password-confirm").value;
  
    if (password !== confirmPassword) {
      document.getElementById("signup-error-message").innerHTML = "Passwords do not match";
      return;
    }
  
    // Add your code to create a new user account here
  
  });

  // Inside your existing script tag or in a separate script file

  // Check the user's authentication status
// Check the user's authentication status
// Check the user's authentication status
// Initialize Firebase (replace with your Firebase config)
// const firebaseConfig = { ... };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Check the user's authentication status
// Initialize Firebase (replace with your Firebase config)
// const firebaseConfig = { ... };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// Check the user's authentication status
/*document.addEventListener('DOMContentLoaded', function() {
  // Your code goes here
// });

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in, show the button
    const buttonContainer = document.getElementById("button-container");
    buttonContainer.style.display = "block";

    // Initialize the initial state of the button and GIF
    let isStarted = false;

    // Show the GIF based on the button state
    const gifContainer = document.getElementById("gif-container");

    // Show the message and face container based on the button state
    const messageContainer = document.getElementById("message-container");

    // Add an event listener for the toggle button
    const toggleButton = document.getElementById("toggle-button");
    
    toggleButton.addEventListener("click", function() {
      // Toggle the button state
      isStarted = !isStarted;

      // Update the button text and style
      if (isStarted) {
        toggleButton.textContent = "Stop";
        toggleButton.classList.remove("green");
        toggleButton.classList.add("red");
        gifContainer.style.display = "block"; // Show the GIF
        messageContainer.style.display = "none"; // Hide the message and face
      } else {
        toggleButton.textContent = "Start";
        toggleButton.classList.remove("red");
        toggleButton.classList.add("green");
        gifContainer.style.display = "none"; // Hide the GIF
        messageContainer.style.display = "block"; // Show the message and face

        // Get the highestPositiveValue from Firebase when the button is in "Stop" state
        if (!isStarted) {
          const highestPositiveValueRef = db.ref('highestPositiveValue');
          highestPositiveValueRef.once('value', function(snapshot) {
            const highestPositiveValue = snapshot.val();

            // Determine the message and face based on the value
            let message = '';
            let face = '';

            if (highestPositiveValue > 200) {
              message = 'Excellent';
              face = '😄 ';
            } else if (highestPositiveValue >= 100 && highestPositiveValue <= 200) {
              message = 'Good';
              face = '😃 ';
            } else if (highestPositiveValue >= 50 && highestPositiveValue < 100) {
              message = 'Medium';
              face = '😐 ';
            } else {
              message = 'Fatigue';
              face = '😢 ';
            }

            // Display the message and face on your page
            const messageElement = document.getElementById("message");
            messageElement.textContent = "Muscle Condition: " + message;
            
            const faceElement = document.getElementById("face");
            faceElement.textContent = " " + face;
          });
        }
      }

      // Update the status in the database (assuming you have a path for it)
      const statusRef = db.ref('status');
      statusRef.set(isStarted ? 1 : 0);
    });
  } else {
    // User is not signed in, you can handle this as needed
    buttonContainer.style.display = "none";
    gifContainer.style.display = "none";
    messageContainer.style.display = "none";
  }
});
});*/

document.addEventListener('DOMContentLoaded', function() {
  firebase.auth().onAuthStateChanged(function(user) {
    const buttonContainer = document.getElementById("button-container");
    const gifContainer = document.getElementById("gif-container");
    const messageContainer = document.getElementById("message-container");

    if (user) {
      // User is signed in, show the button
      buttonContainer.style.display = "block";

      let isStarted = false;
      let isFetchingHighestValue = false;

      const toggleButton = document.getElementById("toggle-button");
      const messageElement = document.getElementById("message");
      const faceElement = document.getElementById("face");

      toggleButton.addEventListener("click", function() {
        isStarted = !isStarted;

        if (isStarted) {
          toggleButton.textContent = "Stop";
          toggleButton.classList.remove("green");
          toggleButton.classList.add("red");
          gifContainer.style.display = "block";
          messageContainer.style.display = "none";
        } else {
          toggleButton.textContent = "Start";
          toggleButton.classList.remove("red");
          toggleButton.classList.add("green");
          gifContainer.style.display = "none";
          messageContainer.style.display = "block";

          if (!isStarted && !isFetchingHighestValue) {
            isFetchingHighestValue = true;

            // Show "Wait" message
            messageElement.textContent = "Please wait...";
            faceElement.textContent = " ⌛ ";

            setTimeout(function() {
              const highestPositiveValueRef = db.ref('highestPositiveValue');
              highestPositiveValueRef.once('value', function(snapshot) {
                const highestPositiveValue = snapshot.val();

                let message = '';
                let face = '';

                if (highestPositiveValue > 200) {
                  message = 'Excellent';
                  face = '😄 ';
                } else if (highestPositiveValue >= 100 && highestPositiveValue <= 200) {
                  message = 'Good';
                  face = '😃 ';
                } else if (highestPositiveValue >= 50 && highestPositiveValue < 100) {
                  message = 'Medium';
                  face = '😐 ';
                } else {
                  message = 'Fatigue';
                  face = '😢 ';
                }

                messageElement.textContent = "Muscle Condition: " + message;
                faceElement.textContent = " " + face;

                isFetchingHighestValue = false;
              });
            }, 2000);
          }
        }

        const statusRef = db.ref('status');
        statusRef.set(isStarted ? 1 : 0);
      });

    } else {
      // User is not signed in, hide the button, gif, message, and face elements
      buttonContainer.style.display = "none";
      gifContainer.style.display = "none";
      messageContainer.style.display = "none";
    }
  });
});



  
  // const button = document.getElementById("toggle-button");
  
  // button.addEventListener("click", function() {
  //   // Toggle the button styling
  //   if (button.textContent === "Start") {
  //     // Start
  //     button.textContent = "Stop";
  //     button.classList.remove("green");
  //     button.classList.add("red");
  //   } else {
  //     // Stop
  //     button.textContent = "Start";
  //     button.classList.remove("red");
  //     button.classList.add("green");
  //   }
  // });
  



 const signupForm = document.querySelector('#signup-form');
 const signupEmail = document.querySelector('#input-email-signup');
 const signupPassword = document.querySelector('#input-password-signup');
 const signupPasswordConfirm = document.querySelector('#input-password-confirm');
 const loginSignupDiv = document.querySelector("#login-signup-div")
//  const loginForm = document.querySelector('#login-form');

   

 
// Add an event listener to the signup form submit button
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the values entered by the user
  const email = signupEmail.value;
  const password = signupPassword.value;
  const passwordConfirm = signupPasswordConfirm.value;

  // Check if the passwords match
  if (password !== passwordConfirm) {
    document.querySelector('#signup-error-message').textContent = 'Passwords do not match';
    return;
  }

  // Use Firebase's createUserWithEmailAndPassword() method to create a new user account
  auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Clear the signup form and hide it
      signupForm.reset();
      signupForm.style.display = 'none';
      loginSignupDiv.style.display = 'none';
      loginForm.style.display = 'none';

      // Show the authentication bar and set the user details
      document.querySelector('#authentication-bar').style.display = 'block';
      document.querySelector('#authentication-status').textContent = 'Logged in as';
      document.querySelector('#user-details').textContent = userCredential.user.email;
    })
    .catch((error) => {
      // Handle errors
      const errorCode = error.code;
      const errorMessage = error.message;
      document.querySelector('#signup-error-message').textContent = errorMessage;
    });
});


   // logout
   const logout = document.querySelector('#logout-link');
   logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut();
    signupForm.style.display = 'none';
    loginSignupDiv.style.display = 'block';
    loginForm.style.display = 'block';
    document.getElementById("toggle-login-signup").checked = false;
   });


  //  document.getElementById("menu-button").addEventListener("click", function() {
  //   const menu = document.getElementById("authentication-bar");
  //   const content = document.getElementById("menu-content");
  
  //   if (menu.style.width === "0" || menu.style.width === "") {
  //     menu.style.width = "25%";
  //     content.style.display = "block";
  //   } else {
  //     menu.style.width = "0";
  //     content.style.display = "none";
  //   }
  // });
  