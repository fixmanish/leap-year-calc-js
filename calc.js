function isLeap(year){

  var yesLeap = "Leap year.";
  var noLeap = "Not leap year.";

  if (year % 4 === 0){
    if (year % 100 === 0){
      if (year % 400 === 0){
        return yesLeap;
      } else {
        return noLeap;
      }
    }
    else {
      return yesLeap;
    }
  }
  else {
    return noLeap;
  }
}  

alert(isLeap(Prompt("Which year you want to tally: ")));
