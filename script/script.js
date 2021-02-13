function Calculator(){
    this.state = false;
    this.first_value = Number;
    this.thecond_value = Number;
    this.operation = String;
    this.result = Number;

    this.on_off = function (){
        this.state = !this.state
    }

    this.calculate = function (){
        this.result = 0;
        this.first_value = Number(prompt("Введите первое число"));
        if (!/\d+\.?\d*/.test(this.first_value))
            return alert(`Ошибка. Вы ввели не число.`)
        this.operation = prompt("Введите символ необходимой операции\n(+ - * /)");
        if (!/[+\-*\/]/.test(this.operation))
            return alert("Ошибка. Введенная оперция не распознана.")
        this.thecond_value = Number(prompt("Введите второе число"));
        if (!/\d+\.?\d*/.test(this.thecond_value))
            return alert(`Ошибка. Вы ввели не число.`)
        switch (this.operation){
            case "+":
                this.result = this.first_value + this.thecond_value;
                break;
            case "-":
                this.result = this.first_value - this.thecond_value;
                break;
            case "*":
                this.result = this.first_value * this.thecond_value;
                break;
            case "/":
                if (this.thecond_value == 0)
                    return alert("Ошибка. На ноль делить нельзя.")
                this.result = this.first_value / this.thecond_value;
                break;
        }
        alert(`Результат вычисления ${this.first_value} ${this.operation} ${this.thecond_value} равен ${this.result}`);
    }

}

if (confirm("Вы хотите включить калькулятор?")) {
    let calc = new Calculator();
    calc.on_off();
    do
        calc.calculate()
    while (confirm("Вам нужно произвести новое вычисление?"))
    calc.on_off();
}
alert("Для включения калькулятора обновите страницу.")
