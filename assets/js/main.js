function weather() {
    const weatherNum = parseInt(document.getElementById("weatherInput").value);

    let output = "";

    if (weatherNum >= 8 && weatherNum <= 10) {
        output = "super";
    } else if (weatherNum >= 6 && weatherNum <= 7) {
        output = "gut";
    } else if (weatherNum >= 3 && weatherNum <= 5) {
        output = "okay";
    } else if (weatherNum >= 0 && weatherNum <= 2) {
        output = "schlecht";
    } else {
        output = "invalid Value";
    }

    document.getElementById("output").innerHTML = output;

}



// console.log(output);