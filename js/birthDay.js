$(document).ready(function(){
    function toFull() {
        if (document.documentElement.requestFullscreen) {
            return document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullScreen) {
            return document.documentElement.webkitRequestFullScreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            return document.documentElement.mozRequestFullScreen();
        } else {
            return document.documentElement.msRequestFullscreen();
        }
    }
    var canvas = document.getElementById('c1'),
        music = document.getElementById("music"),
        canvasWidth = window.screen.width,
        canvasHeight = window.screen.height,
        res = Array(365).join(1).split('');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        console.log(ctx);
    }
    function draw() {
        ctx.fillStyle = 'rgba(0,0,0,.05)';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        ctx.fillStyle = '#fff';
        res.map(function (value, index, array) {
            var text;
            text = String.fromCharCode(Math.round(Math.random() * 20901) + 19968);
            var x = index * 10;
            ctx.fillStyle = getColor();
            ctx.fillText(text, x, value);
            array[index] = value>(758 + Math.random()*484) ? 0 : value+10;
        })

    }
    function getColor() {
        return "#" + (function (color) {
            return new Array(7 - color.length).join(0) + color;
        })((Math.random() * 0x1000000 | 0).toString(16));
    }
    $('button').click(function(){
        toFull();
        $('.confirm').css('display','none');
        setInterval(draw, 1000/60)
        music.play();
    });
});

