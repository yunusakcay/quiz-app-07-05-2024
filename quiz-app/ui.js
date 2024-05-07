function UI(){
    this.btn_start = document.querySelector(".btn_start"),
    this.next_btn = document.querySelector(".next-btn"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.quiz_finish = document.querySelector(".quiz_finish"),
    this.option_list = document.querySelector(".option_list"),
    this.correctIcon = '<div class="icon"><i class="fa-solid fa-check"></i></div>',
    this.incorrectIcon = '<div class="icon"><i class="fa-solid fa-times"></i></div>',
    this.score_box = document.querySelector(".score_box"),
    this.time_second = document.querySelector(".time_second"),
    this.time_text = document.querySelector(".time_text"),
    this.time_line = document.querySelector(".time_line")
}

UI.prototype.soruGoster = function(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let option = ``;
    for(let cevap in soru.cevapSecenekleri){
        option += 
        ` 
        <div class="option">
            <span><b>${cevap}</b>) ${soru.cevapSecenekleri[cevap]}</span>
        </div>       
        `;
    }

    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = option;
    const options = this.option_list.querySelectorAll(".option");
    for(let opt of options){
        opt.setAttribute("onclick","optionSelected(this)")
    }
}

UI.prototype.soruSayisiniGoster = function(soruSirasi, toplamSoru){
    let tag = `
        <span class="badge bg-primary text-dark">${soruSirasi} / ${toplamSoru}</span>
    `;
    document.querySelector(".card-footer .question_index").innerHTML = tag;
}

UI.prototype.skoruGoster = function(toplamSoru, dogruCevap){
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz.`
    document.querySelector(".score_box .score_text").innerHTML = tag;
}