const sections = document.querySelectorAll(".content");

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

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

document.addEventListener("contextmenu", e => {
    e.preventDefault();
});
