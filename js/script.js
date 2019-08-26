console.log('My script is working')

$(document).ready(function(){

	$('#heading').click(function(){
		$('h1').css('opacity', '0.5').css('font-size', '50px');
	});

	$('#heading').draggable();
	$('#subHeading').droppable();

	$( function() {
    $( "#resizable" ).resizable();
  	});

	$( function() {
    $( "#selectable" ).selectable();
  	});

  	$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

// Bulb on and off ------
	
	// Starting variables
  	$('#bulbOn').hide();
  	$('#lightSwitchOn').hide();

	// Turning the light on
  	$('#lightSwitchOff').click(function(){
  		$('#bulbOn').show();
  		$('#bulbOff').hide();
  		$('#lightSwitchOff').hide();
  		$('#lightSwitchOn').show();
  	})
  	// Turning the light off
  	$('#lightSwitchOn').click(function(){
  		$('#bulbOn').hide();
  		$('#bulbOff').show();
  		$('#lightSwitchOff').show();
  		$('#lightSwitchOn').hide();
  	})

  	$( function() {
    $( "#accordion" ).accordion({
      collapsible: true
    });
  } );

});
