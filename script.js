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
