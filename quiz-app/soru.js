
function Soru(soruMetni, cevapSecenekleri, dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap = dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return  cevap === this.dogruCevap;
}

let sorular = [
    new Soru("JavaScript'i kim icat etmiştir ?",{a: "Brendan Eich", b:"Thomas Java", c: "James Gosling", d: "Linus Helsinki"},"a"),
    new Soru("Javascript'in alternatif adı nedir ?",{a: "LimeScript", b:"JXXScript", c: "ECMScript", d: "ECMAScript"},"d"),
    new Soru("Java ve JavaScript neden benzer ada sahiptir ?",{a: "Javascript, Java'nın soyulmuş (stripped down) bir sürümüdür.",
    b:"JavaScript sözdizimi (syntax) benzer bir şekilde Java sözdizimine dayanmaktadır.",
    c: "İkisi de Nesneye Yönelik Programlamayı destekler",
    d: "Hiçbiri"},"b"),
    new Soru("JavaScript ilk başlangıçta ____ adı altında geliştirilmiştir.",{a: "ActionScript", b:"Sencha", c: "Javia", d:"Mocha"},"d"),
    new Soru("JavaScript ifadeleri ____ tarafından sonlandırılır.",{a: "/", b:"!", c: ",", d: ";"},"d"),
    new Soru("Microsoft, ____ isminde bir JavaScript lehçesi geliştirmiştir.",{a: "MS JavaScript", b:"MJavaScript", c: "JScript", d: "Advanced JavaScript"},"d"),
    new Soru("Javascript nesne yönelimli (object oriented) bir programlama dilidir.",{a: "Yanlış", b:"Doğru"},"b"),
    new Soru("JavaScript, _____ laboratuvarlarında icat edilmiştir.",{a: "Java", b:"Google", c: "Bell", d: "Netscape"},"d"),
    new Soru("Bir isim ve bir değere sahip olan sırasız özellik koleksiyonuna ne denir ?",{a: "String", b:"Serileştirilmiş Nesne (Serialized Object)", c: "Nesne (Object)", d: "Hiçbiri"},"c"),
    new Soru("Bir web sayfasında “Hello World” yazmak için aşağıdakilerden hangisi doğru kabul edilir ?",{a: "System.out.println(“Hello World”)", b:"print(“Hello World”)", c: "response.write(“Hello World”)", d: "document.write(“Hello World”)"},"d"),
    new Soru("Aşağıdakilerden hangisi sunucu tarafı (server-side) Javascript nesnesidir ?",{a: "Function", b:"File", c: "FileUpload", d: "Date"},"b"),
    new Soru("Java'ya bir JavaScript nesnesi gönderildiğinde hangi java sarmalayıcı (wrapper) türü oluşturulur?",{a: "ScriptObject", b:"JavaObject", c: "Jobject", d: "JSObject"},"d"),
    new Soru("Java Script'te bir -window- nesnesinin hangi özelliğine atanan metin durum çubuğunda (status bar) gözükür ?",{a: "Pathname", b:"Protocol", c: "Host", d: "defaultStatus"},"d"),
    new Soru("Yorum ifadesi, _____ ifade türüdür.",{a: "çalıştırılamayan", b:"çalıştırılabilir", c: "kullanışsız", d: "önemli olmayan"},"a"),
    new Soru("JavaScript ifadeleri _____ grubu olarak adlandırılır.",{a: "ifade bloğu (statement block)", b:"kod bloğu", c: "küme (cluster)", d: "Hiçbiri"},"a"),
    new Soru("Bir penceredeki tüm tıklama etkinliklerini (click events) yakalamak için aşağıdakilerden hangisi kullanılır ?",{a: "window.routeEvents(Event.CLICK );", b:"window.handleEvents (Event.CLICK);", c: "window.captureEvents(Event.CLICK);", d: "window.raiseEvents(Event.CLICK );"},"c"),
    new Soru("Javascript'te negatif sonsuz kavramı nasıl kullanılır ?",{a: "var.NEGATIVE_INFINITY", b:"Number.NEGATIVE_INFINITY", c: "Number.Negative_Infinity", d: "Hiçbiri"},"b"),
    new Soru("1996 yılında JavaScript'i destekleyen _____ tarayıcısı yayınlanmıştır.",{a: "Netscape Navigator 2.0", b:"Internet Explorer 2.0", c: "Netscape Navigator 1.0", d: "Internet Explorer 1.0"},"a"),
    new Soru("Pencerede (window) görüntülenen içeriği temsil eden özellik hangisidir ?",{a: "window", b:"frame", c: "document", d: "content"},"c"),
    new Soru("JavaScript'te hangisi bir değişken adı olamaz ?",{a: "10var", b:"varName", c: "my_var", d: "var10"},"a"),
    new Soru("Aşağıdakilerden hangisi JavaScript'te metin görüntülemek için değildir ?",{a: "alert( )", b:"document.write( )", c: "console.writeline( )", d: "document.getElementById( ).innerHTML"},"c"),
    new Soru("JavaScript'te hangi komut doğrudur ?",{a: "if ( ) { } else { }", b:"if ( ) then { } else { }", c: "if ( ) then { } then else { }", d: "if ( ) then { } if else { }"},"a"),
    new Soru("Hangisi JavaScript'de bir karşılaştırma operatörü değildir ?",{a: "==", b:"<=", c: "!=", d: "=>"},"d"),
    new Soru("Hangisi JavaScript'de bir mantıksal operatör değildir ?",{a: "$$", b:"&&", c: "||", d: "!"},"a"),
    new Soru("Aşağıdaki fonksiyonlardan hangisinin yazımı yanlıştır ?",{a: "setDate( )", b:"setMonth( )", c: "setYear( )", d: "setHour( )"},"d"),
    new Soru("(3 > 5 && false) kuşulu ne döndürür ?",{a: "true", b:"false", c: "null", d: "Hiçbirşey döndürmez."},"b"),
    new Soru("(4 > 3 || false) kuşulu ne döndürür ?",{a: "true", b:"false", c: "null", d: "-1"},"a"),
    new Soru("(12 > 12 && true ) kuşulu ne döndürür ?",{a: "true", b:"false", c: "0", d: "null"},"b"),
    new Soru("(100 > 101 || 101 > 100 ) kuşulu ne döndürür ?",{a: "true", b:"false", c: "error", d: "null"},"a"),
    new Soru("Eğer -getMonth()- metodu 8 döndürüyorsa, bu ___ ayıdır.",{a: "Ağustos", b:"Temmuz", c: "Eylül", d: "Ekim"},"c"),
    new Soru("JavaScript'de -break- ve -continue- ile ilgili hangisi doğrudur?",{a: "break : Çalışan programı durdurur, continue : Programı çalıştırmaya devam ettirir.", b:"break : Programı çalıştırmaya devam ettirir, continue : Çalışan programı durdurur.", c: "break : Döngüden çıkarır, continue : Sonraki döngüye sokar.", d: "break : Sonraki döngüye sokar, continue : Döngüden çıkarır."},"c"),
    new Soru("JavaScript'de bir fonksiyonu ___ anahtar sözcüğü ile yaratırız.",{a: "fun", b:"function", c: "var", d: "method"},"b"),
    new Soru("__ anahtar sözcüğünü kullanan JavaScript fonksiyonu bir değer döndürür.",{a: "return", b:"regain", c: "retrieve", d: "result"},"a"),
    new Soru("Hangi fonksiyon tarayıcı adını döndürür?",{a: "navigator.userAgent", b:"navigator.platform", c: "navigator.plugin", d: "navigator.appName"},"d"),
    new Soru("Hangisi bir JavaScript Komutudur?",{a: "window.scrollBy( )", b:"window.moveBy( )", c: "window.scrollTo( )", d: "Hepsi"},"d"),
    new Soru("Tıklandığında önceki sayfaya dönen komut hangisidir?",{a: 'onclick = "history.withdraw( )"', b:'onclick = "history.backward( )"', c: 'onclick = "history.previous( )"', d: 'onclick = "history.back( )"'},"d"),
    new Soru("Hangisi bir düğme (button) eventidir (olayıdır) ?",{a: "onHelp", b:"onSubmit", c: "onScroll", d: "onPlus"},"b"),
    new Soru('Hangi method "Math" sınıfına aittir?',{a: "indexOf( )", b:"getDay( )", c: "atan( )", d: "setSecond( )"},"c"),
    new Soru("Aşağıdaki ifadelerden hangisi doğru değildir?",{a: "a += b eşittir a = (a + b)", b:"a != b eşittir a = (a ! b)", c: "a *= b eşittir a = (a * b)", d: "a %= b eşittir a = (a % b)"},"b"),
    new Soru('window.settimeout( “myFunction()”, 10000 ); bu kod neyi anlatır ?',{a: "myFunction metodumu her 10000 saniyede çağır.", b:"myFunction metodumu her 1000 saniyede çağır.", c: "myFunction metodumu her 100 saniyede çağır.", d: "myFunction metodumu her 10 saniyede çağır."},"d"),
    new Soru("Greenwich Zamanına çeviren fonksiyon ____ dir.",{a: "toGMTString( )", b:"getUTCHours( )", c: "getTimeZoneOffset( )", d: "getTime( )"},"a"),
    new Soru('"Id" attribute (özellik) değerine göre bir belge öğesi (document element) nasıl seçilir ?', {a: "getId()", b:"getElementsbyId()", c: "get()", d: "getElementbyId()"},"d")
]

