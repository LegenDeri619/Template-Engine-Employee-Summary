const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name, id, email, officeNum){

        super(name, id, email);

        this.title = "Manager";
        this.officeNum = officeNum;
    };

    getRole(){
        return this.title;
    };

    
    getOfficeNum(){
        return this.officeNum;
    };
};

module.exports = Manager;