var message = "adsd{{ede}}fggd";
console.log("1:" + JSON.stringify(message.match(/{{[^{}]+/g)));
var regwords = message.match(/{{[^{}]+}}/g);
console.log("regwords:" + JSON.stringify(regwords));

var regex = new RegExp(/{[^{}]+}}/g);
var rs = regex.exec(message);
console.log("rs:" + JSON.stringify(rs));
