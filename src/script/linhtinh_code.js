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
                    <p class="lg_p">JS Calculator 💀💀</p>
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