const btn = document.querySelector('.feature__link'); //Берёт самый первый документ
const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');
btns.forEach((item, index) => {
    item.addEventListener('click', () => {
        btns.forEach((btnsitem) => {
            btnsitem.classList.remove('feature__link_active')
        })
        item.classList.add('feature__link_active')

        lists.forEach((item) => {
            item.classList.add('hidden')
        })
        lists[index].classList.remove('hidden')
    })
})













//Старый способ
// btn.onclick = function(){
//     alert('ok')
// }

// btn.addEventListener('click',() =>{
//     alert('click')
// })

//Старый способ
// for(let i = 0; i < btns.length; i++){     // 0 1 2 3
//     btns[i].addEventListener('click',() =>{                 //Вешаем события на все кнопки
//         alert('click')
//     })
// 