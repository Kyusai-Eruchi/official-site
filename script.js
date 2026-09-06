const sections = document.querySelectorAll(".content");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});a

sections.forEach(section => {
observer.observe(section);
});

const settingLink = document.getElementById("setting-link");
const modal = document.getElementById("setting-modal");
const closeModal = document.getElementById("close-modal");

settingLink.addEventListener("click", function(e){
e.preventDefault();
modal.style.display = "block";
});

closeModal.addEventListener("click", function(){
modal.style.display = "none";
});

window.addEventListener("click", function(e){
if(e.target === modal){
modal.style.display = "none";
}
});

const themeTitle = document.getElementById("theme-title");
const themeOptions = document.getElementById("theme-options");

themeTitle.addEventListener("click", function(){

if(themeOptions.style.display === "none"){

    themeOptions.style.display = "block";
    themeTitle.textContent = "▼ テーマ設定";

}else{

    themeOptions.style.display = "none";
    themeTitle.textContent = "▶ テーマ設定";

}

});

const radios = document.querySelectorAll('input[name="theme"]');

radios.forEach(radio => {

radio.addEventListener("change", function(){

    if(this.value === "light"){
        document.body.classList.add("light-mode");
    }

    if(this.value === "dark"){
        document.body.classList.remove("light-mode");
    }

});

});

document.addEventListener("contextmenu", function(e){

    e.preventDefault();

    alert(
        "⚠ このサイトの文章・画像・ロゴ等の無断転載・無断使用は禁止されています。\n\n" +
        "詳しくは『利用規約』『二次創作ガイドライン』をご確認ください。"
    );

});

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("menu-overlay");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    menuToggle.classList.toggle("active");

});

overlay.addEventListener("click", () => {

    navMenu.classList.remove("active");
    overlay.classList.remove("active");
    menuToggle.classList.remove("active");

});

let allowCopy = false;

document.addEventListener("copy", function(e){

    if(allowCopy){
        allowCopy = false;
        return;
    }

    e.preventDefault();

    alert(
        "⚠ コピーは禁止されています。\n\n" +
        "メールアドレスは『メールアドレスをコピー』ボタンをご利用ください。"
    );

});

const copyButton = document.getElementById("copy-mail");

copyButton.addEventListener("click", async () => {

    try{

        await navigator.clipboard.writeText("kyusai.eruchi@gmail.com");

        alert("メールアドレスをコピーしました。");

    }catch{

        alert("コピーに失敗しました。");

    }

});
