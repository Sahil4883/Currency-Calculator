function convertCurrency(){
    var fc= document.getElementById('fromCurrency').value;
    var tc = document.getElementById('toCurrency').value;
    var am = document.getElementById('amount').value
    var result= document.getElementById('result')
    if (fc === "" || tc === "" || am === "") {
        result.style.color='red';
        result.innerHTML='Please fill in all fields.';
    }
    fetch(`https://api.exchangerate-api.com/v4/latest/${fc}`)
    .then(response => response.json())
    .then(data =>{
        var rate = data.rates[tc];
        if (rate){
            var convertedAm= am *rate;
            result.innerHTML=`${am} ${fc} is ${convertedAm.toFixed(2)} ${tc}`;
            result.style.color = 'green'
        }
        else{
            result.innerHTML= 'Invalid currency codes. Please check and try again.'
            result.style.color = 'red'
        }
        
    })
    .catch(error =>{
        console.error("Error fetching exchange rates:", error);
    })
}
