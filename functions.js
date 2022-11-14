const product=document.getElementById('addtocartbtn')
const modal=document.getElementById('modal')
product.addEventListener('click', function(){
    modal.style.display="block";
})
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
window.onscroll=function(){scrollFunction()}

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
}
const pizzameniu=document.getElementById('pizzameniu')
const pizzabutton=document.getElementById('pizza')
const ofertemeniu=document.getElementById('ofertemeniu')
const ofertebutton=document.getElementById('oferte')
const antreurimeniu=document.getElementById('antreurimeniu')
const antreuributton=document.getElementById('antreuri')
const pastemeniu=document.getElementById('pastemeniu')
const pastebutton=document.getElementById('paste')
const bauturimeniu=document.getElementById('bauturimeniu')
const bautuributton=document.getElementById('bauturi')
let current=document.getElementById('pizzameniu')
pizzabutton.onclick=function() {
  current.style.display="none";
  pizzameniu.style.display="block";
  current=pizzameniu;
}
ofertebutton.onclick=function(){
  current.style.display="none";
  ofertemeniu.style.display="block";
  current=ofertemeniu;
}
antreuributton.onclick=function() {
  current.style.display="none";
  antreurimeniu.style.display="block";
  current=antreurimeniu;
}
pastebutton.onclick=function(){
  current.style.display="none";
  pastemeniu.style.display="block";
  current=pastemeniu;
}
bautuributton.onclick=function(){
  current.style.display="none";
  bauturimeniu.style.display="block";
  current=bauturimeniu;
}