const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')



function showAll(productsArray){
    myLi = ''

    productsArray.forEach( products => {
        myLi = myLi +
            `
            <li>
                <img src=${products.src}>
                <p>${products.name}</p>
                <p class="item-price">R$ ${products.price}</p>
            </li>
            `
        
        })
        list.innerHTML = myLi
}

function mapAllItems(){
    const newPrices = menuOptions.map((product) => ({
        ...product,
        price: product.price * 0.9, //Dar 10% de desconto
    }))
    showAll(newPrices)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)