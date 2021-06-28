// var firebaseConfig = {
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Reference messages collection
// var friendsRef = firebase.database().ref("friends");

// Listen for submit
document.getElementById("dataForm").addEventListener("submit", e => {
  e.preventDefault();
  console.log("Submitted");

  // get values
  var personName = getInputVal("personName");
  var personGender = getInputVal("personGender");
  var crushName = getInputVal("crushName");
  var crushGender = getInputVal("crushGender");
  var ageDiff = getInputVal("ageDiff");
  var yearDiff = getInputVal("yearDiff");

  saveData(personName, personGender, crushName, crushGender, ageDiff, yearDiff);
  document.querySelector(".main").style.display = 'none'

  // Show alert
    document.querySelector('.calculating').style.display = 'block'
  // Hide after 3 seconds
  setTimeout(()=>{
    document.querySelector('.calculating').style.display = 'none'
    document.querySelector('.final').style.display = 'block'
  },3000)
  
});

// Function to get form values:
const getInputVal = id => {
  return document.getElementById(id).value;
};



// Function to save data to firebase
const saveData = (
  personName,
  personGender,
  crushName,
  crushGender,
  ageDiff,
  yearDiff
) => {
  let newFriendsRef = friendsRef.push();

  newFriendsRef.set({
    personName,
    personGender,
    crushName,
    crushGender,
    ageDiff,
    yearDiff
  });
};
