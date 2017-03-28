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
  $(".navigation-column:last-child .row").toggleClass("open");
  $('header').toggleClass("lock");
  console.log("nav-opened");
});
/////Figure out how execute this with perfect code. Avoid script if possible
//
$(".has-sub").click(function() {
    $(this).find(".mobile-sub-nav").addClass("sub-open").removeClass("sub-close");
    console.log("sub-opened");
});
$(".mobile-nav-back").click(function(e) {
    e.stopPropagation();
    $(this).parent(".mobile-sub-nav.sub-open").removeClass("sub-open").addClass("sub-close");
    console.log("sub-closed");
});






















/*--WRITE PAGE SPECIFIC BREADCRUMB--*/
    // function dynamicBreadcrumb() {
    //  var pageTitle = document.title,
    //      n = pageTitle.indexOf(' - '),
    //      pageTitle = pageTitle.substring(0, n != -1 ? n : pageTitle.length),
    //      breadCrumb = $('.breadcrumb_link a span'),
    //      breadCrumbLink = $('.breadcrumb_link a'),
    //      pageUrl = window.location.href;

    //  breadCrumbLink.attr('href', pageUrl);
    //  breadCrumb.empty().append(pageTitle);
    // }
    // dynamicBreadcrumb();
/*--END WRITE PAGE SPECIFIC BREADCRUMB--*/


/*--NAVIGATION--*/
    /*--Adds active class to navigation based on page--*/
        // function navActiveState(page, nav_item) {
        //     if ( $('body').is('.'+page ) ) {
        //         $('.'+nav_item).addClass('active');
        //     }
        // };
        // navActiveState('about_koch', 'about_koch_nav_item');
        // if ( $(window).width() > 1024 ) {
        //     navActiveState('about', 'about_nav_item');
        //     navActiveState('giving', 'giving_nav_item');
        //     navActiveState('companies', 'companies_nav_item');
        //     navActiveState('responsibility', 'responsibility_nav_item');
        //     navActiveState('careers', 'careers_nav_item');
        // }
        // navActiveState('join_our_team', 'join_our_team_nav_item');
    /*--End adds active class to navigation based on page--*/

    /*--Navigation Dropdowns--*/    
    //     function navigationDropdowns() {
    //         var nav = $('nav'),
    //         navItem = $('nav ul li');

    //         if ( $(window).width() > 1024 ) {
    //             navItem.click(function(event) {
    //                 $(this).find('ul').slideToggle();
    //                 $(this).siblings().find('ul').slideUp();
                    
    //                 event.stopPropagation();
    //             });

    //             $(document).click(function(event) {
    //                 navItem.find('ul').slideUp();

    //                 event.stopPropagation();
    //             });
    //         } // if ( $(window).width() > 1024 )
    //     }
    //     navigationDropdowns();
    // /*--End Navigation Dropdowns--*/

    // /*--Sticky Nav on scroll--*/
    //     function stickyNav() {
    //         var scrollTop = $(window).scrollTop();
            
    //         if (scrollTop > 35) {
    //             $('.header_container').css({'position': 'fixed', 'margin-top': '-35px'});
    //         }
    //         else {
    //             $('.header_container').css({'position': 'absolute', 'margin-top': '0px'});
    //         }
    //     }
    //     if( $(window).width() > 1024 ) {
    //         $(document).on('scroll', function() {
    //             stickyNav();
    //         });
    //         stickyNav();
    //     }
    /*--END Sticky nav on scroll--*/

    /*--Mobile Nav--*/
        // function mobileNav() {
        //     var mobileNavIcon = $('.mobile_nav_icon'),
        //         linksContainer = $('.links_container'),
        //         topLevelNavItem = $('.top_level_nav_item'),
        //         navDropdown = $('.nav_dropdown'),
        //         subLevelNavBackButton = $('.sub_level_nav_back_button');

        //     mobileNavIcon.click(function(event) {
        //         $(this).toggleClass('active');
        //         linksContainer.toggleClass('top_level_nav_open');

        //         if ( linksContainer.hasClass('sub_level_nav_open') ) {
        //             linksContainer.removeClass('sub_level_nav_open');
        //             navDropdown.removeClass('open');
        //         }

        //         event.stopPropagation();
        //     }); // mobileNavIcon.click(function(event)

        //     subLevelNavBackButton.click(function(event) {
        //         navDropdown.removeClass('open');
        //     }); // subLevelNavBackButton.click(function(event))

        //     if ( $(window).width() <= 1024 ) {
        //         topLevelNavItem.click(function(event) {
        //             $(this).children('ul').addClass('open');
        //             linksContainer.addClass('sub_level_nav_open');

        //             event.stopPropagation();
        //         });

        //         $(document).click(function(event) {
        //             if ( linksContainer.hasClass('top_level_nav_open') && linksContainer.hasClass('sub_level_nav_open') ) {
        //                 linksContainer.removeClass('sub_level_nav_open');
        //                 navDropdown.removeClass('open');
        //             }
        //             else if ( linksContainer.hasClass('top_level_nav_open') ) {
        //                 linksContainer.removeClass('top_level_nav_open');
        //                 mobileNavIcon.removeClass('active');
        //             }

        //             event.stopPropagation();
        //         });
        //     } // if ( $(window).width() < 1024 ) 

        // } //mobileNav
        // mobileNav();
    /*--End Mobile Nav--*/

/*--END NAVIGATION--*/





/*--HOMEPAGE VIDEO--*/
    // $(document).ready(function(){

    //     if ( $('.jwplayer_container').length > 0 ) {
            
    //         jwplayer().play();

    //         function setVideoWidth() {
    //             var windowHeight = $(window).height(),
    //                 windowWidth = $(window).width(),
    //                 windowRatio = windowWidth/windowHeight,
    //                 jwPlayer = $('.jwplayer'),
    //                 jwPlayerOffset = (jwPlayer.width() - windowWidth)/2;

    //                 if ( windowRatio <= 1.77778 ) {
    //                     jwPlayer.height(windowHeight);
    //                     jwPlayer.width(windowHeight*1.77778);
    //                     jwPlayer.css('left', -jwPlayerOffset);
    //                 }
    //                 else {
    //                     jwPlayer.width(windowWidth);
    //                     jwPlayer.height(windowWidth*1.55);
    //                     jwPlayer.css('left', -jwPlayerOffset);
                        
    //                 }
    //         }

    //         function timedStopVideo() {
    //             var videoCover = $('.video_cover'),
    //                 jwPlayer = $('.jwplayer');

    //             setTimeout(function(){
    //                 videoCover.fadeIn();
    //                 jwPlayer.remove();
    //             }, 120000);
    //         }

    //         //On play remove image cover
    //         jwplayer().onPlay(function() {
    //             var videoCover = $('.video_cover');
    //             videoCover.fadeOut();

    //             setVideoWidth();

    //             timedStopVideo();
    //         });
                
    //         //On error display image cover
    //         jwplayer().onError(function() {
    //             var videoCover = $('.video_cover');
    //             videoCover.fadeIn();
    //         });

    //         $(window).resize(function() {
    //             setVideoWidth();
    //         });

    //         if ( $(window).width() <= 1024 ) {
    //             var jwPlayerContainer = $('.jwplayer_container');
    //             jwPlayerContainer.remove();
    //         }
    //     }

    // });
/*--END HOMPAGE VIDEO--*/





/*--HOMEPAGE CAMPAIGN CONTENT SCROLLING--*/
    // function homepageAnchorScrolling() {

    //     function scrollPagePositioning() {

    //         //if user is on homepage, to prevent variable errors on subpages
    //         if ( $('body').is('.homepage') && $(window).width() > 1024 ) {
    //             var homepageCampaignSection = $('.hompage_campaign_section'),

    //                 homepageCampaignIntro = $('.homepage_campaign_intro_hero'),
    //                 homepageCampaignIntroHeight = $('.homepage_campaign_intro_hero').height(),
    //                 homepageCampaignIntroContentContainer = $('.homepage_campaign_intro_content_container'),

    //                 homepageCampaignSupport = $('.homepage_campaign_support'),
    //                 homepageCampaignSupportFirstContent = $('.homepage_campaign_support_first_content'),
    //                 homepageCampaignSupportFirstContentHeight = $('.homepage_campaign_support_first_content').outerHeight(),

    //                 homepageSliderContainer = $('.homepage_slider_container'),

    //                 pixelsScrolled = $(window).scrollTop(),
    //                 pixelReset,

    //                 homepageCampaignIntroAnchorTiming;

    //                 // 20160916 M.A.R. - Removed because currently there is no campaign hero
    //                 //If the user has scrolled the height of the campaign intro stick it to the top
    //                 // if (pixelsScrolled >= homepageCampaignIntroHeight) {
    //                 //  homepageCampaignIntro.css({'position':'fixed', 'top':'0px'});
    //                 //  homepageCampaignSupport.css({'top':homepageCampaignIntroHeight});
    //                 //  homepageCampaignIntroContentContainer.css({'position':'fixed'});
    //                 //  homepageSliderContainer.css({'opacity':'0'});
    //                 // }
    //                 // else {
    //                 //  homepageCampaignIntro.css({'position':'relative'});
    //                 //  homepageCampaignSupport.css({'top':'auto'});
    //                 //  homepageCampaignIntroContentContainer.css({'position':'absolute'});
    //                 //  homepageSliderContainer.css({'opacity':'1'});
    //                 // }

    //                 //Define how long the intro section should be stuck at the top
    //                 homepageCampaignIntroAnchorTiming = (homepageCampaignSupport.offset().top-pixelsScrolled)+homepageCampaignSupportFirstContentHeight;

    //                 //If the user has scrolled the designated pixels release it and move it up with a calculated top margin
    //                 if ( homepageCampaignIntroAnchorTiming <= homepageCampaignIntroHeight ) {
    //                     var marginCounter = -1*( (pixelsScrolled-homepageCampaignIntroHeight)-homepageCampaignSupportFirstContentHeight );
    //                     homepageCampaignIntro.css({'margin-top': marginCounter});
    //                     homepageCampaignIntroContentContainer.css({'margin-top': marginCounter});
    //                 }
    //                 else {
    //                     homepageCampaignIntro.css({'margin-top': '0px'});
    //                     homepageCampaignIntroContentContainer.css({'margin-top': '0px'});
    //                 }
    //             } 
    //         } //function scrollPagePositioning()

    //         $(window).on("resize scroll load", function(event) {
    //             scrollPagePositioning();
    //         });
    // }
    // homepageAnchorScrolling();
/*--END HOMEPAGE CAMPAIGN CONENT SCROLLING--*/





