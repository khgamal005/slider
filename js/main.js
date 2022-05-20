let closebtn =document.getElementById('close')
let nextbtn =document.getElementById('next')
let prevbtn =document.getElementById('prev')
let img =Array.from( document.querySelectorAll('.img-fluid'))
let lightbox =document.querySelector('.lightbox')
let lightboxitem =document.querySelector('.lightbox-item')
let currentIndex=0

for(let i=0; i<img.length; i++){
  img[i].addEventListener('click',function(e){
    currentIndex =img.indexOf(e.target)
    let imgsrc= e.target.src 
  
    lightbox.style.display="flex"
    lightboxitem.style.backgroundImage=`url(${imgsrc})`
   
  })
}
closebtn.onclick=()=>{
  close()
}


function close (){
  lightbox.style.display="none"

}
nextbtn.addEventListener('click' ,next)

function next (){
  currentIndex++
  if (currentIndex==img.length){
    currentIndex =0
  }
  let imgsrc =img[currentIndex].src
  lightboxitem.style.backgroundImage=`url(${imgsrc})`


}
  


prevbtn.addEventListener('click' ,prev)

function prev(){
  currentIndex--
  if (currentIndex<0){
    currentIndex =img.length-1
  }
  let imgsrc =img[currentIndex].src
  lightboxitem.style.backgroundImage=`url(${imgsrc})`

}

document.addEventListener('keydown',function(e){
  if(e.key=='ArrowRight'){
    next()
  }else if(e.key=='ArrowLeft'){
    prev()
  }else if(e.key=='Escape'){
    close()
  }
})