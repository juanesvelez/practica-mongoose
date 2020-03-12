require('./connection')
const Product = require('./models/Products')

const laptop = new Product({
        name : 'Laptop',
        description : 'Es un portatil lenovo E490, 8th',
        price: 3000
    })

    laptop.save((err, document) => {
        if(err) console.log(err);
        console.log(document)
        
    })


console.log(laptop);
