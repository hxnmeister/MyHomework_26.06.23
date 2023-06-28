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

//Завдання №3
const hamburger =
{ 
    sizes: {
        SMALL: {
          name: "Small",
          cost: 50,
          calories: 20,
        },
        LARGE: {
          name: "Large",
          cost: 100,
          calories: 40,
        },
      },
      stuffings: {
        SALAD: {
          name: "Salad",
          cost: 20,
          calories: 5,
        },
        CHEESE: {
          name: "Cheese",
          cost: 10,
          calories: 20,
        },
        POTATO: {
          name: "Potato",
          cost: 15,
          calories: 10,
        },
      },
      toppings: {
        MAYO: {
          name: "Mayo",
          cost: 20,
          calories: 5,
        },
        SPICE: {
          name: "Spice",
          cost: 15,
          calories: 0,
        },
      },
}

function HamburgerException(message)
{
    this.message = message;
}

class Hamburger
{
    _topping = [];

    constructor(size, stuffing)
    {
        if(size === undefined || stuffing === undefined) throw new HamburgerException("Розмір або наповнення не вказані!");
        else if(size !== hamburger.sizes.LARGE && size !== hamburger.sizes.SMALL) throw new HamburgerException("Некорректне значення розміру!");
        else if(stuffing !== hamburger.stuffings.CHEESE && stuffing !== hamburger.stuffings.POTATO && stuffing !== hamburger.stuffings.SALAD) throw new HamburgerException("Некорректне значення наповнення!");

        this.size = size;
        this.stuffing = stuffing;
    }

    addTopping = (value) => 
    {
        if(this._topping.includes(value))
        {
            throw new HamburgerException("Цей топінг вже був доданий до бургера!");
        }
        else if(value !== hamburger.toppings.MAYO && value !== hamburger.toppings.SPICE)
        {
            throw new HamburgerException("Не корректна назва топінгу!");
        }

        this._topping.push(value);
    }
    removeTopping = (value) => 
    {
        if (!this._topping.includes(value)) 
        {
            throw new HamburgerException("Даного топінгу немає в рецепті!");
        }
        else if(value !== hamburger.toppings.MAYO && value !== hamburger.toppings.SPICE)
        {
            throw new HamburgerException("Не корректна назва топінгу!");
        }

        this._topping.splice(this._topping.indexOf(value), 1);
    }
    getToppings = () =>
    {
        if (this._topping.length > 0) return this._topping;
        else 
        {
            console.log("Топінги не було додано!");
            return [];
        }
    }
    getSize = () => this.size.name;
    getStuffing = () => this.stuffing.name;
    calculatePrice = () => this.size.cost + this.stuffing.cost + this._topping.reduce((sum, value) => sum + value.cost, 0) + "грн.";
    calculateCalories = () => this.size.calories + this.stuffing.calories + this._topping.reduce((sum, value) => sum + value.calories, 0) + "кал."; 
}


try
{
    const burger = new Hamburger(hamburger.sizes.LARGE, hamburger.stuffings.POTATO);

    console.log(burger.getSize());
    console.log(burger.getStuffing());
    console.log(burger.getToppings());

    burger.addTopping(hamburger.toppings.MAYO);
    console.log(burger.getToppings());
    burger.addTopping(hamburger.toppings.SPICE);
    console.log(burger.getToppings());

    burger.removeTopping(hamburger.toppings.MAYO);
    console.log(burger.getToppings());

    console.log(burger.calculateCalories());
    console.log(burger.calculatePrice());
}
catch (e) 
{
    console.log(e.message);
}
