console.log('hello');

const person = {
    name: 'john',
    age: 10,
    getName: () => {
        console.log(5);
    }
}

const text = new String('bangladesh')

person.getName()

console.dir(text);

// JavaScript Object Accessors

const newPerson = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(option) {
        this.language = option;
    }
};

newPerson.lang = 'BN'
console.log(newPerson);