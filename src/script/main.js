var tetmode = false;
var clicked = true;
var timeout;
window.addEventListener('click', (e) => {
    if(!document.getElementById('entries').contains(e.target) && !document.getElementById('menu_entry').contains(e.target)){
      Hide(document.getElementById('menu'))
    }
  })
function Show(el){
    clicked = !clicked
    if(clicked){
      Hide(el)
      return
    }
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
    clicked = true
    el.style.opacity = 0;
    timeout = setTimeout(() => {
      el.style.display = "none";
    }, 200)
}
function Switch(el, cl){
    var sel = $(`.${cl}`).children();
    var e = $(`#${el}`).children();
    for(i = 1; i < sel.length; i+=2){
        sel.eq(i).removeClass("entry_active")
        sel.eq(i).addClass("entry_inactive");
    }
    e.eq(1).removeClass("entry_inactive");
    e.eq(1).addClass("entry_active")
    SwitchTo(el);
}
function SwitchTo(el){
    var proj = $(".project");
    console.log(proj.length)
    proj.css("display", "none")
    switch(el){
        case "sc":
            $("#spacecourse").css("display", "flex")
            break;
        case "qs":
            $("#quangSite").css("display", "flex")
            break;
        case "qb":
            $("#quangbot").css("display", "flex")
            break;
    }
}
function SwitchMode(el){
    var body = $("body")
    if(el.innerHTML == "light mode"){
        body.get(0).style.setProperty("--bg", "white")
        body.get(0).style.setProperty("--txt", "black")
        body.get(0).style.setProperty("--transparent", "rgba(0, 0, 0, 0.24)")
        body.get(0).style.setProperty("--less_transparent", "rgba(0, 0, 0, 0.55)")
        el.innerHTML = "dark mode"
    } else {
        body.get(0).style.setProperty("--bg", "#373737")
        body.get(0).style.setProperty("--txt", "white")
        body.get(0).style.setProperty("--transparent", "rgba(255, 255, 255, 0.24)")
        body.get(0).style.setProperty("--less_transparent", "rgba(255, 255, 255, 0.55)")
        el.innerHTML = "light mode"
    }
}
window.onload = () => {
    var body = $("body")
    if(tetmode){
        $("#logo").children().eq(0).html("//. chúc mừng năm mới")
        body.get(0).style.setProperty("--bg", "#7D554C")
        $("#mode_switcher").html("tao ghét tết")
    }
}