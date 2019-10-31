// let ui = new firebaseui.auth.AuthUI(firebase.auth());
// // can be configured to require the user to enter a display name (defaults to true)
// // currently set to false to not require

// let uiConfig = {
//   callbacks: {
//     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
//       // User successfully signed in.
//       // Return type determines whether we continue the redirect automatically
//       // or whether we leave that to developer to handle.
//       return true;
//     },
//     uiShown: function() {
//       // The widget is rendered.
//       // Hide the loader.
//       document.getElementById("loader").style.display = "none";
//     }
//   },

//   signInFlow: "popup",
//   signInSuccessUrl: "<url-to-redirect-to-on-success>",
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID
//   ],
//   //Terms of service url.
//   tosUrl: "<your-tos-url>",
//   // Privacy policy url.
//   privacyPolicyUrl: "<your-privacy-policy-url>"
// };

// // SignInOptions above get called by 2nd argument uiConfig - add more to SignInOptions if we want to add phone # of facebook/social media integration.
// ui.start("#firebaseui-auth-container", uiConfig);

// // const Firebase = () => {
// //   firebase
// //     .auth()
// //     .createUserWithEmailAndPassword(email, password)
// //     .catch(function(error) {
// //       // Handle Errors here.
// //       var errorCode = error.code;
// //       var errorMessage = error.message;
// //       // ...
// //     });
// // };
