var OpenBCIBoard = require('openbci-sdk');
var ourBoard = new OpenBCIBoard.OpenBCIBoard();

ourBoard.connect('COM3')
    .then(function() {
        ourBoard.on('ready',function() {
            ourBoard.streamStart();
            ourBoard.on('sample',function(sample) {
                for (var i = 0; i < ourBoard.numberOfChannels(); i++) {
                    console.log("Channel " + (i + 1) + ": " + sample.channelData[i].toFixed(8) + " Volts.");
                }
            });
        });
});