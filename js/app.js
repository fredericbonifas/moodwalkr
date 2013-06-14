// Globals

// TransitionEnd polyfill
var transEndEventNames = {
    'WebkitTransition' : 'webkitTransitionEnd',
    'MozTransition'    : 'transitionend',
    'OTransition'      : 'oTransitionEnd',
    'msTransition'     : 'MSTransitionEnd',
    'transition'       : 'transitionend'
},
transitionEnd = transEndEventNames[ Modernizr.prefixed('transition') ];

// AnimationEnd polyfill
var animEndEventNames = {
    'WebkitAnimation' : 'webkitAnimationEnd',
    'MozAnimation'    : 'animationend',
    'OAnimation'      : 'oAnimationEnd',
    'msAnimation'     : 'MSAnimationEnd',
    'animation'       : 'animationend'
},
animationEnd = animEndEventNames[ Modernizr.prefixed('animation') ];


// Init
$(function() {
    $(document).foundation();

    map = L.mapbox.map('map', 'grsmto.map-9deztyii');

    map.on('ready', function() {
        $('#loader .loading').fadeOut();

        window.setTimeout(function() {
            $('.main-container').addClass('loaded');

            window.setTimeout(function() {  
                $('.step-1').css('display', 'block').addClass('show');
            }, 1100);
        },500);
    });

    $('.step-1 .green-button').on('click', function(e) {
        e.preventDefault();

        $(this).parent().removeClass('show').addClass('hide').on(transitionEnd, function(){
            $(this).parent().css('display', 'none');
        });

        map.panBy([200, 300], {duration: 1});
    });
});