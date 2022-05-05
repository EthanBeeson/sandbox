function fizzbuzz(int_var){
	if (int_var % 2 == 0) {
		return "buzz";
	}
	if (int_var % 2 != 0) {
		return "fizz";
	}
}

console.log(fizzbuzz(4));
console.log(fizzbuzz(5));
