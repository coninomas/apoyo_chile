console.log

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$( "h3" ).on( "click", function() {
  $( "#card-text1" ).toggle("slow");
  $( "#card-text2" ).toggle("slow");
  $( "#card-text3" ).toggle("slow");
  $( "#card-text4" ).toggle("slow");
});
