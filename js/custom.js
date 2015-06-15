function calculateHeightWeight(){
    var height = $(window).height();
    $('section').css({ 'min-height': height });
}
function parallax(){
//    var s = skrollr.init();
    window.sr = new scrollReveal();
}
$(document).ready(function(){
    calculateHeightWeight();
    parallax();
});