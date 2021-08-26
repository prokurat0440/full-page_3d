const burger = document.querySelector('.burger')
const container = document.querySelector('.container')
const screens = document.querySelectorAll('.screen')

burger.addEventListener('click', () => {
    container.classList.toogle('active')
})

changeBg()

function changeBg() {
    const links = document.querySelectorAll('.link ')

    links.forEach((link, i) => {
        link.addEventListener('mouseenter', e => {
            e.preventDefault()
            replaceBg(e.target.dataset.link)
        })
        link.addEventListener('click', e => {
            e.preventDefault()
            container.classList.toogle('active')
        })
    })

    screens.forEach((screen, i) => {
        screen.style.display = 'none'
        screens[0].style.display = 'block'
    })
}
function replaceBg(id) {
    const bg = document.getElementById(id)
    screens.forEach((screen, i) => {
        screen.style.display = 'none'
    })
    bg.style.display = 'block'
}