/*--FEATURE VIDEO--*/
    // function videoScaling() {
    //     if ( $(window).width() > 1024 ) {
    //         var videoIframeContainer = $('.full_screen_video_container .video'),
    //             windowWidth = $(window).width(),
    //             windowHeight = $(window).height(),
    //             videoRatioWidth = $(window).width() * .90,
    //             videoRatioHeight = videoRatioWidth / 1.77777;

    //         if ( windowHeight*.9 < videoRatioHeight ) {
    //             videoRatioHeight = $(window).height() *.90,
    //             videoRatioWidth = videoRatioHeight * 1.77777;

    //             videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
    //         }
    //         else {
    //             videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
    //         }

    //         $(window).resize(function() {
    //             var windowWidth = $(window).width(),
    //                     windowHeight = $(window).height(),
    //                     videoRatioWidth = $(window).width() * .90,
    //                     videoRatioHeight = videoRatioWidth / 1.77777;

    //             if ( windowHeight*.9 < videoRatioHeight ) {
    //                 var videoRatioHeight = $(window).height() *.90,
    //                         videoRatioWidth = videoRatioHeight * 1.77777;

    //                 videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
    //             }
    //             else {
    //                 videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
    //             }
    //         });
    //     }
    // } //videoScaling()

    // function videoScalingWideShot() {
    //     if ( $(window).width() > 1024 ) {
    //         var videoIframeContainer = $('.full_screen_video_container .video'),
    //                 videoRatioWidth = $(window).width() * .70,
    //                 videoRatioHeight = videoRatioWidth / 2.7417;

    //         videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);

    //         $(window).resize(function() {
    //             var windowWidth = $(window).width(),
    //                     windowHeight = $(window).height(),
    //                     videoRatioWidth = $(window).width() * .90,
    //                     videoRatioHeight = videoRatioWidth / 2.7417;

    //             if ( windowHeight < videoRatioHeight ) {
    //                 var videoRatioHeight = $(window).height() *.90,
    //                         videoRatioWidth = videoRatioHeight * 2.7417;

    //                 videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
    //             }
    //             else {
    //                 videoIframeContainer.width(videoRatioWidth).height(videoRatioHeight);
    //             }
    //         });
    //     }
    // }

    // function fullScreenVideo() {
    //  var playButton = $('.fa_play_button'),
    //      playCTA = $('.play_cta'),

    //      fullScreenVideoContainer = $('.full_screen_video_container'),
    //      videoIframeContainer = $('.full_screen_video_container .video'),
    //      videoIframe = $('.full_screen_video_container .video iframe'),
    //      closeButton = $('.full_screen_video_container .close_button');

    //  playButton
    //      .add(playCTA)
    //      .click( function(event) {
    //      var embedLink = $(this).attr("data-url");
    //      var videoURL = embedLink+"?rel=0&controls=1&showinfo=0&autoplay=1&wmode=transparent";
            
    //      fullScreenVideoContainer.toggle();
    //      videoIframe.attr('src', videoURL);

    //      if ($(this).hasClass('wideShot') ) {
    //          videoScalingWideShot();
    //      }
    //      else {
    //          videoScaling();
    //      }

    //      event.stopPropagation();
    //  });

    //  closeButton
    //      .add(fullScreenVideoContainer)
    //      .click( function(event) {
    //      fullScreenVideoContainer.toggle();
    //      videoIframe.attr('src', '');

    //      event.stopPropagation();
    //  });
    // }
    // fullScreenVideo();

    // function fullScreenVideo() {
    //     var playButton = $('.fa_play_button'),
    //         playCTA = $('.play_cta'),
    //         textLinkPlay = $('.text_link_play');

    //         fullScreenVideoContainer = $('.full_screen_video_container'),
    //         videoIframeContainer = $('.full_screen_video_container .video'),
    //         videoIframe = $('.full_screen_video_container .video iframe'),
    //         closeButton = $('.full_screen_video_container .close_button');

    //     playButton
    //         .add(playCTA)
    //         .add(textLinkPlay)
    //         .click( function(event) {
    //             var videoID = $(this).attr("video-id");
    //             var videoURL = "http://video.kochcreativegroupdev.com/players/"+videoID+"-quhcId2B.html";
                
    //             fullScreenVideoContainer.fadeToggle();
    //             videoIframe.attr('src', videoURL);

    //             if ($(this).hasClass('wideShot') ) {
    //                 videoScalingWideShot();
    //             }
    //             else {
    //                 videoScaling();
    //             }

    //             event.stopPropagation();
    //         });

    //         closeButton
    //             .add(fullScreenVideoContainer)
    //             .click( function(event) {
    //                 fullScreenVideoContainer.toggle();
    //                 videoIframe.attr('src', '');

    //                 event.stopPropagation();
    //         });
    //     }
    // fullScreenVideo();
/*--END FEATURE VIDEO--*/





/*--MBM MODULE--*/
    // function mbmModule() {
    //     var DOMmbmModOption = $('.mbm_module_options li'),
    //         DOMmbmModCover = $('.mbm_module_cover'),
    //         DOMmbmModCloseButton = $('.mbm_module_cover .close_button'),
    //         DOMmbmModCoverNumber = $('.mbm_module_cover .principle_number'),
    //         DOMmbmModCoverTitle = $('.mbm_module_cover .principle_title'),
    //         DOMmbmModCoverDefinition = $('.mbm_module_cover .principle_definition'),
    //         DOMmbmModCoverNavDot = $('.mbm_module_content_nav span'),
    //         DOMrightArrow = $('.right_arrow'),
    //         DOMleftArrow = $('.left_arrow'),
    //         activeSlideClass,
    //         activePrincipleNumber,
    //         activePrincipleTitle,
    //         activePrincipleDefinition;

    //     // Function to define what active states
    //         function activeStates(activeNumberClass) {
    //             if ( DOMmbmModCoverNavDot.hasClass(activeNumberClass) && DOMmbmModOption.hasClass(activeNumberClass) ) {
    //                 $('.mbm_module_content_nav span.'+activeNumberClass).addClass('active').siblings().removeClass('active');
                
    //                 activePrincipleNumber = $('.mbm_module_options li.'+activeNumberClass).find('.principle_number').text();
    //                 activePrincipleTitle = $('.mbm_module_options li.'+activeNumberClass).find('.principle_title').text();
    //                 activePrincipleDefinition = $('.mbm_module_options li.'+activeNumberClass).find('.principle_definition').text();

    //                 DOMmbmModCoverNumber.fadeOut(function() {
    //                     DOMmbmModCoverNumber.empty().addClass().append(activePrincipleNumber).fadeIn();
    //                 });
    //                 DOMmbmModCoverTitle.fadeOut(function() {
    //                     DOMmbmModCoverTitle.empty().append(activePrincipleTitle).fadeIn();
    //                 });
    //                 DOMmbmModCoverDefinition.fadeOut(function() {
    //                     DOMmbmModCoverDefinition.empty().append(activePrincipleDefinition).fadeIn();
    //                 });
    //             }
    //         }
    //     // END Function to define what active states

    //     // Click MBM principle option
    //         DOMmbmModOption.click(function(event) {
    //             activeSlideClass = $(this).attr('class');
    //             $(this).addClass('active').siblings().removeClass('active');

    //             //Call active states function on current slide
    //                 activeStates(activeSlideClass);

    //             DOMmbmModCover.fadeToggle();        

    //             event.stopPropagation();
    //         });

    //     // Click of nav dot
    //         DOMmbmModCoverNavDot.click(function(event){
    //             activeSlideClass = $(this).attr('class');

    //             //Call active states function on current slide
    //                 activeStates(activeSlideClass);

    //             event.stopPropagation();
    //         });

    //     // MBM mod close button
    //         DOMmbmModCloseButton.click(function(event) {
    //             DOMmbmModCover.fadeToggle();

    //             DOMmbmModCoverNumber.fadeOut().empty();
    //             DOMmbmModCoverTitle.fadeOut().empty();
    //             DOMmbmModCoverDefinition.fadeOut().empty();

    //             DOMmbmModOption.removeClass('active');

    //             event.stopPropagation();
    //         });
        
    //     // Clicking outside the modules closes it
    //         $(document).click(function(event) {
    //             DOMmbmModCover.fadeOut();
    //             DOMmbmModCoverNumber.fadeOut().empty();
    //             DOMmbmModCoverTitle.fadeOut().empty();
    //             DOMmbmModCoverDefinition.fadeOut().empty();

    //             event.stopPropagation();
    //         });

    //     //Click of right arrow
    //         $('.right_arrow').click(function(event) {

    //             currentActiveDot = $('.mbm_module_content_nav span.active');
    //             currentActiveNumberClass = currentActiveDot.next().attr('class').split(' ')[0]; //this grabs the active class and seperates it from the number class associated with it

    //             if ( currentActiveDot.hasClass('ten') ) {
    //                 $('.mbm_module_content_nav span.ten').removeClass('active');
    //                 $('.mbm_module_content_nav span.one').addClass('active');
                    
    //                 activeStates('one');
    //             }
    //             else {
    //                 currentActiveDot.removeClass('active').next().addClass('active');
    //                 activeStates(currentActiveNumberClass);
    //             }

    //             event.stopPropagation();
    //         });

    //     //Click of left arrow
    //         $('.left_arrow').click(function(event) {

    //             currentActiveDot = $('.mbm_module_content_nav span.active');
    //             currentActiveNumberClass = currentActiveDot.prev().attr('class').split(' ')[0]; //this grabs the active class and seperates it from the number class associated with it

                
    //             if ( currentActiveDot.hasClass('one') ) {
    //                 $('.mbm_module_content_nav span.one').removeClass('active');
    //                 $('.mbm_module_content_nav span.ten').addClass('active');

    //                 activeStates('ten');
    //             }
    //             else {
    //                 currentActiveDot.removeClass('active').prev().addClass('active');
    //                 activeStates(currentActiveNumberClass);
    //             }
    //             event.stopPropagation();
    //         });

    //     // Click of cover doesn't close the module
    //         DOMmbmModCover.click(function(event) {
    //             event.stopPropagation();    
    //         });
    // }
    // mbmModule();
/*--END MBM MODULE--*/





/*--SUBSIDIARIES LOGO GRID--*/
    // function subsidiariesLogoGrid() {

    //     var subsidiariesLogo = $('.subsidiaries_logos li .logo_container'),
    //         subsidiary = $('.subsidiaries_logos li'),
    //         subsidiaryOverlay = $('.subsidiary_info_overlay'),
    //         closeButton = $('.subsidiary_info_overlay .close_button');

    //         subsidiary.click(function(event) {
    //             if ( $('.subsidiary_info_overlay').hasClass('open') ) {
    //                 subsidiariesLogo.removeClass('inactive');
                    
    //                 subsidiaryOverlay
    //                     .removeClass('open')
    //                     .addClass('closed');
    //             }
    //             else {

    //                 subsidiariesLogo.addClass('inactive');

    //                 $(this).find(subsidiaryOverlay)
    //                     .removeClass('closed')
    //                     .addClass('open');
    //             }

    //             event.stopPropagation();
    //         });

    //     $(document).click(function(event) {
    //         subsidiariesLogo.removeClass('inactive');

    //         subsidiaryOverlay
    //             .removeClass('open')
    //             .addClass('closed');
            
    //         event.stopPropagation();
    //     });

    //     closeButton.click(function(event){
    //         subsidiariesLogo.removeClass('inactive');

    //         subsidiaryOverlay
    //             .removeClass('open')
    //             .addClass('closed');
            
    //         event.stopPropagation();
    //     });

    // }
    // subsidiariesLogoGrid();
/*--END SUBSIDIARIES LOGO GRID--*/





// /*--underline clicked hash on footer pages--*/
//     function activePageSection() {
//         $('.footer_page_links .text_link').click(function() {
//             $('.in_page_link').css('text-decoration', 'none');

//             var inPageLink = $(this).attr('href');
//             $(inPageLink).css('text-decoration', 'underline');
//         });
//     }
//     activePageSection();
/*--END underline clicked hash on footer pages--*/





/*--GRANT REQUEST DISPLAY FN--*/
    // function displayGrantRequestForm() {
    //     var grantRequestDisplayCTA = $('.grant_request_display_cta'),
    //         grantRequestForm = $('#grant_request_form');

    //     // On mobile devices link out to grant request form
    //         if ( $(window).width() > 1024 ) {
    //             grantRequestDisplayCTA.click(function() {
    //                 grantRequestForm.fadeToggle();
    //             });
    //         }
    //         else {
    //             grantRequestDisplayCTA.prop('href', 'http://grantrequest.kochps.com/');
    //             grantRequestDisplayCTA.attr('target', '_blank');
    //         }
    // }
    // displayGrantRequestForm();
/*--END GRANT REQUEST DISPLAY FN--*/





/*--ACCOMODATIONS REQUEST REQUIREMENT--*/
    // var getUrlParameter = function getUrlParameter(sParam) {
    //     var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    //         sURLVariables = sPageURL.split('&'),
    //         sParameterName,
    //         i;

    //     for (i = 0; i < sURLVariables.length; i++) {
    //         sParameterName = sURLVariables[i].split('=');

    //         if (sParameterName[0] === sParam) {
    //             return sParameterName[1] === undefined ? true : sParameterName[1];
    //         }
    //     }
    // };
/*--END ACCOMODATIONS REQUEST REQUIREMENT--*/




