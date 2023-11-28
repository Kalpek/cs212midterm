function generateMadLib() {
    // Get user input
    var adjective = document.getElementById('adjective').value;
    var noun = document.getElementById('noun').value;
    var verb = document.getElementById('verb').value;
    var pronoun = document.getElementById('pronoun').value;
    var place = document.getElementById('place').value;

    // Create the mad lib text
    var madLibText = `Once upon a time, there was a(n) ${adjective} ${noun}.`;
    madLibText += ` This ${noun} loved to ${verb} while ${pronoun} was at ${place}.`;
    madLibText += ` It was a truly ${adjective} experience.`;

    // Display the mad lib text to the user
    document.getElementById('madLibText').innerText = madLibText;
}
