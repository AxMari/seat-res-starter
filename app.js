$(document).ready(function(){

var seatNum;
var selectedSeat;

$("#seatform").hide();
$(".available").each(function() {
   $(this).on('click', function(){
       $('#seatform').show();
       selectedSeat = $(this);
       seatNum = $(this).attr('id');
     

$('#button').click(function(){	
   userName = $("input#name").val(); 
   userEmail = $("input#email").val();        
   $(selectedSeat)     
       .text( seatNum + " Reserved " + userName );
       $(selectedSeat).css("background-color", "#bcbcbc")
       console.log(selectedSeat);
       console.log(seatNum);

});    

});



});

});



















// $('.seats').append('<div class="chair">');
// $('.seats').append('<div class="chair">');
// $('.seats').append('<div class="chair">');
// $('.seats').append('<div class="chair">');
// $('.seats').append('<div class="chair">');
// $('.seats').append('<div class="chair">');
// $('.seats').append('<div class="chair">');
// $('.seats').append('<div class="chair">');
// $('.seats').append('<div class="chair">');
// $('.seats').append('<div class="chair">');
// $('.seats').append('<div class="chair">');
// $('.seats').append('<div class="chair">');
















