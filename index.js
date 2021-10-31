document.getElementById('convert').addEventListener('submit', function (event) {
    event.preventDefault();

    const distance = parseFloat(document.getElementById('distance').value);


    if (distance) {
        const conversion = distance * 1.609344;
        const convert = conversion.toFixed(3);                      //Math.round(conversion * 1000) / 1000;


        //display
        const answer = document.getElementById('answer');
        answer.innerHTML = `<h2>${distance} miles convert to ${convert} kilometers. </h2>`;


    }
    else {
        const answer = document.getElementById('answer');
        answer.innerHTML = '<h2>Please provide a number.</h2>'
    }

});