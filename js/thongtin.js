
var store = [ 
    {
        link : "./image/img1.jpg"
    },
    {
        link : "./image/img2.jpg"
    },
    {
        link : "./image/banner.jpg"
    },
    {
        link : "./image/img4.jpg"
    },
    {
        link : "./image/banner1.jpg"
    },
   
]

var currenIndex = 0

var imgFuture = document.querySelector(".imgFuture")
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")
var listDot = document.querySelector(".slider-dot")

var autoSlide = setInterval(function(){
    currenIndex++

    if(currenIndex > store.length -1){
        currenIndex =0
    }
  imgFuture.src = store[currenIndex].link
},5000)

prev.addEventListener("click",function(){
  if(currenIndex == 0){
      currenIndex = store.length - 1
  }else {
      currenIndex--
  }
  imgFuture.src = store[currenIndex].link
})

next.addEventListener("click",function(){
  if(currenIndex == store.length - 1){
      currenIndex = 0
  }else {
      currenIndex++
  }
  imgFuture.src = store[currenIndex].link
})


for( var i =0 ; i< store.length ; i++){
    listDot.innerHTML +=`
     <li class="slider-dot-item"></li>
    `

}

var listDotItem = document.querySelectorAll(".slider-dot-item")
console.log(listDotItem)

for(var i = 0 ; i<listDotItem.length; i++){
    listDotItem[i].addEventListener("click", function() {
        var nutnay = this
        var vitri = 0
        for ( var i = 0; nutnay = nutnay.previousElementSibling; vitri ++) {}
        imgFuture.src = store[vitri].link
    })
}
