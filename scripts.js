// document.addEventListener("DOMContentLoaded", function () {
//     const dropdownButton = document.querySelector(".hamburger");
//     const dropdownMenu = document.querySelector(".App-header-drawer");
  
//     dropdownButton.addEventListener("click", function() {
//       dropdownButton.classList.toggle("active");
//         dropdownMenu.classList.toggle("active");
//         // dropdownMenu.style.visibility="visible";
//         // document.querySelector("App-header-drawer").style.visibility="visible";
        
//     });
  
//     // Close the dropdown when clicking outside of it
//     // 
const hamburger=document.querySelector(".hamburger");
const appdrawer=document.querySelector(".App-header-drawer");
hamburger.addEventListener("click",()=>{
  hamburger.classList.toggle("active");
  appdrawer.classList.toggle("active");
});
document.addEventListener("click", function (event) {
        if (!hamburger.contains(event.target) && !appdrawer.contains(event.target)) {
          appdrawer.classList.remove("active");
          hamburger.classList.remove("active");
        }
      });
    

