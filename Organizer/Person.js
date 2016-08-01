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