/*--Jump link smooth scrolling--*/
    // $(function() {
    //   $('a[href*=#]:not([href=#])').click(function(event) {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          
    //         if ( $('body').is('.homepage') ) {
    //             $('html,body').animate({
    //                 scrollTop: target.offset().top
    //             }, 1000);

    //             event.preventDefault();
    //         }
    //         else {
    //             if (target.length) {
    //                 $('html,body').animate({
    //                 scrollTop: target.offset().top - 85
    //                 }, 1000);
    //             }
    //         }
    //     }
    //   });
    // });

    /*--SCROLL CTA - if screen is less than 725 a CTA to 'scroll' will display--*/
        // if ( $(window).width() > 1024 && $(window).height() < 725 ) {
        //     var scrollCTA = $('.scroll_cta');
        //     scrollCTA.css('display', 'block');

        //     $(document).on('scroll', function() {
        //         var scrollTop = $(window).scrollTop();
                
        //         if (scrollTop > 500) { scrollCTA.fadeOut(); }
        //     });
        // }
    /*--END SCROLL CTA--*/

    /*--BACK TO TOP CTA--*/
        // if( $('.back_to_top_cta').length =! 0) {
        //     $(document).on('scroll', function() {
        //         var scrollTop = $(window).scrollTop(),
        //             backToTopCTA = $('.back_to_top_cta');

        //         if (scrollTop > 500) { backToTopCTA.css('display', 'block'); }
        //         else { backToTopCTA.css('display', 'none'); }
        //     });
        // }
    /*--END BACK TO TOP CTA--*/
/*--END Jump link smooth scrolling--*/








// Responsibility and Environment pages
// $('.toggle').click(function(e) {
//     e.preventDefault();
  
//     var $this = $(this);
  
//     if ($this.next().hasClass('show')) {
//         $this.next().removeClass('show');
//         $this.next().slideUp(350);
//         $this.toggleClass('plus');
//         $this.toggleClass('minus');  
//         console.log('if');
//     } else {
//         $this.parent().parent().find('li .inner').removeClass('show');
//         $this.parent().parent().find('li .inner').slideUp(350);
//         $this.next().toggleClass('show');
//         $this.next().slideToggle(350);
//         $(".accordion").find('.toggle.minus').removeClass('minus').addClass('plus');
//         $this.toggleClass('plus');
//         $this.toggleClass('minus');     
//         console.log('else');
//     }
// });

// $('.graph-link').hover(function(){
//   $('.prompt',this).toggleClass("active");
// });


/*--Copyright Year--*/
    // function copyright() {
    //     var today = new Date();
    //     var year = today.getFullYear();
    //     $('.copyright').prepend('&copy; '+year);
    // }
    // copyright();
/*--END Copyright Year--*/





/*--SPLIT SCREEN SCROLL WWSF--*/
    // var tabsOverallWrapper = $('.tabs_overall_wrapper'),
    //     tabsControlsContainer = $('.tabs_controls_container'),
    //     tabNumber = $('.tab_number'),
    //     tabsContentContainer = $('.tabs_content_container'),
    //     tabSectionContainer = $('.tab_section_container'),
    //     tabSectionContentContainer = $('.tab_section_content_container'),
    //     tabSectionNumber = tabSectionContentContainer.length,
    //     tabTitles = ['Removing barriers', 'Promoting fairness', 'Protecting expression'],
    //     windowWidth = $(window).width(),
    //     adjustedSectionContainerHeight,
    //     targetIndex;
        
    //     // Create the tabs to control the slider
    //     // function createControls(event) {
    //     //     for ( var i=0; i < tabSectionNumber; i++) {
    //     //         tabsControlsContainer
    //     //             .append("<div class='tab'><span>"+tabTitles[i]+"</span></div>");
    //     //     }
                        
    //     //     $('.tab:eq(0)').addClass('active');          
            
    //     //     addClickEvent();
    //     // }
    //     // createControls();
        
    //      // Add the click functionality for the tabs
    //     function addClickEvent(event) {
    //         $(document.body).on('click', '.tab', function(event) {
    //             $(this)
    //                 .addClass('active')
    //                 .siblings().removeClass('active');       
                    
    //             targetIndex = $(this).index();  
                
    //             splitSliderAction(targetIndex);
    //             setSlideContainerHeight();
    //         });
    //     }
    //     addClickEvent();
        
    //     // Set width for slider based on the number of slides
    //     function setSlideContainerWidth(event) {            
    //         tabsContentContainer.width(tabSectionNumber+'00%');
    //         tabsOverallWrapper.removeClass('loading');
    //     }
    //     setSlideContainerWidth();
        
    //     // Adjust the height of the slider based on the active slide content
    //     function setSlideContainerHeight(event) {            
    //         adjustedSectionContainerHeight = $('.tab_section_container.active').height();
            
    //         tabsOverallWrapper
    //             .css({
    //                 'height': adjustedSectionContainerHeight+50
    //             });
    //     }
        
    //     setSlideContainerHeight();
        
    //     $(window).resize(function(event) {
    //         setSlideContainerHeight();
    //     });
        
    //     // Slide action for slider
    //     function splitSliderAction(targetIndex) {
    //         var leftPositioning = (targetIndex)*-100+'%';

    //         tabSectionContainer
    //             .eq(targetIndex).addClass('active')
    //             .siblings().removeClass('active');
            
    //         tabsContentContainer
    //             .css({
    //                 'left': leftPositioning
    //             });
    //     }
    //     splitSliderAction();
/*--END SPLIT SCREEN SCROLL WWSF--*/


