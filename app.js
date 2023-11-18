function convertCurrency() {
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var amount = document.getElementById("amount").value;

    if (fromCurrency === "" || toCurrency === "" || amount === "") {
        alert("Please fill in all fields.");
        return;
    }

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            var rate = data.rates[toCurrency];
            if (rate) {
                var convertedAmount = amount * rate;
                document.getElementById("result").innerHTML = `${amount} ${fromCurrency} is ${convertedAmount.toFixed(2)} ${toCurrency}`;
            } else {
                alert("Invalid currency codes. Please check and try again.");
            }
        })
        .catch(error => {
            console.error("Error fetching exchange rates:", error);
        });
} 