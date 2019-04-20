$(document).ready(function(){
    $('#login').click(function(){
        var name = $('#name').val();
        if(name === 'yjx') {
            window.location.href = 'birthDay.html';
        } else {
            $('.message').css("display","block");
            setTimeout(function () {
                $('.message').css("display","none");
            },2500);
        }
    });
});

