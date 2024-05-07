
const quiz = new Quiz(sorular);
const ui = new UI();

let soruSirasi = 1;
ui.btn_start.addEventListener("click",function(){
    ui.quiz_box.classList.add("active");
    startTimer(10);
    startTimeLiner();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(soruSirasi,10);
    ui.next_btn.classList.remove("show");
})

ui.next_btn.addEventListener("click",function(){
    if(soruSirasi<10){
        ui.quiz_box.classList.add("active");
        soruSirasi += 1;
        quiz.soruIndex = Math.floor(Math.random() * 42);
        clearInterval(counter);
        clearInterval(counterLine);
        ui.time_text.textContent = "Kalan Süre :  ";
        ui.time_second.textContent = 10;
        startTimer(10);
        startTimeLiner();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(soruSirasi,10);
        ui.next_btn.classList.remove("show");
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(10,quiz.dogruCevapSayisi);  
    }
})

ui.btn_quit.addEventListener("click",function(){
    ui.score_box.classList.remove("active");
    ui.quiz_finish.classList.add("active");
})

ui.btn_replay.addEventListener("click",function(){
    quiz.soruIndex = Math.floor(Math.random() * 45);
    quiz.dogruCevapSayisi = 0;
    soruSayisi = 1;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
})

function optionSelected(option){
    clearInterval(counter);
    clearInterval(counterLine);
    let cevap = option.querySelector("span b").textContent;
    let soru = quiz.soruGetir();

    if(soru.cevabiKontrolEt(cevap)){
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend",ui.correctIcon);
        quiz.dogruCevapSayisi += 1;
    }else{
        option.classList.add("incorrect")
        option.insertAdjacentHTML("beforeend",ui.incorrectIcon);
    }

    for(let i=0; i<ui.option_list.children.length; i++){
        ui.option_list.children[i].classList.add("disabled")
    }
    ui.next_btn.classList.add("show");
}

let counter;
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        ui.time_second.textContent = time;
        time--;
        if(time < 0){
            clearInterval(counter);
            ui.time_text.textContent = "Süre Bitti. "
            let cevap = quiz.soruGetir().dogruCevap;
            for(let option of ui.option_list.children){
                if(option.querySelector("span b").textContent == cevap){
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend",ui.correctIcon);    
                }
                option.classList.add("disaabled");
            } 
            ui.next_btn.classList.add("show");
        }
    }
}

let counterLine;
function startTimeLiner(){
    let line_width = 0;
    counterLine = setInterval(liner, 20);
    function liner(){
        line_width += 1;
        ui.time_line.style.width = line_width + "px";
        if(line_width > 549){
            clearInterval(counterLine);
        }
    }
}