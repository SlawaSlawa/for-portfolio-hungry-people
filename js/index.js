const burgerBtn = document.querySelector('.burger-btn')
const headerElem = document.querySelector('.header')

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('burger-btn--active')
    headerElem.classList.toggle('header--active')
})

headerElem.addEventListener('click', (evt) => {
    burgerBtn.classList.remove('burger-btn--active')
    headerElem.classList.remove('header--active')
})
const swiperSpecials = new Swiper('.specials__swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

const swiperEvents = new Swiper('.events__slider', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    slidesPerView: 4,
    spaceBetween: 0,
    breakpoints: {
        280: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
        },
        640: {
            slidesPerView: 4,
        }
    }
});
const btnFurther = document.getElementById('btnFurther')
const targetSection = document.getElementById('home').nextElementSibling

btnFurther.addEventListener('click', (evt) => {
		evt.preventDefault()
        const options = {
            block: 'start',
            behavior: 'smooth',
            inline: 'nearest' 
        }

		if (targetSection) {
            targetSection.scrollIntoView(options)
		}else {
			console.warn('Секция: ' + '"' + link.textContent + '"' + ' не найдена')
		}
})
const formsArray = document.querySelectorAll('form')

const validationForm = (form) => {
    const formInputsArray = form.querySelectorAll('input')
    const formTextsAreaArray = form.querySelectorAll('textarea')

    const regExpName = /^[A-ZА-Яa-zа-я]{2,16}$/
    const regExpText = /^[A-ZА-Яa-zа-я0-9_-\s,.:!]{2,200}$/
    const regExpEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    const regExpPhone = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
    const regExpDate = /^[0-9,.:]{2,10}$/
    const regExpPeople = /^[0-9]{1,2}$/
    const regExpTime = /^[0-9,./:]{4,8}$/

    const flags = []

    if (formTextsAreaArray.length > 0) {
        formTextsAreaArray.forEach(textArea => {
            textArea.classList.remove('input-error')

            if (textArea.dataset.inputType === 'text') {
                if (regExpText.test(textArea.value)) {
                    flags.push(true)
                } else {
                    textArea.classList.add('input-error')
                    flags.push(false)
                }
            }
        })
    }

    if (formInputsArray.length > 0) {
        formInputsArray.forEach(input => {
            input.classList.remove('input-error')

            if (input.dataset.inputType === 'name') {
                if (regExpName.test(input.value)) {
                    flags.push(true)
                } else {
                    input.classList.add('input-error')
                    flags.push(false)
                }
            }

            if (input.dataset.inputType === 'email') {
                if (regExpEmail.test(input.value)) {
                    flags.push(true)
                } else {
                    input.classList.add('input-error')
                    flags.push(false)
                }
            }

            if (input.dataset.inputType === 'phone') {
                if (regExpPhone.test(input.value)) {
                    flags.push(true)
                } else {
                    input.classList.add('input-error')
                    flags.push(false)
                }
            }

            if (input.dataset.inputType === 'name') {
                if (regExpName.test(input.value)) {
                    flags.push(true)
                } else {
                    input.classList.add('input-error')
                    flags.push(false)
                }
            }

            if (input.dataset.inputType === 'people') {
                if (regExpPeople.test(input.value)) {
                    flags.push(true)
                } else {
                    input.classList.add('input-error')
                    flags.push(false)
                }
            }

            if (input.dataset.inputType === 'date') {
                if (regExpDate.test(input.value)) {
                    flags.push(true)
                } else {
                    input.classList.add('input-error')
                    flags.push(false)
                }
            }

            if (input.dataset.inputType === 'time') {
                if (regExpTime.test(input.value)) {
                    flags.push(true)
                } else {
                    input.classList.add('input-error')
                    flags.push(false)
                }
            }
        })
    }

    for (let i = 0; i < flags.length; i++) {
        if (!flags[i]) return false
    }

    return true
}

const sendForm = (form) => {
    const inputs = form.querySelectorAll('input')
    const textAreas = form.querySelectorAll('textarea')

    const formOrder = {}

    if (textAreas.length > 0) {
        textAreas.forEach(textArea => {
            formOrder[textArea.name] = textArea.value
        })
    }

    if (inputs.length > 0) {
        inputs.forEach(input => {
            formOrder[input.name] = input.value
        })
    }
    

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(formOrder),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
    .then((response) => response.json())
    .then((json) => alert('Ваш заказ принят, наш оператор скоро Вам перезвонит!'));

    form.reset()
}

