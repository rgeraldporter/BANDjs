
String.prototype.capitalize = function() {

    return this.charAt(0).toUpperCase() + this.slice(1);
    
}

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
		
			if( bandCode[value].name.length < 5 )
				extraText	= " (yes, that's its actual full species name!)";
		
			resultText.innerHTML = "<strong>" + value + "</strong> is the banding code for: <strong>" + bandCode[value].name + "</strong>" + extraText;
			
			return;
			
		}
		
		// no result, going to try to guess
		
		var resultString 		= "",
			resultCount			= 0;

		for( var key in bandCode ) {
		
			console.log( bandCode[key] );
		
			if( bandCode[key].name.search(new RegExp(value, "i")) == -1 )
				continue;
	
			resultString += "<tr><td>" + bandCode[key].name + "</td><td><strong>" + key + "</strong></td></tr>";
			
			resultCount++;		
		
		}
		
		if( !!resultCount ) {
		
			document.activeElement.blur();
		
			resultText.innerHTML =  "No banding codes matched <strong>" + value + "</strong>.<br /> There are " + resultCount + " matching species: <br /><br />"+
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
