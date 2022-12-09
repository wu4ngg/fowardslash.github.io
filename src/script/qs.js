var num = 1
var index = 0
var sc
var arr = []
var ck
var rck
var tsarr = []
var tsck
function addQT(){
    if(num >= 4){
        return
    }
    num++;
    index++;
    var field = `<div class="password_fields">
    <div class="psswrd_field">
        <h2>Điểm QT ${num}</h2>                            
        <input type="text" onchange="getQT(this)" id="${index}" class="${index}">
    </div>
    <div class="psswrd_field">
        <h2>Trọng số (%)</h2>                            
        <input type="text" onchange="getTS(this)" id="${index}" class="${index}">
    </div>                    
</div>`
    $("#dcc").append(field)
}
function getQT(el){
    sc = el.value;
    if(sc > 10){
        el.value = 10
    }
}
function getTS(el){
    var ts = el.value
    var index = Number(el.id)
    console.log(index)
    ts = ts / 100
    var re = parseFloat(sc) * parseFloat(ts)
    console.log(re)
    arr[index] = re
    tsarr[index] = ts
    getNull(arr)
    console.log(arr)
    console.log(tsarr)
}
function getNull(a){
    for(i = 0; i < a.length; i++){
        if(!a[i]){
            var l = document.getElementsByClassName(i)
            l[0].style.borderColor = "red"
            l[1].style.borderColor = "red"
        }
    }
}
function getCK(el){
    ck = Number(el.value)
    if(ck > 10)
        el.value = 10
}
function getTSCK(el){
    tsck = Number(el.value)
    tsck /= 100
    rck = ck * tsck
}
function Sum(e){
    var a = 0
    for(i = 0; i < e.length; i++){
        a += e[i]
    }
    return a
}
function Clear(){
    for(i = 0; i < arr.length; i++){
        var el = document.getElementsByClassName(i)
        el[0].value = ""
        el[1].value = ""
    }
    el = document.getElementsByClassName("ck")
    el[0].value = ""
    el[1].value = ""
}
function GetResult(){
    var errbox = document.getElementById('res_err')
    var errmsg = document.getElementById('errmsg')
    var score = document.getElementById('score');
    var r = Sum(arr) + rck
    if(isNaN(r)){
        errmsg.innerHTML = "Vui lòng nhập điểm"
        Show(errbox)
        return
    }
    if(Sum(tsarr) + tsck < 1){
        errmsg.innerHTML = "Trọng số chưa đến 100%"
        Show(errbox)
    } else if(Sum(tsarr) + tsck > 1){
        alert("Trọng số vượt quá 100%")
    } 
    else{
        var r = Sum(arr) + rck
        r.toFixed(2)
        var s = document.getElementById('status')
        score.innerHTML = r
        if(r > 4){
            s.innerHTML = "Và bạn đã qua môn 🎉🎉"
        } else{
            s.innerHTML = "Và bạn đã tạch 😭😢"
        }
        Show(document.getElementById('res_d'))
        Clear()
    }
}