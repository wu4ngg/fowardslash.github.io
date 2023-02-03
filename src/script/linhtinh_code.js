//to-to list funcs
function ShowPopup(el, elbg, type){
    Show(document.getElementById(el))
    $("#" + elbg).css("transform", "scale(95%)")
}
function HidePopup(el, elbg){
    Hide(document.getElementById(el))
    $("#" + elbg).css("transform", "scale(100%)")
}
function AddTask(parent, inputbox, box){
    var task = $("#" + inputbox).val()
    $("#" + parent).append(`
    <div class="brief_intro">
        ${task}
        <div class="btn_wrapper">
            <div>
                <label class="chxbox">
                    <input class="tbox" type="checkbox" onclick="RefreshJobCount('content_todo', 'todo_count')">
                    <span class="chx"></span>
                </label>

            </div>
            <div class="btn small idgaf-right center thin_border" onclick="Remove($(this).parent())">
                <i class="ri-close-line"></i>
            </div>
        </div>
    </div>
    `)
    HidePopup(box, 'ltp')
    RefreshJobCount(parent,'todo_count')
}
var cnt;
function RefreshJobCount(parent,el){
    var checkbox = $('.tbox:checked').length
    cnt = $('#' + parent).children().length
    truelength = cnt - checkbox;
    $('#'+el).html(`Có ${truelength} công việc cần hoàn thành`)
}
function Clear(parent){
    $('#' + parent).empty();
    RefreshJobCount(parent,'todo_count')
}
function Remove(el){
    var par = el.parent()
    console.log(par[0])
    var parsq = par.parent()
    console.log(parsq[0])
    par[0].remove(parsq[0])
    RefreshJobCount(parsq.attr('id'),'todo_count')
}
//calculator func
var lock = false;
function getButtonVal(el, display){
    if(lock){
        Clear(display)
    }
    var bieuthuc = display.html()
    var num = el.html()
    if(display.html() == '0'){
        display.html(num)
        return 
    }
    if(isNaN(parseInt(num))){
        display.html(bieuthuc + ' ' + num + ' ')
    } else {
        display.html(bieuthuc + num)
    }
    InftoPosf(display.html(), $('#top_display'), false)
}
function Clear(display){
    $('#top_display').html('Vui lòng nhập số')
    display.html("0")
    lock = false
}
function Del(display){
    if(lock){
        return
    }
    let tmp = display.html()
    let arr = tmp.split('')
    if(arr.length == 1){
        display.html('0')
        $('#top_display').html('Vui lòng nhập số')
        return
    }
    arr.pop()
    arr.join('')
    display.html(arr)
    InftoPosf(display.html(), $('#top_display'), false)
}
function isNotNum(cha){
    switch(cha){
        case '/':
            return 2
        case '*':
            return 2
        case '+':
            return 1
        case '-':
            return 1
        default:
            return -1
    }
}
function InftoPosf(equation, display, islock){
    let stack = []
    let r = ""
    for(let i = 0; i < equation.length; i++){
        let c = equation[i]
        if(c >= '0' && c <= '9'){
            r += c;
        }
        else if(c == '('){
            stack.push('(')
        } else if(c == ')'){
            while(stack[stack.length - 1] != '('){
                if(stack.length == 0){
                    r = 'error'
                    break
                }
                r += ' '
                r += stack[stack.length - 1]
                stack.pop()
            }
            stack.pop()
        }
        else if(c == ' '){
            r += ' '
        }
        else {
            while(stack.length != 0 && isNotNum(equation[i]) <= isNotNum(stack[stack.length - 1])){
                r += ' '
                r += stack[stack.length - 1];
                stack.pop()
            }
            stack.push(c);
        }
        console.log(stack)
    }
    while(stack.length != 0){
        r += ' '
        r += stack[stack.length - 1]
        stack.pop()
    }
    display.html(r)
    getResult(r, display)
    lock = islock
    return r
}
function getResult(s, display){
    let stack = []
    for(let i = 0; i < s.length; i++){
            let c = s[i];
            
            if(c == ' '){
                continue
            } else if(c >= '0' && c <= '9'){
                let n = 0;
                while(c >= '0' && c <= '9'){
                    n = n * 10 + (c - '0')
                    i++
                    c = s[i];
                }
                i--;
                stack.push(n)
            }
            else {
                let v1 = stack.pop()
                let v2 = stack.pop()
                switch(c){
                    case '+':
                        stack.push(v2 + v1)
                        break
                    case '-':
                        stack.push(v2 - v1)
                        break
                    case '*':
                        stack.push(v2 * v1)
                        break
                    case '/':
                        stack.push(v2 / v1)
                        break
                }
            }
            console.log(stack)
        }
        var tmp = stack.pop()
        if(!tmp){
            tmp = "Sai cú pháp"
        }
        display.html(tmp)
    }

