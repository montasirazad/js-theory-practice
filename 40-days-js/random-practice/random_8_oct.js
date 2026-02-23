class person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
}

const person_1 = new person("person_1", 10, "bd");
const person_2 = new person("person_2", 20, "uk");
const person_3 = new person("person_3", 30, "nl");
console.log(person_1);
console.log(person_2);
console.log(person_3);