const errorMessage = () => {
    alert('Упс, что-то пошло не так перепроверьте правильность данных в форме!!!')
}

formsArray.forEach(form => {
    form.addEventListener('submit', (evt) => {
        evt.preventDefault()
        validationForm(form) ? sendForm(form) : errorMessage()
    })
    
})
const menuArray = [
    {   
        category: 'soupe',
        info: [
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            },
            {
                title: 'QUATRO STAGIONI',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '55,68 USD'
            }
        ]
    },

    {   
        category: 'pizza',
        info: [
            {
                title: 'PIZZA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '60,68 USD'
            },
            {
                title: 'PIZZA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '60,68 USD'
            },
            {
                title: 'PIZZA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '60,68 USD'
            },
            {
                title: 'PIZZA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '60,68 USD'
            },
            {
                title: 'PIZZA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '60,68 USD'
            },
            {
                title: 'PIZZA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '60,68 USD'
            },
            {
                title: 'PIZZA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '60,68 USD'
            },
            {
                title: 'PIZZA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '60,68 USD'
            },
            {
                title: 'PIZZA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '60,68 USD'
            },
            {
                title: 'PIZZA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '60,68 USD'
            }
        ]
    },

    {   
        category: 'pasta',
        info: [
            {
                title: 'PASTA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '43,68 USD'
            },
            {
                title: 'PASTA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '43,68 USD'
            },
            {
                title: 'PASTA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '43,68 USD'
            },
            {
                title: 'PASTA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '43,68 USD'
            },
            {
                title: 'PASTA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '43,68 USD'
            },
            {
                title: 'PASTA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '43,68 USD'
            },
            {
                title: 'PASTA',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '43,68 USD'
            }
        ]
    },

    {   
        category: 'wine',
        info: [
            {
                title: 'WINE',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '80,68 USD'
            },
            {
                title: 'WINE',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '80,68 USD'
            },
            {
                title: 'WINE',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '80,68 USD'
            },
            {
                title: 'WINE',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '80,68 USD'
            },
            {
                title: 'WINE',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '80,68 USD'
            },
            {
                title: 'WINE',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '80,68 USD'
            },
            {
                title: 'WINE',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '80,68 USD'
            },
            {
                title: 'WINE',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '80,68 USD'
            }
        ]
    },

    {   
        category: 'beer',
        info: [
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            },
            {
                title: 'BEER',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '20,68 USD'
            }
        ]
    },

    {   
        category: 'drinks',
        info: [
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            },
            {
                title: 'DRINKS',
                description: 'Integer ullamcorper neque eu purus euismod',
                price: '25,68 USD'
            }
        ]
    }
]

const renderTabs = () => {
    const tabsListElem = document.querySelector('.menu__filter-list')
    tabsListElem.textContent = ''
    
    menuArray.forEach(item => {
        const tabBtn = 
            `<li class="menu__filter-item" data-tab="${item.category}">
                <button class="menu__filter-btn">${item.category}</button>
            </li>`
            tabsListElem.insertAdjacentHTML("beforeend", tabBtn)
    })
}

renderTabs()

const menuTabs = document.querySelectorAll('.menu__filter-item')

const renderMenu = (category) => {
    const menuListElem = document.querySelector('.menu__list')
    menuListElem.textContent = ''

    const resultMenuArray = menuArray.filter(item => item.category === category)

    resultMenuArray[0].info.forEach(menuItem => {
        const menuItemText = `
            <li class="menu__item">
                <div class="menu__text">
                    <div class="menu__text-content">
                        ${menuItem.title}
                        <div class="menu__dots"></div>
                    </div>
                    <span class="menu__subtext"
                        >${menuItem.description}</span
                    >
                </div>
                <div class="menu__price">${menuItem.price}</div>
            </li>
        `

        menuListElem.insertAdjacentHTML('beforeend', menuItemText)
    })
}

renderMenu('soupe')

menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        renderMenu(tab.dataset.tab);
    })
})
const btnUp = document.querySelector('.btn-up')

const showBtnUp = () => {
    if (window.pageYOffset > 1000) {
        btnUp.style.display = 'flex'
    } else { btnUp.style.display = 'none' }
}

window.onscroll = showBtnUp