
document.getElementById('burger').addEventListener("click", function() {
    this.classList.toggle("change");
    this.nextElementSibling.classList.toggle("active-menu");
});