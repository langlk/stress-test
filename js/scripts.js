function getStressLevel(badSigns, goodSigns) {
  if (badSigns.length >= 5) {
    if (goodSigns.length >= badSigns.length) {
      return 1;
    } else {
      return 3;
    }
  } else if (badSigns.length >= 3) {
    if (goodSigns.length >= badSigns.length) {
      return 1;
    } else {
      return 2;
    }
  } else { // badSigns <= 2
    return 0;
  }
}

$(document).ready(function() {
  $("#stress-test").submit(function(event) {
    event.preventDefault();
    var badSigns = [];
    var goodSigns = [];
    $("input:checkbox[name=symptoms]:checked").each(function() {
      var symptomInput = $(this).val();
      badSigns.push(symptomInput);
    });
    $("input:checkbox[name=health]:checked").each(function() {
      var healthInput = $(this).val();
      badSigns.push(healthInput);
    });
    $("input:checkbox[name=relief]:checked").each(function() {
      var reliefInput = $(this).val();
      goodSigns.push(reliefInput);
    });

    var stressLevelStrings = ["Your stress levels are low.", "You're handling your stress well.", "You may be somewhat stressed.", "You may be stressed."];
    var stressLevel = getStressLevel(badSigns, goodSigns);
    $(".results").append("<p>" + stressLevelStrings[stressLevel] + "</p>");
  });
});
