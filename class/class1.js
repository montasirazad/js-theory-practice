

const randomId = () => {
    const allChar = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let output = '';
    for (let i = 0; i < 10; i++) {
        generatedId = allChar.charAt(Math.floor(Math.random() * allChar.length))
        output += generatedId;
    }
    return output
}
randomId()
class Student {
    constructor(firstName, lastName, roll, section, group) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roll = roll;
        this.section = section.toUpperCase();
        this.group = group;
        this.id = `${this.group}-${randomId()}`
    }
    payment() {


        this.studentName = this.firstName + ' ' + this.lastName;
        console.log(this.studentName);

    }
}

const student1 = new Student('john', 'doe', 1, 'a', 'science');
const student2 = new Student('montasir', 'azad', 12146, 'b', 'science');
console.log(student2);
student2.payment()