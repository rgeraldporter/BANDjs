
window.onload = function() {

	var inputText		= document.getElementById( "band-text" ),
		submitButton	= document.getElementById( "band-submit" ),
		resultText		= document.getElementById( "band-result" ),
		bandAll			= document.getElementById( "band-all" ),
		bandAllResult	= document.getElementById( "band-all-result" );
		
	window.lookup			= function() {
	
		var value 		= inputText.value.toUpperCase(),
			extraText	= "";

		if( !!birdBrain[value] ) {
		
			if( birdBrain[value].name.length < 5 )
				extraText	= " (yes, that's its actual full species name!)";
		
			resultText.innerHTML = "<strong>" + value + "</strong> is the banding code for: <strong>" + birdBrain[value].name + "</strong>" + extraText;
			
			return;
			
		}
		
		// no result, going to try to guess
		
		var resultString 		= "",
			resultCount			= 0;

		for( var key in birdBrain ) {
		
			var wikipediaLink = "<a href=\"http://en.wikipedia.org/wiki/Special:Search/" + encodeURIComponent( birdBrain[key].name ) + "\" target=\"_blank\">Wikipedia</a>";
		
			if( birdBrain[key].name.search(new RegExp(value, "i")) == -1 )
				continue;
			
			if( birdBrain[key].name.search(new RegExp("unidentified", "i")) != -1 || birdBrain[key].name.search(new RegExp("unknown", "i")) != -1 || birdBrain[key].name.search(new RegExp("hybrid", "i")) != -1 || birdBrain[key].name.search(new RegExp(" x ", "i")) != -1 || birdBrain[key].name.search(new RegExp("unspecified", "i")) != -1 )	
				wikipediaLink = "";
	
			resultString += "<tr><td>" + birdBrain[key].name + "</td><td><strong>" + key + "</strong></td><td>" + wikipediaLink + "</td></tr>";
			
			resultCount++;		
		
		}

		if( !!resultCount ) {
		
			document.activeElement.blur();
		
			resultText.innerHTML =  "No banding codes matched <strong>" + value + "</strong>.<br /> There are " + resultCount + " matching species: <br /><br />"+
									"<table><tr><th>Species Name</th><th>Code</th><th>Link</th></tr>"+
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
	
	submitButton.value = "Show All";
	
};

function checkSubmit( e ) {

	if( e && e.keyCode != 13 )
   		return;
   		
	window.lookup();
	
}


var abaName = [
  {
    "category":"Ducks, Geese, and Swans (Anatidae)",
    "name":"Black-bellied Whistling-Duck",
    "sname":"Dendrocygna autumnalis",
    "code":1
  },
  {
    "category":"",
    "name":"Fulvous Whistling-Duck",
    "sname":"Dendrocygna bicolor",
    "code":1
  },
  {
    "category":"",
    "name":"Taiga Bean-Goose",
    "sname":"Anser fabalis",
    "code":3
  },
  {
    "category":"",
    "name":"Tundra Bean-Goose",
    "sname":"Anser serrirostris",
    "code":3
  },
  {
    "category":"",
    "name":"Pink-footed Goose",
    "sname":"Anser brachyrhynchus",
    "code":4
  },
  {
    "category":"",
    "name":"Greater White-fronted Goose",
    "sname":"Anser albifrons",
    "code":1
  },
  {
    "category":"",
    "name":"Lesser White-fronted Goose",
    "sname":"Anser erythropus",
    "code":5
  },
  {
    "category":"",
    "name":"Graylag Goose",
    "sname":"Anser anser",
    "code":5
  },
  {
    "category":"",
    "name":"Emperor Goose",
    "sname":"Chen canagica",
    "code":2
  },
  {
    "category":"",
    "name":"Snow Goose",
    "sname":"Chen caerulescens",
    "code":1
  },
  {
    "category":"",
    "name":"Ross's Goose",
    "sname":"Chen rossii",
    "code":1
  },
  {
    "category":"",
    "name":"Brant",
    "sname":"Branta bernicla",
    "code":1
  },
  {
    "category":"",
    "name":"Barnacle Goose",
    "sname":"Branta leucopsis",
    "code":4
  },
  {
    "category":"",
    "name":"Cackling Goose",
    "sname":"Branta hutchinsii",
    "code":1
  },
  {
    "category":"",
    "name":"Canada Goose",
    "sname":"Branta canadensis",
    "code":1
  },
  {
    "category":"",
    "name":"Mute Swan",
    "sname":"Cygnus olor",
    "code":1
  },
  {
    "category":"",
    "name":"Trumpeter Swan",
    "sname":"Cygnus buccinator",
    "code":1
  },
  {
    "category":"",
    "name":"Tundra Swan",
    "sname":"Cygnus columbianus",
    "code":1
  },
  {
    "category":"",
    "name":"Whooper Swan",
    "sname":"Cygnus cygnus",
    "code":3
  },
  {
    "category":"",
    "name":"Muscovy Duck",
    "sname":"Cairina moschata",
    "code":2
  },
  {
    "category":"",
    "name":"Wood Duck",
    "sname":"Aix sponsa",
    "code":1
  },
  {
    "category":"",
    "name":"Gadwall",
    "sname":"Anas strepera",
    "code":1
  },
  {
    "category":"",
    "name":"Falcated Duck",
    "sname":"Anas falcata",
    "code":4
  },
  {
    "category":"",
    "name":"Eurasian Wigeon",
    "sname":"Anas penelope",
    "code":2
  },
  {
    "category":"",
    "name":"American Wigeon",
    "sname":"Anas americana",
    "code":1
  },
  {
    "category":"",
    "name":"American Black Duck",
    "sname":"Anas rubripes",
    "code":1
  },
  {
    "category":"",
    "name":"Mallard",
    "sname":"Anas platyrhynchos",
    "code":1
  },
  {
    "category":"",
    "name":"Mottled Duck",
    "sname":"Anas fulvigula",
    "code":1
  },
  {
    "category":"",
    "name":"Eastern Spot-billed Duck",
    "sname":"Anas zonorhyncha",
    "code":4
  },
  {
    "category":"",
    "name":"Blue-winged Teal",
    "sname":"Anas discors",
    "code":1
  },
  {
    "category":"",
    "name":"Cinnamon Teal",
    "sname":"Anas cyanoptera",
    "code":1
  },
  {
    "category":"",
    "name":"Northern Shoveler",
    "sname":"Anas clypeata",
    "code":1
  },
  {
    "category":"",
    "name":"White-cheeked Pintail",
    "sname":"Anas bahamensis",
    "code":4
  },
  {
    "category":"",
    "name":"Northern Pintail",
    "sname":"Anas acuta",
    "code":1
  },
  {
    "category":"",
    "name":"Garganey",
    "sname":"Anas querquedula",
    "code":4
  },
  {
    "category":"",
    "name":"Baikal Teal",
    "sname":"Anas formosa",
    "code":4
  },
  {
    "category":"",
    "name":"Green-winged Teal",
    "sname":"Anas crecca",
    "code":1
  },
  {
    "category":"",
    "name":"Canvasback",
    "sname":"Aythya valisineria",
    "code":1
  },
  {
    "category":"",
    "name":"Redhead",
    "sname":"Aythya americana",
    "code":1
  },
  {
    "category":"",
    "name":"Common Pochard",
    "sname":"Aythya ferina",
    "code":3
  },
  {
    "category":"",
    "name":"Ring-necked Duck",
    "sname":"Aythya collaris",
    "code":1
  },
  {
    "category":"",
    "name":"Tufted Duck",
    "sname":"Aythya fuligula",
    "code":3
  },
  {
    "category":"",
    "name":"Greater Scaup",
    "sname":"Aythya marila",
    "code":1
  },
  {
    "category":"",
    "name":"Lesser Scaup",
    "sname":"Aythya affinis",
    "code":1
  },
  {
    "category":"",
    "name":"Steller's Eider",
    "sname":"Polysticta stelleri",
    "code":3
  },
  {
    "category":"",
    "name":"Spectacled Eider",
    "sname":"Somateria fischeri",
    "code":3
  },
  {
    "category":"",
    "name":"King Eider",
    "sname":"Somateria spectabilis",
    "code":2
  },
  {
    "category":"",
    "name":"Common Eider",
    "sname":"Somateria mollissima",
    "code":1
  },
  {
    "category":"",
    "name":"Harlequin Duck",
    "sname":"Histrionicus histrionicus",
    "code":1
  },
  {
    "category":"",
    "name":"Labrador Duck",
    "sname":"Camptorhynchus labradorius",
    "code":6
  },
  {
    "category":"",
    "name":"Surf Scoter",
    "sname":"Melanitta perspicillata",
    "code":1
  },
  {
    "category":"",
    "name":"White-winged Scoter",
    "sname":"Melanitta fusca",
    "code":1
  },
  {
    "category":"",
    "name":"Black Scoter",
    "sname":"Melanitta americana",
    "code":1
  },
  {
    "category":"",
    "name":"Long-tailed Duck",
    "sname":"Clangula hyemalis",
    "code":1
  },
  {
    "category":"",
    "name":"Bufflehead",
    "sname":"Bucephala albeola",
    "code":1
  },
  {
    "category":"",
    "name":"Common Goldeneye",
    "sname":"Bucephala clangula",
    "code":1
  },
  {
    "category":"",
    "name":"Barrow's Goldeneye",
    "sname":"Bucephala islandica",
    "code":1
  },
  {
    "category":"",
    "name":"Smew",
    "sname":"Mergellus albellus",
    "code":3
  },
  {
    "category":"",
    "name":"Hooded Merganser",
    "sname":"Lophodytes cucullatus",
    "code":1
  },
  {
    "category":"",
    "name":"Common Merganser",
    "sname":"Mergus merganser",
    "code":1
  },
  {
    "category":"",
    "name":"Red-breasted Merganser",
    "sname":"Mergus serrator",
    "code":1
  },
  {
    "category":"",
    "name":"Masked Duck",
    "sname":"Nomonyx dominicus",
    "code":3
  },
  {
    "category":"",
    "name":"Ruddy Duck",
    "sname":"Oxyura jamaicensis",
    "code":1
  },
  {
    "category":"Curassows and Guans (Cracidae)",
    "name":"Plain Chachalaca",
    "sname":"Ortalis vetula",
    "code":2
  },
  {
    "category":"New World Quail (Odontophoridae)",
    "name":"Mountain Quail",
    "sname":"Oreortyx pictus",
    "code":1
  },
  {
    "category":"",
    "name":"Scaled Quail",
    "sname":"Callipepla squamata",
    "code":1
  },
  {
    "category":"",
    "name":"California Quail",
    "sname":"Callipepla californica",
    "code":1
  },
  {
    "category":"",
    "name":"Gambel's Quail",
    "sname":"Callipepla gambelii",
    "code":1
  },
  {
    "category":"",
    "name":"Northern Bobwhite",
    "sname":"Colinus virginianus",
    "code":1
  },
  {
    "category":"",
    "name":"Montezuma Quail",
    "sname":"Cyrtonyx montezumae",
    "code":2
  },
  {
    "category":"Partridges, Grouse, Turkeys, and Old World Quail (Phasianidae)",
    "name":"Chukar",
    "sname":"Alectoris chukar",
    "code":2
  },
  {
    "category":"",
    "name":"Himalayan Snowcock",
    "sname":"Tetraogallus himalayensis",
    "code":2
  },
  {
    "category":"",
    "name":"Gray Partridge",
    "sname":"Perdix perdix",
    "code":2
  },
  {
    "category":"",
    "name":"Ring-necked Pheasant",
    "sname":"Phasianus colchicus",
    "code":1
  },
  {
    "category":"",
    "name":"Ruffed Grouse",
    "sname":"Bonasa umbellus",
    "code":1
  },
  {
    "category":"",
    "name":"Greater Sage-Grouse",
    "sname":"Centrocercus urophasianus",
    "code":1
  },
  {
    "category":"",
    "name":"Gunnison Sage-Grouse",
    "sname":"Centrocercus minimus",
    "code":2
  },
  {
    "category":"",
    "name":"Spruce Grouse",
    "sname":"Falcipennis canadensis",
    "code":2
  },
  {
    "category":"",
    "name":"Willow Ptarmigan",
    "sname":"Lagopus lagopus",
    "code":1
  },
  {
    "category":"",
    "name":"Rock Ptarmigan",
    "sname":"Lagopus muta",
    "code":1
  },
  {
    "category":"",
    "name":"White-tailed Ptarmigan",
    "sname":"Lagopus leucura",
    "code":2
  },
  {
    "category":"",
    "name":"Dusky Grouse",
    "sname":"Dendragapus obscurus",
    "code":2
  },
  {
    "category":"",
    "name":"Sooty Grouse",
    "sname":"Dendragapus fuliginosus",
    "code":2
  },
  {
    "category":"",
    "name":"Sharp-tailed Grouse",
    "sname":"Tympanuchus phasianellus",
    "code":2
  },
  {
    "category":"",
    "name":"Greater Prairie-Chicken",
    "sname":"Tympanuchus cupido",
    "code":2
  },
  {
    "category":"",
    "name":"Lesser Prairie-Chicken",
    "sname":"Tympanuchus pallidicinctus",
    "code":2
  },
  {
    "category":"",
    "name":"Wild Turkey",
    "sname":"Meleagris gallopavo",
    "code":1
  },
  {
    "category":"Loons (Gaviidae)",
    "name":"Red-throated Loon",
    "sname":"Gavia stellata",
    "code":1
  },
  {
    "category":"",
    "name":"Arctic Loon",
    "sname":"Gavia arctica",
    "code":2
  },
  {
    "category":"",
    "name":"Pacific Loon",
    "sname":"Gavia pacifica",
    "code":1
  },
  {
    "category":"",
    "name":"Common Loon",
    "sname":"Gavia immer",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow-billed Loon",
    "sname":"Gavia adamsii",
    "code":2
  },
  {
    "category":"Grebes (Podicipedidae)",
    "name":"Least Grebe",
    "sname":"Tachybaptus dominicus",
    "code":2
  },
  {
    "category":"",
    "name":"Pied-billed Grebe",
    "sname":"Podilymbus podiceps",
    "code":1
  },
  {
    "category":"",
    "name":"Horned Grebe",
    "sname":"Podiceps auritus",
    "code":1
  },
  {
    "category":"",
    "name":"Red-necked Grebe",
    "sname":"Podiceps grisegena",
    "code":1
  },
  {
    "category":"",
    "name":"Eared Grebe",
    "sname":"Podiceps nigricollis",
    "code":1
  },
  {
    "category":"",
    "name":"Western Grebe",
    "sname":"Aechmophorus occidentalis",
    "code":1
  },
  {
    "category":"",
    "name":"Clark's Grebe",
    "sname":"Aechmophorus clarkii",
    "code":1
  },
  {
    "category":"Flamingos (Phoenicopteridae)",
    "name":"American Flamingo",
    "sname":"Phoenicopterus ruber",
    "code":3
  },
  {
    "category":"Albatrosses (Diomedeidae)",
    "name":"Yellow-nosed Albatross",
    "sname":"Thalassarche chlororhynchos",
    "code":4
  },
  {
    "category":"",
    "name":"Shy Albatross",
    "sname":"Thalassarche cauta",
    "code":4
  },
  {
    "category":"",
    "name":"Black-browed Albatross",
    "sname":"Thalassarche melanophris",
    "code":5
  },
  {
    "category":"",
    "name":"Light-mantled Albatross",
    "sname":"Phoebetria palpebrata",
    "code":5
  },
  {
    "category":"",
    "name":"Wandering Albatross",
    "sname":"Diomedea exulans",
    "code":5
  },
  {
    "category":"",
    "name":"Laysan Albatross",
    "sname":"Phoebastria immutabilis",
    "code":2
  },
  {
    "category":"",
    "name":"Black-footed Albatross",
    "sname":"Phoebastria nigripes",
    "code":1
  },
  {
    "category":"",
    "name":"Short-tailed Albatross",
    "sname":"Phoebastria albatrus",
    "code":3
  },
  {
    "category":"Shearwaters and Petrels (Procellariidae)",
    "name":"Northern Fulmar",
    "sname":"Fulmarus glacialis",
    "code":1
  },
  {
    "category":"",
    "name":"Great-winged Petrel",
    "sname":"Pterodroma macroptera",
    "code":5
  },
  {
    "category":"",
    "name":"Providence Petrel",
    "sname":"Pterodroma solandri",
    "code":4
  },
  {
    "category":"",
    "name":"Herald Petrel",
    "sname":"Pterodroma arminjoniana",
    "code":3
  },
  {
    "category":"",
    "name":"Murphy's Petrel",
    "sname":"Pterodroma ultima",
    "code":3
  },
  {
    "category":"",
    "name":"Mottled Petrel",
    "sname":"Pterodroma inexpectata",
    "code":2
  },
  {
    "category":"",
    "name":"Bermuda Petrel",
    "sname":"Pterodroma cahow",
    "code":3
  },
  {
    "category":"",
    "name":"Black-capped Petrel",
    "sname":"Pterodroma hasitata",
    "code":2
  },
  {
    "category":"",
    "name":"Galapagos/Hawaiian Petrel",
    "sname":"Pterodroma phaeopygia/sandwichensis",
    "code":4
  },
  {
    "category":"",
    "name":"Fea's Petrel",
    "sname":"Pterodroma feae",
    "code":3
  },
  {
    "category":"",
    "name":"Cook's Petrel",
    "sname":"Pterodroma cookii",
    "code":3
  },
  {
    "category":"",
    "name":"Stejneger's Petrel",
    "sname":"Pterodroma longirostris",
    "code":4
  },
  {
    "category":"",
    "name":"Bulwer's Petrel",
    "sname":"Bulweria bulwerii",
    "code":5
  },
  {
    "category":"",
    "name":"White-chinned Petrel",
    "sname":"Procellaria aequinoctialis",
    "code":5
  },
  {
    "category":"",
    "name":"Parkinson's Petrel",
    "sname":"Procellaria parkinsoni",
    "code":5
  },
  {
    "category":"",
    "name":"Streaked Shearwater",
    "sname":"Calonectris leucomelas",
    "code":4
  },
  {
    "category":"",
    "name":"Cory's Shearwater",
    "sname":"Calonectris diomedea",
    "code":1
  },
  {
    "category":"",
    "name":"Cape Verde Shearwater",
    "sname":"Calonectris edwardsii",
    "code":5
  },
  {
    "category":"",
    "name":"Pink-footed Shearwater",
    "sname":"Puffinus creatopus",
    "code":1
  },
  {
    "category":"",
    "name":"Flesh-footed Shearwater",
    "sname":"Puffinus carneipes",
    "code":3
  },
  {
    "category":"",
    "name":"Great Shearwater",
    "sname":"Puffinus gravis",
    "code":1
  },
  {
    "category":"",
    "name":"Wedge-tailed Shearwater",
    "sname":"Puffinus pacificus",
    "code":4
  },
  {
    "category":"",
    "name":"Buller's Shearwater",
    "sname":"Puffinus bulleri",
    "code":2
  },
  {
    "category":"",
    "name":"Sooty Shearwater",
    "sname":"Puffinus griseus",
    "code":1
  },
  {
    "category":"",
    "name":"Short-tailed Shearwater",
    "sname":"Puffinus tenuirostris",
    "code":2
  },
  {
    "category":"",
    "name":"Manx Shearwater",
    "sname":"Puffinus puffinus",
    "code":2
  },
  {
    "category":"",
    "name":"Townsend's Shearwater",
    "sname":"Puffinus auricularis",
    "code":5
  },
  {
    "category":"",
    "name":"Black-vented Shearwater",
    "sname":"Puffinus opisthomelas",
    "code":2
  },
  {
    "category":"",
    "name":"Audubon's Shearwater",
    "sname":"Puffinus lherminieri",
    "code":1
  },
  {
    "category":"",
    "name":"Little Shearwater",
    "sname":"Puffinus assimilis",
    "code":5
  },
  {
    "category":"Storm-Petrels (Hydrobatidae)",
    "name":"Wilson's Storm-Petrel",
    "sname":"Oceanites oceanicus",
    "code":1
  },
  {
    "category":"",
    "name":"White-faced Storm-Petrel",
    "sname":"Pelagodroma marina",
    "code":3
  },
  {
    "category":"",
    "name":"European Storm-Petrel",
    "sname":"Hydrobates pelagicus",
    "code":4
  },
  {
    "category":"",
    "name":"Black-bellied Storm-Petrel",
    "sname":"Fregetta tropica",
    "code":5
  },
  {
    "category":"",
    "name":"Fork-tailed Storm-Petrel",
    "sname":"Oceanodroma furcata",
    "code":2
  },
  {
    "category":"",
    "name":"Ringed Storm-Petrel",
    "sname":"Oceanodroma hornbyi",
    "code":5
  },
  {
    "category":"",
    "name":"Swinhoe's Storm-Petrel",
    "sname":"Oceanodroma monorhis",
    "code":5
  },
  {
    "category":"",
    "name":"Leach's Storm-Petrel",
    "sname":"Oceanodroma leucorhoa",
    "code":1
  },
  {
    "category":"",
    "name":"Ashy Storm-Petrel",
    "sname":"Oceanodroma homochroa",
    "code":2
  },
  {
    "category":"",
    "name":"Band-rumped Storm-Petrel",
    "sname":"Oceanodroma castro",
    "code":2
  },
  {
    "category":"",
    "name":"Wedge-rumped Storm-Petrel",
    "sname":"Oceanodroma tethys",
    "code":4
  },
  {
    "category":"",
    "name":"Black Storm-Petrel",
    "sname":"Oceanodroma melania",
    "code":2
  },
  {
    "category":"",
    "name":"Tristram's Storm-Petrel",
    "sname":"Oceanodroma tristrami",
    "code":5
  },
  {
    "category":"",
    "name":"Least Storm-Petrel",
    "sname":"Oceanodroma microsoma",
    "code":3
  },
  {
    "category":"Tropicbirds (Phaethontidae)",
    "name":"White-tailed Tropicbird",
    "sname":"Phaethon lepturus",
    "code":3
  },
  {
    "category":"",
    "name":"Red-billed Tropicbird",
    "sname":"Phaethon aethereus",
    "code":3
  },
  {
    "category":"",
    "name":"Red-tailed Tropicbird",
    "sname":"Phaethon rubricauda",
    "code":4
  },
  {
    "category":"Storks (Ciconiidae)",
    "name":"Jabiru",
    "sname":"Jabiru mycteria",
    "code":4
  },
  {
    "category":"",
    "name":"Wood Stork",
    "sname":"Mycteria americana",
    "code":1
  },
  {
    "category":"Frigatebirds (Fregatidae)",
    "name":"Magnificent Frigatebird",
    "sname":"Fregata magnificens",
    "code":1
  },
  {
    "category":"",
    "name":"Great Frigatebird",
    "sname":"Fregata minor",
    "code":5
  },
  {
    "category":"",
    "name":"Lesser Frigatebird",
    "sname":"Fregata ariel",
    "code":5
  },
  {
    "category":"Boobies and Gannets (Sulidae)",
    "name":"Masked Booby",
    "sname":"Sula dactylatra",
    "code":3
  },
  {
    "category":"",
    "name":"Blue-footed Booby",
    "sname":"Sula nebouxii",
    "code":4
  },
  {
    "category":"",
    "name":"Brown Booby",
    "sname":"Sula leucogaster",
    "code":3
  },
  {
    "category":"",
    "name":"Red-footed Booby",
    "sname":"Sula sula",
    "code":4
  },
  {
    "category":"",
    "name":"Northern Gannet",
    "sname":"Morus bassanus",
    "code":1
  },
  {
    "category":"Cormorants (Phalacrocoracidae)",
    "name":"Brandt's Cormorant",
    "sname":"Phalacrocorax penicillatus",
    "code":1
  },
  {
    "category":"",
    "name":"Neotropic Cormorant",
    "sname":"Phalacrocorax brasilianus",
    "code":1
  },
  {
    "category":"",
    "name":"Double-crested Cormorant",
    "sname":"Phalacrocorax auritus",
    "code":1
  },
  {
    "category":"",
    "name":"Great Cormorant",
    "sname":"Phalacrocorax carbo",
    "code":1
  },
  {
    "category":"",
    "name":"Red-faced Cormorant",
    "sname":"Phalacrocorax urile",
    "code":2
  },
  {
    "category":"",
    "name":"Pelagic Cormorant",
    "sname":"Phalacrocorax pelagicus",
    "code":1
  },
  {
    "category":"Darters (Anhingidae)",
    "name":"Anhinga",
    "sname":"Anhinga anhinga",
    "code":1
  },
  {
    "category":"Pelicans (Pelecanidae)",
    "name":"American White Pelican",
    "sname":"Pelecanus erythrorhynchos",
    "code":1
  },
  {
    "category":"",
    "name":"Brown Pelican",
    "sname":"Pelecanus occidentalis",
    "code":1
  },
  {
    "category":"Bitterns, Herons, and Allies (Ardeidae)",
    "name":"American Bittern",
    "sname":"Botaurus lentiginosus",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow Bittern",
    "sname":"Ixobrychus sinensis",
    "code":5
  },
  {
    "category":"",
    "name":"Least Bittern",
    "sname":"Ixobrychus exilis",
    "code":1
  },
  {
    "category":"",
    "name":"Bare-throated Tiger-Heron",
    "sname":"Tigrisoma mexicanum",
    "code":5
  },
  {
    "category":"",
    "name":"Great Blue Heron",
    "sname":"Ardea herodias",
    "code":1
  },
  {
    "category":"",
    "name":"Gray Heron",
    "sname":"Ardea cinerea",
    "code":5
  },
  {
    "category":"",
    "name":"Great Egret",
    "sname":"Ardea alba",
    "code":1
  },
  {
    "category":"",
    "name":"Intermediate Egret",
    "sname":"Mesophoyx intermedia",
    "code":5
  },
  {
    "category":"",
    "name":"Chinese Egret",
    "sname":"Egretta eulophotes",
    "code":5
  },
  {
    "category":"",
    "name":"Little Egret",
    "sname":"Egretta garzetta",
    "code":4
  },
  {
    "category":"",
    "name":"Western Reef-Heron",
    "sname":"Egretta gularis",
    "code":5
  },
  {
    "category":"",
    "name":"Snowy Egret",
    "sname":"Egretta thula",
    "code":1
  },
  {
    "category":"",
    "name":"Little Blue Heron",
    "sname":"Egretta caerulea",
    "code":1
  },
  {
    "category":"",
    "name":"Tricolored Heron",
    "sname":"Egretta tricolor",
    "code":1
  },
  {
    "category":"",
    "name":"Reddish Egret",
    "sname":"Egretta rufescens",
    "code":1
  },
  {
    "category":"",
    "name":"Cattle Egret",
    "sname":"Bubulcus ibis",
    "code":1
  },
  {
    "category":"",
    "name":"Chinese Pond-Heron",
    "sname":"Ardeola bacchus",
    "code":5
  },
  {
    "category":"",
    "name":"Green Heron",
    "sname":"Butorides virescens",
    "code":1
  },
  {
    "category":"",
    "name":"Black-crowned Night-Heron",
    "sname":"Nycticorax nycticorax",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow-crowned Night-Heron",
    "sname":"Nyctanassa violacea",
    "code":1
  },
  {
    "category":"Ibises and Spoonbills (Threskiornithidae)",
    "name":"White Ibis",
    "sname":"Eudocimus albus",
    "code":1
  },
  {
    "category":"",
    "name":"Scarlet Ibis",
    "sname":"Eudocimus ruber",
    "code":5
  },
  {
    "category":"",
    "name":"Glossy Ibis",
    "sname":"Plegadis falcinellus",
    "code":1
  },
  {
    "category":"",
    "name":"White-faced Ibis",
    "sname":"Plegadis chihi",
    "code":1
  },
  {
    "category":"",
    "name":"Roseate Spoonbill",
    "sname":"Platalea ajaja",
    "code":1
  },
  {
    "category":"New World Vultures (Cathartidae)",
    "name":"Black Vulture",
    "sname":"Coragyps atratus",
    "code":1
  },
  {
    "category":"",
    "name":"Turkey Vulture",
    "sname":"Cathartes aura",
    "code":1
  },
  {
    "category":"",
    "name":"California Condor",
    "sname":"Gymnogyps californianus",
    "code":6
  },
  {
    "category":"Ospreys (Pandionidae)",
    "name":"Osprey",
    "sname":"Pandion haliaetus",
    "code":1
  },
  {
    "category":"Hawks, Kites, Eagles, and Allies (Accipitridae)",
    "name":"Hook-billed Kite",
    "sname":"Chondrohierax uncinatus",
    "code":3
  },
  {
    "category":"",
    "name":"Swallow-tailed Kite",
    "sname":"Elanoides forficatus",
    "code":1
  },
  {
    "category":"",
    "name":"White-tailed Kite",
    "sname":"Elanus leucurus",
    "code":1
  },
  {
    "category":"",
    "name":"Snail Kite",
    "sname":"Rostrhamus sociabilis",
    "code":2
  },
  {
    "category":"",
    "name":"Double-toothed Kite",
    "sname":"Harpagus bidentatus",
    "code":5
  },
  {
    "category":"",
    "name":"Mississippi Kite",
    "sname":"Ictinia mississippiensis",
    "code":1
  },
  {
    "category":"",
    "name":"Bald Eagle",
    "sname":"Haliaeetus leucocephalus",
    "code":1
  },
  {
    "category":"",
    "name":"White-tailed Eagle",
    "sname":"Haliaeetus albicilla",
    "code":4
  },
  {
    "category":"",
    "name":"Steller's Sea-Eagle",
    "sname":"Haliaeetus pelagicus",
    "code":4
  },
  {
    "category":"",
    "name":"Northern Harrier",
    "sname":"Circus cyaneus",
    "code":1
  },
  {
    "category":"",
    "name":"Sharp-shinned Hawk",
    "sname":"Accipiter striatus",
    "code":1
  },
  {
    "category":"",
    "name":"Cooper's Hawk",
    "sname":"Accipiter cooperii",
    "code":1
  },
  {
    "category":"",
    "name":"Northern Goshawk",
    "sname":"Accipiter gentilis",
    "code":1
  },
  {
    "category":"",
    "name":"Crane Hawk",
    "sname":"Geranospiza caerulescens",
    "code":5
  },
  {
    "category":"",
    "name":"Common Black-Hawk",
    "sname":"Buteogallus anthracinus",
    "code":2
  },
  {
    "category":"",
    "name":"Harris's Hawk",
    "sname":"Parabuteo unicinctus",
    "code":1
  },
  {
    "category":"",
    "name":"Roadside Hawk",
    "sname":"Buteo magnirostris",
    "code":4
  },
  {
    "category":"",
    "name":"Red-shouldered Hawk",
    "sname":"Buteo lineatus",
    "code":1
  },
  {
    "category":"",
    "name":"Broad-winged Hawk",
    "sname":"Buteo platypterus",
    "code":1
  },
  {
    "category":"",
    "name":"Gray Hawk",
    "sname":"Buteo plagiatus",
    "code":2
  },
  {
    "category":"",
    "name":"Short-tailed Hawk",
    "sname":"Buteo brachyurus",
    "code":2
  },
  {
    "category":"",
    "name":"Swainson's Hawk",
    "sname":"Buteo swainsoni",
    "code":1
  },
  {
    "category":"",
    "name":"White-tailed Hawk",
    "sname":"Buteo albicaudatus",
    "code":2
  },
  {
    "category":"",
    "name":"Zone-tailed Hawk",
    "sname":"Buteo albonotatus",
    "code":2
  },
  {
    "category":"",
    "name":"Red-tailed Hawk",
    "sname":"Buteo jamaicensis",
    "code":1
  },
  {
    "category":"",
    "name":"Ferruginous Hawk",
    "sname":"Buteo regalis",
    "code":1
  },
  {
    "category":"",
    "name":"Rough-legged Hawk",
    "sname":"Buteo lagopus",
    "code":1
  },
  {
    "category":"",
    "name":"Golden Eagle",
    "sname":"Aquila chrysaetos",
    "code":1
  },
  {
    "category":"Rails, Gallinules, and Coots (Rallidae)",
    "name":"Yellow Rail",
    "sname":"Coturnicops noveboracensis",
    "code":2
  },
  {
    "category":"",
    "name":"Black Rail",
    "sname":"Laterallus jamaicensis",
    "code":2
  },
  {
    "category":"",
    "name":"Corn Crake",
    "sname":"Crex crex",
    "code":4
  },
  {
    "category":"",
    "name":"Clapper Rail",
    "sname":"Rallus longirostris",
    "code":1
  },
  {
    "category":"",
    "name":"King Rail",
    "sname":"Rallus elegans",
    "code":1
  },
  {
    "category":"",
    "name":"Virginia Rail",
    "sname":"Rallus limicola",
    "code":1
  },
  {
    "category":"",
    "name":"Sora",
    "sname":"Porzana carolina",
    "code":1
  },
  {
    "category":"",
    "name":"Paint-billed Crake",
    "sname":"Neocrex erythrops",
    "code":5
  },
  {
    "category":"",
    "name":"Spotted Rail",
    "sname":"Pardirallus maculatus",
    "code":5
  },
  {
    "category":"",
    "name":"Purple Gallinule",
    "sname":"Porphyrio martinicus",
    "code":1
  },
  {
    "category":"",
    "name":"Common Gallinule",
    "sname":"Gallinula galeata",
    "code":1
  },
  {
    "category":"",
    "name":"Eurasian Coot",
    "sname":"Fulica atra",
    "code":5
  },
  {
    "category":"",
    "name":"American Coot",
    "sname":"Fulica americana",
    "code":1
  },
  {
    "category":"Sungrebes (Heliornithidae)",
    "name":"Sungrebe",
    "sname":"Heliornis fulica",
    "code":5
  },
  {
    "category":"Limpkins (Aramidae)",
    "name":"Limpkin",
    "sname":"Aramus guarauna",
    "code":2
  },
  {
    "category":"Cranes (Gruidae)",
    "name":"Sandhill Crane",
    "sname":"Grus canadensis",
    "code":1
  },
  {
    "category":"",
    "name":"Common Crane",
    "sname":"Grus grus",
    "code":4
  },
  {
    "category":"",
    "name":"Whooping Crane",
    "sname":"Grus americana",
    "code":2
  },
  {
    "category":"Thick-knees (Burhinidae)",
    "name":"Double-striped Thick-knee",
    "sname":"Burhinus bistriatus",
    "code":5
  },
  {
    "category":"Lapwings and Plovers (Charadriidae)",
    "name":"Northern Lapwing",
    "sname":"Vanellus vanellus",
    "code":4
  },
  {
    "category":"",
    "name":"Black-bellied Plover",
    "sname":"Pluvialis squatarola",
    "code":1
  },
  {
    "category":"",
    "name":"European Golden-Plover",
    "sname":"Pluvialis apricaria",
    "code":4
  },
  {
    "category":"",
    "name":"American Golden-Plover",
    "sname":"Pluvialis dominica",
    "code":1
  },
  {
    "category":"",
    "name":"Pacific Golden-Plover",
    "sname":"Pluvialis fulva",
    "code":2
  },
  {
    "category":"",
    "name":"Lesser Sand-Plover",
    "sname":"Charadrius mongolus",
    "code":3
  },
  {
    "category":"",
    "name":"Greater Sand-Plover",
    "sname":"Charadrius leschenaultii",
    "code":5
  },
  {
    "category":"",
    "name":"Collared Plover",
    "sname":"Charadrius collaris",
    "code":5
  },
  {
    "category":"",
    "name":"Snowy Plover",
    "sname":"Charadrius nivosus",
    "code":1
  },
  {
    "category":"",
    "name":"Wilson's Plover",
    "sname":"Charadrius wilsonia",
    "code":1
  },
  {
    "category":"",
    "name":"Common Ringed Plover",
    "sname":"Charadrius hiaticula",
    "code":2
  },
  {
    "category":"",
    "name":"Semipalmated Plover",
    "sname":"Charadrius semipalmatus",
    "code":1
  },
  {
    "category":"",
    "name":"Piping Plover",
    "sname":"Charadrius melodus",
    "code":2
  },
  {
    "category":"",
    "name":"Little Ringed Plover",
    "sname":"Charadrius dubius",
    "code":5
  },
  {
    "category":"",
    "name":"Killdeer",
    "sname":"Charadrius vociferus",
    "code":1
  },
  {
    "category":"",
    "name":"Mountain Plover",
    "sname":"Charadrius montanus",
    "code":2
  },
  {
    "category":"",
    "name":"Eurasian Dotterel",
    "sname":"Charadrius morinellus",
    "code":4
  },
  {
    "category":"Oystercatchers (Haematopodidae)",
    "name":"Eurasian Oystercatcher",
    "sname":"Haematopus ostralegus",
    "code":5
  },
  {
    "category":"",
    "name":"American Oystercatcher",
    "sname":"Haematopus palliatus",
    "code":1
  },
  {
    "category":"",
    "name":"Black Oystercatcher",
    "sname":"Haematopus bachmani",
    "code":1
  },
  {
    "category":"Stilts and Avocets (Recurvirostridae)",
    "name":"Black-winged Stilt",
    "sname":"Himantopus himantopus",
    "code":5
  },
  {
    "category":"",
    "name":"Black-necked Stilt",
    "sname":"Himantopus mexicanus",
    "code":1
  },
  {
    "category":"",
    "name":"American Avocet",
    "sname":"Recurvirostra americana",
    "code":1
  },
  {
    "category":"Jacanas (Jacanidae)",
    "name":"Northern Jacana",
    "sname":"Jacana spinosa",
    "code":4
  },
  {
    "category":"Sandpipers, Phalaropes, and Allies (Scolopacidae)",
    "name":"Terek Sandpiper",
    "sname":"Xenus cinereus",
    "code":3
  },
  {
    "category":"",
    "name":"Common Sandpiper",
    "sname":"Actitis hypoleucos",
    "code":3
  },
  {
    "category":"",
    "name":"Spotted Sandpiper",
    "sname":"Actitis macularius",
    "code":1
  },
  {
    "category":"",
    "name":"Green Sandpiper",
    "sname":"Tringa ochropus",
    "code":4
  },
  {
    "category":"",
    "name":"Solitary Sandpiper",
    "sname":"Tringa solitaria",
    "code":1
  },
  {
    "category":"",
    "name":"Gray-tailed Tattler",
    "sname":"Tringa brevipes",
    "code":3
  },
  {
    "category":"",
    "name":"Wandering Tattler",
    "sname":"Tringa incana",
    "code":1
  },
  {
    "category":"",
    "name":"Spotted Redshank",
    "sname":"Tringa erythropus",
    "code":4
  },
  {
    "category":"",
    "name":"Greater Yellowlegs",
    "sname":"Tringa melanoleuca",
    "code":1
  },
  {
    "category":"",
    "name":"Common Greenshank",
    "sname":"Tringa nebularia",
    "code":3
  },
  {
    "category":"",
    "name":"Willet",
    "sname":"Tringa semipalmata",
    "code":1
  },
  {
    "category":"",
    "name":"Lesser Yellowlegs",
    "sname":"Tringa flavipes",
    "code":1
  },
  {
    "category":"",
    "name":"Marsh Sandpiper",
    "sname":"Tringa stagnatilis",
    "code":5
  },
  {
    "category":"",
    "name":"Wood Sandpiper",
    "sname":"Tringa glareola",
    "code":2
  },
  {
    "category":"",
    "name":"Common Redshank",
    "sname":"Tringa totanus",
    "code":5
  },
  {
    "category":"",
    "name":"Upland Sandpiper",
    "sname":"Bartramia longicauda",
    "code":1
  },
  {
    "category":"",
    "name":"Little Curlew",
    "sname":"Numenius minutus",
    "code":5
  },
  {
    "category":"",
    "name":"Eskimo Curlew",
    "sname":"Numenius borealis",
    "code":6
  },
  {
    "category":"",
    "name":"Whimbrel",
    "sname":"Numenius phaeopus",
    "code":1
  },
  {
    "category":"",
    "name":"Bristle-thighed Curlew",
    "sname":"Numenius tahitiensis",
    "code":2
  },
  {
    "category":"",
    "name":"Far Eastern Curlew",
    "sname":"Numenius madagascariensis",
    "code":4
  },
  {
    "category":"",
    "name":"Slender-billed Curlew",
    "sname":"Numenius tenuirostris",
    "code":6
  },
  {
    "category":"",
    "name":"Eurasian Curlew",
    "sname":"Numenius arquata",
    "code":4
  },
  {
    "category":"",
    "name":"Long-billed Curlew",
    "sname":"Numenius americanus",
    "code":1
  },
  {
    "category":"",
    "name":"Black-tailed Godwit",
    "sname":"Limosa limosa",
    "code":3
  },
  {
    "category":"",
    "name":"Hudsonian Godwit",
    "sname":"Limosa haemastica",
    "code":1
  },
  {
    "category":"",
    "name":"Bar-tailed Godwit",
    "sname":"Limosa lapponica",
    "code":2
  },
  {
    "category":"",
    "name":"Marbled Godwit",
    "sname":"Limosa fedoa",
    "code":1
  },
  {
    "category":"",
    "name":"Ruddy Turnstone",
    "sname":"Arenaria interpres",
    "code":1
  },
  {
    "category":"",
    "name":"Black Turnstone",
    "sname":"Arenaria melanocephala",
    "code":1
  },
  {
    "category":"",
    "name":"Surfbird",
    "sname":"Aphriza virgata",
    "code":1
  },
  {
    "category":"",
    "name":"Great Knot",
    "sname":"Calidris tenuirostris",
    "code":4
  },
  {
    "category":"",
    "name":"Red Knot",
    "sname":"Calidris canutus",
    "code":1
  },
  {
    "category":"",
    "name":"Sanderling",
    "sname":"Calidris alba",
    "code":1
  },
  {
    "category":"",
    "name":"Semipalmated Sandpiper",
    "sname":"Calidris pusilla",
    "code":1
  },
  {
    "category":"",
    "name":"Western Sandpiper",
    "sname":"Calidris mauri",
    "code":1
  },
  {
    "category":"",
    "name":"Red-necked Stint",
    "sname":"Calidris ruficollis",
    "code":3
  },
  {
    "category":"",
    "name":"Little Stint",
    "sname":"Calidris minuta",
    "code":4
  },
  {
    "category":"",
    "name":"Temminck's Stint",
    "sname":"Calidris temminckii",
    "code":3
  },
  {
    "category":"",
    "name":"Long-toed Stint",
    "sname":"Calidris subminuta",
    "code":3
  },
  {
    "category":"",
    "name":"Least Sandpiper",
    "sname":"Calidris minutilla",
    "code":1
  },
  {
    "category":"",
    "name":"White-rumped Sandpiper",
    "sname":"Calidris fuscicollis",
    "code":1
  },
  {
    "category":"",
    "name":"Baird's Sandpiper",
    "sname":"Calidris bairdii",
    "code":1
  },
  {
    "category":"",
    "name":"Pectoral Sandpiper",
    "sname":"Calidris melanotos",
    "code":1
  },
  {
    "category":"",
    "name":"Sharp-tailed Sandpiper",
    "sname":"Calidris acuminata",
    "code":3
  },
  {
    "category":"",
    "name":"Purple Sandpiper",
    "sname":"Calidris maritima",
    "code":1
  },
  {
    "category":"",
    "name":"Rock Sandpiper",
    "sname":"Calidris ptilocnemis",
    "code":2
  },
  {
    "category":"",
    "name":"Dunlin",
    "sname":"Calidris alpina",
    "code":1
  },
  {
    "category":"",
    "name":"Curlew Sandpiper",
    "sname":"Calidris ferruginea",
    "code":3
  },
  {
    "category":"",
    "name":"Stilt Sandpiper",
    "sname":"Calidris himantopus",
    "code":1
  },
  {
    "category":"",
    "name":"Spoon-billed Sandpiper",
    "sname":"Eurynorhynchus pygmeus",
    "code":4
  },
  {
    "category":"",
    "name":"Broad-billed Sandpiper",
    "sname":"Limicola falcinellus",
    "code":4
  },
  {
    "category":"",
    "name":"Buff-breasted Sandpiper",
    "sname":"Tryngites subruficollis",
    "code":1
  },
  {
    "category":"",
    "name":"Ruff",
    "sname":"Philomachus pugnax",
    "code":3
  },
  {
    "category":"",
    "name":"Short-billed Dowitcher",
    "sname":"Limnodromus griseus",
    "code":1
  },
  {
    "category":"",
    "name":"Long-billed Dowitcher",
    "sname":"Limnodromus scolopaceus",
    "code":1
  },
  {
    "category":"",
    "name":"Jack Snipe",
    "sname":"Lymnocryptes minimus",
    "code":4
  },
  {
    "category":"",
    "name":"Wilson's Snipe",
    "sname":"Gallinago delicata",
    "code":1
  },
  {
    "category":"",
    "name":"Common Snipe",
    "sname":"Gallinago gallinago",
    "code":3
  },
  {
    "category":"",
    "name":"Pin-tailed Snipe",
    "sname":"Gallinago stenura",
    "code":5
  },
  {
    "category":"",
    "name":"Solitary Snipe",
    "sname":"Gallinago solitaria",
    "code":5
  },
  {
    "category":"",
    "name":"Eurasian Woodcock",
    "sname":"Scolopax rusticola",
    "code":5
  },
  {
    "category":"",
    "name":"American Woodcock",
    "sname":"Scolopax minor",
    "code":1
  },
  {
    "category":"",
    "name":"Wilson's Phalarope",
    "sname":"Phalaropus tricolor",
    "code":1
  },
  {
    "category":"",
    "name":"Red-necked Phalarope",
    "sname":"Phalaropus lobatus",
    "code":1
  },
  {
    "category":"",
    "name":"Red Phalarope",
    "sname":"Phalaropus fulicarius",
    "code":1
  },
  {
    "category":"Pratincoles (Glareolidae)",
    "name":"Oriental Pratincole",
    "sname":"Glareola maldivarum",
    "code":5
  },
  {
    "category":"Gulls, Terns, and Skimmers (Laridae)",
    "name":"Swallow-tailed Gull",
    "sname":"Creagrus furcatus",
    "code":5
  },
  {
    "category":"",
    "name":"Black-legged Kittiwake",
    "sname":"Rissa tridactyla",
    "code":1
  },
  {
    "category":"",
    "name":"Red-legged Kittiwake",
    "sname":"Rissa brevirostris",
    "code":2
  },
  {
    "category":"",
    "name":"Ivory Gull",
    "sname":"Pagophila eburnea",
    "code":3
  },
  {
    "category":"",
    "name":"Sabine's Gull",
    "sname":"Xema sabini",
    "code":1
  },
  {
    "category":"",
    "name":"Bonaparte's Gull",
    "sname":"Chroicocephalus philadelphia",
    "code":1
  },
  {
    "category":"",
    "name":"Gray-hooded Gull",
    "sname":"Chroicocephalus cirrocephalus",
    "code":5
  },
  {
    "category":"",
    "name":"Black-headed Gull",
    "sname":"Chroicocephalus ridibundus",
    "code":3
  },
  {
    "category":"",
    "name":"Little Gull",
    "sname":"Hydrocoloeus minutus",
    "code":3
  },
  {
    "category":"",
    "name":"Ross's Gull",
    "sname":"Rhodostethia rosea",
    "code":3
  },
  {
    "category":"",
    "name":"Laughing Gull",
    "sname":"Leucophaeus atricilla",
    "code":1
  },
  {
    "category":"",
    "name":"Franklin's Gull",
    "sname":"Leucophaeus pipixcan",
    "code":1
  },
  {
    "category":"",
    "name":"Belcher's Gull",
    "sname":"Larus belcheri",
    "code":5
  },
  {
    "category":"",
    "name":"Black-tailed Gull",
    "sname":"Larus crassirostris",
    "code":4
  },
  {
    "category":"",
    "name":"Heermann's Gull",
    "sname":"Larus heermanni",
    "code":1
  },
  {
    "category":"",
    "name":"Mew Gull",
    "sname":"Larus canus",
    "code":1
  },
  {
    "category":"",
    "name":"Ring-billed Gull",
    "sname":"Larus delawarensis",
    "code":1
  },
  {
    "category":"",
    "name":"Western Gull",
    "sname":"Larus occidentalis",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow-footed Gull",
    "sname":"Larus livens",
    "code":2
  },
  {
    "category":"",
    "name":"California Gull",
    "sname":"Larus californicus",
    "code":1
  },
  {
    "category":"",
    "name":"Herring Gull",
    "sname":"Larus argentatus",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow-legged Gull",
    "sname":"Larus michahellis",
    "code":4
  },
  {
    "category":"",
    "name":"Thayer's Gull",
    "sname":"Larus thayeri",
    "code":2
  },
  {
    "category":"",
    "name":"Iceland Gull",
    "sname":"Larus glaucoides",
    "code":2
  },
  {
    "category":"",
    "name":"Lesser Black-backed Gull",
    "sname":"Larus fuscus",
    "code":2
  },
  {
    "category":"",
    "name":"Slaty-backed Gull",
    "sname":"Larus schistisagus",
    "code":3
  },
  {
    "category":"",
    "name":"Glaucous-winged Gull",
    "sname":"Larus glaucescens",
    "code":1
  },
  {
    "category":"",
    "name":"Glaucous Gull",
    "sname":"Larus hyperboreus",
    "code":1
  },
  {
    "category":"",
    "name":"Great Black-backed Gull",
    "sname":"Larus marinus",
    "code":1
  },
  {
    "category":"",
    "name":"Kelp Gull",
    "sname":"Larus dominicanus",
    "code":4
  },
  {
    "category":"",
    "name":"Brown Noddy",
    "sname":"Anous stolidus",
    "code":2
  },
  {
    "category":"",
    "name":"Black Noddy",
    "sname":"Anous minutus",
    "code":3
  },
  {
    "category":"",
    "name":"Sooty Tern",
    "sname":"Onychoprion fuscatus",
    "code":2
  },
  {
    "category":"",
    "name":"Bridled Tern",
    "sname":"Onychoprion anaethetus",
    "code":2
  },
  {
    "category":"",
    "name":"Aleutian Tern",
    "sname":"Onychoprion aleuticus",
    "code":2
  },
  {
    "category":"",
    "name":"Least Tern",
    "sname":"Sternula antillarum",
    "code":1
  },
  {
    "category":"",
    "name":"Large-billed Tern",
    "sname":"Phaetusa simplex",
    "code":5
  },
  {
    "category":"",
    "name":"Gull-billed Tern",
    "sname":"Gelochelidon nilotica",
    "code":1
  },
  {
    "category":"",
    "name":"Caspian Tern",
    "sname":"Hydroprogne caspia",
    "code":1
  },
  {
    "category":"",
    "name":"Black Tern",
    "sname":"Chlidonias niger",
    "code":1
  },
  {
    "category":"",
    "name":"White-winged Tern",
    "sname":"Chlidonias leucopterus",
    "code":4
  },
  {
    "category":"",
    "name":"Whiskered Tern",
    "sname":"Chlidonias hybrida",
    "code":5
  },
  {
    "category":"",
    "name":"Roseate Tern",
    "sname":"Sterna dougallii",
    "code":2
  },
  {
    "category":"",
    "name":"Common Tern",
    "sname":"Sterna hirundo",
    "code":1
  },
  {
    "category":"",
    "name":"Arctic Tern",
    "sname":"Sterna paradisaea",
    "code":1
  },
  {
    "category":"",
    "name":"Forster's Tern",
    "sname":"Sterna forsteri",
    "code":1
  },
  {
    "category":"",
    "name":"Royal Tern",
    "sname":"Thalasseus maximus",
    "code":1
  },
  {
    "category":"",
    "name":"Sandwich Tern",
    "sname":"Thalasseus sandvicensis",
    "code":1
  },
  {
    "category":"",
    "name":"Elegant Tern",
    "sname":"Thalasseus elegans",
    "code":1
  },
  {
    "category":"",
    "name":"Black Skimmer",
    "sname":"Rynchops niger",
    "code":1
  },
  {
    "category":"Skuas and Jaegers (Stercorariidae)",
    "name":"Great Skua",
    "sname":"Stercorarius skua",
    "code":3
  },
  {
    "category":"",
    "name":"South Polar Skua",
    "sname":"Stercorarius maccormicki",
    "code":2
  },
  {
    "category":"",
    "name":"Pomarine Jaeger",
    "sname":"Stercorarius pomarinus",
    "code":1
  },
  {
    "category":"",
    "name":"Parasitic Jaeger",
    "sname":"Stercorarius parasiticus",
    "code":1
  },
  {
    "category":"",
    "name":"Long-tailed Jaeger",
    "sname":"Stercorarius longicaudus",
    "code":1
  },
  {
    "category":"Auks, Murres, and Puffins (Alcidae)",
    "name":"Dovekie",
    "sname":"Alle alle",
    "code":2
  },
  {
    "category":"",
    "name":"Common Murre",
    "sname":"Uria aalge",
    "code":1
  },
  {
    "category":"",
    "name":"Thick-billed Murre",
    "sname":"Uria lomvia",
    "code":1
  },
  {
    "category":"",
    "name":"Razorbill",
    "sname":"Alca torda",
    "code":1
  },
  {
    "category":"",
    "name":"Great Auk",
    "sname":"Pinguinus impennis",
    "code":6
  },
  {
    "category":"",
    "name":"Black Guillemot",
    "sname":"Cepphus grylle",
    "code":1
  },
  {
    "category":"",
    "name":"Pigeon Guillemot",
    "sname":"Cepphus columba",
    "code":1
  },
  {
    "category":"",
    "name":"Long-billed Murrelet",
    "sname":"Brachyramphus perdix",
    "code":3
  },
  {
    "category":"",
    "name":"Marbled Murrelet",
    "sname":"Brachyramphus marmoratus",
    "code":1
  },
  {
    "category":"",
    "name":"Kittlitz's Murrelet",
    "sname":"Brachyramphus brevirostris",
    "code":2
  },
  {
    "category":"",
    "name":"ScrippsÕs Murrelet",
    "sname":"Synthliboramphus scrippsi",
    "code":2
  },
  {
    "category":"",
    "name":"Guadalupe Murrelet",
    "sname":"Synthliboramphus hypoleucus",
    "code":3
  },
  {
    "category":"",
    "name":"Craveri's Murrelet",
    "sname":"Synthliboramphus craveri",
    "code":3
  },
  {
    "category":"",
    "name":"Ancient Murrelet",
    "sname":"Synthliboramphus antiquus",
    "code":2
  },
  {
    "category":"",
    "name":"Cassin's Auklet",
    "sname":"Ptychoramphus aleuticus",
    "code":1
  },
  {
    "category":"",
    "name":"Parakeet Auklet",
    "sname":"Aethia psittacula",
    "code":2
  },
  {
    "category":"",
    "name":"Least Auklet",
    "sname":"Aethia pusilla",
    "code":2
  },
  {
    "category":"",
    "name":"Whiskered Auklet",
    "sname":"Aethia pygmaea",
    "code":2
  },
  {
    "category":"",
    "name":"Crested Auklet",
    "sname":"Aethia cristatella",
    "code":2
  },
  {
    "category":"",
    "name":"Rhinoceros Auklet",
    "sname":"Cerorhinca monocerata",
    "code":1
  },
  {
    "category":"",
    "name":"Atlantic Puffin",
    "sname":"Fratercula arctica",
    "code":1
  },
  {
    "category":"",
    "name":"Horned Puffin",
    "sname":"Fratercula corniculata",
    "code":1
  },
  {
    "category":"",
    "name":"Tufted Puffin",
    "sname":"Fratercula cirrhata",
    "code":1
  },
  {
    "category":"Pigeons and Doves (Columbidae)",
    "name":"Rock Pigeon",
    "sname":"Columba livia",
    "code":1
  },
  {
    "category":"",
    "name":"Scaly-naped Pigeon",
    "sname":"Patagioenas squamosa",
    "code":5
  },
  {
    "category":"",
    "name":"White-crowned Pigeon",
    "sname":"Patagioenas leucocephala",
    "code":2
  },
  {
    "category":"",
    "name":"Red-billed Pigeon",
    "sname":"Patagioenas flavirostris",
    "code":2
  },
  {
    "category":"",
    "name":"Band-tailed Pigeon",
    "sname":"Patagioenas fasciata",
    "code":1
  },
  {
    "category":"",
    "name":"Oriental Turtle-Dove",
    "sname":"Streptopelia orientalis",
    "code":4
  },
  {
    "category":"",
    "name":"European Turtle-Dove",
    "sname":"Streptopelia turtur",
    "code":5
  },
  {
    "category":"",
    "name":"Eurasian Collared-Dove",
    "sname":"Streptopelia decaocto",
    "code":1
  },
  {
    "category":"",
    "name":"Spotted Dove",
    "sname":"Streptopelia chinensis",
    "code":2
  },
  {
    "category":"",
    "name":"White-winged Dove",
    "sname":"Zenaida asiatica",
    "code":1
  },
  {
    "category":"",
    "name":"Zenaida Dove",
    "sname":"Zenaida aurita",
    "code":5
  },
  {
    "category":"",
    "name":"Mourning Dove",
    "sname":"Zenaida macroura",
    "code":1
  },
  {
    "category":"",
    "name":"Passenger Pigeon",
    "sname":"Ectopistes migratorius",
    "code":6
  },
  {
    "category":"",
    "name":"Inca Dove",
    "sname":"Columbina inca",
    "code":1
  },
  {
    "category":"",
    "name":"Common Ground-Dove",
    "sname":"Columbina passerina",
    "code":1
  },
  {
    "category":"",
    "name":"Ruddy Ground-Dove",
    "sname":"Columbina talpacoti",
    "code":3
  },
  {
    "category":"",
    "name":"White-tipped Dove",
    "sname":"Leptotila verreauxi",
    "code":2
  },
  {
    "category":"",
    "name":"Key West Quail-Dove",
    "sname":"Geotrygon chrysia",
    "code":4
  },
  {
    "category":"",
    "name":"Ruddy Quail-Dove",
    "sname":"Geotrygon montana",
    "code":5
  },
  {
    "category":"Cuckoos, Roadrunners, and Anis (Cuculidae)",
    "name":"Common Cuckoo",
    "sname":"Cuculus canorus",
    "code":3
  },
  {
    "category":"",
    "name":"Oriental Cuckoo",
    "sname":"Cuculus optatus",
    "code":4
  },
  {
    "category":"",
    "name":"Yellow-billed Cuckoo",
    "sname":"Coccyzus americanus",
    "code":1
  },
  {
    "category":"",
    "name":"Mangrove Cuckoo",
    "sname":"Coccyzus minor",
    "code":2
  },
  {
    "category":"",
    "name":"Black-billed Cuckoo",
    "sname":"Coccyzus erythropthalmus",
    "code":1
  },
  {
    "category":"",
    "name":"Greater Roadrunner",
    "sname":"Geococcyx californianus",
    "code":1
  },
  {
    "category":"",
    "name":"Smooth-billed Ani",
    "sname":"Crotophaga ani",
    "code":3
  },
  {
    "category":"",
    "name":"Groove-billed Ani",
    "sname":"Crotophaga sulcirostris",
    "code":2
  },
  {
    "category":"Barn Owls (Tytonidae)",
    "name":"Barn Owl",
    "sname":"Tyto alba",
    "code":1
  },
  {
    "category":"Typical Owls (Strigidae)",
    "name":"Flammulated Owl",
    "sname":"Otus flammeolus",
    "code":2
  },
  {
    "category":"",
    "name":"Oriental Scops-Owl",
    "sname":"Otus sunia",
    "code":5
  },
  {
    "category":"",
    "name":"Western Screech-Owl",
    "sname":"Megascops kennicottii",
    "code":1
  },
  {
    "category":"",
    "name":"Eastern Screech-Owl",
    "sname":"Megascops asio",
    "code":1
  },
  {
    "category":"",
    "name":"Whiskered Screech-Owl",
    "sname":"Megascops trichopsis",
    "code":2
  },
  {
    "category":"",
    "name":"Great Horned Owl",
    "sname":"Bubo virginianus",
    "code":1
  },
  {
    "category":"",
    "name":"Snowy Owl",
    "sname":"Bubo scandiacus",
    "code":2
  },
  {
    "category":"",
    "name":"Northern Hawk Owl",
    "sname":"Surnia ulula",
    "code":2
  },
  {
    "category":"",
    "name":"Northern Pygmy-Owl",
    "sname":"Glaucidium gnoma",
    "code":2
  },
  {
    "category":"",
    "name":"Ferruginous Pygmy-Owl",
    "sname":"Glaucidium brasilianum",
    "code":3
  },
  {
    "category":"",
    "name":"Elf Owl",
    "sname":"Micrathene whitneyi",
    "code":2
  },
  {
    "category":"",
    "name":"Burrowing Owl",
    "sname":"Athene cunicularia",
    "code":1
  },
  {
    "category":"",
    "name":"Mottled Owl",
    "sname":"Ciccaba virgata",
    "code":5
  },
  {
    "category":"",
    "name":"Spotted Owl",
    "sname":"Strix occidentalis",
    "code":2
  },
  {
    "category":"",
    "name":"Barred Owl",
    "sname":"Strix varia",
    "code":1
  },
  {
    "category":"",
    "name":"Great Gray Owl",
    "sname":"Strix nebulosa",
    "code":2
  },
  {
    "category":"",
    "name":"Long-eared Owl",
    "sname":"Asio otus",
    "code":2
  },
  {
    "category":"",
    "name":"Stygian Owl",
    "sname":"Asio stygius",
    "code":5
  },
  {
    "category":"",
    "name":"Short-eared Owl",
    "sname":"Asio flammeus",
    "code":1
  },
  {
    "category":"",
    "name":"Boreal Owl",
    "sname":"Aegolius funereus",
    "code":2
  },
  {
    "category":"",
    "name":"Northern Saw-whet Owl",
    "sname":"Aegolius acadicus",
    "code":2
  },
  {
    "category":"",
    "name":"Brown Hawk-Owl",
    "sname":"Ninox scutulata",
    "code":5
  },
  {
    "category":"Goatsuckers (Caprimulgidae)",
    "name":"Lesser Nighthawk",
    "sname":"Chordeiles acutipennis",
    "code":1
  },
  {
    "category":"",
    "name":"Common Nighthawk",
    "sname":"Chordeiles minor",
    "code":1
  },
  {
    "category":"",
    "name":"Antillean Nighthawk",
    "sname":"Chordeiles gundlachii",
    "code":2
  },
  {
    "category":"",
    "name":"Common Pauraque",
    "sname":"Nyctidromus albicollis",
    "code":2
  },
  {
    "category":"",
    "name":"Common Poorwill",
    "sname":"Phalaenoptilus nuttallii",
    "code":1
  },
  {
    "category":"",
    "name":"Chuck-will's-widow",
    "sname":"Antrostomus carolinensis",
    "code":1
  },
  {
    "category":"",
    "name":"Buff-collared Nightjar",
    "sname":"Antrostomus ridgwayi",
    "code":3
  },
  {
    "category":"",
    "name":"Eastern Whip-poor-will",
    "sname":"Antrostomus vociferus",
    "code":1
  },
  {
    "category":"",
    "name":"Mexican Whip-poor-will",
    "sname":"Antrostomus arizonae",
    "code":1
  },
  {
    "category":"",
    "name":"Gray Nightjar",
    "sname":"Caprimulgus indicus",
    "code":5
  },
  {
    "category":"Swifts (Apodidae)",
    "name":"Black Swift",
    "sname":"Cypseloides niger",
    "code":2
  },
  {
    "category":"",
    "name":"White-collared Swift",
    "sname":"Streptoprocne zonaris",
    "code":4
  },
  {
    "category":"",
    "name":"Chimney Swift",
    "sname":"Chaetura pelagica",
    "code":1
  },
  {
    "category":"",
    "name":"Vaux's Swift",
    "sname":"Chaetura vauxi",
    "code":1
  },
  {
    "category":"",
    "name":"White-throated Needletail",
    "sname":"Hirundapus caudacutus",
    "code":5
  },
  {
    "category":"",
    "name":"Common Swift",
    "sname":"Apus apus",
    "code":5
  },
  {
    "category":"",
    "name":"Fork-tailed Swift",
    "sname":"Apus pacificus",
    "code":4
  },
  {
    "category":"",
    "name":"White-throated Swift",
    "sname":"Aeronautes saxatalis",
    "code":1
  },
  {
    "category":"",
    "name":"Antillean Palm-Swift",
    "sname":"Tachornis phoenicobia",
    "code":5
  },
  {
    "category":"Hummingbirds (Trochilidae)",
    "name":"Green Violetear",
    "sname":"Colibri thalassinus",
    "code":3
  },
  {
    "category":"",
    "name":"Green-breasted Mango",
    "sname":"Anthracothorax prevostii",
    "code":4
  },
  {
    "category":"",
    "name":"Magnificent Hummingbird",
    "sname":"Eugenes fulgens",
    "code":2
  },
  {
    "category":"",
    "name":"Plain-capped Starthroat",
    "sname":"Heliomaster constantii",
    "code":4
  },
  {
    "category":"",
    "name":"Blue-throated Hummingbird",
    "sname":"Lampornis clemenciae",
    "code":2
  },
  {
    "category":"",
    "name":"Bahama Woodstar",
    "sname":"Calliphlox evelynae",
    "code":5
  },
  {
    "category":"",
    "name":"Lucifer Hummingbird",
    "sname":"Calothorax lucifer",
    "code":2
  },
  {
    "category":"",
    "name":"Ruby-throated Hummingbird",
    "sname":"Archilochus colubris",
    "code":1
  },
  {
    "category":"",
    "name":"Black-chinned Hummingbird",
    "sname":"Archilochus alexandri",
    "code":1
  },
  {
    "category":"",
    "name":"Anna's Hummingbird",
    "sname":"Calypte anna",
    "code":1
  },
  {
    "category":"",
    "name":"Costa's Hummingbird",
    "sname":"Calypte costae",
    "code":1
  },
  {
    "category":"",
    "name":"Bumblebee Hummingbird",
    "sname":"Atthis heloisa",
    "code":5
  },
  {
    "category":"",
    "name":"Broad-tailed Hummingbird",
    "sname":"Selasphorus platycercus",
    "code":1
  },
  {
    "category":"",
    "name":"Rufous Hummingbird",
    "sname":"Selasphorus rufus",
    "code":1
  },
  {
    "category":"",
    "name":"Allen's Hummingbird",
    "sname":"Selasphorus sasin",
    "code":1
  },
  {
    "category":"",
    "name":"Calliope Hummingbird",
    "sname":"Selasphorus calliope",
    "code":1
  },
  {
    "category":"",
    "name":"Broad-billed Hummingbird",
    "sname":"Cynanthus latirostris",
    "code":2
  },
  {
    "category":"",
    "name":"Berylline Hummingbird",
    "sname":"Amazilia beryllina",
    "code":3
  },
  {
    "category":"",
    "name":"Buff-bellied Hummingbird",
    "sname":"Amazilia yucatanensis",
    "code":2
  },
  {
    "category":"",
    "name":"Cinnamon Hummingbird",
    "sname":"Amazilia rutila",
    "code":5
  },
  {
    "category":"",
    "name":"Violet-crowned Hummingbird",
    "sname":"Amazilia violiceps",
    "code":2
  },
  {
    "category":"",
    "name":"White-eared Hummingbird",
    "sname":"Hylocharis leucotis",
    "code":3
  },
  {
    "category":"",
    "name":"Xantus's Hummingbird",
    "sname":"Hylocharis xantusii",
    "code":5
  },
  {
    "category":"Trogons (Trogonidae)",
    "name":"Elegant Trogon",
    "sname":"Trogon elegans",
    "code":2
  },
  {
    "category":"",
    "name":"Eared Quetzal",
    "sname":"Euptilotis neoxenus",
    "code":4
  },
  {
    "category":"Hoopoes (Upupidae)",
    "name":"Eurasian Hoopoe",
    "sname":"Upupa epops",
    "code":5
  },
  {
    "category":"Kingfishers (Alcedinidae)",
    "name":"Ringed Kingfisher",
    "sname":"Megaceryle torquata",
    "code":2
  },
  {
    "category":"",
    "name":"Belted Kingfisher",
    "sname":"Megaceryle alcyon",
    "code":1
  },
  {
    "category":"",
    "name":"Amazon Kingfisher",
    "sname":"Chloroceryle amazona",
    "code":5
  },
  {
    "category":"",
    "name":"Green Kingfisher",
    "sname":"Chloroceryle americana",
    "code":2
  },
  {
    "category":"Woodpeckers and Allies (Picidae)",
    "name":"Eurasian Wryneck",
    "sname":"Jynx torquilla",
    "code":5
  },
  {
    "category":"",
    "name":"Lewis's Woodpecker",
    "sname":"Melanerpes lewis",
    "code":1
  },
  {
    "category":"",
    "name":"Red-headed Woodpecker",
    "sname":"Melanerpes erythrocephalus",
    "code":1
  },
  {
    "category":"",
    "name":"Acorn Woodpecker",
    "sname":"Melanerpes formicivorus",
    "code":1
  },
  {
    "category":"",
    "name":"Gila Woodpecker",
    "sname":"Melanerpes uropygialis",
    "code":1
  },
  {
    "category":"",
    "name":"Golden-fronted Woodpecker",
    "sname":"Melanerpes aurifrons",
    "code":1
  },
  {
    "category":"",
    "name":"Red-bellied Woodpecker",
    "sname":"Melanerpes carolinus",
    "code":1
  },
  {
    "category":"",
    "name":"Williamson's Sapsucker",
    "sname":"Sphyrapicus thyroideus",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow-bellied Sapsucker",
    "sname":"Sphyrapicus varius",
    "code":1
  },
  {
    "category":"",
    "name":"Red-naped Sapsucker",
    "sname":"Sphyrapicus nuchalis",
    "code":1
  },
  {
    "category":"",
    "name":"Red-breasted Sapsucker",
    "sname":"Sphyrapicus ruber",
    "code":1
  },
  {
    "category":"",
    "name":"Great Spotted Woodpecker",
    "sname":"Dendrocopos major",
    "code":4
  },
  {
    "category":"",
    "name":"Ladder-backed Woodpecker",
    "sname":"Picoides scalaris",
    "code":1
  },
  {
    "category":"",
    "name":"Nuttall's Woodpecker",
    "sname":"Picoides nuttallii",
    "code":1
  },
  {
    "category":"",
    "name":"Downy Woodpecker",
    "sname":"Picoides pubescens",
    "code":1
  },
  {
    "category":"",
    "name":"Hairy Woodpecker",
    "sname":"Picoides villosus",
    "code":1
  },
  {
    "category":"",
    "name":"Arizona Woodpecker",
    "sname":"Picoides arizonae",
    "code":2
  },
  {
    "category":"",
    "name":"Red-cockaded Woodpecker",
    "sname":"Picoides borealis",
    "code":2
  },
  {
    "category":"",
    "name":"White-headed Woodpecker",
    "sname":"Picoides albolarvatus",
    "code":1
  },
  {
    "category":"",
    "name":"American Three-toed Woodpecker",
    "sname":"Picoides dorsalis",
    "code":2
  },
  {
    "category":"",
    "name":"Black-backed Woodpecker",
    "sname":"Picoides arcticus",
    "code":2
  },
  {
    "category":"",
    "name":"Northern Flicker",
    "sname":"Colaptes auratus",
    "code":1
  },
  {
    "category":"",
    "name":"Gilded Flicker",
    "sname":"Colaptes chrysoides",
    "code":2
  },
  {
    "category":"",
    "name":"Pileated Woodpecker",
    "sname":"Dryocopus pileatus",
    "code":1
  },
  {
    "category":"",
    "name":"Ivory-billed Woodpecker",
    "sname":"Campephilus principalis",
    "code":6
  },
  {
    "category":"Caracaras and Falcons (Falconidae)",
    "name":"Collared Forest-Falcon",
    "sname":"Micrastur semitorquatus",
    "code":5
  },
  {
    "category":"",
    "name":"Crested Caracara",
    "sname":"Caracara cheriway",
    "code":1
  },
  {
    "category":"",
    "name":"Eurasian Kestrel",
    "sname":"Falco tinnunculus",
    "code":4
  },
  {
    "category":"",
    "name":"American Kestrel",
    "sname":"Falco sparverius",
    "code":1
  },
  {
    "category":"",
    "name":"Red-footed Falcon",
    "sname":"Falco vespertinus",
    "code":5
  },
  {
    "category":"",
    "name":"Merlin",
    "sname":"Falco columbarius",
    "code":1
  },
  {
    "category":"",
    "name":"Eurasian Hobby",
    "sname":"Falco subbuteo",
    "code":4
  },
  {
    "category":"",
    "name":"Aplomado Falcon",
    "sname":"Falco femoralis",
    "code":3
  },
  {
    "category":"",
    "name":"Gyrfalcon",
    "sname":"Falco rusticolus",
    "code":2
  },
  {
    "category":"",
    "name":"Peregrine Falcon",
    "sname":"Falco peregrinus",
    "code":1
  },
  {
    "category":"",
    "name":"Prairie Falcon",
    "sname":"Falco mexicanus",
    "code":1
  },
  {
    "category":"Lories, Parakeets, Macaws, and Parrots (Psittacidae)",
    "name":"Budgerigar",
    "sname":"Melopsittacus undulatus",
    "code":3
  },
  {
    "category":"",
    "name":"Rosy-faced Lovebird",
    "sname":"Agapornis roseicollis",
    "code":2
  },
  {
    "category":"",
    "name":"Monk Parakeet",
    "sname":"Myiopsitta monachus",
    "code":2
  },
  {
    "category":"",
    "name":"Carolina Parakeet",
    "sname":"Conuropsis carolinensis",
    "code":6
  },
  {
    "category":"",
    "name":"Green Parakeet",
    "sname":"Aratinga holochlora",
    "code":2
  },
  {
    "category":"",
    "name":"Nanday Parakeet",
    "sname":"Nandayus nenday",
    "code":2
  },
  {
    "category":"",
    "name":"Thick-billed Parrot",
    "sname":"Rhynchopsitta pachyrhyncha",
    "code":6
  },
  {
    "category":"",
    "name":"White-winged Parakeet",
    "sname":"Brotogeris versicolurus",
    "code":2
  },
  {
    "category":"",
    "name":"Red-crowned Parrot",
    "sname":"Amazona viridigenalis",
    "code":2
  },
  {
    "category":"Tyrant Flycatchers (Tyrannidae)",
    "name":"Northern Beardless-Tyrannulet",
    "sname":"Camptostoma imberbe",
    "code":2
  },
  {
    "category":"",
    "name":"Greenish Elaenia",
    "sname":"Myiopagis viridicata",
    "code":5
  },
  {
    "category":"",
    "name":"White-crested Elaenia",
    "sname":"Elaenia albiceps",
    "code":5
  },
  {
    "category":"",
    "name":"Tufted Flycatcher",
    "sname":"Mitrephanes phaeocercus",
    "code":5
  },
  {
    "category":"",
    "name":"Olive-sided Flycatcher",
    "sname":"Contopus cooperi",
    "code":1
  },
  {
    "category":"",
    "name":"Greater Pewee",
    "sname":"Contopus pertinax",
    "code":2
  },
  {
    "category":"",
    "name":"Western Wood-Pewee",
    "sname":"Contopus sordidulus",
    "code":1
  },
  {
    "category":"",
    "name":"Eastern Wood-Pewee",
    "sname":"Contopus virens",
    "code":1
  },
  {
    "category":"",
    "name":"Cuban Pewee",
    "sname":"Contopus caribaeus",
    "code":5
  },
  {
    "category":"",
    "name":"Yellow-bellied Flycatcher",
    "sname":"Empidonax flaviventris",
    "code":1
  },
  {
    "category":"",
    "name":"Acadian Flycatcher",
    "sname":"Empidonax virescens",
    "code":1
  },
  {
    "category":"",
    "name":"Alder Flycatcher",
    "sname":"Empidonax alnorum",
    "code":1
  },
  {
    "category":"",
    "name":"Willow Flycatcher",
    "sname":"Empidonax traillii",
    "code":1
  },
  {
    "category":"",
    "name":"Least Flycatcher",
    "sname":"Empidonax minimus",
    "code":1
  },
  {
    "category":"",
    "name":"Hammond's Flycatcher",
    "sname":"Empidonax hammondii",
    "code":1
  },
  {
    "category":"",
    "name":"Gray Flycatcher",
    "sname":"Empidonax wrightii",
    "code":1
  },
  {
    "category":"",
    "name":"Dusky Flycatcher",
    "sname":"Empidonax oberholseri",
    "code":1
  },
  {
    "category":"",
    "name":"Pacific-slope Flycatcher",
    "sname":"Empidonax difficilis",
    "code":1
  },
  {
    "category":"",
    "name":"Cordilleran Flycatcher",
    "sname":"Empidonax occidentalis",
    "code":1
  },
  {
    "category":"",
    "name":"Buff-breasted Flycatcher",
    "sname":"Empidonax fulvifrons",
    "code":2
  },
  {
    "category":"",
    "name":"Black Phoebe",
    "sname":"Sayornis nigricans",
    "code":1
  },
  {
    "category":"",
    "name":"Eastern Phoebe",
    "sname":"Sayornis phoebe",
    "code":1
  },
  {
    "category":"",
    "name":"Say's Phoebe",
    "sname":"Sayornis saya",
    "code":1
  },
  {
    "category":"",
    "name":"Vermilion Flycatcher",
    "sname":"Pyrocephalus rubinus",
    "code":1
  },
  {
    "category":"",
    "name":"Dusky-capped Flycatcher",
    "sname":"Myiarchus tuberculifer",
    "code":2
  },
  {
    "category":"",
    "name":"Ash-throated Flycatcher",
    "sname":"Myiarchus cinerascens",
    "code":1
  },
  {
    "category":"",
    "name":"Nutting's Flycatcher",
    "sname":"Myiarchus nuttingi",
    "code":5
  },
  {
    "category":"",
    "name":"Great Crested Flycatcher",
    "sname":"Myiarchus crinitus",
    "code":1
  },
  {
    "category":"",
    "name":"Brown-crested Flycatcher",
    "sname":"Myiarchus tyrannulus",
    "code":1
  },
  {
    "category":"",
    "name":"La Sagra's Flycatcher",
    "sname":"Myiarchus sagrae",
    "code":3
  },
  {
    "category":"",
    "name":"Great Kiskadee",
    "sname":"Pitangus sulphuratus",
    "code":2
  },
  {
    "category":"",
    "name":"Social Flycatcher",
    "sname":"Myiozetetes similis",
    "code":5
  },
  {
    "category":"",
    "name":"Sulphur-bellied Flycatcher",
    "sname":"Myiodynastes luteiventris",
    "code":2
  },
  {
    "category":"",
    "name":"Piratic Flycatcher",
    "sname":"Legatus leucophaius",
    "code":4
  },
  {
    "category":"",
    "name":"Variegated Flycatcher",
    "sname":"Empidonomus varius",
    "code":5
  },
  {
    "category":"",
    "name":"Crowned Slaty Flycatcher",
    "sname":"Empidonomus aurantioatrocristatus",
    "code":5
  },
  {
    "category":"",
    "name":"Tropical Kingbird",
    "sname":"Tyrannus melancholicus",
    "code":2
  },
  {
    "category":"",
    "name":"Couch's Kingbird",
    "sname":"Tyrannus couchii",
    "code":2
  },
  {
    "category":"",
    "name":"Cassin's Kingbird",
    "sname":"Tyrannus vociferans",
    "code":1
  },
  {
    "category":"",
    "name":"Thick-billed Kingbird",
    "sname":"Tyrannus crassirostris",
    "code":2
  },
  {
    "category":"",
    "name":"Western Kingbird",
    "sname":"Tyrannus verticalis",
    "code":1
  },
  {
    "category":"",
    "name":"Eastern Kingbird",
    "sname":"Tyrannus tyrannus",
    "code":1
  },
  {
    "category":"",
    "name":"Gray Kingbird",
    "sname":"Tyrannus dominicensis",
    "code":2
  },
  {
    "category":"",
    "name":"Loggerhead Kingbird",
    "sname":"Tyrannus caudifasciatus",
    "code":5
  },
  {
    "category":"",
    "name":"Scissor-tailed Flycatcher",
    "sname":"Tyrannus forficatus",
    "code":1
  },
  {
    "category":"",
    "name":"Fork-tailed Flycatcher",
    "sname":"Tyrannus savana",
    "code":3
  },
  {
    "category":"Becards, Tityras, and Allies (Tityridae)",
    "name":"Masked Tityra",
    "sname":"Tityra semifasciata",
    "code":5
  },
  {
    "category":"",
    "name":"Gray-collared Becard",
    "sname":"Pachyramphus major",
    "code":5
  },
  {
    "category":"",
    "name":"Rose-throated Becard",
    "sname":"Pachyramphus aglaiae",
    "code":3
  },
  {
    "category":"Shrikes (Laniidae)",
    "name":"Brown Shrike",
    "sname":"Lanius cristatus",
    "code":4
  },
  {
    "category":"",
    "name":"Loggerhead Shrike",
    "sname":"Lanius ludovicianus",
    "code":1
  },
  {
    "category":"",
    "name":"Northern Shrike",
    "sname":"Lanius excubitor",
    "code":1
  },
  {
    "category":"Vireos (Vireonidae)",
    "name":"White-eyed Vireo",
    "sname":"Vireo griseus",
    "code":1
  },
  {
    "category":"",
    "name":"Thick-billed Vireo",
    "sname":"Vireo crassirostris",
    "code":4
  },
  {
    "category":"",
    "name":"Bell's Vireo",
    "sname":"Vireo bellii",
    "code":1
  },
  {
    "category":"",
    "name":"Black-capped Vireo",
    "sname":"Vireo atricapilla",
    "code":2
  },
  {
    "category":"",
    "name":"Gray Vireo",
    "sname":"Vireo vicinior",
    "code":2
  },
  {
    "category":"",
    "name":"Yellow-throated Vireo",
    "sname":"Vireo flavifrons",
    "code":1
  },
  {
    "category":"",
    "name":"Plumbeous Vireo",
    "sname":"Vireo plumbeus",
    "code":1
  },
  {
    "category":"",
    "name":"Cassin's Vireo",
    "sname":"Vireo cassinii",
    "code":1
  },
  {
    "category":"",
    "name":"Blue-headed Vireo",
    "sname":"Vireo solitarius",
    "code":1
  },
  {
    "category":"",
    "name":"Hutton's Vireo",
    "sname":"Vireo huttoni",
    "code":1
  },
  {
    "category":"",
    "name":"Warbling Vireo",
    "sname":"Vireo gilvus",
    "code":1
  },
  {
    "category":"",
    "name":"Philadelphia Vireo",
    "sname":"Vireo philadelphicus",
    "code":1
  },
  {
    "category":"",
    "name":"Red-eyed Vireo",
    "sname":"Vireo olivaceus",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow-green Vireo",
    "sname":"Vireo flavoviridis",
    "code":3
  },
  {
    "category":"",
    "name":"Black-whiskered Vireo",
    "sname":"Vireo altiloquus",
    "code":2
  },
  {
    "category":"",
    "name":"Yucatan Vireo",
    "sname":"Vireo magister",
    "code":5
  },
  {
    "category":"Jays and Crows (Corvidae)",
    "name":"Gray Jay",
    "sname":"Perisoreus canadensis",
    "code":1
  },
  {
    "category":"",
    "name":"Brown Jay",
    "sname":"Psilorhinus morio",
    "code":3
  },
  {
    "category":"",
    "name":"Green Jay",
    "sname":"Cyanocorax yncas",
    "code":2
  },
  {
    "category":"",
    "name":"Pinyon Jay",
    "sname":"Gymnorhinus cyanocephalus",
    "code":1
  },
  {
    "category":"",
    "name":"Steller's Jay",
    "sname":"Cyanocitta stelleri",
    "code":1
  },
  {
    "category":"",
    "name":"Blue Jay",
    "sname":"Cyanocitta cristata",
    "code":1
  },
  {
    "category":"",
    "name":"Florida Scrub-Jay",
    "sname":"Aphelocoma coerulescens",
    "code":2
  },
  {
    "category":"",
    "name":"Island Scrub-Jay",
    "sname":"Aphelocoma insularis",
    "code":2
  },
  {
    "category":"",
    "name":"Western Scrub-Jay",
    "sname":"Aphelocoma californica",
    "code":1
  },
  {
    "category":"",
    "name":"Mexican Jay",
    "sname":"Aphelocoma wollweberi",
    "code":2
  },
  {
    "category":"",
    "name":"Clark's Nutcracker",
    "sname":"Nucifraga columbiana",
    "code":1
  },
  {
    "category":"",
    "name":"Black-billed Magpie",
    "sname":"Pica hudsonia",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow-billed Magpie",
    "sname":"Pica nuttalli",
    "code":2
  },
  {
    "category":"",
    "name":"Eurasian Jackdaw",
    "sname":"Corvus monedula",
    "code":4
  },
  {
    "category":"",
    "name":"American Crow",
    "sname":"Corvus brachyrhynchos",
    "code":1
  },
  {
    "category":"",
    "name":"Northwestern Crow",
    "sname":"Corvus caurinus",
    "code":1
  },
  {
    "category":"",
    "name":"Tamaulipas Crow",
    "sname":"Corvus imparatus",
    "code":3
  },
  {
    "category":"",
    "name":"Fish Crow",
    "sname":"Corvus ossifragus",
    "code":1
  },
  {
    "category":"",
    "name":"Chihuahuan Raven",
    "sname":"Corvus cryptoleucus",
    "code":1
  },
  {
    "category":"",
    "name":"Common Raven",
    "sname":"Corvus corax",
    "code":1
  },
  {
    "category":"Larks (Alaudidae)",
    "name":"Sky Lark",
    "sname":"Alauda arvensis",
    "code":3
  },
  {
    "category":"",
    "name":"Horned Lark",
    "sname":"Eremophila alpestris",
    "code":1
  },
  {
    "category":"Swallows (Hirundinidae)",
    "name":"Purple Martin",
    "sname":"Progne subis",
    "code":1
  },
  {
    "category":"",
    "name":"Cuban Martin",
    "sname":"Progne cryptoleuca",
    "code":5
  },
  {
    "category":"",
    "name":"Gray-breasted Martin",
    "sname":"Progne chalybea",
    "code":5
  },
  {
    "category":"",
    "name":"Southern Martin",
    "sname":"Progne elegans",
    "code":5
  },
  {
    "category":"",
    "name":"Brown-chested Martin",
    "sname":"Progne tapera",
    "code":5
  },
  {
    "category":"",
    "name":"Tree Swallow",
    "sname":"Tachycineta bicolor",
    "code":1
  },
  {
    "category":"",
    "name":"Mangrove Swallow",
    "sname":"Tachycineta albilinea",
    "code":5
  },
  {
    "category":"",
    "name":"Violet-green Swallow",
    "sname":"Tachycineta thalassina",
    "code":1
  },
  {
    "category":"",
    "name":"Bahama Swallow",
    "sname":"Tachycineta cyaneoviridis",
    "code":4
  },
  {
    "category":"",
    "name":"Northern Rough-winged Swallow",
    "sname":"Stelgidopteryx serripennis",
    "code":1
  },
  {
    "category":"",
    "name":"Bank Swallow",
    "sname":"Riparia riparia",
    "code":1
  },
  {
    "category":"",
    "name":"Cliff Swallow",
    "sname":"Petrochelidon pyrrhonota",
    "code":1
  },
  {
    "category":"",
    "name":"Cave Swallow",
    "sname":"Petrochelidon fulva",
    "code":1
  },
  {
    "category":"",
    "name":"Barn Swallow",
    "sname":"Hirundo rustica",
    "code":1
  },
  {
    "category":"",
    "name":"Common House-Martin",
    "sname":"Delichon urbicum",
    "code":4
  },
  {
    "category":"Chickadees and Titmice (Paridae)",
    "name":"Carolina Chickadee",
    "sname":"Poecile carolinensis",
    "code":1
  },
  {
    "category":"",
    "name":"Black-capped Chickadee",
    "sname":"Poecile atricapillus",
    "code":1
  },
  {
    "category":"",
    "name":"Mountain Chickadee",
    "sname":"Poecile gambeli",
    "code":1
  },
  {
    "category":"",
    "name":"Mexican Chickadee",
    "sname":"Poecile sclateri",
    "code":2
  },
  {
    "category":"",
    "name":"Chestnut-backed Chickadee",
    "sname":"Poecile rufescens",
    "code":1
  },
  {
    "category":"",
    "name":"Boreal Chickadee",
    "sname":"Poecile hudsonicus",
    "code":1
  },
  {
    "category":"",
    "name":"Gray-headed Chickadee",
    "sname":"Poecile cinctus",
    "code":3
  },
  {
    "category":"",
    "name":"Bridled Titmouse",
    "sname":"Baeolophus wollweberi",
    "code":2
  },
  {
    "category":"",
    "name":"Oak Titmouse",
    "sname":"Baeolophus inornatus",
    "code":1
  },
  {
    "category":"",
    "name":"Juniper Titmouse",
    "sname":"Baeolophus ridgwayi",
    "code":1
  },
  {
    "category":"",
    "name":"Tufted Titmouse",
    "sname":"Baeolophus bicolor",
    "code":1
  },
  {
    "category":"",
    "name":"Black-crested Titmouse",
    "sname":"Baeolophus atricristatus",
    "code":2
  },
  {
    "category":"Verdin (Remizidae)",
    "name":"Verdin",
    "sname":"Auriparus flaviceps",
    "code":1
  },
  {
    "category":"Bushtits (Aegithalidae)",
    "name":"Bushtit",
    "sname":"Psaltriparus minimus",
    "code":1
  },
  {
    "category":"Nuthatches (Sittidae)",
    "name":"Red-breasted Nuthatch",
    "sname":"Sitta canadensis",
    "code":1
  },
  {
    "category":"",
    "name":"White-breasted Nuthatch",
    "sname":"Sitta carolinensis",
    "code":1
  },
  {
    "category":"",
    "name":"Pygmy Nuthatch",
    "sname":"Sitta pygmaea",
    "code":1
  },
  {
    "category":"",
    "name":"Brown-headed Nuthatch",
    "sname":"Sitta pusilla",
    "code":1
  },
  {
    "category":"Creepers (Certhiidae)",
    "name":"Brown Creeper",
    "sname":"Certhia americana",
    "code":1
  },
  {
    "category":"Wrens (Troglodytidae)",
    "name":"Rock Wren",
    "sname":"Salpinctes obsoletus",
    "code":1
  },
  {
    "category":"",
    "name":"Canyon Wren",
    "sname":"Catherpes mexicanus",
    "code":1
  },
  {
    "category":"",
    "name":"House Wren",
    "sname":"Troglodytes aedon",
    "code":1
  },
  {
    "category":"",
    "name":"Pacific Wren",
    "sname":"Troglodytes pacificus",
    "code":1
  },
  {
    "category":"",
    "name":"Winter Wren",
    "sname":"Troglodytes hiemalis",
    "code":1
  },
  {
    "category":"",
    "name":"Sedge Wren",
    "sname":"Cistothorus platensis",
    "code":1
  },
  {
    "category":"",
    "name":"Marsh Wren",
    "sname":"Cistothorus palustris",
    "code":1
  },
  {
    "category":"",
    "name":"Carolina Wren",
    "sname":"Thryothorus ludovicianus",
    "code":1
  },
  {
    "category":"",
    "name":"Bewick's Wren",
    "sname":"Thryomanes bewickii",
    "code":1
  },
  {
    "category":"",
    "name":"Cactus Wren",
    "sname":"Campylorhynchus brunneicapillus",
    "code":1
  },
  {
    "category":"",
    "name":"Sinaloa Wren",
    "sname":"Thryophilus sinaloa",
    "code":5
  },
  {
    "category":"Gnatcatchers and Gnatwrens (Polioptilidae)",
    "name":"Blue-gray Gnatcatcher",
    "sname":"Polioptila caerulea",
    "code":1
  },
  {
    "category":"",
    "name":"California Gnatcatcher",
    "sname":"Polioptila californica",
    "code":2
  },
  {
    "category":"",
    "name":"Black-tailed Gnatcatcher",
    "sname":"Polioptila melanura",
    "code":1
  },
  {
    "category":"",
    "name":"Black-capped Gnatcatcher",
    "sname":"Polioptila nigriceps",
    "code":3
  },
  {
    "category":"Dippers (Cinclidae)",
    "name":"American Dipper",
    "sname":"Cinclus mexicanus",
    "code":1
  },
  {
    "category":"Bulbuls (Pycnonotidae)",
    "name":"Red-whiskered Bulbul",
    "sname":"Pycnonotus jocosus",
    "code":2
  },
  {
    "category":"Kinglets (Regulidae)",
    "name":"Golden-crowned Kinglet",
    "sname":"Regulus satrapa",
    "code":1
  },
  {
    "category":"",
    "name":"Ruby-crowned Kinglet",
    "sname":"Regulus calendula",
    "code":1
  },
  {
    "category":"Leaf Warblers (Phylloscopidae)",
    "name":"Willow Warbler",
    "sname":"Phylloscopus trochilus",
    "code":5
  },
  {
    "category":"",
    "name":"Wood Warbler",
    "sname":"Phylloscopus sibilatrix",
    "code":5
  },
  {
    "category":"",
    "name":"Dusky Warbler",
    "sname":"Phylloscopus fuscatus",
    "code":4
  },
  {
    "category":"",
    "name":"Pallas's Leaf-Warbler",
    "sname":"Phylloscopus proregulus",
    "code":5
  },
  {
    "category":"",
    "name":"Yellow-browed Warbler",
    "sname":"Phylloscopus inornatus",
    "code":4
  },
  {
    "category":"",
    "name":"Arctic Warbler",
    "sname":"Phylloscopus borealis",
    "code":2
  },
  {
    "category":"Sylviid Warblers (Sylviidae)",
    "name":"Lesser Whitethroat",
    "sname":"Sylvia curruca",
    "code":5
  },
  {
    "category":"",
    "name":"Wrentit",
    "sname":"Chamaea fasciata",
    "code":1
  },
  {
    "category":"Reed Warblers (Acrocephalidae)",
    "name":"Sedge Warbler",
    "sname":"Acrocephalus schoenobaenus",
    "code":5
  },
  {
    "category":"Grassbirds (Megaluridae)",
    "name":"Middendorff's Grasshopper-Warbler",
    "sname":"Locustella ochotensis",
    "code":4
  },
  {
    "category":"",
    "name":"Lanceolated Warbler",
    "sname":"Locustella lanceolata",
    "code":5
  },
  {
    "category":"Old World Flycatchers (Muscicapidae)",
    "name":"Gray-streaked Flycatcher",
    "sname":"Muscicapa griseisticta",
    "code":4
  },
  {
    "category":"",
    "name":"Asian Brown Flycatcher",
    "sname":"Muscicapa dauurica",
    "code":5
  },
  {
    "category":"",
    "name":"Spotted Flycatcher",
    "sname":"Muscicapa striata",
    "code":5
  },
  {
    "category":"",
    "name":"Dark-sided Flycatcher",
    "sname":"Muscicapa sibirica",
    "code":4
  },
  {
    "category":"",
    "name":"Rufous-tailed Robin",
    "sname":"Luscinia sibilans",
    "code":5
  },
  {
    "category":"",
    "name":"Siberian Rubythroat",
    "sname":"Luscinia calliope",
    "code":3
  },
  {
    "category":"",
    "name":"Bluethroat",
    "sname":"Luscinia svecica",
    "code":2
  },
  {
    "category":"",
    "name":"Siberian Blue Robin",
    "sname":"Luscinia cyane",
    "code":5
  },
  {
    "category":"",
    "name":"Red-flanked Bluetail",
    "sname":"Tarsiger cyanurus",
    "code":4
  },
  {
    "category":"",
    "name":"Narcissus Flycatcher",
    "sname":"Ficedula narcissina",
    "code":5
  },
  {
    "category":"",
    "name":"Mugimaki Flycatcher",
    "sname":"Ficedula mugimaki",
    "code":5
  },
  {
    "category":"",
    "name":"Taiga Flycatcher",
    "sname":"Ficedula albicilla",
    "code":4
  },
  {
    "category":"",
    "name":"Northern Wheatear",
    "sname":"Oenanthe oenanthe",
    "code":2
  },
  {
    "category":"",
    "name":"Stonechat",
    "sname":"Saxicola torquatus",
    "code":4
  },
  {
    "category":"Thrushes (Turdidae)",
    "name":"Eastern Bluebird",
    "sname":"Sialia sialis",
    "code":1
  },
  {
    "category":"",
    "name":"Western Bluebird",
    "sname":"Sialia mexicana",
    "code":1
  },
  {
    "category":"",
    "name":"Mountain Bluebird",
    "sname":"Sialia currucoides",
    "code":1
  },
  {
    "category":"",
    "name":"Townsend's Solitaire",
    "sname":"Myadestes townsendi",
    "code":1
  },
  {
    "category":"",
    "name":"Brown-backed Solitaire",
    "sname":"Myadestes occidentalis",
    "code":5
  },
  {
    "category":"",
    "name":"Orange-billed Nightingale-Thrush",
    "sname":"Catharus aurantiirostris",
    "code":5
  },
  {
    "category":"",
    "name":"Black-headed Nightingale-Thrush",
    "sname":"Catharus mexicanus",
    "code":5
  },
  {
    "category":"",
    "name":"Veery",
    "sname":"Catharus fuscescens",
    "code":1
  },
  {
    "category":"",
    "name":"Gray-cheeked Thrush",
    "sname":"Catharus minimus",
    "code":1
  },
  {
    "category":"",
    "name":"Bicknell's Thrush",
    "sname":"Catharus bicknelli",
    "code":2
  },
  {
    "category":"",
    "name":"Swainson's Thrush",
    "sname":"Catharus ustulatus",
    "code":1
  },
  {
    "category":"",
    "name":"Hermit Thrush",
    "sname":"Catharus guttatus",
    "code":1
  },
  {
    "category":"",
    "name":"Wood Thrush",
    "sname":"Hylocichla mustelina",
    "code":1
  },
  {
    "category":"",
    "name":"Eurasian Blackbird",
    "sname":"Turdus merula",
    "code":5
  },
  {
    "category":"",
    "name":"Eyebrowed Thrush",
    "sname":"Turdus obscurus",
    "code":3
  },
  {
    "category":"",
    "name":"Dusky Thrush",
    "sname":"Turdus naumanni",
    "code":4
  },
  {
    "category":"",
    "name":"Fieldfare",
    "sname":"Turdus pilaris",
    "code":4
  },
  {
    "category":"",
    "name":"Redwing",
    "sname":"Turdus iliacus",
    "code":4
  },
  {
    "category":"",
    "name":"Song Thrush",
    "sname":"Turdus philomelos",
    "code":5
  },
  {
    "category":"",
    "name":"Clay-colored Thrush",
    "sname":"Turdus grayi",
    "code":3
  },
  {
    "category":"",
    "name":"White-throated Thrush",
    "sname":"Turdus assimilis",
    "code":4
  },
  {
    "category":"",
    "name":"Rufous-backed Robin",
    "sname":"Turdus rufopalliatus",
    "code":3
  },
  {
    "category":"",
    "name":"American Robin",
    "sname":"Turdus migratorius",
    "code":1
  },
  {
    "category":"",
    "name":"Red-legged Thrush",
    "sname":"Turdus plumbeus",
    "code":5
  },
  {
    "category":"",
    "name":"Varied Thrush",
    "sname":"Ixoreus naevius",
    "code":1
  },
  {
    "category":"",
    "name":"Aztec Thrush",
    "sname":"Ridgwayia pinicola",
    "code":4
  },
  {
    "category":"Mockingbirds and Thrashers (Mimidae)",
    "name":"Gray Catbird",
    "sname":"Dumetella carolinensis",
    "code":1
  },
  {
    "category":"",
    "name":"Northern Mockingbird",
    "sname":"Mimus polyglottos",
    "code":1
  },
  {
    "category":"",
    "name":"Bahama Mockingbird",
    "sname":"Mimus gundlachii",
    "code":4
  },
  {
    "category":"",
    "name":"Sage Thrasher",
    "sname":"Oreoscoptes montanus",
    "code":1
  },
  {
    "category":"",
    "name":"Brown Thrasher",
    "sname":"Toxostoma rufum",
    "code":1
  },
  {
    "category":"",
    "name":"Long-billed Thrasher",
    "sname":"Toxostoma longirostre",
    "code":2
  },
  {
    "category":"",
    "name":"Bendire's Thrasher",
    "sname":"Toxostoma bendirei",
    "code":2
  },
  {
    "category":"",
    "name":"Curve-billed Thrasher",
    "sname":"Toxostoma curvirostre",
    "code":1
  },
  {
    "category":"",
    "name":"California Thrasher",
    "sname":"Toxostoma redivivum",
    "code":2
  },
  {
    "category":"",
    "name":"Crissal Thrasher",
    "sname":"Toxostoma crissale",
    "code":2
  },
  {
    "category":"",
    "name":"Le Conte's Thrasher",
    "sname":"Toxostoma lecontei",
    "code":2
  },
  {
    "category":"",
    "name":"Blue Mockingbird",
    "sname":"Melanotis caerulescens",
    "code":5
  },
  {
    "category":"Starlings (Sturnidae)",
    "name":"European Starling",
    "sname":"Sturnus vulgaris",
    "code":1
  },
  {
    "category":"",
    "name":"Common Myna",
    "sname":"Acridotheres tristis",
    "code":2
  },
  {
    "category":"Accentors (Prunellidae)",
    "name":"Siberian Accentor",
    "sname":"Prunella montanella",
    "code":4
  },
  {
    "category":"Wagtails and Pipits (Motacillidae)",
    "name":"Eastern Yellow Wagtail",
    "sname":"Motacilla tschutschensis",
    "code":2
  },
  {
    "category":"",
    "name":"Citrine Wagtail",
    "sname":"Motacilla citreola",
    "code":5
  },
  {
    "category":"",
    "name":"Gray Wagtail",
    "sname":"Motacilla cinerea",
    "code":4
  },
  {
    "category":"",
    "name":"White Wagtail",
    "sname":"Motacilla alba",
    "code":3
  },
  {
    "category":"",
    "name":"Tree Pipit",
    "sname":"Anthus trivialis",
    "code":5
  },
  {
    "category":"",
    "name":"Olive-backed Pipit",
    "sname":"Anthus hodgsoni",
    "code":3
  },
  {
    "category":"",
    "name":"Pechora Pipit",
    "sname":"Anthus gustavi",
    "code":4
  },
  {
    "category":"",
    "name":"Red-throated Pipit",
    "sname":"Anthus cervinus",
    "code":3
  },
  {
    "category":"",
    "name":"American Pipit",
    "sname":"Anthus rubescens",
    "code":1
  },
  {
    "category":"",
    "name":"Sprague's Pipit",
    "sname":"Anthus spragueii",
    "code":2
  },
  {
    "category":"Waxwings (Bombycillidae)",
    "name":"Bohemian Waxwing",
    "sname":"Bombycilla garrulus",
    "code":2
  },
  {
    "category":"",
    "name":"Cedar Waxwing",
    "sname":"Bombycilla cedrorum",
    "code":1
  },
  {
    "category":"Silky-flycatchers (Ptilogonatidae)",
    "name":"Gray Silky-flycatcher",
    "sname":"Ptilogonys cinereus",
    "code":5
  },
  {
    "category":"",
    "name":"Phainopepla",
    "sname":"Phainopepla nitens",
    "code":1
  },
  {
    "category":"Olive Warblers (Peucedramidae)",
    "name":"Olive Warbler",
    "sname":"Peucedramus taeniatus",
    "code":2
  },
  {
    "category":"Longspurs and Snow Buntings (Calcariidae)",
    "name":"Lapland Longspur",
    "sname":"Calcarius lapponicus",
    "code":1
  },
  {
    "category":"",
    "name":"Chestnut-collared Longspur",
    "sname":"Calcarius ornatus",
    "code":1
  },
  {
    "category":"",
    "name":"Smith's Longspur",
    "sname":"Calcarius pictus",
    "code":2
  },
  {
    "category":"",
    "name":"McCown's Longspur",
    "sname":"Rhynchophanes mccownii",
    "code":2
  },
  {
    "category":"",
    "name":"Snow Bunting",
    "sname":"Plectrophenax nivalis",
    "code":1
  },
  {
    "category":"",
    "name":"McKay's Bunting",
    "sname":"Plectrophenax hyperboreus",
    "code":2
  },
  {
    "category":"Wood-Warblers (Parulidae)",
    "name":"Ovenbird",
    "sname":"Seiurus aurocapilla",
    "code":1
  },
  {
    "category":"",
    "name":"Worm-eating Warbler",
    "sname":"Helmitheros vermivorum",
    "code":1
  },
  {
    "category":"",
    "name":"Louisiana Waterthrush",
    "sname":"Parkesia motacilla",
    "code":1
  },
  {
    "category":"",
    "name":"Northern Waterthrush",
    "sname":"Parkesia noveboracensis",
    "code":1
  },
  {
    "category":"",
    "name":"Bachman's Warbler",
    "sname":"Vermivora bachmanii",
    "code":6
  },
  {
    "category":"",
    "name":"Golden-winged Warbler",
    "sname":"Vermivora chrysoptera",
    "code":2
  },
  {
    "category":"",
    "name":"Blue-winged Warbler",
    "sname":"Vermivora cyanoptera",
    "code":1
  },
  {
    "category":"",
    "name":"Black-and-white Warbler",
    "sname":"Mniotilta varia",
    "code":1
  },
  {
    "category":"",
    "name":"Prothonotary Warbler",
    "sname":"Protonotaria citrea",
    "code":1
  },
  {
    "category":"",
    "name":"Swainson's Warbler",
    "sname":"Limnothlypis swainsonii",
    "code":2
  },
  {
    "category":"",
    "name":"Crescent-chested Warbler",
    "sname":"Oreothlypis superciliosa",
    "code":4
  },
  {
    "category":"",
    "name":"Tennessee Warbler",
    "sname":"Oreothlypis peregrina",
    "code":1
  },
  {
    "category":"",
    "name":"Orange-crowned Warbler",
    "sname":"Oreothlypis celata",
    "code":1
  },
  {
    "category":"",
    "name":"Colima Warbler",
    "sname":"Oreothlypis crissalis",
    "code":1
  },
  {
    "category":"",
    "name":"Lucy's Warbler",
    "sname":"Oreothlypis luciae",
    "code":1
  },
  {
    "category":"",
    "name":"Nashville Warbler",
    "sname":"Oreothlypis ruficapilla",
    "code":1
  },
  {
    "category":"",
    "name":"VirginiaÕs Warbler",
    "sname":"Oreothlypis virginiae",
    "code":1
  },
  {
    "category":"",
    "name":"Connecticut Warbler",
    "sname":"Oporornis agilis",
    "code":2
  },
  {
    "category":"",
    "name":"Gray-crowned Yellowthroat",
    "sname":"Geothlypis poliocephala",
    "code":4
  },
  {
    "category":"",
    "name":"MacGillivray's Warbler",
    "sname":"Geothlypis tolmiei",
    "code":1
  },
  {
    "category":"",
    "name":"Mourning Warbler",
    "sname":"Geothlypis philadelphia",
    "code":1
  },
  {
    "category":"",
    "name":"Kentucky Warbler",
    "sname":"Geothlypis formosa",
    "code":1
  },
  {
    "category":"",
    "name":"Common Yellowthroat",
    "sname":"Geothlypis trichas",
    "code":1
  },
  {
    "category":"",
    "name":"Hooded Warbler",
    "sname":"Setophaga citrina",
    "code":1
  },
  {
    "category":"",
    "name":"American Redstart",
    "sname":"Setophaga ruticilla",
    "code":1
  },
  {
    "category":"",
    "name":"Kirtland's Warbler",
    "sname":"Setophaga kirtlandii",
    "code":2
  },
  {
    "category":"",
    "name":"Cape May Warbler",
    "sname":"Setophaga tigrina",
    "code":1
  },
  {
    "category":"",
    "name":"Cerulean Warbler",
    "sname":"Setophaga cerulea",
    "code":2
  },
  {
    "category":"",
    "name":"Northern Parula",
    "sname":"Setophaga americana",
    "code":1
  },
  {
    "category":"",
    "name":"Tropical Parula",
    "sname":"Setophaga pitiayumi",
    "code":3
  },
  {
    "category":"",
    "name":"Magnolia Warbler",
    "sname":"Setophaga magnolia",
    "code":1
  },
  {
    "category":"",
    "name":"Bay-breasted Warbler",
    "sname":"Setophaga castanea",
    "code":1
  },
  {
    "category":"",
    "name":"Blackburnian Warbler",
    "sname":"Setophaga fusca",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow Warbler",
    "sname":"Setophaga petechia",
    "code":1
  },
  {
    "category":"",
    "name":"Chestnut-sided Warbler",
    "sname":"Setophaga pensylvanica",
    "code":1
  },
  {
    "category":"",
    "name":"Blackpoll Warbler",
    "sname":"Setophaga striata",
    "code":1
  },
  {
    "category":"",
    "name":"Black-throated Blue Warbler",
    "sname":"Setophaga caerulescens",
    "code":1
  },
  {
    "category":"",
    "name":"Palm Warbler",
    "sname":"Setophaga palmarum",
    "code":1
  },
  {
    "category":"",
    "name":"Pine Warbler",
    "sname":"Setophaga pinus",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow-rumped Warbler",
    "sname":"Setophaga coronata",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow-throated Warbler",
    "sname":"Setophaga dominica",
    "code":1
  },
  {
    "category":"",
    "name":"Prairie Warbler",
    "sname":"Setophaga discolor",
    "code":1
  },
  {
    "category":"",
    "name":"Grace's Warbler",
    "sname":"Setophaga graciae",
    "code":1
  },
  {
    "category":"",
    "name":"Black-throated Gray Warbler",
    "sname":"Setophaga nigrescens",
    "code":1
  },
  {
    "category":"",
    "name":"Townsend's Warbler",
    "sname":"Setophaga townsendi",
    "code":1
  },
  {
    "category":"",
    "name":"Hermit Warbler",
    "sname":"Setophaga occidentalis",
    "code":1
  },
  {
    "category":"",
    "name":"Golden-cheeked Warbler",
    "sname":"Setophaga chrysoparia",
    "code":2
  },
  {
    "category":"",
    "name":"Black-throated Green Warbler",
    "sname":"Setophaga virens",
    "code":1
  },
  {
    "category":"",
    "name":"Fan-tailed Warbler",
    "sname":"Basileuterus lachrymosus",
    "code":4
  },
  {
    "category":"",
    "name":"Rufous-capped Warbler",
    "sname":"Basileuterus rufifrons",
    "code":3
  },
  {
    "category":"",
    "name":"Golden-crowned Warbler",
    "sname":"Basileuterus culicivorus",
    "code":4
  },
  {
    "category":"",
    "name":"Canada Warbler",
    "sname":"Cardellina canadensis",
    "code":1
  },
  {
    "category":"",
    "name":"Wilson's Warbler",
    "sname":"Cardellina pusilla",
    "code":1
  },
  {
    "category":"",
    "name":"Red-faced Warbler",
    "sname":"Cardellina rubrifrons",
    "code":2
  },
  {
    "category":"",
    "name":"Painted Redstart",
    "sname":"Myioborus pictus",
    "code":2
  },
  {
    "category":"",
    "name":"Slate-throated Redstart",
    "sname":"Myioborus miniatus",
    "code":4
  },
  {
    "category":"",
    "name":"Yellow-breasted Chat",
    "sname":"Icteria virens",
    "code":1
  },
  {
    "category":"Bananaquits (incertae sedis)",
    "name":"Bananaquit",
    "sname":"Coereba flaveola",
    "code":4
  },
  {
    "category":"Tanagers (Thraupidae)",
    "name":"Western Spindalis",
    "sname":"Spindalis zena",
    "code":3
  },
  {
    "category":"Emberizids (Emberizidae)",
    "name":"White-collared Seedeater",
    "sname":"Sporophila torqueola",
    "code":3
  },
  {
    "category":"",
    "name":"Yellow-faced Grassquit",
    "sname":"Tiaris olivaceus",
    "code":4
  },
  {
    "category":"",
    "name":"Black-faced Grassquit",
    "sname":"Tiaris bicolor",
    "code":4
  },
  {
    "category":"",
    "name":"Olive Sparrow",
    "sname":"Arremonops rufivirgatus",
    "code":2
  },
  {
    "category":"",
    "name":"Green-tailed Towhee",
    "sname":"Pipilo chlorurus",
    "code":1
  },
  {
    "category":"",
    "name":"Spotted Towhee",
    "sname":"Pipilo maculatus",
    "code":1
  },
  {
    "category":"",
    "name":"Eastern Towhee",
    "sname":"Pipilo erythrophthalmus",
    "code":1
  },
  {
    "category":"",
    "name":"Rufous-crowned Sparrow",
    "sname":"Aimophila ruficeps",
    "code":1
  },
  {
    "category":"",
    "name":"Canyon Towhee",
    "sname":"Melozone fusca",
    "code":1
  },
  {
    "category":"",
    "name":"California Towhee",
    "sname":"Melozone crissalis",
    "code":1
  },
  {
    "category":"",
    "name":"Abert's Towhee",
    "sname":"Melozone aberti",
    "code":1
  },
  {
    "category":"",
    "name":"Rufous-winged Sparrow",
    "sname":"Peucaea carpalis",
    "code":2
  },
  {
    "category":"",
    "name":"Botteri's Sparrow",
    "sname":"Peucaea botterii",
    "code":2
  },
  {
    "category":"",
    "name":"Cassin's Sparrow",
    "sname":"Peucaea cassinii",
    "code":1
  },
  {
    "category":"",
    "name":"Bachman's Sparrow",
    "sname":"Peucaea aestivalis",
    "code":2
  },
  {
    "category":"",
    "name":"American Tree Sparrow",
    "sname":"Spizella arborea",
    "code":1
  },
  {
    "category":"",
    "name":"Chipping Sparrow",
    "sname":"Spizella passerina",
    "code":1
  },
  {
    "category":"",
    "name":"Clay-colored Sparrow",
    "sname":"Spizella pallida",
    "code":1
  },
  {
    "category":"",
    "name":"Brewer's Sparrow",
    "sname":"Spizella breweri",
    "code":1
  },
  {
    "category":"",
    "name":"Field Sparrow",
    "sname":"Spizella pusilla",
    "code":1
  },
  {
    "category":"",
    "name":"Worthen's Sparrow",
    "sname":"Spizella wortheni",
    "code":5
  },
  {
    "category":"",
    "name":"Black-chinned Sparrow",
    "sname":"Spizella atrogularis",
    "code":1
  },
  {
    "category":"",
    "name":"Vesper Sparrow",
    "sname":"Pooecetes gramineus",
    "code":1
  },
  {
    "category":"",
    "name":"Lark Sparrow",
    "sname":"Chondestes grammacus",
    "code":1
  },
  {
    "category":"",
    "name":"Five-striped Sparrow",
    "sname":"Amphispiza quinquestriata",
    "code":3
  },
  {
    "category":"",
    "name":"Black-throated Sparrow",
    "sname":"Amphispiza bilineata",
    "code":1
  },
  {
    "category":"",
    "name":"Sage Sparrow",
    "sname":"Artemisiospiza belli",
    "code":1
  },
  {
    "category":"",
    "name":"Lark Bunting",
    "sname":"Calamospiza melanocorys",
    "code":1
  },
  {
    "category":"",
    "name":"Savannah Sparrow",
    "sname":"Passerculus sandwichensis",
    "code":1
  },
  {
    "category":"",
    "name":"Grasshopper Sparrow",
    "sname":"Ammodramus savannarum",
    "code":1
  },
  {
    "category":"",
    "name":"Baird's Sparrow",
    "sname":"Ammodramus bairdii",
    "code":2
  },
  {
    "category":"",
    "name":"Henslow's Sparrow",
    "sname":"Ammodramus henslowii",
    "code":2
  },
  {
    "category":"",
    "name":"Le Conte's Sparrow",
    "sname":"Ammodramus leconteii",
    "code":1
  },
  {
    "category":"",
    "name":"Nelson's Sparrow",
    "sname":"Ammodramus nelsoni",
    "code":1
  },
  {
    "category":"",
    "name":"Saltmarsh Sparrow",
    "sname":"Ammodramus caudacutus",
    "code":1
  },
  {
    "category":"",
    "name":"Seaside Sparrow",
    "sname":"Ammodramus maritimus",
    "code":1
  },
  {
    "category":"",
    "name":"Fox Sparrow",
    "sname":"Passerella iliaca",
    "code":1
  },
  {
    "category":"",
    "name":"Song Sparrow",
    "sname":"Melospiza melodia",
    "code":1
  },
  {
    "category":"",
    "name":"Lincoln's Sparrow",
    "sname":"Melospiza lincolnii",
    "code":1
  },
  {
    "category":"",
    "name":"Swamp Sparrow",
    "sname":"Melospiza georgiana",
    "code":1
  },
  {
    "category":"",
    "name":"White-throated Sparrow",
    "sname":"Zonotrichia albicollis",
    "code":1
  },
  {
    "category":"",
    "name":"Harris's Sparrow",
    "sname":"Zonotrichia querula",
    "code":1
  },
  {
    "category":"",
    "name":"White-crowned Sparrow",
    "sname":"Zonotrichia leucophrys",
    "code":1
  },
  {
    "category":"",
    "name":"Golden-crowned Sparrow",
    "sname":"Zonotrichia atricapilla",
    "code":1
  },
  {
    "category":"",
    "name":"Dark-eyed Junco",
    "sname":"Junco hyemalis",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow-eyed Junco",
    "sname":"Junco phaeonotus",
    "code":2
  },
  {
    "category":"",
    "name":"Pine Bunting",
    "sname":"Emberiza leucocephalos",
    "code":5
  },
  {
    "category":"",
    "name":"Yellow-browed Bunting",
    "sname":"Emberiza chrysophrys",
    "code":5
  },
  {
    "category":"",
    "name":"Little Bunting",
    "sname":"Emberiza pusilla",
    "code":4
  },
  {
    "category":"",
    "name":"Rustic Bunting",
    "sname":"Emberiza rustica",
    "code":3
  },
  {
    "category":"",
    "name":"Yellow-throated Bunting",
    "sname":"Emberiza elegans",
    "code":5
  },
  {
    "category":"",
    "name":"Yellow-breasted Bunting",
    "sname":"Emberiza aureola",
    "code":5
  },
  {
    "category":"",
    "name":"Gray Bunting",
    "sname":"Emberiza variabilis",
    "code":5
  },
  {
    "category":"",
    "name":"Pallas's Bunting",
    "sname":"Emberiza pallasi",
    "code":5
  },
  {
    "category":"",
    "name":"Reed Bunting",
    "sname":"Emberiza schoeniclus",
    "code":4
  },
  {
    "category":"Cardinals, Piranga Tanagers and Allies (Cardinalidae)",
    "name":"Hepatic Tanager",
    "sname":"Piranga flava",
    "code":2
  },
  {
    "category":"",
    "name":"Summer Tanager",
    "sname":"Piranga rubra",
    "code":1
  },
  {
    "category":"",
    "name":"Scarlet Tanager",
    "sname":"Piranga olivacea",
    "code":1
  },
  {
    "category":"",
    "name":"Western Tanager",
    "sname":"Piranga ludoviciana",
    "code":1
  },
  {
    "category":"",
    "name":"Flame-colored Tanager",
    "sname":"Piranga bidentata",
    "code":3
  },
  {
    "category":"",
    "name":"Crimson-collared Grosbeak",
    "sname":"Rhodothraupis celaeno",
    "code":4
  },
  {
    "category":"",
    "name":"Northern Cardinal",
    "sname":"Cardinalis cardinalis",
    "code":1
  },
  {
    "category":"",
    "name":"Pyrrhuloxia",
    "sname":"Cardinalis sinuatus",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow Grosbeak",
    "sname":"Pheucticus chrysopeplus",
    "code":4
  },
  {
    "category":"",
    "name":"Rose-breasted Grosbeak",
    "sname":"Pheucticus ludovicianus",
    "code":1
  },
  {
    "category":"",
    "name":"Black-headed Grosbeak",
    "sname":"Pheucticus melanocephalus",
    "code":1
  },
  {
    "category":"",
    "name":"Blue Bunting",
    "sname":"Cyanocompsa parellina",
    "code":4
  },
  {
    "category":"",
    "name":"Blue Grosbeak",
    "sname":"Passerina caerulea",
    "code":1
  },
  {
    "category":"",
    "name":"Lazuli Bunting",
    "sname":"Passerina amoena",
    "code":1
  },
  {
    "category":"",
    "name":"Indigo Bunting",
    "sname":"Passerina cyanea",
    "code":1
  },
  {
    "category":"",
    "name":"Varied Bunting",
    "sname":"Passerina versicolor",
    "code":2
  },
  {
    "category":"",
    "name":"Painted Bunting",
    "sname":"Passerina ciris",
    "code":1
  },
  {
    "category":"",
    "name":"Dickcissel",
    "sname":"Spiza americana",
    "code":1
  },
  {
    "category":"Blackbirds (Icteridae)",
    "name":"Bobolink",
    "sname":"Dolichonyx oryzivorus",
    "code":1
  },
  {
    "category":"",
    "name":"Red-winged Blackbird",
    "sname":"Agelaius phoeniceus",
    "code":1
  },
  {
    "category":"",
    "name":"Tricolored Blackbird",
    "sname":"Agelaius tricolor",
    "code":2
  },
  {
    "category":"",
    "name":"Tawny-shouldered Blackbird",
    "sname":"Agelaius humeralis",
    "code":5
  },
  {
    "category":"",
    "name":"Eastern Meadowlark",
    "sname":"Sturnella magna",
    "code":1
  },
  {
    "category":"",
    "name":"Western Meadowlark",
    "sname":"Sturnella neglecta",
    "code":1
  },
  {
    "category":"",
    "name":"Yellow-headed Blackbird",
    "sname":"Xanthocephalus xanthocephalus",
    "code":1
  },
  {
    "category":"",
    "name":"Rusty Blackbird",
    "sname":"Euphagus carolinus",
    "code":1
  },
  {
    "category":"",
    "name":"Brewer's Blackbird",
    "sname":"Euphagus cyanocephalus",
    "code":1
  },
  {
    "category":"",
    "name":"Common Grackle",
    "sname":"Quiscalus quiscula",
    "code":1
  },
  {
    "category":"",
    "name":"Boat-tailed Grackle",
    "sname":"Quiscalus major",
    "code":1
  },
  {
    "category":"",
    "name":"Great-tailed Grackle",
    "sname":"Quiscalus mexicanus",
    "code":1
  },
  {
    "category":"",
    "name":"Shiny Cowbird",
    "sname":"Molothrus bonariensis",
    "code":3
  },
  {
    "category":"",
    "name":"Bronzed Cowbird",
    "sname":"Molothrus aeneus",
    "code":1
  },
  {
    "category":"",
    "name":"Brown-headed Cowbird",
    "sname":"Molothrus ater",
    "code":1
  },
  {
    "category":"",
    "name":"Black-vented Oriole",
    "sname":"Icterus wagleri",
    "code":5
  },
  {
    "category":"",
    "name":"Orchard Oriole",
    "sname":"Icterus spurius",
    "code":1
  },
  {
    "category":"",
    "name":"Hooded Oriole",
    "sname":"Icterus cucullatus",
    "code":1
  },
  {
    "category":"",
    "name":"Streak-backed Oriole",
    "sname":"Icterus pustulatus",
    "code":4
  },
  {
    "category":"",
    "name":"Bullock's Oriole",
    "sname":"Icterus bullockii",
    "code":1
  },
  {
    "category":"",
    "name":"Spot-breasted Oriole",
    "sname":"Icterus pectoralis",
    "code":2
  },
  {
    "category":"",
    "name":"Altamira Oriole",
    "sname":"Icterus gularis",
    "code":2
  },
  {
    "category":"",
    "name":"Audubon's Oriole",
    "sname":"Icterus graduacauda",
    "code":2
  },
  {
    "category":"",
    "name":"Baltimore Oriole",
    "sname":"Icterus galbula",
    "code":1
  },
  {
    "category":"",
    "name":"Scott's Oriole",
    "sname":"Icterus parisorum",
    "code":1
  },
  {
    "category":"Fringilline and Cardueline Finches and Allies (Fringillidae)",
    "name":"Common Chaffinch",
    "sname":"Fringilla coelebs",
    "code":4
  },
  {
    "category":"",
    "name":"Brambling",
    "sname":"Fringilla montifringilla",
    "code":3
  },
  {
    "category":"",
    "name":"Asian Rosy-Finch",
    "sname":"Leucosticte arctoa",
    "code":5
  },
  {
    "category":"",
    "name":"Gray-crowned Rosy-Finch",
    "sname":"Leucosticte tephrocotis",
    "code":1
  },
  {
    "category":"",
    "name":"Black Rosy-Finch",
    "sname":"Leucosticte atrata",
    "code":2
  },
  {
    "category":"",
    "name":"Brown-capped Rosy-Finch",
    "sname":"Leucosticte australis",
    "code":2
  },
  {
    "category":"",
    "name":"Pine Grosbeak",
    "sname":"Pinicola enucleator",
    "code":1
  },
  {
    "category":"",
    "name":"Eurasian Bullfinch",
    "sname":"Pyrrhula pyrrhula",
    "code":4
  },
  {
    "category":"",
    "name":"Common Rosefinch",
    "sname":"Carpodacus erythrinus",
    "code":4
  },
  {
    "category":"",
    "name":"Purple Finch",
    "sname":"Haemorhous purpureus",
    "code":1
  },
  {
    "category":"",
    "name":"Cassin's Finch",
    "sname":"Haemorhous cassinii",
    "code":1
  },
  {
    "category":"",
    "name":"House Finch",
    "sname":"Haemorhous mexicanus",
    "code":1
  },
  {
    "category":"",
    "name":"Red Crossbill",
    "sname":"Loxia curvirostra",
    "code":1
  },
  {
    "category":"",
    "name":"White-winged Crossbill",
    "sname":"Loxia leucoptera",
    "code":2
  },
  {
    "category":"",
    "name":"Common Redpoll",
    "sname":"Acanthis flammea",
    "code":1
  },
  {
    "category":"",
    "name":"Hoary Redpoll",
    "sname":"Acanthis hornemanni",
    "code":2
  },
  {
    "category":"",
    "name":"Eurasian Siskin",
    "sname":"Spinus spinus",
    "code":5
  },
  {
    "category":"",
    "name":"Pine Siskin",
    "sname":"Spinus pinus",
    "code":1
  },
  {
    "category":"",
    "name":"Lesser Goldfinch",
    "sname":"Spinus psaltria",
    "code":1
  },
  {
    "category":"",
    "name":"Lawrence's Goldfinch",
    "sname":"Spinus lawrencei",
    "code":2
  },
  {
    "category":"",
    "name":"American Goldfinch",
    "sname":"Spinus tristis",
    "code":1
  },
  {
    "category":"",
    "name":"Oriental Greenfinch",
    "sname":"Chloris sinica",
    "code":4
  },
  {
    "category":"",
    "name":"Evening Grosbeak",
    "sname":"Coccothraustes vespertinus",
    "code":1
  },
  {
    "category":"",
    "name":"Hawfinch",
    "sname":"Coccothraustes coccothraustes",
    "code":4
  },
  {
    "category":"Old World Sparrows (Passeridae)",
    "name":"House Sparrow",
    "sname":"Passer domesticus",
    "code":1
  },
  {
    "category":"",
    "name":"Eurasian Tree Sparrow",
    "sname":"Passer montanus",
    "code":2
  }
]