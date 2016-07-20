/// <reference path="./../Organizer/AddressBook.ts" />

namespace Application {

    let AddressBook = Organizer.AddressBook;
    let Person = Organizer.Person;

    /** 
     * Kernel
     */
    export class Kernel {

        constructor() {
            let book = new AddressBook(2);
            let p1 = new Person('John', 'Doe');
            let p2 = new Person('Dart', 'Veider');
            let p3 = new Person('Luk', 'Skywalker');

            book.addPerson(p1);
            book.addPerson(p2);
            book.addPerson(p3);
        }
    }
}
