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
