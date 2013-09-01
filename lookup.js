window.onload = function() {

	var inputText		= document.getElementById( "band-text" ),
		submitButton	= document.getElementById( "band-submit" ),
		resultText		= document.getElementById( "band-result" ),
		bandAll			= document.getElementById( "band-all" ),
		bandAllResult	= document.getElementById( "band-all-result" );
		
	window.lookup			= function() {
	
		var value 		= inputText.value.toUpperCase(),
			extraText	= "";

		if( !!bandCode[value] ) {
		
			if( bandCode[value].length < 5 )
				extraText	= " (yes, that's its actual full species name!)";
		
			resultText.innerHTML = "<strong>" + value + "</strong> is the banding code for: <strong>" + bandCode[ value ] + "</strong>" + extraText;
			
			return;
			
		}
		
		// no result, going to try to guess
		
		var resultString 		= "",
			resultCount			= 0;
		
		for( var key in bandCode ) {
		
			if( bandCode[key].search(value) == -1 )
				continue;
				
			resultString += "<tr><td>" + bandCode[key] + "</td><td><strong>" + key + "</strong></td></tr>";
			
			resultCount++;		
		
		}
		
		if( !!resultCount ) {
		
			resultText.innerHTML =  "No banding codes matched that. There were " + resultCount + " possible result(s): <br /><br />"+
									"<table><tr><th>Species Name</th><th>Banding Code</th></tr>"+
									resultString +
									"</table>";

			return;
		
		}

		resultText.innerHTML = "No results for \"" + value + "\"";
	
	};
	
	window.changeSubmitButtonText	= function() {
	
		submitButton.value = "Look Up";
	
	}
	
	window.clearText 	= function() {
	
		submitButton.value = "Show All";
		inputText.value = "";
	
	}
		
	submitButton.addEventListener( 'touchend', window.lookup );
	submitButton.addEventListener( 'click', window.lookup );
	inputText.addEventListener( 'keydown', window.changeSubmitButtonText );
	inputText.addEventListener( 'click', window.clearText );
	
};

function checkSubmit( e ) {

	if( e && e.keyCode != 13 )
   		return;
   		
	window.lookup();
	
}
