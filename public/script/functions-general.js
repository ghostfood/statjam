// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("top").style.display = "block";
    } else {
        document.getElementById("top").style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When the table is responsive enable a horizontal scollbar at the top of the table

  $(document).ready(function() {
     $('.double-scroll').doubleScroll();
     $('#table-ds').doubleScroll({resetOnWindowResize: true});
  });


function sharePage() {

  document.getElementById('shareBtn').innerHTML = "Tiny URL copied!";
  
  /* Get the text field */
  var copyText = document.getElementById("Input1");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

}