/*--NEXT ARTICLE CTA--*/
    // var scrollTrigger = false;
    // console.log($(document).height()*.1);
    // console.log($(document).height());

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() >= ($(document).height()*.2) && !scrollTrigger ) { // this refers to window
    //         $('.next_article_cta_container').removeClass('hidden');
    //         scrollTrigger = true;
    //     }
    // });

    // $('.close_next_article_cta_container_icon').click(function(event){
    //     $('.next_article_cta_container').addClass('teased');
    //     event.stopPropagation();
    // });

    // $('.next_article_tease_button').click(function(event){
    //     $('.next_article_cta_container').removeClass('teased')
    //     event.stopPropagation();
    // });
/*--END NEXT ARTICLE CTA--*/

/*--CONTACT FORM LOGIC --*/
    //Show/Hide Koch Business field when Media Relations selected
    // if($('.field-topic').change(function(){
    //    var selected = this.options[this.selectedIndex].id;
    //     if(selected === 'mediaRelations') {
    //         $('.field-business').removeClass('hidden');
    //         $('.select-business').prop('required',true);

    //     }else{
    //         $('.field-business').addClass('hidden');
    //         $('.select-business').removeAttr('required');
    //     }

    // }));

    // //Show/Hide Title field when Company/Organization entered
    // $('.field-company').keyup(function(){
    //     if($('.field-company').val()){
    //         $('.field-title').removeClass('hidden');
    //     }else {
    //         $('.field-title').addClass('hidden');
    //     }
    // });
/*--END CONTACT FORM LOGIC--*/






























// function slickJS() {
// (function(factory) {
//     'use strict';
//     if (typeof define === 'function' && define.amd) {
//         define(['jquery'], factory);
//     } else if (typeof exports !== 'undefined') {
//         module.exports = factory(require('jquery'));
//     } else {
//         factory(jQuery);
//     }

// }(function($) {
//     'use strict';
//     var Slick = window.Slick || {};

//     Slick = (function() {

//         var instanceUid = 0;

//         function Slick(element, settings) {

//             var _ = this, dataSettings;

//             _.defaults = {
//                 accessibility: true,
//                 adaptiveHeight: false,
//                 appendArrows: $(element),
//                 appendDots: $(element),
//                 arrows: true,
//                 asNavFor: null,
//                 prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
//                 nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
//                 autoplay: false,
//                 autoplaySpeed: 7000,
//                 centerMode: false,
//                 centerPadding: '50px',
//                 cssEase: 'ease',
//                 customPaging: function(slider, i) {
//                     return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>';
//                 },
//                 dots: false,
//                 dotsClass: 'slick-dots',
//                 draggable: true,
//                 easing: 'linear',
//                 edgeFriction: 0.35,
//                 fade: false,
//                 focusOnSelect: false,
//                 infinite: true,
//                 initialSlide: 0,
//                 lazyLoad: 'ondemand',
//                 mobileFirst: false,
//                 pauseOnHover: true,
//                 pauseOnDotsHover: false,
//                 respondTo: 'window',
//                 responsive: null,
//                 rows: 1,
//                 rtl: false,
//                 slide: '',
//                 slidesPerRow: 1,
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//                 speed: 500,
//                 swipe: true,
//                 swipeToSlide: false,
//                 touchMove: true,
//                 touchThreshold: 5,
//                 useCSS: true,
//                 variableWidth: false,
//                 vertical: false,
//                 verticalSwiping: false,
//                 waitForAnimate: true,
//                 zIndex: 1000
//             };

//             _.initials = {
//                 animating: false,
//                 dragging: false,
//                 autoPlayTimer: null,
//                 currentDirection: 0,
//                 currentLeft: null,
//                 currentSlide: 0,
//                 direction: 1,
//                 $dots: null,
//                 listWidth: null,
//                 listHeight: null,
//                 loadIndex: 0,
//                 $nextArrow: null,
//                 $prevArrow: null,
//                 slideCount: null,
//                 slideWidth: null,
//                 $slideTrack: null,
//                 $slides: null,
//                 sliding: false,
//                 slideOffset: 0,
//                 swipeLeft: null,
//                 $list: null,
//                 touchObject: {},
//                 transformsEnabled: false,
//                 unslicked: false
//             };

//             $.extend(_, _.initials);

//             _.activeBreakpoint = null;
//             _.animType = null;
//             _.animProp = null;
//             _.breakpoints = [];
//             _.breakpointSettings = [];
//             _.cssTransitions = false;
//             _.hidden = 'hidden';
//             _.paused = false;
//             _.positionProp = null;
//             _.respondTo = null;
//             _.rowCount = 1;
//             _.shouldClick = true;
//             _.$slider = $(element);
//             _.$slidesCache = null;
//             _.transformType = null;
//             _.transitionType = null;
//             _.visibilityChange = 'visibilitychange';
//             _.windowWidth = 0;
//             _.windowTimer = null;

//             dataSettings = $(element).data('slick') || {};

//             _.options = $.extend({}, _.defaults, dataSettings, settings);

//             _.currentSlide = _.options.initialSlide;

//             _.originalSettings = _.options;

//             if (typeof document.mozHidden !== 'undefined') {
//                 _.hidden = 'mozHidden';
//                 _.visibilityChange = 'mozvisibilitychange';
//             } else if (typeof document.webkitHidden !== 'undefined') {
//                 _.hidden = 'webkitHidden';
//                 _.visibilityChange = 'webkitvisibilitychange';
//             }

//             _.autoPlay = $.proxy(_.autoPlay, _);
//             _.autoPlayClear = $.proxy(_.autoPlayClear, _);
//             _.changeSlide = $.proxy(_.changeSlide, _);
//             _.clickHandler = $.proxy(_.clickHandler, _);
//             _.selectHandler = $.proxy(_.selectHandler, _);
//             _.setPosition = $.proxy(_.setPosition, _);
//             _.swipeHandler = $.proxy(_.swipeHandler, _);
//             _.dragHandler = $.proxy(_.dragHandler, _);
//             _.keyHandler = $.proxy(_.keyHandler, _);
//             _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);

//             _.instanceUid = instanceUid++;

//             // A simple way to check for HTML strings
//             // Strict HTML recognition (must start with <)
//             // Extracted from jQuery v1.11 source
//             _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


//             _.registerBreakpoints();
//             _.init(true);
//             _.checkResponsive(true);

//         }

//         return Slick;

//     }());

//     Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

//         var _ = this;

//         if (typeof(index) === 'boolean') {
//             addBefore = index;
//             index = null;
//         } else if (index < 0 || (index >= _.slideCount)) {
//             return false;
//         }

//         _.unload();

//         if (typeof(index) === 'number') {
//             if (index === 0 && _.$slides.length === 0) {
//                 $(markup).appendTo(_.$slideTrack);
//             } else if (addBefore) {
//                 $(markup).insertBefore(_.$slides.eq(index));
//             } else {
//                 $(markup).insertAfter(_.$slides.eq(index));
//             }
//         } else {
//             if (addBefore === true) {
//                 $(markup).prependTo(_.$slideTrack);
//             } else {
//                 $(markup).appendTo(_.$slideTrack);
//             }
//         }

//         _.$slides = _.$slideTrack.children(this.options.slide);

//         _.$slideTrack.children(this.options.slide).detach();

//         _.$slideTrack.append(_.$slides);

//         _.$slides.each(function(index, element) {
//             $(element).attr('data-slick-index', index);
//         });

//         _.$slidesCache = _.$slides;

//         _.reinit();

//     };

//     Slick.prototype.animateHeight = function() {
//         var _ = this;
//         if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
//             var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
//             _.$list.animate({
//                 height: targetHeight
//             }, _.options.speed);
//         }
//     };

//     Slick.prototype.animateSlide = function(targetLeft, callback) {

//         var animProps = {},
//             _ = this;

//         _.animateHeight();

//         if (_.options.rtl === true && _.options.vertical === false) {
//             targetLeft = -targetLeft;
//         }
//         if (_.transformsEnabled === false) {
//             if (_.options.vertical === false) {
//                 _.$slideTrack.animate({
//                     left: targetLeft
//                 }, _.options.speed, _.options.easing, callback);
//             } else {
//                 _.$slideTrack.animate({
//                     top: targetLeft
//                 }, _.options.speed, _.options.easing, callback);
//             }

//         } else {

//             if (_.cssTransitions === false) {
//                 if (_.options.rtl === true) {
//                     _.currentLeft = -(_.currentLeft);
//                 }
//                 $({
//                     animStart: _.currentLeft
//                 }).animate({
//                     animStart: targetLeft
//                 }, {
//                     duration: _.options.speed,
//                     easing: _.options.easing,
//                     step: function(now) {
//                         now = Math.ceil(now);
//                         if (_.options.vertical === false) {
//                             animProps[_.animType] = 'translate(' +
//                                 now + 'px, 0px)';
//                             _.$slideTrack.css(animProps);
//                         } else {
//                             animProps[_.animType] = 'translate(0px,' +
//                                 now + 'px)';
//                             _.$slideTrack.css(animProps);
//                         }
//                     },
//                     complete: function() {
//                         if (callback) {
//                             callback.call();
//                         }
//                     }
//                 });

//             } else {

//                 _.applyTransition();
//                 targetLeft = Math.ceil(targetLeft);

//                 if (_.options.vertical === false) {
//                     animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
//                 } else {
//                     animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
//                 }
//                 _.$slideTrack.css(animProps);

//                 if (callback) {
//                     setTimeout(function() {

//                         _.disableTransition();

//                         callback.call();
//                     }, _.options.speed);
//                 }

//             }

//         }

//     };

//     Slick.prototype.asNavFor = function(index) {

//         var _ = this,
//             asNavFor = _.options.asNavFor;

//         if ( asNavFor && asNavFor !== null ) {
//             asNavFor = $(asNavFor).not(_.$slider);
//         }

//         if ( asNavFor !== null && typeof asNavFor === 'object' ) {
//             asNavFor.each(function() {
//                 var target = $(this).slick('getSlick');
//                 if(!target.unslicked) {
//                     target.slideHandler(index, true);
//                 }
//             });
//         }

//     };

//     Slick.prototype.applyTransition = function(slide) {

//         var _ = this,
//             transition = {};

//         if (_.options.fade === false) {
//             transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
//         } else {
//             transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
//         }

//         if (_.options.fade === false) {
//             _.$slideTrack.css(transition);
//         } else {
//             _.$slides.eq(slide).css(transition);
//         }

//     };

//     Slick.prototype.autoPlay = function() {

//         var _ = this;

//         if (_.autoPlayTimer) {
//             clearInterval(_.autoPlayTimer);
//         }

//         if (_.slideCount > _.options.slidesToShow && _.paused !== true) {
//             _.autoPlayTimer = setInterval(_.autoPlayIterator,
//                 _.options.autoplaySpeed);
//         }

//     };

//     Slick.prototype.autoPlayClear = function() {

//         var _ = this;
//         if (_.autoPlayTimer) {
//             clearInterval(_.autoPlayTimer);
//         }

//     };

//     Slick.prototype.autoPlayIterator = function() {

//         var _ = this;

//         if (_.options.infinite === false) {

//             if (_.direction === 1) {

//                 if ((_.currentSlide + 1) === _.slideCount -
//                     1) {
//                     _.direction = 0;
//                 }

//                 _.slideHandler(_.currentSlide + _.options.slidesToScroll);

//             } else {

//                 if ((_.currentSlide - 1 === 0)) {

//                     _.direction = 1;

//                 }

//                 _.slideHandler(_.currentSlide - _.options.slidesToScroll);

//             }

//         } else {

//             _.slideHandler(_.currentSlide + _.options.slidesToScroll);

//         }

//     };

//     Slick.prototype.buildArrows = function() {

//         var _ = this;

//         if (_.options.arrows === true ) {

//             _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
//             _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

//             if( _.slideCount > _.options.slidesToShow ) {

//                 _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
//                 _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

//                 if (_.htmlExpr.test(_.options.prevArrow)) {
//                     _.$prevArrow.prependTo(_.options.appendArrows);
//                 }

//                 if (_.htmlExpr.test(_.options.nextArrow)) {
//                     _.$nextArrow.appendTo(_.options.appendArrows);
//                 }

//                 if (_.options.infinite !== true) {
//                     _.$prevArrow
//                         .addClass('slick-disabled')
//                         .attr('aria-disabled', 'true');
//                 }

//             } else {

//                 _.$prevArrow.add( _.$nextArrow )

//                     .addClass('slick-hidden')
//                     .attr({
//                         'aria-disabled': 'true',
//                         'tabindex': '-1'
//                     });

//             }

//         }

//     };

//     Slick.prototype.buildDots = function() {

//         var _ = this,
//             i, dotString;

//         if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

//             dotString = '<ul class="' + _.options.dotsClass + '">';

//             for (i = 0; i <= _.getDotCount(); i += 1) {
//                 dotString += '<li></li>';
//             }

//             dotString += '</ul>';

//             _.$dots = $(dotString).appendTo(
//                 _.options.appendDots);

//             _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

//         }

//     };

//     Slick.prototype.buildOut = function() {

//         var _ = this;

//         _.$slides =
//             _.$slider
//                 .children( _.options.slide + ':not(.slick-cloned)')
//                 .addClass('slick-slide');

//         _.slideCount = _.$slides.length;

//         _.$slides.each(function(index, element) {
//             $(element)
//                 .attr('data-slick-index', index)
//                 .data('originalStyling', $(element).attr('style') || '');
//         });

//         _.$slidesCache = _.$slides;

//         _.$slider.addClass('slick-slider');

//         _.$slideTrack = (_.slideCount === 0) ?
//             $('<div class="slick-track"/>').appendTo(_.$slider) :
//             _.$slides.wrapAll('<div class="slick-track"/>').parent();

//         _.$list = _.$slideTrack.wrap(
//             '<div aria-live="polite" class="slick-list"/>').parent();
//         _.$slideTrack.css('opacity', 0);

//         if (_.options.centerMode === true || _.options.swipeToSlide === true) {
//             _.options.slidesToScroll = 1;
//         }

//         $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

//         _.setupInfinite();

//         _.buildArrows();

//         _.buildDots();

//         _.updateDots();


//         _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

//         if (_.options.draggable === true) {
//             _.$list.addClass('draggable');
//         }

//     };

//     Slick.prototype.buildRows = function() {

//         var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

//         newSlides = document.createDocumentFragment();
//         originalSlides = _.$slider.children();

//         if(_.options.rows > 1) {

//             slidesPerSection = _.options.slidesPerRow * _.options.rows;
//             numOfSlides = Math.ceil(
//                 originalSlides.length / slidesPerSection
//             );

//             for(a = 0; a < numOfSlides; a++){
//                 var slide = document.createElement('div');
//                 for(b = 0; b < _.options.rows; b++) {
//                     var row = document.createElement('div');
//                     for(c = 0; c < _.options.slidesPerRow; c++) {
//                         var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
//                         if (originalSlides.get(target)) {
//                             row.appendChild(originalSlides.get(target));
//                         }
//                     }
//                     slide.appendChild(row);
//                 }
//                 newSlides.appendChild(slide);
//             }

//             _.$slider.html(newSlides);
//             _.$slider.children().children().children()
//                 .css({
//                     'width':(100 / _.options.slidesPerRow) + '%',
//                     'display': 'inline-block'
//                 });

//         }

//     };

//     Slick.prototype.checkResponsive = function(initial, forceUpdate) {

//         var _ = this,
//             breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
//         var sliderWidth = _.$slider.width();
//         var windowWidth = window.innerWidth || $(window).width();

//         if (_.respondTo === 'window') {
//             respondToWidth = windowWidth;
//         } else if (_.respondTo === 'slider') {
//             respondToWidth = sliderWidth;
//         } else if (_.respondTo === 'min') {
//             respondToWidth = Math.min(windowWidth, sliderWidth);
//         }

//         if ( _.options.responsive &&
//             _.options.responsive.length &&
//             _.options.responsive !== null) {

//             targetBreakpoint = null;

//             for (breakpoint in _.breakpoints) {
//                 if (_.breakpoints.hasOwnProperty(breakpoint)) {
//                     if (_.originalSettings.mobileFirst === false) {
//                         if (respondToWidth < _.breakpoints[breakpoint]) {
//                             targetBreakpoint = _.breakpoints[breakpoint];
//                         }
//                     } else {
//                         if (respondToWidth > _.breakpoints[breakpoint]) {
//                             targetBreakpoint = _.breakpoints[breakpoint];
//                         }
//                     }
//                 }
//             }

//             if (targetBreakpoint !== null) {
//                 if (_.activeBreakpoint !== null) {
//                     if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
//                         _.activeBreakpoint =
//                             targetBreakpoint;
//                         if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
//                             _.unslick(targetBreakpoint);
//                         } else {
//                             _.options = $.extend({}, _.originalSettings,
//                                 _.breakpointSettings[
//                                     targetBreakpoint]);
//                             if (initial === true) {
//                                 _.currentSlide = _.options.initialSlide;
//                             }
//                             _.refresh(initial);
//                         }
//                         triggerBreakpoint = targetBreakpoint;
//                     }
//                 } else {
//                     _.activeBreakpoint = targetBreakpoint;
//                     if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
//                         _.unslick(targetBreakpoint);
//                     } else {
//                         _.options = $.extend({}, _.originalSettings,
//                             _.breakpointSettings[
//                                 targetBreakpoint]);
//                         if (initial === true) {
//                             _.currentSlide = _.options.initialSlide;
//                         }
//                         _.refresh(initial);
//                     }
//                     triggerBreakpoint = targetBreakpoint;
//                 }
//             } else {
//                 if (_.activeBreakpoint !== null) {
//                     _.activeBreakpoint = null;
//                     _.options = _.originalSettings;
//                     if (initial === true) {
//                         _.currentSlide = _.options.initialSlide;
//                     }
//                     _.refresh(initial);
//                     triggerBreakpoint = targetBreakpoint;
//                 }
//             }

//             // only trigger breakpoints during an actual break. not on initialize.
//             if( !initial && triggerBreakpoint !== false ) {
//                 _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
//             }
//         }

//     };

//     Slick.prototype.changeSlide = function(event, dontAnimate) {

//         var _ = this,
//             $target = $(event.target),
//             indexOffset, slideOffset, unevenOffset;

//         // If target is a link, prevent default action.
//         if($target.is('a')) {
//             event.preventDefault();
//         }

//         // If target is not the <li> element (ie: a child), find the <li>.
//         if(!$target.is('li')) {
//             $target = $target.closest('li');
//         }

//         unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
//         indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

//         switch (event.data.message) {

//             case 'previous':
//                 slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
//                 if (_.slideCount > _.options.slidesToShow) {
//                     _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
//                 }
//                 break;

//             case 'next':
//                 slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
//                 if (_.slideCount > _.options.slidesToShow) {
//                     _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
//                 }
//                 break;

//             case 'index':
//                 var index = event.data.index === 0 ? 0 :
//                     event.data.index || $target.index() * _.options.slidesToScroll;

//                 _.slideHandler(_.checkNavigable(index), false, dontAnimate);
//                 $target.children().trigger('focus');
//                 break;

//             default:
//                 return;
//         }

//     };

//     Slick.prototype.checkNavigable = function(index) {

//         var _ = this,
//             navigables, prevNavigable;

//         navigables = _.getNavigableIndexes();
//         prevNavigable = 0;
//         if (index > navigables[navigables.length - 1]) {
//             index = navigables[navigables.length - 1];
//         } else {
//             for (var n in navigables) {
//                 if (index < navigables[n]) {
//                     index = prevNavigable;
//                     break;
//                 }
//                 prevNavigable = navigables[n];
//             }
//         }

//         return index;
//     };

//     Slick.prototype.cleanUpEvents = function() {

//         var _ = this;

//         if (_.options.dots && _.$dots !== null) {

//             $('li', _.$dots).off('click.slick', _.changeSlide);

//             if (_.options.pauseOnDotsHover === true && _.options.autoplay === true) {

//                 $('li', _.$dots)
//                     .off('mouseenter.slick', $.proxy(_.setPaused, _, true))
//                     .off('mouseleave.slick', $.proxy(_.setPaused, _, false));

//             }

//         }

//         if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
//             _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
//             _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
//         }

//         _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
//         _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
//         _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
//         _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

//         _.$list.off('click.slick', _.clickHandler);

//         $(document).off(_.visibilityChange, _.visibility);

//         _.$list.off('mouseenter.slick', $.proxy(_.setPaused, _, true));
//         _.$list.off('mouseleave.slick', $.proxy(_.setPaused, _, false));

//         if (_.options.accessibility === true) {
//             _.$list.off('keydown.slick', _.keyHandler);
//         }

//         if (_.options.focusOnSelect === true) {
//             $(_.$slideTrack).children().off('click.slick', _.selectHandler);
//         }

//         $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

//         $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

//         $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

//         $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
//         $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);
//     };

//     Slick.prototype.cleanUpRows = function() {

//         var _ = this, originalSlides;

//         if(_.options.rows > 1) {
//             originalSlides = _.$slides.children().children();
//             originalSlides.removeAttr('style');
//             _.$slider.html(originalSlides);
//         }

//     };

//     Slick.prototype.clickHandler = function(event) {

//         var _ = this;

//         if (_.shouldClick === false) {
//             event.stopImmediatePropagation();
//             event.stopPropagation();
//             event.preventDefault();
//         }

//     };

//     Slick.prototype.destroy = function(refresh) {

//         var _ = this;

//         _.autoPlayClear();

//         _.touchObject = {};

//         _.cleanUpEvents();

//         $('.slick-cloned', _.$slider).detach();

//         if (_.$dots) {
//             _.$dots.remove();
//         }

//         if ( _.options.arrows === true ) {

//             if ( _.$prevArrow && _.$prevArrow.length ) {

//                 _.$prevArrow
//                     .removeClass('slick-disabled slick-arrow slick-hidden')
//                     .removeAttr('aria-hidden aria-disabled tabindex')
//                     .css("display","");

//                 if ( _.htmlExpr.test( _.options.prevArrow )) {
//                     _.$prevArrow.remove();
//                 }
//             }

//             if ( _.$nextArrow && _.$nextArrow.length ) {

//                 _.$nextArrow
//                     .removeClass('slick-disabled slick-arrow slick-hidden')
//                     .removeAttr('aria-hidden aria-disabled tabindex')
//                     .css("display","");

//                 if ( _.htmlExpr.test( _.options.nextArrow )) {
//                     _.$nextArrow.remove();
//                 }
//             }

//         }

//         if (_.$slides) {

//             _.$slides
//                 .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
//                 .removeAttr('aria-hidden')
//                 .removeAttr('data-slick-index')
//                 .each(function(){
//                     $(this).attr('style', $(this).data('originalStyling'));
//                 });

//             _.$slideTrack.children(this.options.slide).detach();

//             _.$slideTrack.detach();

//             _.$list.detach();

//             _.$slider.append(_.$slides);
//         }

//         _.cleanUpRows();

//         _.$slider.removeClass('slick-slider');
//         _.$slider.removeClass('slick-initialized');

//         _.unslicked = true;

//         if(!refresh) {
//             _.$slider.trigger('destroy', [_]);
//         }

//     };

//     Slick.prototype.disableTransition = function(slide) {

//         var _ = this,
//             transition = {};

//         transition[_.transitionType] = '';

//         if (_.options.fade === false) {
//             _.$slideTrack.css(transition);
//         } else {
//             _.$slides.eq(slide).css(transition);
//         }

//     };

//     Slick.prototype.fadeSlide = function(slideIndex, callback) {

//         var _ = this;

//         if (_.cssTransitions === false) {

//             _.$slides.eq(slideIndex).css({
//                 zIndex: _.options.zIndex
//             });

//             _.$slides.eq(slideIndex).animate({
//                 opacity: 1
//             }, _.options.speed, _.options.easing, callback);

//         } else {

//             _.applyTransition(slideIndex);

//             _.$slides.eq(slideIndex).css({
//                 opacity: 1,
//                 zIndex: _.options.zIndex
//             });

//             if (callback) {
//                 setTimeout(function() {

//                     _.disableTransition(slideIndex);

//                     callback.call();
//                 }, _.options.speed);
//             }

//         }

//     };

//     Slick.prototype.fadeSlideOut = function(slideIndex) {

//         var _ = this;

//         if (_.cssTransitions === false) {

//             _.$slides.eq(slideIndex).animate({
//                 opacity: 0,
//                 zIndex: _.options.zIndex - 2
//             }, _.options.speed, _.options.easing);

//         } else {

//             _.applyTransition(slideIndex);

//             _.$slides.eq(slideIndex).css({
//                 opacity: 0,
//                 zIndex: _.options.zIndex - 2
//             });

//         }

//     };

//     Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

//         var _ = this;

//         if (filter !== null) {

//             _.unload();

//             _.$slideTrack.children(this.options.slide).detach();

//             _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

//             _.reinit();

//         }

//     };

//     Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

//         var _ = this;
//         return _.currentSlide;

//     };

//     Slick.prototype.getDotCount = function() {

//         var _ = this;

//         var breakPoint = 0;
//         var counter = 0;
//         var pagerQty = 0;

//         if (_.options.infinite === true) {
//             while (breakPoint < _.slideCount) {
//                 ++pagerQty;
//                 breakPoint = counter + _.options.slidesToShow;
//                 counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
//             }
//         } else if (_.options.centerMode === true) {
//             pagerQty = _.slideCount;
//         } else {
//             while (breakPoint < _.slideCount) {
//                 ++pagerQty;
//                 breakPoint = counter + _.options.slidesToShow;
//                 counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
//             }
//         }

//         return pagerQty - 1;

//     };

//     Slick.prototype.getLeft = function(slideIndex) {

//         var _ = this,
//             targetLeft,
//             verticalHeight,
//             verticalOffset = 0,
//             targetSlide;

//         _.slideOffset = 0;
//         verticalHeight = _.$slides.first().outerHeight(true);

//         if (_.options.infinite === true) {
//             if (_.slideCount > _.options.slidesToShow) {
//                 _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
//                 verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
//             }
//             if (_.slideCount % _.options.slidesToScroll !== 0) {
//                 if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
//                     if (slideIndex > _.slideCount) {
//                         _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
//                         verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
//                     } else {
//                         _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
//                         verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
//                     }
//                 }
//             }
//         } else {
//             if (slideIndex + _.options.slidesToShow > _.slideCount) {
//                 _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
//                 verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
//             }
//         }

//         if (_.slideCount <= _.options.slidesToShow) {
//             _.slideOffset = 0;
//             verticalOffset = 0;
//         }

//         if (_.options.centerMode === true && _.options.infinite === true) {
//             _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
//         } else if (_.options.centerMode === true) {
//             _.slideOffset = 0;
//             _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
//         }

//         if (_.options.vertical === false) {
//             targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
//         } else {
//             targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
//         }

//         if (_.options.variableWidth === true) {

//             if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
//                 targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
//             } else {
//                 targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
//             }

//             targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;

//             if (_.options.centerMode === true) {
//                 if (_.options.infinite === false) {
//                     targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
//                 } else {
//                     targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
//                 }
//                 targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
//                 targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
//             }
//         }

//         return targetLeft;

//     };

//     Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

//         var _ = this;

//         return _.options[option];

//     };

//     Slick.prototype.getNavigableIndexes = function() {

//         var _ = this,
//             breakPoint = 0,
//             counter = 0,
//             indexes = [],
//             max;

//         if (_.options.infinite === false) {
//             max = _.slideCount;
//         } else {
//             breakPoint = _.options.slidesToScroll * -1;
//             counter = _.options.slidesToScroll * -1;
//             max = _.slideCount * 2;
//         }

//         while (breakPoint < max) {
//             indexes.push(breakPoint);
//             breakPoint = counter + _.options.slidesToScroll;
//             counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
//         }

//         return indexes;

//     };

//     Slick.prototype.getSlick = function() {

//         return this;

//     };

//     Slick.prototype.getSlideCount = function() {

//         var _ = this,
//             slidesTraversed, swipedSlide, centerOffset;

//         centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

//         if (_.options.swipeToSlide === true) {
//             _.$slideTrack.find('.slick-slide').each(function(index, slide) {
//                 if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
//                     swipedSlide = slide;
//                     return false;
//                 }
//             });

//             slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

//             return slidesTraversed;

//         } else {
//             return _.options.slidesToScroll;
//         }

//     };

//     Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

//         var _ = this;

//         _.changeSlide({
//             data: {
//                 message: 'index',
//                 index: parseInt(slide)
//             }
//         }, dontAnimate);

//     };

//     Slick.prototype.init = function(creation) {

//         var _ = this;

//         if (!$(_.$slider).hasClass('slick-initialized')) {

//             $(_.$slider).addClass('slick-initialized');

//             _.buildRows();
//             _.buildOut();
//             _.setProps();
//             _.startLoad();
//             _.loadSlider();
//             _.initializeEvents();
//             _.updateArrows();
//             _.updateDots();

//         }

//         if (creation) {
//             _.$slider.trigger('init', [_]);
//         }

//         if (_.options.accessibility === true) {
//             _.initADA();
//         }

//     };

//     Slick.prototype.initArrowEvents = function() {

//         var _ = this;

//         if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
//             _.$prevArrow.on('click.slick', {
//                 message: 'previous'
//             }, _.changeSlide);
//             _.$nextArrow.on('click.slick', {
//                 message: 'next'
//             }, _.changeSlide);
//         }

//     };

//     Slick.prototype.initDotEvents = function() {

//         var _ = this;

//         if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
//             $('li', _.$dots).on('click.slick', {
//                 message: 'index'
//             }, _.changeSlide);
//         }

//         if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.options.autoplay === true) {
//             $('li', _.$dots)
//                 .on('mouseenter.slick', $.proxy(_.setPaused, _, true))
//                 .on('mouseleave.slick', $.proxy(_.setPaused, _, false));
//         }

//     };

//     Slick.prototype.initializeEvents = function() {

//         var _ = this;

//         _.initArrowEvents();

//         _.initDotEvents();

//         _.$list.on('touchstart.slick mousedown.slick', {
//             action: 'start'
//         }, _.swipeHandler);
//         _.$list.on('touchmove.slick mousemove.slick', {
//             action: 'move'
//         }, _.swipeHandler);
//         _.$list.on('touchend.slick mouseup.slick', {
//             action: 'end'
//         }, _.swipeHandler);
//         _.$list.on('touchcancel.slick mouseleave.slick', {
//             action: 'end'
//         }, _.swipeHandler);

//         _.$list.on('click.slick', _.clickHandler);

//         $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

//         _.$list.on('mouseenter.slick', $.proxy(_.setPaused, _, true));
//         _.$list.on('mouseleave.slick', $.proxy(_.setPaused, _, false));

//         if (_.options.accessibility === true) {
//             _.$list.on('keydown.slick', _.keyHandler);
//         }

//         if (_.options.focusOnSelect === true) {
//             $(_.$slideTrack).children().on('click.slick', _.selectHandler);
//         }

//         $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

//         $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

//         $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

//         $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
//         $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

//     };

//     Slick.prototype.initUI = function() {

//         var _ = this;

//         if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

//             _.$prevArrow.show();
//             _.$nextArrow.show();

//         }

//         if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

//             _.$dots.show();

//         }

//         if (_.options.autoplay === true) {

//             _.autoPlay();

//         }

//     };

//     Slick.prototype.keyHandler = function(event) {

//         var _ = this;
//          //Dont slide if the cursor is inside the form fields and arrow keys are pressed
//         if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
//             if (event.keyCode === 37 && _.options.accessibility === true) {
//                 _.changeSlide({
//                     data: {
//                         message: 'previous'
//                     }
//                 });
//             } else if (event.keyCode === 39 && _.options.accessibility === true) {
//                 _.changeSlide({
//                     data: {
//                         message: 'next'
//                     }
//                 });
//             }
//         }

//     };

//     Slick.prototype.lazyLoad = function() {

//         var _ = this,
//             loadRange, cloneRange, rangeStart, rangeEnd;

//         function loadImages(imagesScope) {
//             $('img[data-lazy]', imagesScope).each(function() {

//                 var image = $(this),
//                     imageSource = $(this).attr('data-lazy'),
//                     imageToLoad = document.createElement('img');

//                 imageToLoad.onload = function() {
//                     image
//                         .animate({ opacity: 0 }, 100, function() {
//                             image
//                                 .attr('src', imageSource)
//                                 .animate({ opacity: 1 }, 200, function() {
//                                     image
//                                         .removeAttr('data-lazy')
//                                         .removeClass('slick-loading');
//                                 });
//                         });
//                 };

//                 imageToLoad.src = imageSource;

//             });
//         }

//         if (_.options.centerMode === true) {
//             if (_.options.infinite === true) {
//                 rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
//                 rangeEnd = rangeStart + _.options.slidesToShow + 2;
//             } else {
//                 rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
//                 rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
//             }
//         } else {
//             rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
//             rangeEnd = rangeStart + _.options.slidesToShow;
//             if (_.options.fade === true) {
//                 if (rangeStart > 0) rangeStart--;
//                 if (rangeEnd <= _.slideCount) rangeEnd++;
//             }
//         }

//         loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
//         loadImages(loadRange);

//         if (_.slideCount <= _.options.slidesToShow) {
//             cloneRange = _.$slider.find('.slick-slide');
//             loadImages(cloneRange);
//         } else
//         if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
//             cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
//             loadImages(cloneRange);
//         } else if (_.currentSlide === 0) {
//             cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
//             loadImages(cloneRange);
//         }

//     };

//     Slick.prototype.loadSlider = function() {

//         var _ = this;

//         _.setPosition();

//         _.$slideTrack.css({
//             opacity: 1
//         });

//         _.$slider.removeClass('slick-loading');

//         _.initUI();

//         if (_.options.lazyLoad === 'progressive') {
//             _.progressiveLazyLoad();
//         }

//     };

//     Slick.prototype.next = Slick.prototype.slickNext = function() {

//         var _ = this;

//         _.changeSlide({
//             data: {
//                 message: 'next'
//             }
//         });

//     };

//     Slick.prototype.orientationChange = function() {

//         var _ = this;

//         _.checkResponsive();
//         _.setPosition();

//     };

//     Slick.prototype.pause = Slick.prototype.slickPause = function() {

//         var _ = this;

//         _.autoPlayClear();
//         _.paused = true;

//     };

//     Slick.prototype.play = Slick.prototype.slickPlay = function() {

//         var _ = this;

//         _.paused = false;
//         _.autoPlay();

//     };

//     Slick.prototype.postSlide = function(index) {

//         var _ = this;

//         _.$slider.trigger('afterChange', [_, index]);

//         _.animating = false;

//         _.setPosition();

//         _.swipeLeft = null;

//         if (_.options.autoplay === true && _.paused === false) {
//             _.autoPlay();
//         }
//         if (_.options.accessibility === true) {
//             _.initADA();
//         }

//     };

//     Slick.prototype.prev = Slick.prototype.slickPrev = function() {

//         var _ = this;

//         _.changeSlide({
//             data: {
//                 message: 'previous'
//             }
//         });

//     };

//     Slick.prototype.preventDefault = function(e) {
//         e.preventDefault();
//     };

//     Slick.prototype.progressiveLazyLoad = function() {

//         var _ = this,
//             imgCount, targetImage;

//         imgCount = $('img[data-lazy]', _.$slider).length;

//         if (imgCount > 0) {
//             targetImage = $('img[data-lazy]', _.$slider).first();
//             targetImage.attr('src', targetImage.attr('data-lazy')).removeClass('slick-loading').load(function() {
//                     targetImage.removeAttr('data-lazy');
//                     _.progressiveLazyLoad();

//                     if (_.options.adaptiveHeight === true) {
//                         _.setPosition();
//                     }
//                 })
//                 .error(function() {
//                     targetImage.removeAttr('data-lazy');
//                     _.progressiveLazyLoad();
//                 });
//         }

//     };

//     Slick.prototype.refresh = function( initializing ) {

//         var _ = this,
//             currentSlide = _.currentSlide;

//         _.destroy(true);

//         $.extend(_, _.initials, { currentSlide: currentSlide });

//         _.init();

//         if( !initializing ) {

//             _.changeSlide({
//                 data: {
//                     message: 'index',
//                     index: currentSlide
//                 }
//             }, false);

//         }

//     };

//     Slick.prototype.registerBreakpoints = function() {

//         var _ = this, breakpoint, currentBreakpoint, l,
//             responsiveSettings = _.options.responsive || null;

//         if ( $.type(responsiveSettings) === "array" && responsiveSettings.length ) {

//             _.respondTo = _.options.respondTo || 'window';

//             for ( breakpoint in responsiveSettings ) {

//                 l = _.breakpoints.length-1;
//                 currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

//                 if (responsiveSettings.hasOwnProperty(breakpoint)) {

//                     // loop through the breakpoints and cut out any existing
//                     // ones with the same breakpoint number, we don't want dupes.
//                     while( l >= 0 ) {
//                         if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
//                             _.breakpoints.splice(l,1);
//                         }
//                         l--;
//                     }

//                     _.breakpoints.push(currentBreakpoint);
//                     _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

//                 }

//             }

//             _.breakpoints.sort(function(a, b) {
//                 return ( _.options.mobileFirst ) ? a-b : b-a;
//             });

//         }

//     };

//     Slick.prototype.reinit = function() {

//         var _ = this;

//         _.$slides =
//             _.$slideTrack
//                 .children(_.options.slide)
//                 .addClass('slick-slide');

//         _.slideCount = _.$slides.length;

//         if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
//             _.currentSlide = _.currentSlide - _.options.slidesToScroll;
//         }

//         if (_.slideCount <= _.options.slidesToShow) {
//             _.currentSlide = 0;
//         }

//         _.registerBreakpoints();

//         _.setProps();
//         _.setupInfinite();
//         _.buildArrows();
//         _.updateArrows();
//         _.initArrowEvents();
//         _.buildDots();
//         _.updateDots();
//         _.initDotEvents();

//         _.checkResponsive(false, true);

//         if (_.options.focusOnSelect === true) {
//             $(_.$slideTrack).children().on('click.slick', _.selectHandler);
//         }

//         _.setSlideClasses(0);

//         _.setPosition();

//         _.$slider.trigger('reInit', [_]);

//         if (_.options.autoplay === true) {
//             _.focusHandler();
//         }

//     };

//     Slick.prototype.resize = function() {

//         var _ = this;

//         if ($(window).width() !== _.windowWidth) {
//             clearTimeout(_.windowDelay);
//             _.windowDelay = window.setTimeout(function() {
//                 _.windowWidth = $(window).width();
//                 _.checkResponsive();
//                 if( !_.unslicked ) { _.setPosition(); }
//             }, 50);
//         }
//     };

//     Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

//         var _ = this;

//         if (typeof(index) === 'boolean') {
//             removeBefore = index;
//             index = removeBefore === true ? 0 : _.slideCount - 1;
//         } else {
//             index = removeBefore === true ? --index : index;
//         }

//         if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
//             return false;
//         }

//         _.unload();

//         if (removeAll === true) {
//             _.$slideTrack.children().remove();
//         } else {
//             _.$slideTrack.children(this.options.slide).eq(index).remove();
//         }

//         _.$slides = _.$slideTrack.children(this.options.slide);

//         _.$slideTrack.children(this.options.slide).detach();

//         _.$slideTrack.append(_.$slides);

//         _.$slidesCache = _.$slides;

//         _.reinit();

//     };

//     Slick.prototype.setCSS = function(position) {

//         var _ = this,
//             positionProps = {},
//             x, y;

//         if (_.options.rtl === true) {
//             position = -position;
//         }
//         x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
//         y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

//         positionProps[_.positionProp] = position;

//         if (_.transformsEnabled === false) {
//             _.$slideTrack.css(positionProps);
//         } else {
//             positionProps = {};
//             if (_.cssTransitions === false) {
//                 positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
//                 _.$slideTrack.css(positionProps);
//             } else {
//                 positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
//                 _.$slideTrack.css(positionProps);
//             }
//         }

//     };

//     Slick.prototype.setDimensions = function() {

//         var _ = this;

//         if (_.options.vertical === false) {
//             if (_.options.centerMode === true) {
//                 _.$list.css({
//                     padding: ('0px ' + _.options.centerPadding)
//                 });
//             }
//         } else {
//             _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
//             if (_.options.centerMode === true) {
//                 _.$list.css({
//                     padding: (_.options.centerPadding + ' 0px')
//                 });
//             }
//         }

//         _.listWidth = _.$list.width();
//         _.listHeight = _.$list.height();


//         if (_.options.vertical === false && _.options.variableWidth === false) {
//             _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
//             _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

//         } else if (_.options.variableWidth === true) {
//             _.$slideTrack.width(5000 * _.slideCount);
//         } else {
//             _.slideWidth = Math.ceil(_.listWidth);
//             _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
//         }

//         var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
//         if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

//     };

//     Slick.prototype.setFade = function() {

//         var _ = this,
//             targetLeft;

//         _.$slides.each(function(index, element) {
//             targetLeft = (_.slideWidth * index) * -1;
//             if (_.options.rtl === true) {
//                 $(element).css({
//                     position: 'relative',
//                     right: targetLeft,
//                     top: 0,
//                     zIndex: _.options.zIndex - 2,
//                     opacity: 0
//                 });
//             } else {
//                 $(element).css({
//                     position: 'relative',
//                     left: targetLeft,
//                     top: 0,
//                     zIndex: _.options.zIndex - 2,
//                     opacity: 0
//                 });
//             }
//         });

//         _.$slides.eq(_.currentSlide).css({
//             zIndex: _.options.zIndex - 1,
//             opacity: 1
//         });

//     };

//     Slick.prototype.setHeight = function() {

//         var _ = this;

//         if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
//             var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
//             _.$list.css('height', targetHeight);
//         }

//     };

//     Slick.prototype.setOption = Slick.prototype.slickSetOption = function(option, value, refresh) {

//         var _ = this, l, item;

//         if( option === "responsive" && $.type(value) === "array" ) {
//             for ( item in value ) {
//                 if( $.type( _.options.responsive ) !== "array" ) {
//                     _.options.responsive = [ value[item] ];
//                 } else {
//                     l = _.options.responsive.length-1;
//                     // loop through the responsive object and splice out duplicates.
//                     while( l >= 0 ) {
//                         if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {
//                             _.options.responsive.splice(l,1);
//                         }
//                         l--;
//                     }
//                     _.options.responsive.push( value[item] );
//                 }
//             }
//         } else {
//             _.options[option] = value;
//         }

//         if (refresh === true) {
//             _.unload();
//             _.reinit();
//         }

//     };

//     Slick.prototype.setPosition = function() {

//         var _ = this;

//         _.setDimensions();

//         _.setHeight();

//         if (_.options.fade === false) {
//             _.setCSS(_.getLeft(_.currentSlide));
//         } else {
//             _.setFade();
//         }

//         _.$slider.trigger('setPosition', [_]);

//     };

//     Slick.prototype.setProps = function() {

//         var _ = this,
//             bodyStyle = document.body.style;

//         _.positionProp = _.options.vertical === true ? 'top' : 'left';

//         if (_.positionProp === 'top') {
//             _.$slider.addClass('slick-vertical');
//         } else {
//             _.$slider.removeClass('slick-vertical');
//         }

//         if (bodyStyle.WebkitTransition !== undefined ||
//             bodyStyle.MozTransition !== undefined ||
//             bodyStyle.msTransition !== undefined) {
//             if (_.options.useCSS === true) {
//                 _.cssTransitions = true;
//             }
//         }

//         if ( _.options.fade ) {
//             if ( typeof _.options.zIndex === 'number' ) {
//                 if( _.options.zIndex < 3 ) {
//                     _.options.zIndex = 3;
//                 }
//             } else {
//                 _.options.zIndex = _.defaults.zIndex;
//             }
//         }

//         if (bodyStyle.OTransform !== undefined) {
//             _.animType = 'OTransform';
//             _.transformType = '-o-transform';
//             _.transitionType = 'OTransition';
//             if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
//         }
//         if (bodyStyle.MozTransform !== undefined) {
//             _.animType = 'MozTransform';
//             _.transformType = '-moz-transform';
//             _.transitionType = 'MozTransition';
//             if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
//         }
//         if (bodyStyle.webkitTransform !== undefined) {
//             _.animType = 'webkitTransform';
//             _.transformType = '-webkit-transform';
//             _.transitionType = 'webkitTransition';
//             if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
//         }
//         if (bodyStyle.msTransform !== undefined) {
//             _.animType = 'msTransform';
//             _.transformType = '-ms-transform';
//             _.transitionType = 'msTransition';
//             if (bodyStyle.msTransform === undefined) _.animType = false;
//         }
//         if (bodyStyle.transform !== undefined && _.animType !== false) {
//             _.animType = 'transform';
//             _.transformType = 'transform';
//             _.transitionType = 'transition';
//         }
//         _.transformsEnabled = (_.animType !== null && _.animType !== false);

//     };


//     Slick.prototype.setSlideClasses = function(index) {

//         var _ = this,
//             centerOffset, allSlides, indexOffset, remainder;

//         allSlides = _.$slider
//             .find('.slick-slide')
//             .removeClass('slick-active slick-center slick-current')
//             .attr('aria-hidden', 'true');

//         _.$slides
//             .eq(index)
//             .addClass('slick-current');

//         if (_.options.centerMode === true) {

//             centerOffset = Math.floor(_.options.slidesToShow / 2);

//             if (_.options.infinite === true) {

//                 if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

//                     _.$slides
//                         .slice(index - centerOffset, index + centerOffset + 1)
//                         .addClass('slick-active')
//                         .attr('aria-hidden', 'false');

//                 } else {

//                     indexOffset = _.options.slidesToShow + index;
//                     allSlides
//                         .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
//                         .addClass('slick-active')
//                         .attr('aria-hidden', 'false');

//                 }

//                 if (index === 0) {

//                     allSlides
//                         .eq(allSlides.length - 1 - _.options.slidesToShow)
//                         .addClass('slick-center');

//                 } else if (index === _.slideCount - 1) {

//                     allSlides
//                         .eq(_.options.slidesToShow)
//                         .addClass('slick-center');

//                 }

//             }

//             _.$slides
//                 .eq(index)
//                 .addClass('slick-center');

//         } else {

//             if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

//                 _.$slides
//                     .slice(index, index + _.options.slidesToShow)
//                     .addClass('slick-active')
//                     .attr('aria-hidden', 'false');

//             } else if (allSlides.length <= _.options.slidesToShow) {

//                 allSlides
//                     .addClass('slick-active')
//                     .attr('aria-hidden', 'false');

//             } else {

//                 remainder = _.slideCount % _.options.slidesToShow;
//                 indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

//                 if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

//                     allSlides
//                         .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
//                         .addClass('slick-active')
//                         .attr('aria-hidden', 'false');

//                 } else {

//                     allSlides
//                         .slice(indexOffset, indexOffset + _.options.slidesToShow)
//                         .addClass('slick-active')
//                         .attr('aria-hidden', 'false');

//                 }

//             }

//         }

//         if (_.options.lazyLoad === 'ondemand') {
//             _.lazyLoad();
//         }

//     };

//     Slick.prototype.setupInfinite = function() {

//         var _ = this,
//             i, slideIndex, infiniteCount;

//         if (_.options.fade === true) {
//             _.options.centerMode = false;
//         }

//         if (_.options.infinite === true && _.options.fade === false) {

//             slideIndex = null;

//             if (_.slideCount > _.options.slidesToShow) {

//                 if (_.options.centerMode === true) {
//                     infiniteCount = _.options.slidesToShow + 1;
//                 } else {
//                     infiniteCount = _.options.slidesToShow;
//                 }

//                 for (i = _.slideCount; i > (_.slideCount -
//                         infiniteCount); i -= 1) {
//                     slideIndex = i - 1;
//                     $(_.$slides[slideIndex]).clone(true).attr('id', '')
//                         .attr('data-slick-index', slideIndex - _.slideCount)
//                         .prependTo(_.$slideTrack).addClass('slick-cloned');
//                 }
//                 for (i = 0; i < infiniteCount; i += 1) {
//                     slideIndex = i;
//                     $(_.$slides[slideIndex]).clone(true).attr('id', '')
//                         .attr('data-slick-index', slideIndex + _.slideCount)
//                         .appendTo(_.$slideTrack).addClass('slick-cloned');
//                 }
//                 _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
//                     $(this).attr('id', '');
//                 });

//             }

//         }

//     };

//     Slick.prototype.setPaused = function(paused) {

//         var _ = this;

//         if (_.options.autoplay === true && _.options.pauseOnHover === true) {
//             _.paused = paused;
//             if (!paused) {
//                 _.autoPlay();
//             } else {
//                 _.autoPlayClear();
//             }
//         }
//     };

//     Slick.prototype.selectHandler = function(event) {

//         var _ = this;

//         var targetElement =
//             $(event.target).is('.slick-slide') ?
//                 $(event.target) :
//                 $(event.target).parents('.slick-slide');

//         var index = parseInt(targetElement.attr('data-slick-index'));

//         if (!index) index = 0;

//         if (_.slideCount <= _.options.slidesToShow) {

//             _.setSlideClasses(index);
//             _.asNavFor(index);
//             return;

//         }

//         _.slideHandler(index);

//     };

//     Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

//         var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
//             _ = this;

//         sync = sync || false;

//         if (_.animating === true && _.options.waitForAnimate === true) {
//             return;
//         }

//         if (_.options.fade === true && _.currentSlide === index) {
//             return;
//         }

//         if (_.slideCount <= _.options.slidesToShow) {
//             return;
//         }

//         if (sync === false) {
//             _.asNavFor(index);
//         }

//         targetSlide = index;
//         targetLeft = _.getLeft(targetSlide);
//         slideLeft = _.getLeft(_.currentSlide);

//         _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

//         if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
//             if (_.options.fade === false) {
//                 targetSlide = _.currentSlide;
//                 if (dontAnimate !== true) {
//                     _.animateSlide(slideLeft, function() {
//                         _.postSlide(targetSlide);
//                     });
//                 } else {
//                     _.postSlide(targetSlide);
//                 }
//             }
//             return;
//         } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
//             if (_.options.fade === false) {
//                 targetSlide = _.currentSlide;
//                 if (dontAnimate !== true) {
//                     _.animateSlide(slideLeft, function() {
//                         _.postSlide(targetSlide);
//                     });
//                 } else {
//                     _.postSlide(targetSlide);
//                 }
//             }
//             return;
//         }

//         if (_.options.autoplay === true) {
//             clearInterval(_.autoPlayTimer);
//         }

//         if (targetSlide < 0) {
//             if (_.slideCount % _.options.slidesToScroll !== 0) {
//                 animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
//             } else {
//                 animSlide = _.slideCount + targetSlide;
//             }
//         } else if (targetSlide >= _.slideCount) {
//             if (_.slideCount % _.options.slidesToScroll !== 0) {
//                 animSlide = 0;
//             } else {
//                 animSlide = targetSlide - _.slideCount;
//             }
//         } else {
//             animSlide = targetSlide;
//         }

//         _.animating = true;

//         _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

//         oldSlide = _.currentSlide;
//         _.currentSlide = animSlide;

//         _.setSlideClasses(_.currentSlide);

//         _.updateDots();
//         _.updateArrows();

//         if (_.options.fade === true) {
//             if (dontAnimate !== true) {

//                 _.fadeSlideOut(oldSlide);

//                 _.fadeSlide(animSlide, function() {
//                     _.postSlide(animSlide);
//                 });

//             } else {
//                 _.postSlide(animSlide);
//             }
//             _.animateHeight();
//             return;
//         }

//         if (dontAnimate !== true) {
//             _.animateSlide(targetLeft, function() {
//                 _.postSlide(animSlide);
//             });
//         } else {
//             _.postSlide(animSlide);
//         }

//     };

//     Slick.prototype.startLoad = function() {

//         var _ = this;

//         if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

//             _.$prevArrow.hide();
//             _.$nextArrow.hide();

//         }

//         if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

//             _.$dots.hide();

//         }

//         _.$slider.addClass('slick-loading');

//     };

//     Slick.prototype.swipeDirection = function() {

//         var xDist, yDist, r, swipeAngle, _ = this;

//         xDist = _.touchObject.startX - _.touchObject.curX;
//         yDist = _.touchObject.startY - _.touchObject.curY;
//         r = Math.atan2(yDist, xDist);

//         swipeAngle = Math.round(r * 180 / Math.PI);
//         if (swipeAngle < 0) {
//             swipeAngle = 360 - Math.abs(swipeAngle);
//         }

//         if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
//             return (_.options.rtl === false ? 'left' : 'right');
//         }
//         if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
//             return (_.options.rtl === false ? 'left' : 'right');
//         }
//         if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
//             return (_.options.rtl === false ? 'right' : 'left');
//         }
//         if (_.options.verticalSwiping === true) {
//             if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
//                 return 'left';
//             } else {
//                 return 'right';
//             }
//         }

//         return 'vertical';

//     };

//     Slick.prototype.swipeEnd = function(event) {

//         var _ = this,
//             slideCount;

//         _.dragging = false;

//         _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

//         if (_.touchObject.curX === undefined) {
//             return false;
//         }

//         if (_.touchObject.edgeHit === true) {
//             _.$slider.trigger('edge', [_, _.swipeDirection()]);
//         }

//         if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

//             switch (_.swipeDirection()) {
//                 case 'left':
//                     slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide + _.getSlideCount()) : _.currentSlide + _.getSlideCount();
//                     _.slideHandler(slideCount);
//                     _.currentDirection = 0;
//                     _.touchObject = {};
//                     _.$slider.trigger('swipe', [_, 'left']);
//                     break;

//                 case 'right':
//                     slideCount = _.options.swipeToSlide ? _.checkNavigable(_.currentSlide - _.getSlideCount()) : _.currentSlide - _.getSlideCount();
//                     _.slideHandler(slideCount);
//                     _.currentDirection = 1;
//                     _.touchObject = {};
//                     _.$slider.trigger('swipe', [_, 'right']);
//                     break;
//             }
//         } else {
//             if (_.touchObject.startX !== _.touchObject.curX) {
//                 _.slideHandler(_.currentSlide);
//                 _.touchObject = {};
//             }
//         }

//     };

//     Slick.prototype.swipeHandler = function(event) {

//         var _ = this;

//         if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
//             return;
//         } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
//             return;
//         }

//         _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
//             event.originalEvent.touches.length : 1;

//         _.touchObject.minSwipe = _.listWidth / _.options
//             .touchThreshold;

//         if (_.options.verticalSwiping === true) {
//             _.touchObject.minSwipe = _.listHeight / _.options
//                 .touchThreshold;
//         }

//         switch (event.data.action) {

//             case 'start':
//                 _.swipeStart(event);
//                 break;

//             case 'move':
//                 _.swipeMove(event);
//                 break;

//             case 'end':
//                 _.swipeEnd(event);
//                 break;

//         }

//     };

//     Slick.prototype.swipeMove = function(event) {

//         var _ = this,
//             edgeWasHit = false,
//             curLeft, swipeDirection, swipeLength, positionOffset, touches;

//         touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

//         if (!_.dragging || touches && touches.length !== 1) {
//             return false;
//         }

//         curLeft = _.getLeft(_.currentSlide);

//         _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
//         _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

//         _.touchObject.swipeLength = Math.round(Math.sqrt(
//             Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

//         if (_.options.verticalSwiping === true) {
//             _.touchObject.swipeLength = Math.round(Math.sqrt(
//                 Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
//         }

//         swipeDirection = _.swipeDirection();

//         if (swipeDirection === 'vertical') {
//             return;
//         }

//         if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
//             event.preventDefault();
//         }

//         positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
//         if (_.options.verticalSwiping === true) {
//             positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
//         }


//         swipeLength = _.touchObject.swipeLength;

//         _.touchObject.edgeHit = false;

//         if (_.options.infinite === false) {
//             if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
//                 swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
//                 _.touchObject.edgeHit = true;
//             }
//         }

//         if (_.options.vertical === false) {
//             _.swipeLeft = curLeft + swipeLength * positionOffset;
//         } else {
//             _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
//         }
//         if (_.options.verticalSwiping === true) {
//             _.swipeLeft = curLeft + swipeLength * positionOffset;
//         }

//         if (_.options.fade === true || _.options.touchMove === false) {
//             return false;
//         }

//         if (_.animating === true) {
//             _.swipeLeft = null;
//             return false;
//         }

//         _.setCSS(_.swipeLeft);

//     };

//     Slick.prototype.swipeStart = function(event) {

//         var _ = this,
//             touches;

//         if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
//             _.touchObject = {};
//             return false;
//         }

//         if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
//             touches = event.originalEvent.touches[0];
//         }

//         _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
//         _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

//         _.dragging = true;

//     };

//     Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

//         var _ = this;

//         if (_.$slidesCache !== null) {

//             _.unload();

//             _.$slideTrack.children(this.options.slide).detach();

//             _.$slidesCache.appendTo(_.$slideTrack);

//             _.reinit();

//         }

//     };

//     Slick.prototype.unload = function() {

//         var _ = this;

//         $('.slick-cloned', _.$slider).remove();

//         if (_.$dots) {
//             _.$dots.remove();
//         }

//         if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
//             _.$prevArrow.remove();
//         }

//         if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
//             _.$nextArrow.remove();
//         }

//         _.$slides
//             .removeClass('slick-slide slick-active slick-visible slick-current')
//             .attr('aria-hidden', 'true')
//             .css('width', '');

//     };

//     Slick.prototype.unslick = function(fromBreakpoint) {

//         var _ = this;
//         _.$slider.trigger('unslick', [_, fromBreakpoint]);
//         _.destroy();

//     };

//     Slick.prototype.updateArrows = function() {

//         var _ = this,
//             centerOffset;

//         centerOffset = Math.floor(_.options.slidesToShow / 2);

//         if ( _.options.arrows === true &&
//             _.slideCount > _.options.slidesToShow &&
//             !_.options.infinite ) {

//             _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
//             _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

//             if (_.currentSlide === 0) {

//                 _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
//                 _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

//             } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

//                 _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
//                 _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

//             } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

//                 _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
//                 _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

//             }

//         }

//     };

//     Slick.prototype.updateDots = function() {

//         var _ = this;

//         if (_.$dots !== null) {

//             _.$dots
//                 .find('li')
//                 .removeClass('slick-active')
//                 .attr('aria-hidden', 'true');

//             _.$dots
//                 .find('li')
//                 .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
//                 .addClass('slick-active')
//                 .attr('aria-hidden', 'false');

//         }

//     };

//     Slick.prototype.visibility = function() {

//         var _ = this;

//         if (document[_.hidden]) {
//             _.paused = true;
//             _.autoPlayClear();
//         } else {
//             if (_.options.autoplay === true) {
//                 _.paused = false;
//                 _.autoPlay();
//             }
//         }

//     };
//     Slick.prototype.initADA = function() {
//         var _ = this;
//         _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
//             'aria-hidden': 'true',
//             'tabindex': '-1'
//         }).find('a, input, button, select').attr({
//             'tabindex': '-1'
//         });

//         _.$slideTrack.attr('role', 'listbox');

//         _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
//             $(this).attr({
//                 'role': 'option',
//                 'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
//             });
//         });

//         if (_.$dots !== null) {
//             _.$dots.attr('role', 'tablist').find('li').each(function(i) {
//                 $(this).attr({
//                     'role': 'presentation',
//                     'aria-selected': 'false',
//                     'aria-controls': 'navigation' + _.instanceUid + i + '',
//                     'id': 'slick-slide' + _.instanceUid + i + ''
//                 });
//             })
//                 .first().attr('aria-selected', 'true').end()
//                 .find('button').attr('role', 'button').end()
//                 .closest('div').attr('role', 'toolbar');
//         }
//         _.activateADA();

//     };

//     Slick.prototype.activateADA = function() {
//         var _ = this,
//         _isSlideOnFocus =_.$slider.find('*').is(':focus');
//         // _isSlideOnFocus = _.$slides.is(':focus') || _.$slides.find('*').is(':focus');

//         _.$slideTrack.find('.slick-active').attr({
//             'aria-hidden': 'false',
//             'tabindex': '0'
//         }).find('a, input, button, select').attr({
//             'tabindex': '0'
//         });

//         (_isSlideOnFocus) &&  _.$slideTrack.find('.slick-active').focus();

//     };

//     Slick.prototype.focusHandler = function() {
//         var _ = this;
//         _.$slider.on('focus.slick blur.slick', '*', function(event) {
//             event.stopImmediatePropagation();
//             var sf = $(this);
//             setTimeout(function() {
//                 if (_.isPlay) {
//                     if (sf.is(':focus')) {
//                         _.autoPlayClear();
//                         _.paused = true;
//                     } else {
//                         _.paused = false;
//                         _.autoPlay();
//                     }
//                 }
//             }, 0);
//         });
//     };

//     $.fn.slick = function() {
//         var _ = this,
//             opt = arguments[0],
//             args = Array.prototype.slice.call(arguments, 1),
//             l = _.length,
//             i = 0,
//             ret;
//         for (i; i < l; i++) {
//             if (typeof opt == 'object' || typeof opt == 'undefined')
//                 _[i].slick = new Slick(_[i], opt);
//             else
//                 ret = _[i].slick[opt].apply(_[i].slick, args);
//             if (typeof ret != 'undefined') return ret;
//         }
//         return _;
//     };
// }));





// /*--SLIDER IMPLEMENTATION--*/
//     $(document).ready(function(){
//         $('.homepage_slider_container').slick({
//             prevArrow: '',
//             nextArrow: '',
//             dots: true,
//             infinite: true,
//             autoplay: false
//         });

//         // if ( $('body').is('.homepage') && $(window).width() > 1024 ) {

//         //     var homepageVideo = $('.homepage_bg_video');

//         //     // autoplay HMTL5 video
//         //         homepageVideo.get(0).play();

//         //     // If the video throws an error, use background image
//         //         homepageVideo[0].addEventListener('error', function(event) {
//         //             $('.video_cover').toggle();
//         //             console.log('video error');
//         //         }, true);
//         // }

//         // function checkVideoBuffering() {
//         //     var checkInterval  = 3000.0
//         //     var lastPlayPos    = 0
//         //     var currentPlayPos = 0
//         //     var bufferingDetected = false
//         //     var player = $('.homepage_bg_video');

//         //     var checkBufferingInterval = setInterval(checkBuffering, checkInterval)

//         //     function checkBuffering() {
//         //         currentPlayPos = player[0].currentTime

//         //         // checking offset, e.g. 1 / 50ms = 0.02
//         //         var offset = 1 / checkInterval

//         //         console.log(lastPlayPos, offset, lastPlayPos+offset, currentPlayPos, checkInterval);

//         //         // if no buffering is currently detected,
//         //         // and the position does not seem to increase
//         //         // and the player isn't manually paused...
//         //         if (
//         //                 !bufferingDetected 
//         //                 && currentPlayPos < (lastPlayPos + offset)
//         //                 && !player.paused
//         //             ) {
//         //             console.log("buffering");
//         //             player.fadeOut(function() {
//         //                 $('.video_cover').fadeIn();
//         //             }).remove();
                    
//         //             bufferingDetected = true
//         //             clearInterval(checkBufferingInterval);
//         //         }

//         //         // if we were buffering but the player has advanced,
//         //         // then there is no buffering
//         //         if (
//         //             bufferingDetected 
//         //             && currentPlayPos > (lastPlayPos + offset)
//         //             && !player.paused
//         //             ) {
//         //             console.log("not buffering anymore")
//         //             bufferingDetected = false
//         //         }

//         //         lastPlayPos = currentPlayPos
//         //     }
//         //     setTimeout(function() {
//         //         checkBuffering();   
//         //     }, 2000);
//         // }
//         // checkVideoBuffering();
//     });

//     /*-Setting active class for logos--*/
//         function slideLogo(slide, logo) {
//             if( $('.'+slide).hasClass('slick-active') ) {
//                 $('.'+logo).addClass('active').siblings().removeClass('active');
//             }
//         }
//     /*--End setting active class for logos--*/

//     $(document).ready(function(){
//         var invistaSliderContainer = $('.invista_slider_container'),
//             featureSliderLogos = $('.feature_slider_logos');

//         invistaSliderContainer.slick({
//             prevArrow: "<div class='left_directional_container'><div class='left_directional dark'><div></div></div></div>",
//             nextArrow: "<div class='right_directional_container'><div class='right_directional dark'><div></div></div></div>",
//             dots: false,
//             infinite: true,
//             autoplay: false,
//             autoplaySpeed: 4000
//         });

//          invistaSliderContainer.on('afterChange', function() {
//            slideLogo('slide_1', 'invista_logo_lycra');
//            slideLogo('slide_3', 'invista_logo_stainmaster');
//            slideLogo('slide_4', 'invista_logo_coolmax');
//         });

//         featureSliderLogos.on('click', 'li', function(event) {
//             var slideIndex = $(this).closest('li').index();
//             invistaSliderContainer.slick( 'slickGoTo', parseInt( slideIndex ) );
//             event.preventDefault();
//         });
//     });

//     $(document).ready(function(){
//         var guardianSliderContainer = $('.guardian_slider_container'),
//             featureSliderLogos = $('.feature_slider_logos');

//         guardianSliderContainer.slick({
//             prevArrow: "<div class='left_directional_container'><div class='left_directional dark'><div></div></div></div>",
//             nextArrow: "<div class='right_directional_container'><div class='right_directional dark'><div></div></div></div>",
//             dots: true,
//             infinite: true,
//             autoplay: true,
//             autoplaySpeed: 5000
//         });

//          guardianSliderContainer.on('afterChange', function() {
//            slideLogo('slide_1', 'invista_logo_lycra');
//            slideLogo('slide_3', 'invista_logo_stainmaster');
//            slideLogo('slide_4', 'invista_logo_coolmax');
//         });

//         featureSliderLogos.on('click', 'li', function(event) {
//             var slideIndex = $(this).closest('li').index();
//             guardianSliderContainer.slick( 'slickGoTo', parseInt( slideIndex ) );
//             event.preventDefault();
//         });
//     });

//     $(document).ready(function(){
//         var gpSliderContainer = $('.gp_slider_container'),
//             featureSliderLogos = $('.feature_slider_logos');
        
//         gpSliderContainer.slick({
//             prevArrow: "<div class='left_directional_container'><div class='left_directional dark'><div></div></div></div>",
//             nextArrow: "<div class='right_directional_container'><div class='right_directional dark'><div></div></div></div>",
//             dots: false,
//             infinite: true,
//             autoplay: false,
//             autoplaySpeed: 4000
//         });

//         gpSliderContainer.on('afterChange', function() {
//            slideLogo('slide_1', 'gp_logo_brawny');
//            slideLogo('slide_2', 'gp_logo_angelsoft');
//            slideLogo('slide_3', 'gp_logo_building_products');
//            slideLogo('slide_4', 'gp_logo_enmotion');
//            slideLogo('slide_5', 'gp_logo_dixie');
//         });

//         featureSliderLogos.on('click', 'li', function(event) {
//             var slideIndex = $(this).closest('li').index();
//             gpSliderContainer.slick( 'slickGoTo', parseInt( slideIndex ) );
//             event.preventDefault();
//         });

//     });
// }
// slickJS();
/*--END SLIDER IMPLEMENTATION--*/