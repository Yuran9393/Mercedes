const linksHead = document.querySelectorAll('.menu-list__link');
const mainScroll = document.querySelector('.main__scroll');
const newArray = [...linksHead, mainScroll];

newArray.forEach(itemlink =>{
    itemlink.addEventListener('click', (event)=>{ 
        event.preventDefault()      
        const id = event.target.getAttribute('href').substr(1)
        document.getElementById(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        
    })
})
//event - инфо о событии при нажатии
//event.preventDefault()  -отключает стандартное поведение ссылки (не будет переходить по ссылке)
//console.dir(event.target.getAttribute('href')) - выведет атрибут href
//substr(1) - убирает первый символ
//const newArray = [...linksHead, mainScroll]; - объединяет в один массив