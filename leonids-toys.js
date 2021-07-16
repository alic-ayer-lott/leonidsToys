const toys = 
[
    {
        id: 1,
        name: "Death Star",
        manufacturer: "Hasboro",
        color: "Black",
        price: 50,
        needsBatteries: true,
        weight: 0.9
    },

    {
        id: 2,
        name: "Legos",
        manufacturer: "Lego",
        color: "All colors",
        price: 100,
        needsBatteries: false,
        weight: 2.5
    },

    {
        id: 3,
        name: "Slinky",
        manufacturer: "Alex Brand",
        color: "All colors",
        price: 10,
        needsBatteries: false,
        weight: 0.5
    }
]

const puppet = {
    id: 4,
    name: "Polly",
    maker: "Silke",
    color: "Pink",
    price: 30,
    needsBatteries: true,
    weight: 1.8
}

const ball = {
    id: 5,
    name: "Bouncy",
    maker: "Nike",
    color: "Red",
    price: 5,
    needsBatteries: false,
    weight: 4
}


toys.push(puppet, ball)

const toyToFind = 3


for (const toy of toys) {
    if (toy.id === toyToFind) {
    toy.price = toy.price * .05 + toy.price
    console.log(`The ${toy.color} ${toy.name} costs ${toy.price} and weighs ${toy.weight}.`)
    }
}