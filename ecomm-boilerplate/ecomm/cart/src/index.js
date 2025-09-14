import faker from 'faker'

const mount = (el)=>{
    const cartText = `<div> You have ${faker.random.number()} items in your cart</div>`
    el.innerHTML = cartText
}



if (process.env.NODE_ENV == "development" &&  document.querySelector('#cart-dev') ) {
    let element =  document.querySelector('#cart-dev')
   if (element)   mount(element)
}

export {mount};