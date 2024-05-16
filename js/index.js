const quantityBlock = document.querySelector("[js-quantity]");
const buttonPlus = quantityBlock.querySelector("[js-plus]");
const buttonMinus = quantityBlock.querySelector("[js-minus]");
const buttonValue = quantityBlock.querySelector("[js-value]");
buttonPlus.addEventListener('click', buttonHandlerPlus);
buttonMinus.addEventListener('click', buttonHandlerMinus);
function buttonHandlerPlus() {
    let currentValue = parseInt(buttonValue.getAttribute('data-count'));
    if (currentValue < 7) {
        currentValue++;
        buttonValue.setAttribute('data-count', currentValue);
        buttonValue.textContent = currentValue;
    }
}
function buttonHandlerMinus() {
    let currentValue = parseInt(buttonValue.getAttribute('data-count'));
    console.log(currentValue)
    if (currentValue > 1) {
        currentValue--;
        buttonValue.setAttribute('data-count', currentValue);
        buttonValue.textContent = currentValue;
    }
}
const popup = document.querySelector("[js-popup]");
const overly = document.querySelector("[js-overly]");
window.addEventListener("scroll", scrollHandler);
window.addEventListener("click", clickHander);
const body = document.body;
function scrollHandler() {
    if (window.scrollY == 200) {
        body.classList.add("overflow-hidden");
        overly.style.display = "block";
        popup.style.display = "block";
    } else {
        overly.style.display = "none";
        popup.style.display = "none";
        body.classList.remove("overflow-hidden");
    }
}
function clickHander() {
    if (popup) {
        body.removeAttribute("class");
        overly.style.display = "none";
        popup.style.display = "none";
    }
}



