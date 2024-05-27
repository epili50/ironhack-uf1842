// ¿En tu páis de origen es normal dejar propina?


const calculate = document.querySelector('#calculate');

calculate.addEventListener('click', function(){
    let billAmount = document.querySelector('#bill-amount').value;
    let porcentageTip = document.querySelector('#percentage-tip').value;
    console.log(+billAmount);
    
    const tipAmount = (+porcentageTip / 100) * +billAmount;
    console.log("🚀 ~ file: app.js:11 ~ calculate.addEventListener ~ tipAmount:", tipAmount)
    const total = +billAmount + tipAmount
    console.log("🚀 ~ file: app.js:13 ~ calculate.addEventListener ~ total:", total)

    document.querySelector('#tip-amount').value = tipAmount.toFixed(2);
    document.querySelector('#total').value = total.toFixed(2);
})