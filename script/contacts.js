if (confirm("Создать справочник контактов?")) {
    contacts = new Contacts();
    contacts.askOperation();
}
alert("Для создания справочника контактов обновите страницу.")



function Contacts(){
    this.contactsList = [];

    this.askOperation = function (){
        let operation = prompt("Введите номер операции.\n\n" +
            "1 - Создать новый контакт\n\n" +
            "2 - Показать список контактов\n\n" +
            "3 - Найти контакт и показать его данные\n\n" +
            "4 - Удалить контакт\n\n" +
            "5 - Выйти из справочника контактов\n(справочник буде  недоступен)")
        switch (operation){
            case "1":
                this.addContact();
                this.askOperation();
                break;
            case "2":
                this.showContactsList();
                this.askOperation();
                break;
            case "3":
                this.showContactDetail();
                this.askOperation();
                break;
            case "4":
                this.deleteContact();
                this.askOperation();
                break;
            case "5":
                break;
            default :
                alert("Операция не распознана.");
                this.askOperation();
        }
    }


    this.addContact = function (){
        let foolName = prompt("Введите ФИО контакта", "Иванов Иван Иванович"),
            age = prompt("Введите возраст контакта", "42"),
            phone = prompt("введите телефон контакта", "+375 29 123 45 67"),
            email = prompt("введите электронную почту контакта", "test@test.test");

        this.contactsList.push(new Contact(foolName, age, phone, email));
    }
    this.showContactDetail = function (){
        let searchValue = prompt("Введите имя контакта");
        let searchResult = this.searchContact(searchValue);
        let resultText = "";
        for (let each of searchResult){
            resultText += "\n\nФИО - " + each.foolName;
            resultText += "\nВозраст - " + each.age;
            resultText += "\nТелефон - " + each.phone;
            resultText += "\nАдрес эл. почты - " + each.email;
        }
        alert(resultText);
    }
    this.showContactsList = function (){
        let message = "";
        for (let item of this.contactsList)
            message += `${item.foolName}\n`
        alert(message == "" ? "Список контактов пуст" : message)
    }
    this.deleteContact = function (){//todo написать реализацию

    }

    this.validateAge = function (){//todo написать реализацию

    }
    this.searchContact = function (searchValue){//todo написать реализацию
        let result = [];
        for (let each of contacts.contactsList)
            if (each.foolName.indexOf(searchValue) != -1)
                result.push(each)
        return result
    }

}

function Contact(foolName, age, phone, email){
    this.foolName = foolName;
    this.age = age;
    this.phone = phone;
    this.email = email;
}