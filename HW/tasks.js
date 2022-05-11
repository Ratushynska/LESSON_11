/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
    створити пустий масив, наповнити його 10 об'єктами new User(....)*/
/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , 
    залишивши тільки об'єкти з парними id (filter)*/
/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. 
    по зростанню (sort)*/
/*
    function User (id, name, surname, email, phone) {
            this.id = id
            this.name = name
            this.surname = surname
            this.email = email
            this.phone = phone
        }

    const user1 = new User (1,'Karl','Karl','karl@gmail.com','0651285966');
    const user2 = new User (2,'Jack','Jack','jack@gmail.com','0854512145');
    const user3 = new User (3,'Yura','Yura','yura@gmail.com','0458725115');
    const user4 = new User (4,'John','John','john@gmail.com','0356485452');
    const user5 = new User (5,'Den','Den','den@gmail.com','0325647822');
    const user6 = new User (6,'Kate','Kate','kate@gmail.com','0459823657');
    const user7 = new User (7,'Jane','Jane','jane@gmail.com','0125648965');
    const user8 = new User (8,'Dave','Dave','dave@gmail.com','0254896532');
    const user9 = new User (9,'Sonya','Sonya','sonya@gmail.com','0435973651');
    const user10 = new User (10,'Sasha','Sasha','sasha@gmail.com','0856325974');

    let arrayOfUsers = [];
    arrayOfUsers.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10)
    console.log(arrayOfUsers)


    let filterOfUsers = arrayOfUsers.filter (function (i) {
        return i.id % 2 === 0
    })
    console.log(filterOfUsers)


    let sortOfUsers = arrayOfUsers.sort ((u1,u2) => u2.id - u1.id);
    console.log(sortOfUsers)
*/

/*- створити класс для об'єктів Client з полями id, name, surname , 
    email, phone, order (поле є масивом зі списком товарів)
    створити пустий масив, наповнити його 10 об'єктами Client*/
/*- Взяти масив (Client [] з попереднього завдання).
    Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/
/*
    class Client {
        constructor (id,name,surname,email,phone,order) {
            this.id = id
            this.name = name
            this.surname = surname
            this.email = email
            this.phone = phone
            this. order = order
        }
    }

    const client1 = new Client (1,'Karl','Karl','karl@gmail.com','0651285966',['carrot', 'potato','cucumber','bread']);
    const client2 = new Client (2,'Jack','Jack','jack@gmail.com','0854512145',['tomato','bread']);
    const client3 = new Client (3,'Yura','Yura','yura@gmail.com','0458725115',['carrot','potato','tomato']);
    const client4 = new Client (4,'John','John','john@gmail.com','0356485452',['tomato','carrot']);
    const client5 = new Client (5,'Den','Den','den@gmail.com','0325647822',['cucumber','tomato','onion']);
    const client6 = new Client (6,'Kate','Kate','kate@gmail.com','0459823657',['potato','tomato','cucumber','icecream','paper']);
    const client7 = new Client (7,'Jane','Jane','jane@gmail.com','0125648965',['bread','carrot']);
    const client8 = new Client (8,'Dave','Dave','dave@gmail.com','0254896532',['potato']);
    const client9 = new Client (9,'Sonya','Sonya','sonya@gmail.com','0435973651',['bread','carrot','onion']);
    const client10 = new Client (10,'Sasha','Sasha','sasha@gmail.com','0856325974',['tomato','cucumber']);

    let arrayOfClients = [];
    arrayOfClients.push(client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
    console.log(arrayOfClients)


    let sortOfClients = arrayOfClients.sort((c1,c2) => c1.order.length - c2.order.length);
    console.log(sortOfClients)
*/

/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, 
    з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 
    додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі 
        `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної 
        швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, 
        і додає його в поточний об'єкт car
*/
/*
    function Car (model,creator,year,maxSpeed,engine) {
            this.model=model
            this.creator=creator
            this.year=year
            this.maxSpeed=maxSpeed
            this.engine=engine
            this.drive = function() {
                console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
            }
            this.info = function() {
                for (const field in this) {
                    console.log(`${field}:${this[field]}`)
                }
            }
            this.increaseMaxSpeed = function (newSpeed) {
                this.maxSpeed += newSpeed
            }
            this.changeYear = function (newYear) {
                this.year = newYear
            }
            this.addDriver = function (driver) {
                this.driver = driver
            }
        }

    const newCar = new Car('c','mercedes',2020,100,3.5);
    console.log(newCar.drive())
    console.log(newCar.info())
    newCar.increaseMaxSpeed(20)
    newCar.changeYear(2021)
    newCar.addDriver('Kate')
    console.log(newCar)
*/
    

/*- (Те саме, тільки через клас)
    Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, 
    рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі 
        `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної 
        швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, 
        і додає його в поточний об'єкт car*/
/*
    class Car {
        constructor (model,creator,year,maxSpeed,engine) {
            this.model=model
            this.creator=creator
            this.year=year
            this.maxSpeed=maxSpeed
            this.engine=engine
        }
        
        drive() {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
        }
        info() {
            for (const field in this) {
                console.log(`${field}:${this[field]}`)
            }
        }
        increaseMaxSpeed (newSpeed) {
            this.maxSpeed += newSpeed
        }
        changeYear (newYear) {
            this.year = newYear
        }
        addDriver (driver) {
            this.driver = driver
        }
    }
    
    const newCar = new Car('c','mercedes',2020,100,3.5);
    console.log(newCar.drive())
    console.log(newCar.info())
    newCar.increaseMaxSpeed(20)
    newCar.changeYear(2021)
    newCar.addDriver('Kate')
    console.log(newCar)
*/

/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. 
    Створити масив з 10 попелюшок.
    Сторити об'єкт класу "принц" за допомоги класу який має поля 
    ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/
/*
    class Cinderella {
        constructor (nameOfCinderella,ageOfCinderella,footOfCinderella) {
            this.nameOfCinderella=nameOfCinderella
            this.ageOfCinderella=ageOfCinderella
            this.footOfCinderella=footOfCinderella
        }
    }

    let arrayOfCinderellas = [
        new Cinderella ('kate',18,39),
        new Cinderella ('jade',19,38),
        new Cinderella ('jane',19,38),
        new Cinderella ('anya',18,38),
        new Cinderella ('lulu',20,40),
        new Cinderella ('sonya',25,37),
        new Cinderella ('ira',21,38),
        new Cinderella ('anastasia',20,38),
        new Cinderella ('lola',35,37),
        new Cinderella ('oksana',17,39),
    ];
    
    console.log(arrayOfCinderellas)

    class Prince {
        constructor (nameOfPrince, ageOfPrince, shoesSize) {
            this.nameOfPrince=nameOfPrince
            this.ageOfPrince=ageOfPrince
            this.shoesSize=shoesSize
        }
    }

    let princeOfPrices = new Prince ('david',25,40);

    console.log(princeOfPrices)

    let findCinderella = (arrOfPrinces, prince) => {
        for (const girl of arrOfPrinces) {
            if (girl.footOfCinderella === princeOfPrices.shoesSize) {
                return `${girl.nameOfCinderella}`;
            }
        }
    }

    console.log(findCinderella(arrayOfCinderellas, princeOfPrices))


    let princes = arrayOfCinderellas.find(value => value.footOfCinderella === princeOfPrices.shoesSize);
    console.log(princes)
*/