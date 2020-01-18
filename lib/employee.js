class Employee {
    constructor(name, id, email){
        this.title = title;
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getRole(){
        return this.title;
    }

    
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }
}

module.exports = Employee;