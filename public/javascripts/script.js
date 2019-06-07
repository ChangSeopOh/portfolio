$(document).ready(function() {
    "use strict";
    var body = $("body, html"),
        home = $("header"),
        nav = $("nav"),
        navBtn = $("nav .navbar-toggle"),
        links = $("nav .navbar-nav > li > a"),
        navMobile = $(".navbar .collapse"),
        toTop = $(".to_top"),
        toDown = $("header .to_down"),
        email = $("#email"),
        contactmebtn = $("header .header_content .contact_me"),
        mixerContainer = $("#projects .projects_content"),
        PopUp = $(".projects .projects_content .mix .project_item .item_caption .popup"),
        mixer = mixitup(mixerContainer, { selectors: { control: ".projects_control > button" } });


    email.on("click", function() {  
        var subject = document.getElementById("inputname").value;
        var message = document.getElementById("inputmessage").value;  
      $('<iframe src="mailto:jaden.oh@yahoo.com?subject='+subject+'&body='+message+'">').appendTo('#email_Iframe').css("display", "none");

     });


    links.on("click", function(event) {
        event.preventDefault();
        if ($(window).innerWidth() > 766) { body.animate({ scrollTop: $($(this).data("link")).offset().top }, 500) } else {
            body.scrollTop($($(this).data("link")).offset().top);
            navMobile.removeClass("in")
        }
    });
    navBtn.on("click", function() { if (!$(this).hasClass("collapsed") && body.scrollTop() <= 10) { nav.removeClass("active") } else { nav.addClass("active") } });
    toTop.click(function() { body.animate({ scrollTop: 0 }, 500) });
    contactmebtn.on("click", function(event) {
        event.preventDefault();
        body.animate({ scrollTop: $("#contact").offset().top }, 900)
    });
    toDown.on("click", function() { body.animate({ scrollTop: home.innerHeight() + 1 }, 600) });
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 10) { nav.addClass("active") } else { nav.removeClass("active") } $(".section").each(function() {
            var id = $(this).attr("id"),
                target = $(this).offset().top;
            if ($(window).scrollTop() >= target - 1) {
                links.removeClass("current").blur();
                $('nav .navbar-nav > li > a[data-link="#' + id + '"]').addClass("current")
            }
        });
        if ($(window).scrollTop() >= 500) { toTop.addClass("active") } else { toTop.removeClass("active") }
    })
});
(function() {
    "use strict";
    var items = document.querySelectorAll(".careers li");

    function isElementInViewport(el) { var rect = el.getBoundingClientRect(); return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth) }

    function callbackFunc() { var i; for (i = 0; i < items.length; i += 1) { if (isElementInViewport(items[i])) { items[i].classList.add("in-view") } } } window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc)
})();