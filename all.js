$(document).ready(function() {
    $('.next1').click(function() {
        $('.step1').css('display', 'none');
        $('.step2').css('display', 'block');
    });
    $('.next2').click(function() {
        $('.step1').css('display', 'none');
        $('.step2').css('display', 'none');
        $('.step3').css('display', 'block');
    });
    $('.prev2').click(function() {
        $('.step1').css('display', 'block');
        $('.step2').css('display', 'none');
    });
    $('.next3').click(function() {
        $('.step1').css('display', 'none');
        $('.step2').css('display', 'none');
        $('.step3').css('display', 'none');
        $('.step4').css('display', 'block');
    });
    $('.prev3').click(function() {
        $('.step1').css('display', 'none');
        $('.step2').css('display', 'block');
        $('.step3').css('display', 'none');
    });
    $('.next4').click(function() {
        $('.step1').css('display', 'none');
        $('.step2').css('display', 'none');
        $('.step3').css('display', 'none');
        $('.step4').css('display', 'none');
        $('.submitover_step5').css('display', 'block');
    });
    $('.prev4').click(function() {
        $('.step1').css('display', 'none');
        $('.step2').css('display', 'none');
        $('.step3').css('display', 'block');
        $('.step4').css('display', 'none');
    });
});