    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    var audioCtx = new AudioContext();

    function zcg(obj) {


    var arrFrequency = [196.00, 220.00, 246.94, 261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25, 587.33, 659.25, 698.46, 783.99, 880.00, 987.77, 1046.50];  
    var start = 0, direction = 1;
   
    obj.addEventListener('mouseover', function () {

        var frequency = arrFrequency[start];
        if (!frequency) {
            direction = -1 * direction;
            start = start + 2 * direction;
            frequency = arrFrequency[start];
        }
        start = start + direction;   


        var oscillator = audioCtx.createOscillator();
        oscillator.type = 'sine';       
        oscillator.frequency.value = frequency;

        var gainNode = audioCtx.createGain();

        oscillator.connect(gainNode);
       
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.001);
        oscillator.start(audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
        oscillator.stop(audioCtx.currentTime + 1);

        gainNode.connect(audioCtx.destination);

       

    });
}
