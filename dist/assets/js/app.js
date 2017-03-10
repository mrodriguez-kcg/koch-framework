$(document).foundation();

var scrolled;
var ScrollTop = 0;
var delta = 5;
var navHeight = $('header').outerHeight();
$(window).scroll(function(event) {
    scrolled = !0
});
setInterval(function() {
    if (scrolled) {
        hasScrolled();
        scrolled = !1
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();//ST = curent position of scroll   NAV DOWN IS DARK
    if (Math.abs(ScrollTop - st) <= delta)//if 0 - curent location is less than or =to 5 return
        return;
    if (st > ScrollTop && st > navHeight) {//if current scroll is larger than 0 and it is greater than nav height remove the class nav down and add nav up
        $('header').removeClass('nav-down').addClass('nav-up');
        // Turn this back on for svg animation ->
        //$('.logo-path').removeClass('on').removeClass('on-quick').addClass('off');
    } else if (st + $(window).height() < $(document).height()) {
        $('header').removeClass('nav-up').addClass('nav-down');
        //$('.logo-path').removeClass('nav-down');
        //$('.logo-path.on').removeClass('on');
        
        if (st == 0) {
            $('header').removeClass('nav-down');
            //console.log('remove nav down');
            //$('.logo-path.on').addClass('on');
           // Turn this back on for svg animation ->
           // $('.logo-path').removeClass('off').addClass('on-quick');
        }
    } 
        
    ScrollTop = st;
    console.log(st)
}

// $('#toggle').click(function() {
//     $(this).toggleClass('active');
//     $('#overlay').toggleClass('open' , 'kill');
//     $('.news-post-alt-nav-container').toggleClass('open');
//     $('header').toggleClass('fixed-nav');
//     $('.animsition-body').toggleClass('off');
//     $('.page-template-template_blastoff .top-logo').toggleClass('top-logo-color');
//     $('.top-logo').toggleClass('logo-active');
// });

$( ".burger" ).click(function() {
  $( this ).toggleClass("open").toggleClass("close");
  $(".navigation-column:last-child .row").css("display","block");
});