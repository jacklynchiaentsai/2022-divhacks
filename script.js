var counter = 0;

function scrollAnimation() {
        if ($("#mascot").hasClass("mable")) {
            $("#mascot").attr("src", "images/mascots/mable-move.gif");
        } else {
            $("#mascot").attr("src", "images/mascots/w1c5-move.gif");
    }
    counter = 1;
}

function scrollAnimationStop() {
        if ($("#mascot").hasClass("mable")) {
            $("#mascot").attr("src", "images/mascots/mable-static.gif");
        } else {
            $("#mascot").attr("src", "images/mascots/w1c5-static.gif");
    }

    counter = 0;
}

function switchMascot() {
    console.log("Mascot switched!")

    $("#mascot").toggleClass("mable");
    $("#mascot").toggleClass("w1c5");
}

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

function loaderFade() {
    $(".loader").fadeOut("slow");
}

function tracksFade() {
    $("#character-container").fadeOut("slow");
    $("#carouselExampleCaptions").toggleClass("not-here");
    $("#wanderer-container").toggleClass("clickable");
    $("#wanderer-container").toggleClass("not-clickable");
    $("#wanderer-container").fadeIn("slow");
}

function tracksFadeIn() {
    $("#character-container").fadeIn("slow");
    $("#carouselExampleCaptions").toggleClass("not-here");
    $("#wanderer-container").toggleClass("clickable");
    $("#wanderer-container").toggleClass("not-clickable");
    $("#wanderer-container").fadeOut("slow");
}

$(document).ready(function() {
    //$("#character-container").fadeOut("slow");

    $(window).scroll(function() {
        reveal();
        if (counter == 0) {
            scrollAnimation();
        }
        clearTimeout($.data(this, 'scrollTimer'));
        $.data(this, 'scrollTimer', setTimeout(function() {
            scrollAnimationStop();
        }, 300));
    });

    $(window).keyup(function(event) {
        if (event.which==83) {
            switchMascot();
            scrollAnimationStop();
        }
    });

    /*
    $("#close").click(function() {
        tracksFade();
    });

    $("#wanderer").click(function() {
        tracksFadeIn();
    });
    */
});