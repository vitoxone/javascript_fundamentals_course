// import { Car } from '../models/car.js';

import $, { event } from 'jquery';
let showUnit = 3;

show(showUnit);

function show(unit){
    switch(unit){
        case 3: 
            
            if(false){
                console.log('#1 rest paramaters');
                function sendCars(...allCarIds){
                    allCarIds.forEach(id => console.log(id));
                }
                sendCars(100, 200, 555);
            }

            if(true){
                console.log('#2 rest paramaters');
                function sendCars(day, ...allCarIds){
                    allCarIds.forEach(id => console.log(id));
                }
                sendCars('Monday', 100, 200, 555);
            }


            if(false){
                console.log('#3 destructuring arrays');
                let carIds = [1,2,5];
                let [car1, car2, car3] = carIds;

                console.log(car1, car2, car3);
            }

            if(false){
                console.log('#4 destructuring arrays');
                let carIds = [1,2,5];
                let car1, remainingCars;
                [car1, ...remainingCars] = carIds;

                console.log(car1, remainingCars);
            }

            if(false){
                console.log('#5 destructuring arrays');
                let carIds = [1,2,5];
                let remainingCars;
                [, ...remainingCars] = carIds;

                console.log(remainingCars);
            }

            if(false){
                comsole.log('#6 destructuring objects');
                let car = {id:5000, style: 'covertible'};
                let {id, style} = car;

                console.log(id, style); 
            }

            if(false){
                console.log('#7 destructuring objects');
                let car = {id:5000, style: 'covertible'};
                ({id, style} = car);

                console.log(id, style); 
            }

            if(false){
                console.log('#8 spread syntax');
                function startCars(car1, car2, car3){
                    console.log(car1, car2, car3);
                }

                let carIds = [100, 300, 500];

                startCars(...carIds);
            }

            if(false){
                console.log('#9 spread syntax');
                function startCars(car1, car2, car3){
                    console.log(car1, car2, car3);
                }

                let carCodes = 'abc';

                startCars(...carCodes);
            }

            if(false){
                console.log('#10 spread syntax');
                function startCars(car1, car2, car3, ...rest){
                    console.log(rest);
                }

                let carIds = [1,2,3,4,5,6];

                startCars(...carIds);
            }

            if(false){
                console.log('#11 controlling Loops');
                let i = 0;
                for(; i<12; i++){
                    if(i == 8){
                        break;
                    }
                }
                console.log(i);
            }
            if(false){
                console.log('#12 controlling Loops');
                for(let i = 0; i<4; i++){
                    if(i === 2){
                        continue;
                    }
                    console.log(i);
                }
            }
            break;

        case 5:
            console.log('Function and Scope');

            if(false){
                console.log('#1 function scope');
                function startCar(carId){
                    let message =  'Starting...';
                    let startFn = function turnKey(){
                        let message = 'Override';
                    };
                    startFn();
                    console.log(message);
                }
                startCar(123);
            }

            if(false){
                console.log('#2 Block scope');
                let message = 'Outside';
                if(5 === 5){
                    let message = "Equals";
                    console.log(message);
                }
                console.log(message);
            }

            if(false){
                console.log('#3 IIFE');
                let app = (function(){
                    let carId = 123;
                    console.log('in function');
                    return {carId};
                })();
                console.log(app);
            }

            if(false){
                console.log('#4 Closure');
                let app = (function(){
                    let carId = 123;
                    let getId = function(){
                        return carId;
                    };
                    let getIdSum = function(){
                        return ++carId;
                    };
                    return {getId:getId, getIdSum:getIdSum};
                })();

                console.log(app.getId());
                console.log(app.getIdSum());  
            }

            if(false){
                console.log('#5 The this keyword');
                let fn = function(){
                    console.log(this === window);
                };
                fn();
            }

            if(false){
                console.log('#6 The this keyword');
                let o = {
                    carId:123,
                    getId: function(){
                        return this.carId;
                    },
                    getIdSum: function(){
                        return ++this.carId;
                    }                    
                };
                console.log( o.carId);
                console.log( o.getId());
                console.log( o.getIdSum());
            }
            if(false){
                console.log('#7 Call');
                let o = {
                    carId:123,
                    getId: function(){
                        return this.carId;
                    }                   
                };

                let newCar = { carId: 456 };
                console.log( o.carId);
                console.log( o.getId.call(newCar));

            }

            if(false){
                console.log('#8 Apply');
                let o = {
                    carId:123,
                    getId: function(prefix){
                        return prefix + this.carId;
                    }                   
                };

                let newCar = { carId: 456 };
                console.log( o.carId);
                console.log( o.getId.apply(newCar, ['ID: ']));

            }

            if(false){
                console.log('#9 Bind');
                let o = {
                    carId:123,
                    getId: function(){
                        return this.carId;
                    }                   
                };

                let newCar = { carId: 456 };
                let newFn = o.getId.bind(newCar);
                console.log( o.carId);
                console.log( newFn());
            }

            if(false){
                console.log('#10 Arrow Functions');

                let getId = () => 123;
                console.log( getId());

            }

            if(false){
                console.log('#11 Arrow Functions');

                let getId = prefix => prefix + 123;
                console.log( getId('ID: '));

            }
            if(false){
                console.log('#13 Arrow Functions');

                let getId = (prefix, suffix) => prefix + 123 + suffix;
                console.log( getId('ID: ', '!'));

            }
            if(false){
                console.log('#14 Arrow Functions');

                let getId = (prefix, suffix) => {
                    return prefix + 123 + suffix;
                };
                      
                console.log( getId('ID: ', '!'));

            }
            if(true){
                console.log('#15 Arrow Functions');

                let getId = _ => 123;  
                console.log( getId() );
            }
        break;

        case 6:
            console.log('Objects and Array');

            if(false){
                console.log('#1 this keyword in Constructor function');
                function Car(id){
                    this.carId = id;
                }

                let car = new Car(123);
                console.log(car.carId);
            }
            if(false){
                console.log('#2 methods');
                function Car(id){
                    this.carId = id;
                    this.start = function(){
                        console.log('start: ' + this.carId);
                    };
                }

                let car = new Car(123);
                car.start();
            }

            if(false){
                console.log('#3 prototypes');
                function Car(id){
                    this.carId = id;
                }
                Car.prototype.start = function(){
                    console.log('start: ' + this.carId);
                };

                let car = new Car(123);
                car.start();
            }
            if(false){
                console.log('#4 String.prototype');

                String.prototype.hello = function(){
                    return this.toString() + ' Hello';
                };
                console.log('foo'.hello());
            }

            if(false){
                console.log('#5 Array Iteration');

                let carIds = [
                    {carId: 123, style: 'sedan'},
                    {carId: 456, style: 'convertible'},
                    {carId: 789, style: 'sedan'}
                ];

                carIds.forEach( car => console.log(car));
                carIds.forEach((car,index) => console.log(car, index));
            }


            if(false){
                console.log('#6 Array Filtering');

                let carIds = [
                    {carId: 123, style: 'sedan'},
                    {carId: 456, style: 'convertible'},
                    {carId: 789, style: 'sedan'}
                ];

                let convertibles = carIds.filter(
                    car => car.style === 'convertible'
                );

                console.log(convertibles);  
            }

            if(false){
                console.log('#6 Array Testing');

                let carIds = [
                    {carId: 123, style: 'sedan'},
                    {carId: 456, style: 'convertible'},
                    {carId: 789, style: 'sedan'}
                ];

                let result = carIds.every(
                    car => car.carId > 0
                );

                console.log(result);  
            }

            if(true){
                console.log('#6 Array Testing');

                let carIds = [
                    {carId: 123, style: 'sedan'},
                    {carId: 456, style: 'convertible'},
                    {carId: 789, style: 'sedan'}
                ];

                let car = carIds.find(
                    car => car.carId > 500
                );

                console.log(car);  
            }
            case 7:
                console.log('Clases an Modules');
                
                if(false){
                    console.log('#1 Constructor');
                    class Car {
                        constructor(id) {
                            this.id = id;
                        }
                    }

                    let car = new Car(123);
                    console.log( car.id );
                }

                if(false){
                    console.log('#2 Methods');
                    class Car {
                        constructor(id) {
                            this.id = id;
                        }
                        identify(suffix) {
                            return `Car ID: ${this.id} ${suffix}`;
                        }
                    }

                    let car = new Car(123);
                    console.log( car.identify('!!!') );
                }

                if(false){
                    console.log('#3 Inheritance');
                    class Vehicle {
                        constructor() {
                            this.type = 'car';
                        }
                        start() {
                            return `Starting: ${this.type}`;
                        }
                    }

                    class Car extends Vehicle {
                        constructor(color) {
                            super();
                            this.color = color;
                        }
                    }

                    let car = new Car( 'blue');
                    console.log( car );
                }

                if(false){
                    console.log('#3 import module');
                    // let car = new Car(123);
                    // console.log( car.id);
                }
            break; 
            case 8:
                console.log('Programing the DOM and BOM');
                if(false){
                    console.log('#1 setTimeOut()');

                    let timeoutId = setTimeout( function(){
                        console.log('2 second passed');
                    }, 2000);

                    console.log(timeoutId);
                   // clearTimeout(timeoutId);
                }
                if(true){
                    console.log('#2 setTimeOut()');
                    
                    var count = 0;
                    let intervalId = setInterval( function(){
                        ++count;
                        console.log( `${count} interval passed` );

                        if(count == 5){
                            console.log(count);
                            clearInterval(intervalId);
                        }

                    }, 1000);
                }
            break;
            case 9:
                console.log('Promises and Error Handings');
                if(false){
                    console.log('#1 try catch and finally');

                    try{
                        let car = newCar;
                        throw new Error('my custom error');
                    }
                    catch(error){
                        console.log('error: ', error);
                    }
                    finally{
                        console.log('this always executes');
                    }
                }
                if(true){
                    console.log('#2 Create a Promise');
                    let promise = new Promise(
                        function(resolve, reject){
                            setTimeout(resolve, 100, 'someValue');
                        }
                    );

                    promise.then(
                        value => console.log('fulfilled: ' + value),
                        error => console.log('rejected: ' + error)
                    );

                   // console.log(promise);

                }
            break;
            case 10:
                console.log('Data access using Http');
                if(false){
                    console.log('#1 Http request using XHR');
                    let xhttp = new XMLHttpRequest();
                    xhttp.onreadystatechange = function(){
                        if(this.readyState == 4 && this.status == 200){
                            console.log(this.responseText);
                        }
                    };

                    
                    xhttp.open("GET", "https://606b3ecff8678400172e5f56.mockapi.io/api/V1/users", true);
                    xhttp.send();
                }
                if(false){
                    console.log('#2 Http request using jQuery');
                    $.get("https://606b3ecff8678400172e5f56.mockapi.io/api/V1/users",
                        data => console.log('data: ', data)
                        );
                }

                if(true){
                    console.log('#2 Http request using jQuery');
                   let promise =  $.get("https://606b3ecff8678400172e5f56.mockapi.io/api/V1/users");

                   promise.then (
                        data => console.log('success: ', data),
                        error => console.log('error', error)
                   );
                }

                if(true){
                    console.log('#3 Http Post using jQuery');

                    let user = {
                        name: 'Mark Zamoyta',
                        avatar: 'mark.jpg'
                    };
                    let promise = $.post(
                        "https://606b3ecff8678400172e5f56.mockapi.io/api/V1/users", user
                    );

                    promise.then(
                        data => console.log('data: ', data),
                        error => console.log('error: ', error)
                    );
                }
            break;
            case 11:
                console.log('#Forms');
                if(false){
                    
                    console.log('#1 Preventing form submission');
                    let form = document.getElementById('user-form');

                    form.addEventListener('submit', event =>{

                        event.preventDefault();
                    });
                }

                if(false){
                    console.log('#2 Accesing Form Fields');

                    let form = document.getElementById('user-form');

                    form.addEventListener('submit', event =>{

                        let user = form.elements['user'];
                        let avatarFile = form.elements['avatar-file'];

                        console.log(user.value, avatarFile.value);
                        event.preventDefault();
                    });
                }

                if(false){
                    console.log('#3 Showing Validation Errors');

                    let form = document.getElementById('user-form');
                     
                    form.addEventListener('submit', event =>{
                        let user = form.elements['user'];
                        let userError = document.getElementById('user-error');
                        if(user.value.length < 4){
                            userError.textContent = 'Invalid entry';
                            userError.style.color = 'red';
                            user.style.borderColor = 'red';
                            user.focus();

                            event.preventDefault();
                        }
                    });
                }

                if(true){
                    console.log('#4 Posting From javascript');

                    let form = document.getElementById('user-form');

                    form.addEventListener('submit', event =>{

                        let user = form.elements['user'];
                        let avatarFile = form.elements['avatar-file'];

                        let posting = {
                            user: user.value,
                            avatarFile: avatarFile.value
                        };

                        let promise = $.post(
                            "https://606b3ecff8678400172e5f56.mockapi.io/api/V1/users", posting
                        );

                        promise.then(
                            data => console.log('data: ', data),
                            error => console.log('error: ', error)
                        );

                        event.preventDefault();

                    });
                }

            break;

            case 12:
                console.log('Hello World!');
            break;
        break;
    }

}