//university score func

//popup func
function DetermineFunc(func, parent){
    var el = $('#' + parent)
    switch(Number(func)){
        case 0:
            el.html(`
            <div class="title_wrapp">
            <div class="title_txt">
                <h1 class="lg_header">To-do list</h1>
                <p class="lg_p">Just a simple to-do list</p>
            </div>
            <div class="btn small auto_width" onclick="Hide(document.getElementById('the_popup'))">
                <b><h1 class="xs_header bold_text">đóng</h1></b>
            </div>
        </div>
        <hr class="seperate">
        <div class="linhtinh_content">
            <div class="content_box">
                <p id="todo_count">Có 1 công việc cần hoàn thành</p>
                <div class="btn_wrapper">
                    <div class="btn small idgaf-right auto_width" onclick="ShowPopup('popup', 'ltp', 'block')">Thêm</div>
                    <div class="btn small idgaf-right auto_width" onclick="Clear('content_todo')">Quét sạch</div>
                </div>
                <div class="content_main" id="content_todo">
                    <div class="brief_intro">
                        Tên class là brief_intro nhưng nó ko liên quan j đến cái to-do này :))
                        <div class="btn_wrapper">
                            <div>
                                <label class="chxbox">
                                    <input class="tbox" type="checkbox" onclick="RefreshJobCount('content_todo', 'todo_count')">
                                    <span class="chx"></span>
                                </label>

                            </div>
                            <div class="btn small idgaf-right center thin_border" onclick="Remove($(this).parent())">
                                <i class="ri-close-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
            break;
        case 1:
            el.html(`
            <div class="title_wrapp">
            <div class="title_txt">
                <h1 class="lg_header">Máy tính</h1>
                <p class="lg_p">Infix to Postix to RESULT!</p>
            </div>
            <div class="btn small auto_width" onclick="Hide(document.getElementById('the_popup'))">
                <b><h1 class="xs_header bold_text">đóng</h1></b>
            </div>
        </div>
        <hr class="seperate">
        <div class="linhtinh_content">
            <div class="content_box">
                <div class="calculator_wrapper">
                    <div class="calc_left">
                        <p id="top_display">Vui lòng nhập số</p>
                        <h1 class="xl_header right_text" id="display">0</h1>
                    </div>
                    <div class="calc_right">
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">1</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">2</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">3</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">+</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">4</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">5</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">6</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">-</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">7</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">8</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">9</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">*</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">(</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">0</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">)</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="getButtonVal($(this).children().eq(0).children().eq(0), $('#display'))">
                            <b><h1 class="xs_header bold_text">/</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="Del($('#display'))">
                            <b><h1 class="xs_header bold_text"><</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="Clear($('#display'))">
                            <b><h1 class="xs_header bold_text">C</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="$('#display').html('Coming soon to a calculator near you!')">
                            <b><h1 class="xs_header bold_text">M</h1></b>
                        </div>
                        <div class="btn square grid_item" onclick="InftoPosf($('#display').html(), $('#display'))">
                            <b><h1 class="xs_header bold_text">=</h1></b>
                        </div>
                    </div>
                </div>
            </div>
        </div>`)
            break;
        case 2:
            el.html(`
            <div class="title_wrapp">
                <div class="title_txt">
                    <h1 class="lg_header">Tính điểm đại học</h1>
                    <p class="lg_p">Tạch or na?</p>
                </div>
                <div class="btn small auto_width" onclick="Hide(document.getElementById('the_popup'))">
                    <b><h1 class="xs_header bold_text">đóng</h1></b>
                </div>
            </div>
            <hr class="seperate">
            <div class="linhtinh_content">
                <div class="content_box">
                    <p id="todo_count">Coming soon.</p>
                </div>
            </div>`)
            break
        default:
            el.html(`
            <div class="title_wrapp">
                <div class="title_txt">
                    <h1 class="lg_header">Lỗi</h1>
                    <p class="lg_p">Sao lại gọi cái hàm này?</p>
                </div>
                <div class="btn small auto_width" onclick="Hide(document.getElementById('the_popup'))">
                    <b><h1 class="xs_header bold_text">đóng</h1></b>
                </div>
            </div>
            <hr class="seperate">
            <div class="linhtinh_content">
                <div class="content_box">
                    <p id="todo_count">Code: Đừng có inspect chạy lung tung</p>
                </div>
            </div>
            `)
            break
    }
    Show(document.getElementById('the_popup'))
}