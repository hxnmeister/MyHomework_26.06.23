//Завдання №1
/*class Worker
{
    constructor(name, surname, rate, days)
    {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    set name(value) { this._name = value; }
    get name() { return this._name; }

    set surname(value) { this._surname = value; }
    get surname() { return this._surname; }

    set rate(value) { this._rate = value }
    get rate() { return this._rate; }

    set days(value){ this._days = value; }
    get days() { return this._days; }

    getSalary()
    {
        alert(`Зарплата працівника ${this._name} ${this._surname} складає: ${this._rate * this._days}грн.`);
    }
}

const firstName = prompt("Введіть ім`я працівника:","Наприклад: Василь");
const surname = prompt("Введіть прізвище:","Наприклад: Шевченко");
const rate = prompt("Введіть ставку за день роботи:","Наприклад: 213");
const days = prompt("Введіть кількість відпрацьованих днів:","Наприклад: 22");

const worker = new Worker(firstName, surname, rate, days);

worker.getSalary();*/

//Завдання №2
/*class User
{
    constructor(name, surname)
    {
        this.name = name;
        this.surname = surname;
    }

    set name(value) { this._name = value; }
    get name() { return this._name; }

    set surname(value) { this._surname = value; }
    get surname() { return this._surname; }

    getFullName()
    {
        return this._name + " " + this._surname;
    }
}

class Student extends User
{
    constructor(name, surname, year)
    {
        super(name, surname);
        this.year = year;
    }

    set year(value) { this._year = value; }
    get year() { return this._year; }

    getCourse()
    {
        return new Date().getFullYear() - this._year;
    }
}

const firstName = prompt("Введіть ім`я студента:","Наприклад: Микола");
const surname = prompt("Введіть прізвище студента:","Наприклад: Гаврилюк");
const admissionYear = prompt("Введіть рік вступу студента:","Наприклад: 2020");

const student = new Student(firstName, surname, admissionYear);

document.write(`<p>Студент <b>${student.getFullName()}</b>, навчається на <b>${student.getCourse()}</b>-у курсі!</p>`);*/