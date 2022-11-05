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