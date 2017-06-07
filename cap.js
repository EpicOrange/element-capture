var casper = require('casper').create();
var args = casper.cli.args;

casper.start(args.shift(), function() {
    args.forEach(function(s) {
        casper.waitForSelector(s, function() {
            console.log(casper.getElementInfo(s).html);
        });
    });
});

casper.run();