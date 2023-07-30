const items = [
    {description: 'pen', quantity: 1, price: 3 },
    {description: 'rule', quantity: 2, price: 5},
    {description: 'erase', quantity: 2, price: 6 },
]

const result = items.reduce((accumulator, current) => {
    return accumulator + (current.price * current.quantity)
}, 0)
console.log(result)

const names = ["Daniel", "Maria", "Marta", "Juca", "João", "Jessica"]
const resultNames = names.reduce((acc: any, curr: string) => {
    const firstLetter = curr[0].toLowerCase()
    acc[firstLetter] ? acc[firstLetter]++ : acc[firstLetter] = 1 
    return acc 
}, {})

console.log(resultNames)

interface IPeople {
    name: string,
    age: number
}

const people: IPeople[] = [
    { name: 'Daniel', age: 28 },
    { name: 'Mary', age: 29 },
    { name: 'Marta', age: 29 },
]

const sortPeopleByAge = people.reduce((acc: any, curr: IPeople) => {
    acc[curr.age] = acc[curr.age] || []
    acc[curr.age].push(curr.name)
    return acc
}, {})

console.log('>>>> sortPeopleByAge', sortPeopleByAge);

