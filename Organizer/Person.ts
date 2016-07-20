namespace Organizer {   
    /**
     * Person
     */
    export class Person {

        protected fullName;

        constructor(protected fname, protected lname) {
            this.fullName = fname + ' ' + lname;
        }
    }
}