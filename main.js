document.querySelectorAll("#galeria img").forEach(function(img) {
    img.addEventListener("click", function() {
        this.style.backgroundColor = this.style.backgroundColor === 'lightyellow' ? '' : 'lightyellow';
    });
});