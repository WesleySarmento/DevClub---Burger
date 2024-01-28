const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
let myLi = ''


function showAll(){
    menuOptions.forEach( products => {
        myLi = myLi +
            `
            <li>
                <img src=${products.src}>
                <p>${products.name}</p>
                <p class="item-price">${products.price}</p>
            </li>
            `
        
        })
        list.innerHTML = myLi
}


buttonShowAll.addEventListener('click', showAll)