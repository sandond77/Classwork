var input = parseInt(process.argv[2]);
var remainder = parseInt(process.argv[3]);
var sum = 0;

for (var i = 0; i <= input; i++) {
	if (i % remainder === 0){
		sum += i;
		console.log(sum)
	}
}

// console.log(sum);

