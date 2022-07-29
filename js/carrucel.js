'use strict'

const slider = document.querySelector('.carrusel')
const punto = document.querySelectorAll('.opcion')





punto.forEach( (cadaPunto, i) => {
   
    punto[i].addEventListener('click',()=>{

        
        let posicion = i
        
        let operacion = posicion * -50

      
        slider.style.transform = `translateX(${ operacion }%)`

   
        punto.forEach(( cadaPunto, i)=>{

            
            punto[i].classList.remove('activo')
        })
       
        punto[i].classList.add('activo')
    })
});
'use strict'

const img = document.querySelector('.slider-img')
const slide = document.querySelectorAll('.slide')



slide.forEach( (cadaPunto, i) => {
   
    slide[i].addEventListener('click',()=>{

     
        let position = i
        
        let operation = position * -100

 
        img.style.transform = `translateX(${ operation }%)`

      
        slide.forEach(( cadaPunto, i)=>{

            
            slide[i].classList.remove('activo_slide')
        })
        
        slide[i].classList.add('activo_slide')
    })
});