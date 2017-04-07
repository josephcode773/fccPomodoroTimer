var timerNumber = 30000;

var bar = new ProgressBar.Circle(container, {
    color: '#aaa',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 4,
    trailWidth: 1,
    easing: '',
    duration: timerNumber,
    text: {
        value: millisToMinutesAndSeconds(timerNumber),
        autoStyleContainer: false
    },
    from: { color: '#aaa', width: 2 },
    to: { color: '#333', width: 4 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText((value) + ' %');
            console.log(tickerToMinutesAndSeconds(circle.value()));
        }

    }
});

bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';


// bar.duration = timerNumber;
// bar.text.value = millisToMinutesAndSeconds(timerNumber);

function barAnimate() {
    bar.animate(1.0, function () {
        alert("Time Is Up!");
        location.reload(true);
    });
}

function barStop() {
    bar.stop();
}

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function tickerToMinutesAndSeconds(time) {
    var minutes = Math.floor(time / 10);
    var seconds = ((time % 60000) * 100).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function resetTimer() {
    location.reload(false);
}