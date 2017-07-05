// Slot 0 is the jersey on Sunday, 1 on Monday, and so on
    var jersey = ["Any", "Any", "Navy", "Pink", "Gray", "Any", "Any"];
    var date = null;
    var answer = null;
    var day = null;
    function find () {
      // Gets new date object
      date = new Date();
      // Assigns day to the day property of the date object
      day = date.getDay();
      // Get the jersey for the day from the array with days and their jerseys
      answer = jersey[day];
      document.getElementById("result").style.color = "#fff";
      document.getElementById("result").innerHTML = answer;
