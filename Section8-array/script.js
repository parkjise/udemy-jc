const numbers = [1, 2, 3];
console.log(numbers);

const moreNumbers = new Array(5); // []
console.log(moreNumbers);

const moreNumbers02 = Array(2); // []
console.log(moreNumbers02);

const moreNumbers03 = Array.of(1, 2); // []
console.log(moreNumbers03);

const moreNumbers04 = Array.from("hi");
console.log(moreNumbers04);

const listItem = document.querySelectorAll("li");

const listItemArray = Array.from(listItem);
console.log(listItemArray);

const hobbies = ["Cooking", "sports"];
const personalData = [30, "Max", { moreDetail: [] }];

const analyticsData = [
	[1, 1.6],
	[-5.4, 2.1],
];

for (const data of analyticsData) {
	for (const dataPoint of data) {
		console.log(dataPoint);
	}
}

hobbies.push("Reading");
hobbies.unshift("Coding");
hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = "Coding";
console.log(hobbies);

hobbies.splice(0, 0, "Good Food");
console.log(hobbies);

hobbies.splice(0, 1);
console.log(hobbies);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storeResults = testResults.slice(1,4);
const storeResults = testResults.concat(3.99, 2);

testResults.push(5.91);

console.log(storeResults, testResults);
console.log(testResults.indexOf(-5));

const personData = [{ name: "Max" }, { name: "Manuel" }];
console.log(personData.indexOf({ name: "Manuel" }));

const manuel = personData.find((person, idx, persons) => {
	return person.name === "Manuel";
});

manuel.name = "Anna";

console.log(manuel, personData);

const maxIndex = personData.findIndex((person, idx, persons) => {
	return person.name === "Max";
});
console.log(maxIndex);
// console.log(testResults.slice())

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
// const taxAdjustedPrices = [];

// for (const price of prices) {
// 	taxAdjustedPrices.push(price * (1 + tax));
// }

// prices.forEach((price, idx, prices) => {
// 	const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
// 	taxAdjustedPrices.push(priceObj);
// });

const taxAdjustedPrices = prices.map((price, idx, prices) => {
	const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
	// taxAdjustedPrices.push(priceObj);
	return priceObj;
});

console.log(prices, taxAdjustedPrices);

const sortedprices = prices.sort((a, b) => {
	if (a > b) {
		return 1;
	} else if (a === b) {
		return 0;
	} else {
		return -1;
	}
});
console.log(sortedprices.reverse());

const filterArray = prices.filter((price,index,prices) => {
    return price > 6;
})

console.log(filterArray)

// let sum = 0;

// prices.forEach((price) => {
// 	sum += price
// })

const sum = prices.reduce((preValue,curValue) => preValue + curValue,0)
console.log(sum)

const data = 'new york;10.99;2000'

const transformedData = data.split(';');
transformedData[1] = +transformedData[1]; //transformedData[1]에 있는 문자열 '10.99'을 숫자로 변환합니다.
console.log(transformedData);

const nameFragements= ['Max','Schwarz'] 
const name = nameFragements.join(' ')// 배열의 요소를 공백(' ')으로 연결해 문자열 'Max Schwarz' 생성
console.log(name)
