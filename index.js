setTimeout(function(){
  $('#skills').fadeIn();
}, 2000);

var breakpoint = 991;
var bgHeight = function() {
    $('#initbackground').css('height', $(window).height() + 'px');
}; bgHeight();
var windowWidth = $(window).height();
$(window).on('resize', function() {
    if ((($(this).width() <= breakpoint) && ($(this).width() != windowWidth))
        || ($(this).width() > breakpoint)) {
        bgHeight();
    }
    windowWidth = $(window).width();
});