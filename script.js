function calculate() {
    const calories = document.getElementById('calories').value;
    const protein = document.getElementById('protein').value;
    const fats = document.getElementById('fats').value;
    const carbs = document.getElementById('carbs').value;
    
    if (calories && protein && fats && carbs) {
        const resultText = `Ви спожили ${calories} ккал, ${protein} г білків, ${fats} г жирів, ${carbs} г вуглеводів.`;
        document.getElementById('result').innerText = resultText;
    } else {
        document.getElementById('result').innerText = 'Будь ласка, заповніть усі поля.';
    }
}