function generateMadLib() 
{
	var adjective, noun, verb, pronoun, place, madLib;
	
    adjective = document.getElementById('adjectiveID').value;
    noun = document.getElementById('nounID').value;
    verb = document.getElementById('verbID').value;
    pronoun = document.getElementById('pronounID').value;
    place = document.getElementById('placeID').value;

    madLib = `In a ${adjective} world, a ${noun} existed peacefully at ${place}.`;
    madLib += ` ${pronoun} ${verb} the challenges of life while also appreciating the good parts.`;
    madLib += ` Life really is a rollercoaster, but once ${pronoun} graduates, ${pronoun} will have the opportunity to live a life ${pronoun} wants to live.`;

    document.getElementById('madLibText').innerText = madLib;
}
