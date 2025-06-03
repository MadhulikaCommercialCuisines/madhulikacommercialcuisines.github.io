var startDate = new Date("02/06/2025 11:00"); // Change this
var endDate = new Date(03/06/2025 22:00'); // Change this
var maxDiff = endDate - startDate;

var reduceOpacity = function (){
	var timeLeftMs = endDate-Date.now();
	var opacity = timeLeftMs/maxDiff;
  
  document.getElementsByTagName("body")[0].style.opacity= opacity;
}

setInterval(reduceOpacity,5000);
