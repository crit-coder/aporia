/* Description: Extract usernames from an array of user objects. */
const users = [
	{ id: 1, username: 'alice', email: 'alice@example.com' },
	{ id: 2, username: 'bob', email: 'bob@example.com' },
	{ id: 3, username: 'carol', email: 'carol@example.com' },
]

const usernames = users.map(user => user.username)
console.log(usernames)
// Expected output: ['alice', 'bob', 'carol']

/* Description: Double the numbers in the array. */
const nums = [1, 2, 3, 4]

const numsDoubled = nums.map(number => number * 2)
console.log(numsDoubled)
// Expected output: [2, 4, 6, 8]

/* Description: Convert all words to uppercase. */
const words = ['hello', 'world']

const wordsUppercase = words.map(word => word.toUpperCase())
console.log(wordsUppercase)
// Expected output: ['HELLO', 'WORLD']

/* Description: Add index before each fruit name. */
const fruits = ['apple', 'banana']

const fruitsWithIndex = fruits.map((fruit, index) => `${index}: ${fruit}`)
console.log(fruitsWithIndex)
// Expected output: ['0: apple', '1: banana']

/* Description: Convert each string to its length. */
const animals = ['cat', 'giraffe']

const animalsToLength = animals.map(animal => animal.length)
console.log(animalsToLength)
// Expected output: [3, 7]

/* Description: Add new properties isActive and hasName to each user. */
const users3 = [{ name: 'Jane' }, { name: 'John' }]

const usersAreActive = users3.map(user => ({
	...user,
	isActive: true,
	hasName: true,
}))
console.log(usersAreActive)
// Expected output:
// [
//   { name: 'Jane', isActive: true, hasName: true },
//   { name: 'John', isActive: true, hasName: true }
// ]

/* Description: Return an array of full names by combining first and last names. */
const users4 = [
	{ firstName: 'Alice', lastName: 'Smith' },
	{ firstName: 'Bob', lastName: 'Brown' },
]

const firstAndLastNames = users4.map(
	user => `${user.firstName} ${user.lastName}`,
)
console.log(firstAndLastNames)
// Expected output: ['Alice Smith', 'Bob Brown']

/* Description: Add an isExpensive property based on price. */
const products = [
	{ name: 'Laptop', price: 1200 },
	{ name: 'Mouse', price: 25 },
]

const expensiveProducts = products.map(product => ({
	...product,
	isExpensive: product.price > 100 ? 'Yes' : 'No',
}))
console.log(expensiveProducts)
// Expected output:
// [
//   { name: 'Laptop', price: 1200, isExpensive: 'Yes' },
//   { name: 'Mouse', price: 25, isExpensive: 'No' }
// ]

/* Description: Convert true/false values to 'Yes'/'No' strings. */
const answers = [true, false, true, true, false]

const yesNoAnswers = answers.map(answer => (answer ? 'Yes' : 'No'))
console.log(yesNoAnswers)
// Expected output: ['Yes', 'No', 'Yes', 'Yes', 'No']

/* Description: Convert each tag string to an object with its index. */
const tags = ['react', 'javascript', 'typescript']

const newTags = tags.map((tag, index) => ({
	id: index,
	value: tag,
}))
console.log(newTags)
// Expected output:
// [
//   { id: 0, value: 'react' },
//   { id: 1, value: 'javascript' },
//   { id: 2, value: 'typescript' }
// ]

/* Description: Truncate any description over 20 characters, appending '...'. */
const items = [
	{ description: 'Short' },
	{ description: 'This description is definitely too long' },
]

const truncatedItems = items.map(item => ({
	...item,
	description:
		item.description.length < 20
			? item.description
			: `${item.description.slice(0, 20)}...`,
}))
console.log(truncatedItems)
// Expected output:
// [
//   { description: 'Short' },
//   { description: 'This description is ...' }
// ]

/* Description: Combine two arrays into one array of objects with name and score. */
const names = ['Alice', 'Bob', 'Carol']
const scores = [85, 92, 78]

const namesAndScores = names.map((name, index) => ({
	name,
	score: scores[index],
}))
console.log(namesAndScores)
// Expected output:
// [
//   { name: 'Alice', score: 85 },
//   { name: 'Bob', score: 92 },
//   { name: 'Carol', score: 78 }
// ]

/* Description: Return 'even' or 'odd' for each number. */
const numbers = [1, 2, 3, 4, 5]

const evenOrOdd = numbers.map(number => (number % 2 === 0 ? 'even' : 'odd'))
console.log(evenOrOdd)
// Expected output: ['odd', 'even', 'odd', 'even', 'odd']

/* Description: Trim whitespace and lowercase every string. */
const input = ['  Hello  ', 'WORLD ', '  JavaScript']

const sanitizedInput = input.map(text => text.trim().toLowerCase())
console.log(sanitizedInput)
// Expected output: ['hello', 'world', 'javascript']

/* Description: Extract 'category' from each object, use 'unknown' if missing. */
const itemsWithOptionalCategory = [
	{ category: 'fruit' },
	{ name: 'Laptop' },
	{ category: 'vegetable' },
]

const categories = itemsWithOptionalCategory.map(item =>
	item.category ? item.category : 'unknown',
)
console.log(categories)
// Expected output: ['fruit', 'unknown', 'vegetable']

/* Description: Extract the city name from each user's nested address object. */
const people = [
	{
		id: 1,
		name: 'Alice',
		address: {
			city: 'New York',
			zip: '10001',
		},
	},
	{
		id: 2,
		name: 'Bob',
		address: {
			zip: '90001',
		},
	},
	{
		id: 3,
		name: 'Charlie',
		address: {
			city: 'Chicago',
			zip: '60601',
		},
	},
	{
		id: 4,
		name: 'Tom',
	},
]

const userCities = people.map(person => person.address?.city || 'unknown')

console.log(userCities)

// Expected output: ['New York', 'unknown', 'Chicago', 'unknown']
