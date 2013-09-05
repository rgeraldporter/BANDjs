
String.prototype.capitalize = function() {

    return this.charAt(0).toUpperCase() + this.slice(1);
    
}

window.onload = function() {

	var inputText		= document.getElementById( "band-text" ),
		submitButton	= document.getElementById( "band-submit" ),
		resultText		= document.getElementById( "band-result" ),
		bandAll			= document.getElementById( "band-all" ),
		bandAllResult	= document.getElementById( "band-all-result" );
		
	var decapsSpecies = function( species ) {
	
		var words = species.split( " " );
		
		for( var i = 0; i < words.length; i++ ) {
		
			words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
			
			if( words[i] == "X" )
				words[i] = "x";
				
			if( i == (words.length - 1 ) && words[i].search("-") != -1 ) {
			
				var position 	= words[i].search("-"),
					character	= words[i][position+1];
					
				words[i] = words[i].replace( "-" + character, "-" + character.toUpperCase() );				
			
			}
		
		}
		
		species = words.join( " " );
		
		return species;
	
	}
		
	window.lookup			= function() {
	
		var value 		= inputText.value.toUpperCase(),
			extraText	= "";

		if( !!bandCode[value] ) {
		
			if( bandCode[value].length < 5 )
				extraText	= " (yes, that's its actual full species name!)";
				
			var species = decapsSpecies( bandCode[value] );
		
			resultText.innerHTML = "<strong>" + value + "</strong> is the banding code for: <strong>" + species + "</strong>" + extraText;
			
			return;
			
		}
		
		// no result, going to try to guess
		
		var resultString 		= "",
			resultCount			= 0;
		
		for( var key in bandCode ) {
		
			if( bandCode[key].search(value) == -1 )
				continue;
				
			var speciesName	= decapsSpecies(  bandCode[key] );
				
			resultString += "<tr><td>" + speciesName + "</td><td><strong>" + key + "</strong></td></tr>";
			
			resultCount++;		
		
		}
		
		if( !!resultCount ) {
		
			document.activeElement.blur();
		
			resultText.innerHTML =  "No banding codes matched <strong>" + value + "</strong>.<br /> There are " + resultCount + " matching species: <br /><br />"+
									"<table><tr><th>Species Name</th><th>Banding Code</th></tr>"+
									resultString +
									"</table>";
									
			//window.location.hash = "";

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
