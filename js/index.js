const moreButtons = document.querySelectorAll('.moreButton')

moreButtons.forEach(button => {
    button.addEventListener('click', function(){
        window.location = "https://mdegeus.github.io/my_portofolio/" + button.id
    })
});