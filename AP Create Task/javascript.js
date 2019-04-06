//tablink ideas were found at https://www.w3schools.com/howto/howto_js_tabs.asp
function calender(event, monthName) {
    var i;
    var tabcontent; 
    var tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(monthName).style.display = "block";
    event.currentTarget.monthName += " active";
  }
  
function clickLoad() {
  document.getElementById("defaultOpen").click();
}
