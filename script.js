const box = document.querySelector('.box')

document.addEventListener('mousemove', function (e){
    const x = e.clientX
    const y = e.clientY
    box.style.left = x + 'px'
    box.style.top = y + 'px'
})


// document.addEventListener('click', function (e){
//     const x = e.clientX
//     const y = e.clientY
//     box.style.left = x + 'px'
//     box.style.top = y + 'px'
// })