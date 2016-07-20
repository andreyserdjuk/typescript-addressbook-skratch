/// <reference path="Person.ts" />

namespace Organizer {

    // let Person = Organizer.Person;

    /**
     * AddressBook
     */
    export class AddressBook {

        protected persons:Person[];

        constructor(protected quantity:Number) {
            this.persons = new Array();
        }

        public addPerson(person:Person) {
            if (this.persons.length < this.quantity) {
                this.persons.push(person);
            } else {
                throw new Error('cannot add more than qty: ' + this.quantity);
            }
        }
    }
}