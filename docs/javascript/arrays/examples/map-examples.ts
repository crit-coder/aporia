// Extract Names from Objects

const users = [
	{ id: 1, username: 'alice', email: 'alice@example.com' },
	{ id: 2, username: 'bob', email: 'bob@example.com' },
	{ id: 3, username: 'carol', email: 'carol@example.com' },
]

const usernames = users.map(user => user.username)
console.log(usernames)

// Double the numbers

const nums = [1, 2, 3, 4]

const numsDoubled = nums.map(number => number * 2)
console.log(numsDoubled)
// [2, 4, 6, 8]

// Convert to uppercase
const words = ['hello', 'world']

const wordsUppercase = words.map(word => word.toUpperCase())
console.log(wordsUppercase)
// ['HELLO', 'WORLD']

// Add Index to Strings
const fruits = ['apple', 'banana']

const fruitsWithIndex = fruits.map((fruit, index) => `${index}: ${fruit}`)
console.log(fruitsWithIndex)
// Expected: ['0: apple', '1: banana']

// Convert Strings to Lengths
const animals = ['cat', 'giraffe']

const animalsToLength = animals.map(animal => animal.length)
console.log(animalsToLength)
// Expected: [3, 7]

// Add New Properties to Each Object
const users3 = [{ name: 'Jane' }, { name: 'John' }]

const usersAreActive = users3.map(user => ({
	...user,
	isActive: true,
	hasName: true,
}))
console.log(usersAreActive)
// Expected: [{ name: 'Jane', isActive: true, hasName: true }, ...]
