const axios = require("axios");


function pickTheNumbers(search) {
	if(!search) return;
	
const firstNumber = search.querySelector("#firstNumber");
const secondNumber = search.querySelector("#secondNumber");
const searchButton = search.querySelector("button.button.numbers");
const searchResult = search.querySelector(".search__results");

searchButton.on("click", () =>{
	searchResult.style.display = "none";
	
	//block if empty
	if(!(firstNumber.value) || !(secondNumber.value)  ){
		searchResult.style.display = "none";
		return
	}
	//show the results
	searchResult.style.display = "flex";
	
	axios
		.get(`/api/prime?firstNumber=${firstNumber.value}&secondNumber=${secondNumber.value}`)
		.then(res => {
			if(res.data){
				const html = res.data.join(", ");
				searchResult.innerHTML =  `<h3>These are (not) the prime numbers you are looking for:</h3> <p>${html}</p>`
			}
		});
	
})


}

export default pickTheNumbers;