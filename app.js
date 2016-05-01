
$(document).ready(function(){


$("#seatform").hide();


$(".available").each(function() {
	$(this).on('click', function(){
		$('#seatform').show();

});	
});

$('#button').click(function(){
var name = $("#name").val(); 
var email = $('#email').val();		
var seat = $('#seat').val();
var p = $("#seats > p").text();

		console.log(name);
		console.log(email);
		console.log(seat);
		console.log(p);
		// console.log(number);

		
	
		$('.available').addClass("reserved");
	$('.reserved').removeClass('available');	
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
















