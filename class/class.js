class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year

    }
}

const toyota = new Car('axio', 2018);
console.log(toyota);


class Student {
    constructor(first, last) {
        this.fname = first;
        this.lname = last;

    }
    callme() {
        console.log(`${JSON.stringify(this.lname)}`);
    }

}

let x;
x = 3
const student = new Student('john', 'doe')
student.callme()
console.log(x);