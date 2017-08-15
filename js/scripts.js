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
    $("#stress-test").hide();

    var badSigns = [];
    var goodSigns = [];
    var otherRelief = [];
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
    $("input:checkbox[name=relief]:not(:checked)").each(function() {
      var uncheckedRelief = $(this).val();
      otherRelief.push(uncheckedRelief);
    });

    var reliefActivites = {"meditation":"Meditating", "pet":"Spend time with a pet", "exercise":"Exercising", "sleep":"Getting more sleep", "games":"Playing games", "outside":"Spending time outside"}
    var stressLevelStrings = ["Your stress levels are low.", "You're handling your stress well.", "You may be somewhat stressed.", "You may be stressed."];
    var stressLevel = getStressLevel(badSigns, goodSigns);
    $(".results").prepend("<p>" + stressLevelStrings[stressLevel] + "</p>");
    if (stressLevel > 1) {
      $(".other-relief").show();
      otherRelief.forEach(function(activity) {
        $("ul.other-relief").prepend("<li>" + reliefActivites[activity] + "</li>");
      });
    }
    $(".results").show();
  });
});
