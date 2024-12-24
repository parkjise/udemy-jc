const numbers = [1,2,3]
console.log(numbers)

const moreNumbers = new Array(5) // []
console.log(moreNumbers)

const moreNumbers02 = Array(2) // []
console.log(moreNumbers02)

const moreNumbers03 = Array.of(1,2) // []
console.log(moreNumbers03)


const moreNumbers04 = Array.from('hi');
console.log(moreNumbers04)

const listItem = document.querySelectorAll('li')

const listItemArray = Array.from(listItem)
console.log(listItemArray)

const hobbies = ["Cooking",'sports']
const personalData = [30,'Max',{moreDetail:[]}]

const analyticsData = [[1,1.6],[-5.4,2.1]]

for(const data of analyticsData){
    for(const dataPoint of data){
        console.log(dataPoint)
    }
}

hobbies.push('Reading')
hobbies.unshift('Coding')
hobbies.pop()
hobbies.shift()
console.log(hobbies)

hobbies[1] = 'Coding'
console.log(hobbies)

hobbies.splice(0,0,'Good Food')
console.log(hobbies)

hobbies.splice(0,1)
console.log(hobbies)