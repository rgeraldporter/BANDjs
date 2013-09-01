window.onload = function() {

	var inputText		= document.getElementById( "band-text" ),
		submitButton	= document.getElementById( "band-submit" ),
		resultText		= document.getElementById( "band-result" ),
		bandAll			= document.getElementById( "band-all" ),
		bandAllResult	= document.getElementById( "band-all-result" );
		
	window.lookup			= function() {
	
		var value = inputText.value.toUpperCase();
		
		if( !!!bandCode[value] )
			resultText.innerHTML = "no result (" + value + ")";
		else 
			resultText.innerHTML = bandCode[ value ] + " (" + value + ")";
	
	};
	
	var showAll			= function() {
	
		var table = "<table><tr><th>Species Name</th><th>Banding Code</th></tr>";
	
		for( var key in bandCode ) {
		
			table += "<tr><td>" + bandCode[key] + "</td><td>" + key + "</td></tr>";
		
		}
		
		table += "</table>";
		
		bandAllResult.innerHTML = table;		
	
	}
		
	submitButton.addEventListener( 'touchend', lookup );
	submitButton.addEventListener( 'click', lookup );
	bandAll.addEventListener( 'touchend', showAll );
	bandAll.addEventListener( 'click', showAll );
	
};

function checkSubmit( e ) {

	if( e && e.keyCode != 13 )
   		return;
   		
	window.lookup();
	
}
