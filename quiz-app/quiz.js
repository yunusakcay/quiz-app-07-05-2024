
function Quiz(sorular){
    this.sorular = sorular;
    this.soruIndex = Math.floor(Math.random() * 42);
    this.dogruCevapSayisi = 0;
}

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex];
}




