// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var matrix = [];

for (var i = 2; i < process.argv.length; i++) {
	matrix.push(parseFloat(process.argv[i]));
}

console.log(matrix);

matrix = matrix.sort(function(a, b){return a-b});

console.log(matrix);

