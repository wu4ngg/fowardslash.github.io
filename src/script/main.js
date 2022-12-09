var prevScrollpos = 0;
console.log(prevScrollpos);
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos)
  console.log(currentScrollPos);
  if (prevScrollpos <= 200) {
    document.getElementById("header").style.backgroundColor = "transparent";
  } else {
    document.getElementById("header").style.backgroundColor = "black";
  }
  prevScrollpos = currentScrollPos;
  var pos = $('#main').first().position()
  console.log(pos)
  if(pos.top <= (currentScrollPos + 500)){
    $('#main').first().css("animation", "slide_down_deep 0.5s cubic-bezier(0,.11,0,1.01)")
    $('#main').first().css("opacity", "100%")
  }
}
var timeout;
function Show(el){
  console.log(el)
  var e = document.getElementsByClassName('profile_wrap');
  for(var i = 0; i < e.length; i++){
    if(e[i].style.display == "flex"){
      Hide(e[i]);
    }
  }
  clearTimeout(timeout)
  el.style.opacity = 100;
  el.style.display = "flex";
}
function Hide(el){
  el.style.opacity = 0;
  timeout = setTimeout(() => {
    el.style.display = "none";
  }, 200)
}
window.onload = () => {
  setInterval(() => {
    document.getElementById("XD").innerHTML = "Còn đợi gì nữa? Kéo xuống đi chứ"
  }, 5000)
}