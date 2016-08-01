var Organizer;
(function (Organizer) {
    /**
     * Person
     */
    class Person {
        constructor(fname, lname) {
            this.fname = fname;
            this.lname = lname;
            this.fullName = fname + ' ' + lname;
        }
    }
    Organizer.Person = Person;
})(Organizer || (Organizer = {}));
/// <reference path="Person.ts" />
var Organizer;
(function (Organizer) {
    // let Person = Organizer.Person;
    /**
     * AddressBook
     */
    class AddressBook {
        constructor(quantity) {
            this.quantity = quantity;
            this.persons = new Array();
        }
        addPerson(person) {
            if (this.persons.length < this.quantity) {
                this.persons.push(person);
            }
            else {
                throw new Error('cannot add more than qty: ' + this.quantity);
            }
        }
    }
    Organizer.AddressBook = AddressBook;
})(Organizer || (Organizer = {}));
/// <reference path="./../Organizer/AddressBook.ts" />
/// <reference path="./../typings/globals/jquery/index.d.ts" />
var Application;
(function (Application) {
    let AddressBook = Organizer.AddressBook;
    let Person = Organizer.Person;
    /**
     * Kernel
     */
    class Kernel {
        constructor(jquery) {
            let zz = jquery.parseHTML('<div>hello</div>');
            console.log(zz);
            let book = new AddressBook(2);
            let p1 = new Person('John', 'Doe');
            let p2 = new Person('Dart', 'Veider');
            let p3 = new Person('Luk', 'Skywalker');
            book.addPerson(p1);
            book.addPerson(p2);
            book.addPerson(p3);
        }
    }
    Application.Kernel = Kernel;
})(Application || (Application = {}));
