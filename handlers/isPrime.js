const isPrime = num => {
	if(isNaN(num)) return false;
	if (!(num === parseInt(num, 10))) return false;
	if(num <= 0 || num === 1){
		return false
	}
	for(let i = 2; i < num; i++)
		if(num % i === 0) return false;
	return true ;
};



const generatePrime = (a,b)=>{
	const resultArr = [];
	for (let i = a+1 ; i <= b ;i++){
		if (isPrime(i) ){
			resultArr.push(i)
		}
	}
	return resultArr
};

module.exports = {isPrime, generatePrime};