// SET HEIGHT 
function setHeight() {
    var slide = $("body").find("slide-img");
    var slide_height = slide[0]["height"];
    if(slide_height == "0" || slide_height == "undefined") {
        var slide_height = 150;
    }
    $("#slider").css("height", slide_height);
    $(".slide").css("height", slide_height);
}

// START
$(document).ready(function() {
    slide_count = $(".slide li").length;
    a = 1; // start variable
    o = slide_count+1; // overage buster

    $('#slide1').css("display", "block");

    // RIGHT ARROW
    $(".arrow.right").click(function() {
        a = a+1; //slide to active
        console.log("a= "+a);
        slideOutput(a);
    });

    // LEFT ARROW
    $(".arrow.left").click(function() {
        a = a-1;
        console.log("a= "+a);
        slideOutput(a);
    });

    function slideOutput(a) {
        var p = a-1;
        if(a==0) {
            console.log("reverse reset");
            reverse_resetSlide();
            return;
        }

        if(a==o) {
            console.log("overage");
            resetSlide();
            return;
        }

        $('.slide li').fadeOut();
        $('.slide li').css("display", "none");

        $('#slide'+a).fadeIn();
        $('#slide'+a).css("display", "block");

    }

    function resetSlide() {
        $('.slide li').fadeOut();
        $('.slide li').css("display", "none");

        $('#slide1').fadeIn();
        $('#slide1').css("display", "block");

        a = 1;
        console.log("reset complete");
    }

    function reverse_resetSlide() {
        $('#slide'+slide_count).fadeIn();
        $('#slide'+slide_count).css("display", "block");

        $('#slide1').fadeOut();
        $('#slide1').css("display", "none");

        a = slide_count;
        console.log("reverse reset complete");
    }

    // Slider height setter on load
    $(".slide-img").load(function() {
        setHeight();
    });

    // Incase load is off
    setTimeout(function() {
        setHeight();
    },500);

});

$( window ).resize(function() {
    setHeight();
}); 