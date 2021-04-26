
// Get the modal
var modal = document.getElementById("modal1");
var picmodal = document.getElementById("picmodal1");

// Get the iframe (YouTube)
var iframe = document.getElementById("iframe1");

// Get the button that opens the modal
var btn = document.getElementById("portfolio-img");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
//   iframe.src = iframe.src  // Reload source effectively stops the video, outside of needing API
// }

// Same function but with jquery
$('close').click(function(){
    // Close the modal
    modal.css({'display':'none'});
    // $('modal').each(function(){
        $('modal').style.display = "none";
         $('modal').css('display', 'none');
        // $(this).display="none";
        // $(this).attr("style.display","none");
    //  });
    // Close the player via source reload
    // $('videoPlayer').each(function(){
    //   var old_src = $(this).attr("src");
    //   $(this).attr("src",old_src);
    // });
  });


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    iframe.src = iframe.src;  // Reload source effectively stops the video, outside of needing API
    // iframe.parentNode.removeChild(iframe);
  }
}

// $('close').click(function(){
//     $('.yvideo').each(function(){
//       var el_src = $(this).attr("src");
//       $(this).attr("src",el_src);
//     });
//   });