const month = "May";

switch (month) {
  case "January":
  case "December":
    console.log("Winter");
    break;
  case "February":
  case "March":
    console.log("Spring");
    break;
  case "April":
  case "May":
  case "June":
    console.log("Summer");
    break;
  case "July":
  case "August":
  case "September":
    console.log("Monsoon");
    break;
  case "October":
  case "November":
    console.log("Autumn");
    break;
  default:
    console.log("Invalid Month");
}
