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

var Input = document.querySelectorAll('.field');
var NoText = document.querySelectorAll('.no_text')
   
Input[0].addEventListener('blur', Text1, false);
Input[1].addEventListener('blur', Text2, false);
Input[2].addEventListener('blur', Text3, false);
Input[3].addEventListener('blur', Text4, false);
Input[4].addEventListener('blur', Text5, false);
Input[5].addEventListener('blur', Text6, false);
Input[6].addEventListener('blur', Text7, false);
Input[7].addEventListener('blur', Text8, false);
Input[8].addEventListener('blur', Text9, false);
Input[9].addEventListener('blur', Text10, false);
Input[10].addEventListener('blur', Text11, false);


function Text1(e) {
    var str = e.target.value;
    if (str == '') {
        NoText[0].innerHTML = '此欄位不可空白';
    } else {
        NoText[0].innerHTML = '';
    }
};

function Text2(e) {
    var str = e.target.value;
    if (str == '') {
        NoText[1].innerHTML = '此欄位不可空白';
    } else {
        NoText[1].innerHTML = '';
    }
};

function Text3(e) {
    var str = e.target.value;
    if (str == '') {
        NoText[2].innerHTML = '此欄位不可空白';
    } else {
        NoText[2].innerHTML = '';
    }
};


function Text4(e) {
    var str = e.target.value;
    if (str == '') {
        NoText[3].innerHTML = '此欄位不可空白';
    } else {
        NoText[3].innerHTML = '';
    }
};

function Text5(e) {
    var str = e.target.value;
    if (str == '') {
        NoText[4].innerHTML = '此欄位不可空白';
    } else {
        NoText[4].innerHTML = '';
    }
};

function Text6(e) {
    var str = e.target.value;
    if (str == '') {
        NoText[5].innerHTML = '此欄位不可空白';
    } else {
        NoText[5].innerHTML = '';
    }
};

function Text7(e) {
    var str = e.target.value;
    if (str == '') {
        NoText[6].innerHTML = '此欄位不可空白';
    } else {
        NoText[6].innerHTML = '';
    }
};

function Text8(e) {
    var str = e.target.value;
    if (str == '') {
        NoText[7].innerHTML = '此欄位不可空白';
    } else {
        NoText[7].innerHTML = '';
    }
};

function Text9(e) {
    var str = e.target.value;
    if (str == '') {
        NoText[8].innerHTML = '此欄位不可空白';
    } else {
        NoText[8].innerHTML = '';
    }
};

function Text10(e) {
    var str = e.target.value;
    if (str == '') {
        NoText[9].innerHTML = '此欄位不可空白';
    } else {
        NoText[9].innerHTML = '';
    }
};

function Text11(e) {
    var str = e.target.value;
    if (str == '') {
        NoText[10].innerHTML = '此欄位不可空白';
    } else {
        NoText[10].innerHTML = '';
    }
};
