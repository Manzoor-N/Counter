const counter=document.getElementById("counter")
const incBtn=document.getElementById('inc')
const resBtn=document.getElementById('res')
const decBtn=document.getElementById('dec')

let counterValue=0

incBtn.addEventListener("click",function(event){
    counterValue +=1
    counter.innerHTML=counterValue
})
resBtn.addEventListener("click",function(){
    counterValue=0
    counter.innerHTML=counterValue
})
decBtn.addEventListener("click",function(){
    counterValue-=1
    counter.innerHTML=counterValue
})