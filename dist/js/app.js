// const maskOptions = {
//   mask: '+{7} (#00) 000 00 00',
//   definitions: {
//     '#': /[1-7]|[9]/
//   }
// };
// function maskPhone(item) {
//   let mask = IMask(item, maskOptions);
//
//   item.onfocus = function () {
//     mask.updateOptions({
//       lazy: false,
//     })
//   }
//   item.onblur = function () {
//     mask.updateOptions({
//       lazy: true,
//     })
//   }
//
//   return mask
// }
// const inputPhone = [...document.querySelectorAll('input[name="phone"]'), ...document.querySelectorAll('.phone')];
// inputPhone.forEach(item => {
//   maskPhone(item)
// })

const creating = [...document.querySelectorAll('.creating-item')]
creating.forEach(item => {
  toggleHeight(item, '.creating-item-header', '.creating-item-body')
})

const questions = [...document.querySelectorAll('.questions-item')]
questions.forEach(item => {
  toggleHeight(item, '.questions-item-header', '.questions-item-body')
})

function toggleHeight(item, head, height) {
  const header = item.querySelector(head)
  header.addEventListener('click', () => {
    const body = item.querySelector(height)
    item.style.setProperty('--height', body.clientHeight + 'px')
    item.classList.toggle('active')
  })
}


tabsInit()
function tabsInit() {
  const tabsBlock = document.querySelectorAll('.tabs-block')
  if (!tabsBlock.length) return
  tabsBlock.forEach(block => {
    const buttons = block.querySelector('.tabs-block__buttons')
    const list = block.querySelector('.tabs-block__list')

    const btns = buttons ?  buttons.querySelectorAll('.tabs-btn') : block.querySelectorAll('.tabs-btn')
    const items = list ? block.querySelectorAll('.tabs-block__list > .tabs-item') : block.querySelectorAll('.tabs-item')

    let activeBtn = 0,
      activeItem = 0

    btns.forEach((b, i) => {
      if (b.classList.contains('active')) {
        activeBtn = i
        activeItem = i
      }
      b.addEventListener('click', () => {

        if (b.dataset.tabs === '+1') {
          btns[activeBtn].classList.remove('active')
          items.forEach(t => t.classList.remove('active'))

          activeBtn = i

          if (i === 0) {
            btns[activeBtn].classList.add('active')
            items.forEach(t => t.classList.add('active'))
            return;
          }

          btns[activeBtn].classList.add('active')
          items[activeBtn - 1].classList.add('active')
          return
        }

        btns[activeBtn].classList.remove('active')
        items[activeItem].classList.remove('active')

        activeBtn = i
        activeItem = items.length-1 < i ? 0 : i

        btns[activeBtn].classList.add('active')
        items[activeItem].classList.add('active')
      })
    })
  })
}


