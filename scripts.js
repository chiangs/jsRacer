$(document).ready(function() {
    console.log('loaded');
    keydown();

});

var redKey = true;
var blueKey = true;

var keydown = function() {
    $(document).keydown(function(e) {
        if (e.keyCode === 81 && redKey) {
            moveCar($('#flyingDino'));
            redKey = false;
        } else if (e.keyCode === 87 && !redKey) {
            moveCar($('#flyingDino'));
            redKey = true;
        } else if (e.keyCode === 80 && blueKey) {
            moveCar($('#cyclingDino'));
            blueKey = false;
        } else if (e.keyCode === 79 && !blueKey) {
            moveCar($('#cyclingDino'));
            blueKey = true;
        }
    });
}

var moveCar = function(div) {
    if (!checkWin(div)) {
        div.css("margin-left", "+=20");
    } else {
        alert(div.attr("id") + " has won! Click OK to restart");
        location.reload()
    }

}

var checkWin = function(div) {
    if ((div).width() + parseInt(div.css("margin-left")) >= $(window).width()) {
        return true;
    } else {
        return false;
    }
}
