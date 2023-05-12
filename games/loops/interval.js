let intervalId = null;
onmessage = function(event) {
    if (event.data.start) {
        intervalId = setInterval(() => {
            postMessage("interval.start");
        }, event.data.ms || 0);
    }
    if (event.data.stop && intervalId !== null) {
        clearInterval(intervalId);
    }
};