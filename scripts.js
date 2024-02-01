const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonsumAll = document.querySelector('.sum-all')
const buttonfilterAll = document.querySelector('.filter-all')

function formatCurrency(value){
    const newValue = value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})

    return newValue
}


function showAll(productsArray){
    myLi = ''

    productsArray.forEach( products => {
        myLi = myLi +
            `
            <li>
                <img src=${products.src}>
                <p>${products.name}</p>
                <p class="item-price"> ${formatCurrency (products.price)}</p>
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

function sumAllItems(){
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price , 0 )

    list.innerHTML = `
    <li>
        <p> O valor total dos itens é ${formatCurrency (totalValue)}</p>
    </li>
    `  
}

function filterAllItems(){
    const filterJustVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterJustVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItems)
buttonsumAll.addEventListener('click', sumAllItems)
buttonfilterAll.addEventListener('click', filterAllItems)