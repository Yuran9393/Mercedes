const btn = document.querySelector('.feature__link'); //Берёт самый первый документ
const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

    btns.forEach((btn,index) => {
        btn.addEventListener('click',() =>{
            btns.forEach((btnitem,index) =>{
                if (btnitem == btn){
                    btnitem.classList.toggle('feature__link_active')
                    lists[index].classList.toggle('hidden')
                }  else{
                    btnitem.classList.remove('feature__link_active')
                    lists[index].classList.add('hidden')
                }
            })
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