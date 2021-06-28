// var firebaseConfig = {
// // nah, I'm a nice guy :)
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Reference messages collection
// var friendsRef = firebase.database().ref("friends");

// Listen for submit
document.getElementById("dataForm").addEventListener("submit", e => {
  e.preventDefault();

  // get values
  var personName = getInputVal("personName");
  var personGender = getInputVal("personGender");
  var crushName = getInputVal("crushName");
  var crushGender = getInputVal("crushGender");
  var ageDiff = getInputVal("ageDiff");
  var yearDiff = getInputVal("yearDiff");

  // saveData(personName, personGender, crushName, crushGender, ageDiff, yearDiff);
  document.querySelector(".main").style.display = 'none'

  document.querySelector('.calculating').style.display = 'flex'
  setTimeout(()=>{
    document.querySelector('.calculating').style.display = 'none'
    document.querySelector('.final').style.display = 'block'
    console.log("Well don't worry mister, The data's not saved. :) No post request have been made. Chill!")
  },3000)
  
});

// Function to get form values:
const getInputVal = id => {
  return document.getElementById(id).value;
};



// Function to save data to firebase
// const saveData = (
//   personName,
//   personGender,
//   crushName,
//   crushGender,
//   ageDiff,
//   yearDiff
// ) => {
//   let newFriendsRef = friendsRef.push();

//   newFriendsRef.set({
//     personName,
//     personGender,
//     crushName,
//     crushGender,
//     ageDiff,
//     yearDiff
//   });
// };
