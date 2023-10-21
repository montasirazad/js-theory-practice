let car = {
    name: 'Fiat',
    model: 500,
    weight: '800kg',
    color: 'white',
    start: function () {
        console.log('car has started');
    },
    drive: function () {
        console.log('car is driving');
    }
}


const person = {
    firstName: 'john',
    lastName: 'doe',
    fullName: function () {
       console.log(this.firstName + ' ' + this.lastName)
    }
}

 let x = new Number(5)
 console.log(x);