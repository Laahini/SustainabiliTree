
let counter = 0;
let correct=0;




function recycle(){
  counter+=1
  if (counter===1){
    document.getElementById("answer").innerHTML="Correct";
    correct+=1;
    document.getElementById("chartimage").src="assets/food.jpg";
  }else if (counter===2) {
    document.getElementById("answer").innerHTML="Wrong";
    document.getElementById("chartimage").src="assets/glass.jpg";
  }else if (counter===3) {
    document.getElementById("answer").innerHTML="Correct";
    correct+=1;
    document.getElementById("chartimage").src="assets/paper2.png";
  }else if (counter===4) {
    document.getElementById("answer").innerHTML="Correct";
    correct+=1;
    document.getElementById("chartimage").src="assets/soda.jpg";
  }else if (counter===5) {
    document.getElementById("answer").innerHTML="Correct";
    correct+=1;
    document.getElementById("chartimage").src="assets/metal.png";
  }

}
function trash(){
  counter+=1
  if (counter===1){
    document.getElementById("answer").innerHTML="Wrong";
    document.getElementById("chartimage").src="assets/food.jpg";
  }else if (counter===2) {
    document.getElementById("answer").innerHTML="Correct";
    correct+=1;
    document.getElementById("chartimage").src="assets/glass.jpg";
  }else if (counter===3) {
    document.getElementById("answer").innerHTML="Wrong";
    document.getElementById("chartimage").src="assets/paper2.png";
  }else if (counter===4) {
    document.getElementById("answer").innerHTML="Wrong";
    document.getElementById("chartimage").src="assets/soda.jpg";
  }else if (counter===5) {
    document.getElementById("answer").innerHTML="Wrong";
    document.getElementById("chartimage").src="assets/metal.png";
  }
  else if (counter===6) {
    document.getElementById("answer").innerHTML="Correct";
    correct+=1;
    document.getElementById("chartimage").src="assets/win.jpg";
  }
}

function pointscalc(){
  document.getElementById("points").innerHTML=correct
}
