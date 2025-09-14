import faker from 'faker'

function mount (el){
    let products = [];
    let productName = '';

    for (let i = 0; i < 10; i++) {
        products.push({
            id: i,
            name: faker.commerce.productName(),
            price: faker.commerce.price(),
            description: faker.lorem.sentence(),
            image: faker.image.imageUrl(),
        });
        productName += `<div class="product"> ${products[i].name} </div>`;
    }
   
     el.innerHTML = productName;
}

if (process.env.NODE_ENV == "development" ) {
      let element = document.querySelector('#dev-products');
     if (element)   mount(element)
}

export {mount};