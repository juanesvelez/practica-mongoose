require('./connection')

const Product = require('./models/Products')

async function main() {
    const mouse = new Product({
        name : 'Mouse',
        description : 'Mouse Gamer',
        price: 100
    })
    
    
    const mouseSaved = await mouse.save();
    console.log(mouseSaved)
}

main();