const pagenation = document.querySelector("[js-pagenation]");
const showMore = pagenation.querySelector("[js-show-more]");
const gridItem = pagenation.querySelectorAll("[js-grid-item]");
showMore.addEventListener("click", buttonHandler);
function buttonHandler() {
    gridItem.forEach(ev => {
        ev.style.display = "block"
    });
}
const calcu = document.querySelector("[js-calculater]");
const calcButton = calcu.querySelectorAll("[js-calc-button]");
const calcInput = calcu.querySelector("[js-calc-input]");
calcButton.forEach(ev => {
    ev.addEventListener("click", clickeHandler)
    function clickeHandler() {
        if (ev.textContent === '=') {
            try {
                calcInput.value = eval(calcInput.value);
            } catch (error) {
                calcInput.value = 'Error';
            }
        } else if (ev.textContent === 'c') {
            calcInput.value = '';
        } else {
            calcInput.value += ev.textContent;
        }
    }
});
// const searchBox = document.querySelector("[js-search-box]");
// const searchInput = searchBox.querySelector("[js-search-input]");
// const furitItem = searchBox.querySelectorAll("[js-furit-item]");
// searchInput.addEventListener("input", seachHandler);
// function seachHandler() {
//     const searchText = searchInput.value.toLowerCase();
//     furitItem.forEach(item => {
//         const fruitName = item.textContent.toLowerCase();
//         if (fruitName.includes(searchText)) {
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     });
// }
const searchBox = document.querySelector("[js-search-box]");
const searchInput = searchBox.querySelector("[js-search-input]");
const furitItem = searchBox.querySelectorAll("[js-furit-item]");
let content = function () {
    searchInput.addEventListener("input", content);
    const searchText = searchInput.value.toLowerCase();
    furitItem.forEach(item => {
        const fruitName = item.textContent.toLowerCase();
        if (fruitName.includes(searchText)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
content();



const quantity = document.querySelector("[js-quantity-second]");
const plusIcon = quantity.querySelector("[js-plus]");
const quantityText = quantity.querySelector("[js-quantity-text]");
const minusIcon = quantity.querySelector("[js-minus]");
plusIcon.addEventListener("click", onclickPlus);
minusIcon.addEventListener("click", onclickMinus);
function onclickPlus() {
    let currentNum = parseInt(quantityText.getAttribute("value"));
    if (currentNum < 9) {
        currentNum++
        quantityText.setAttribute('value', currentNum);
        console.log(currentNum)
    }
}
function onclickMinus() {
    let currentNum = parseInt(quantityText.getAttribute("value"));
    if (currentNum >= 1) {
        currentNum--
        quantityText.setAttribute('value', currentNum);
        console.log(currentNum)
    }
}
// const cart = document.querySelector("[js-cart-drawer]");
// const product = document.querySelector("[js-product]");
// const cartButton = document.querySelector("[js-cart-btn]");
// const productItems = product.querySelectorAll("[js-product-item]");
// const cartItems = [];
// cartButton.addEventListener("click", cartHandler);
// function cartHandler() {
//     cart.classList.add("cart-open");
//     productItems.forEach(function () {
//         cart.clone().appendTo(productItems);
//     });
// }
const cart = document.querySelector("[js-cart-drawer]");
const product = document.querySelector("[js-product]");
const cartButton = document.querySelector("[js-cart-btn]");
const productItems = product.querySelectorAll("[js-product-item]");
cartButton.addEventListener("click", cartHandler);
function cartHandler() {
    cart.classList.add("cart-open");
    productItems.forEach(function (item) {
        const clonedCart = cart.cloneNode(true);
        clonedCart.classList.remove("cart-open");
        item.appendChild(clonedCart);
    });
}

setInterval(setTime, 1000);
const clock = document.querySelector("[js-clock]");
const clockHour = clock.querySelector("[js-clock-hour]");
const clockSecond = clock.querySelector("[js-clock-second]");
const clockMinute = clock.querySelector("[js-clock-minute]");
function setTime() {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
    setRotation(clockSecond, secondRatio)
    setRotation(clockMinute, minuteRatio)
    setRotation(clockHour, hourRatio)
}
function setRotation(el, rotationRatio) {
    el.style.setProperty("--rotation", rotationRatio * 360)
}
// const bookBlock = document.querySelector("[js-book-block]");
// const book = bookBlock.querySelectorAll("[js-book]");
// const userInput = bookBlock.querySelector("[js-input-render]");
// bookBlockObject = {
//     bookName: book,
// }
// console.log(bookBlockObject.bookName)
// const bookBlock = document.querySelector("[js-book-block]");
// const books = bookBlock.querySelectorAll("[js-book]");
// const userInput = bookBlock.querySelector("[js-input-render]");
// let bookNames = [];
// userInput.addEventListener("keyup", searcHandler);
// function searcHandler(e) {
//     bookNames = []
//     books.forEach(book => {
//         if (book.textContent.trim().includes(e.target.value)) {
//             bookNames.push(book.textContent.trim());
//         }
//     });

//     console.log({ bookNames })
// }
// searcHandler()
// console.log(bookNames);
// const tab = document.querySelector("[js-tab]");
// const tabButtons = tab.querySelectorAll("[js-tab-button]");
// const tabIcons = tab.querySelectorAll("[js-tab-icon]");
// const tabContents = tab.querySelectorAll("[js-tab-conten]");
// tabButtons.forEach((button, index) => {
//     button.addEventListener("click", clickHandler)
//     function clickHandler() {
//         tabContents.forEach(content => {
//             content.classList.remove("active");
//         });
//         tabContents[index].classList.add("active")
//         tabIcons.forEach(tabIcon => {
//             tabIcon.classList.remove("active");
//         });
//         tabIcons[index].classList.add("active")
//     }
// });
const tab = document.querySelector("[js-tab]");
const tabButtons = tab.querySelectorAll("[js-tab-button]");
const tabIcons = tab.querySelectorAll("[js-tab-icon]");
const tabContents = tab.querySelectorAll("[js-tab-conten]");
tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        tabContents.forEach(tab => {
            tab.classList.remove("active")
        });
        tabContents[index].classList.add("active")
        tabIcons.forEach(icon => {
            icon.classList.remove("active")
        });
        tabIcons[index].classList.add("active")
    })
});

const sortingCustomProduct = document.querySelector('[js-sorting]');
const sortingHead = sortingCustomProduct.querySelector('[js-head-sorting]');
const sortingItem = sortingCustomProduct.querySelectorAll('[js-sorting-item]');
sortingItem.forEach(e => {
    e.addEventListener("click", sortHnadler);
    function sortHnadler(event) {
        const selectedItemText = event.target.innerText;
        sortingHead.innerHTML = selectedItemText;
        sortingCustomProduct.classList.remove('active');
    }
});
sortingHead.addEventListener('click', sortingHandler);
function sortingHandler() {
    sortingCustomProduct.classList.add("active");
}
