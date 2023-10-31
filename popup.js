// popup.js

document.getElementById("selectButton").addEventListener("onclick", () => {
    console.log("ygdffsgdjk")
    chrome.runtime.sendMessage({ action: "selectRandomOptionsInIonSelect" });
  });
  

// // myscript.js
// document.addEventListener("DOMContentLoaded", function () {
//     const selectButton = document.getElementById("selectButton");
//     if (selectButton) {
//       selectButton.addEventListener("click", function () {
//         // Your code here
//         alert("Button clicked!");
//       });
//     }
//   });
  
