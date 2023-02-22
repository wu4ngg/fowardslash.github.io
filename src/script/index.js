var rndsg = [
  "Hello there",
  "φ = 1.61803398875",
  "i'm da biggest bird",
  "This is a DEBUG msg",
  "vnpt be like: 💩",
  "****",
  `"at least its portable" mfs after i burnt their laptop (it became more portable)`,
  "m",
  "imagine spending 2mil vnd+ on a skin (cannot be me)",
  "i desperately need a new phone (2703 0893 890 tpbank btw)",
  `<img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Trollface_non-free.png/220px-Trollface_non-free.png">
  <a href="https://www.youtube.com/watch?v=-DdkOB0htO0">hey, what's this</a>
  `,
  "ko dùng bootstrap.",
  `Hello fella <p>${navigator.userAgent}</p> user`
];
var tetmode = false;
var fuckgithub;
var clicked = true;
var timeout;
function getRndTxt(){
  var rndN = Math.floor(Math.random() * rndsg.length) + 0;
  $('#rndtxt').html(rndsg[rndN])
}
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
function Switch(el, cl, content){
    var sel = $(`.${cl}`).children();
    var e = $(`#${el}`).children();
    for(i = 1; i < sel.length; i+=2){
        sel.eq(i).removeClass("entry_active")
        sel.eq(i).addClass("entry_inactive");
    }
    e.eq(1).removeClass("entry_inactive");
    e.eq(1).addClass("entry_active")
    SwitchTo(el, content);
}
function SwitchTo(el, content){
    var proj = $(`.${content}`);
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
        case "hb":
            $("#highlyb").css("display", "flex")
            break;
        case "sl":
          $("#socialife").css("display", "flex")
          break;
    }
}
function Darkify(el, reverse){
  let mode;
  if(reverse){
    mode = "dark";
  } else {
    mode = "light";
  }
  el.each(function() {
    let link = $(this).prop("src")
    let choppedoff = []
    choppedoff = link.split('_')
    let extension = '.' + choppedoff[1].split('.')[1]
    let darkfied = choppedoff[0] + '_' + mode + extension
    console.log(darkfied)
    console.log(choppedoff)
    console.log(link)
    $(this).prop("src", darkfied)
  })
}
function SwitchMode(el){
    var darkModeReverse = $(".darkmodeinvert")
    var darkmodepng = $(".imgpng")
    var body = $("body")
    if(el.innerHTML == "light mode"){
        Darkify(darkmodepng, false)
        body.get(0).style.setProperty("--bg", "white")
        body.get(0).style.setProperty("--txt", "black")
        body.get(0).style.setProperty("--transparent", "rgba(0, 0, 0, 0.24)");
        darkModeReverse.css("filter", "invert(100%)")
        body.get(0).style.setProperty("--less_transparent", "rgba(0, 0, 0, 0.55)")
        el.innerHTML = "dark mode"
    } else {
      darkModeReverse.css("filter", "invert(0%)")
      Darkify(darkmodepng, true)
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
