window.onscroll = () => {
    toggleTopButton();
}
function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('back-to-up').classList.remove('d-none');
    } else {
        document.getElementById('back-to-up').classList.add('d-none');
    }
}


    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("certificate01");
    var img2 = document.getElementById("certificate02");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

    // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
            modal.style.display = "none";
        }

