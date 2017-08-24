// when grow button is clicked...
document.getElementById("button1").addEventListener("click", function(){

	//increase the size of the box.
    document.getElementById("box").style.height = "250px";

    document.getElementById("box").style.width = "250px";

});

// when blye button is clicked...
document.getElementById("button2").addEventListener("click", function(){

   	//change box color to blue.    	
   	document.getElementById("box").style.backgroundColor = "Blue";

});

// when fade button is clicked...
document.getElementById("button3").addEventListener("click", function(){

   	//make the box fade.
   	document.getElementById("box").style.opacity = "0.5";

});

// when fade button is clicked...
document.getElementById("button4").addEventListener("click", function(){

  //decrease the size of the box.
    document.getElementById("box").style.height = "50px";

    document.getElementById("box").style.width = "50px";
	
});

// when resent button is clicked...
document.getElementById("button5").addEventListener("click", function(){

	//make the box orange and regular size.
    document.getElementById("box").style.height = "150px";

    document.getElementById("box").style.width = "150px";

    document.getElementById("box").style.backgroundColor = "orange";

    document.getElementById("box").style.opacity = "1.0";

});
