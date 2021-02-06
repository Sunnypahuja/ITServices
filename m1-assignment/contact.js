
var selectedOption = document.getElementById('dropdown');
selectedOption.addEventListener("change",selectOption);
function selectOption() {
  var emailSelected = document.getElementById('emailoption');
  var phoneSelected = document.getElementById('phoneoption');
  var emailinput = document.getElementById('email-inputbox');
  var phoneinput = document.getElementById('phone-inputbox');
  if (emailSelected.selected) {
    emailinput.style.display = "block";
    phoneinput.style.display = "none";
  } else if (phoneSelected.selected) {
    phoneinput.style.display = "block";
    emailinput.style.display = "none";
  } else {
    emailinput.style.display = "none";
    phoneinput.style.display = "none";
  }
}
