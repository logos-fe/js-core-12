// const box = document.querySelector('.box')

// className - отримує всі класи елемента
// console.log(box.className)
// Don't use it
// box.className = 'red'

// classList - отримує всі класи елемента, додавання, видалення і перемикання класів
// console.log(box.classList)

// classList.add(className) - додає клас
// setTimeout(() => {
//   box.classList.add('green')
// }, 2000)

// classList.remove(className) - видаляє клас
// setTimeout(() => {
//   box.classList.remove('green')
// }, 5000)
// box.classList.remove('green')

// classList.toggle(className) - перемикає клас, додає якщо немає, видаляє якщо має
// box.classList.toggle('green')
//
// setTimeout(() => {
//   console.log(box.classList.contains('green'), 'true')
//   box.classList.toggle('green')
//   console.log(box.classList.contains('green'), 'false')
// }, 3000)

// classList.contains(className) - перевіряє чи має елемент клас, true чи false
// console.log(box.classList.contains('box'))
// console.log(box.classList.contains('green'))

// for (let name of box.classList) {
//   alert(name)
// }

// style.cssText - отримує всі стилі елемента
// console.log(box.style.cssText)
// Don't use it
// box.style.cssText = 'background: blue; color: white;'

// style - працює тільки з інлайновими стилями
// console.log(box.style.width)

// getComputedStyle - отримує усі стилі з CSS файлу
// const computedStyles = getComputedStyle(box)
// console.log(computedStyles.width)
// console.log(computedStyles.border)
// console.log(computedStyles)
// box.style.margin = parseInt(computedStyles.margin) + 30 + 'px'

// Events - події, сигнал для браузера, що щось сталося

// click - клік мишкою лівою кнопкою
// contextmenu - клік мишкою правою кнопкою
// mouseover - курсор мишки над елементом
// mouseout - курсор мишки поза елементом
// mousedown - курсор мишки на елементі зажатий
// mouseup - курсор мишки з елемента відпущений
// mousemove - курсор мишки над елементом переміщений

// Add function to HTML element
// function clickOnBlock() {
//   alert('click')
// }

// Add event to HTML element
const block = document.querySelector('.block')
// block.onclick = () => {
//   alert('click on new block')
// }
//
// block.onclick = () => {
//   alert('new onclick on block')
// }

// addEventListener - додає подію до елемента
// addEventListener(event, function, options)
// let counter = 0
// const handlerClick = () => {
//   alert(`click: ${counter + 1}`)
//   counter += 1
// }
// if (counter === 2) {
//   block.removeEventListener('click', handlerClick)
// }

// block.addEventListener('click', handlerClick)
//
// setTimeout(() => {
//   block.removeEventListener('click', handlerClick)
// }, 3000)

// block.addEventListener('click', () => {
//   alert('click on new block event listener 22')
// })

// removeEventListener - видаляє подію з елемента
// block.removeEventListener('click', handlerClick)


// block.addEventListener('click', (event) => {
//   if (event.target.tagName === 'BUTTON') {
//     alert('click on button')
//   } else if (event.target.classList.contains('block-inner')) {
//     alert('click on block inner')
//   } else {
//     alert('click on block')
//   }
// })


// const btn = document.querySelector('#btn')
//
// btn.addEventListener('click', () => {
//   block.classList.toggle('hide')
// })


// function linkClick(event) {
//   console.log(event)
//
//   alert('link' + event.target.href)
//
//   // event.preventDefault()
//   return false
// }

// let countOver = 0
// let countOut = 0
// let countMove = 0
//
// block.onmouseover = () => {
//   block.style.backgroundColor = 'red'
//   countOver += 1
//   console.log(`mouseover: ${countOver}`)
// }
//
// block.onmouseout = () => {
//   block.style.backgroundColor = 'yellow'
//   countOut += 1
//   console.log(`mouseout: ${countOut}`)
// }
//
// block.onmousemove = () => {
//   countMove += 1
//   console.log(`mousemove: ${countMove}`)
// }


const color = 'green'
block.onmouseover = () => {
  block.style.backgroundColor = color
}


// block.onmousedown = () => {
//   block.style.transform = 'scale(1.5)'
// }
//
// block.onmouseup = () => {
//   block.style.transform = 'scale(0.5)'
// }
