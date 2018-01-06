var fs = require('fs');

var total = 50.00;

var input = process.argv[2];

var value = process.argv[3];

var lottogen 

var lottowin 



if (input === "total") {
	fs.readFile("bank.txt", "utf-8", function (error,data){
		if (error) {
			console.log("An error has occured. ", error)
		}

		if (transactions !== ""){
			var transactions = data.split(',');

			for (var i = 0; i < transactions.length - 1; i++) {
				value = parseFloat(transactions[i]);
				total = total + value
			}
			console.log("You have " +"$" + total.toFixed(2) + " in your bank account.")

		} else {
			console.log("You have " +"$" + total.toFixed(2) + " in your bank account.")
		}
	})

} else if ( input === "deposit"){
	logger(value);
	console.log("Deposit complete");

} else if ( input === "withdraw"){
	total = total - value;
	value = value * (-1)

	if (total >= 0){
		console.log("withdrawal complete");
		logger(value);
	} else {
		console.log("You do not have the funds to complete this transaction");
	}

} else if ( input === "lotto"){
	if (total >= 0){
		value = -0.25;
		logger(value);

		lottowin = Math.floor((Math.random()*100));
		lottogen = Math.floor((Math.random()*100));

		console.log("The winning number is: " + lottogen);
		console.log("Your number is: " + lottowin)


		if (lottowin === lottogen){
			console.log("You hit the jackpot buddy");
			logger("+20.25")
		} else {
			console.log("Take this L cause you're a LOOOOOOSER");
		}
	} else {
		console.log("You do not have the funds to complete this transaction");
	}


} else {
	console.log("You did not enter an transaction to perform");
}



function logger(number) {
	fs.appendFile('bank.txt', value + ", ", function(error){
		if (error) {
			console.log("An error has occured. ", error)
		}
	})
}