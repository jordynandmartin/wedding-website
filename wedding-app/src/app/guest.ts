export class Guest {
    
    firstName : string;
    lastName : string;
    partyId : string;
    
    constructor(firstName : string = "", lastName : string = "" , partyId : string = "" ){
        this.firstName = firstName;
        this.lastName = lastName;
        this.partyId = partyId;
    }
    
    fullName() : string{
        return this.firstName + " " + this.lastName;
    }
    
    
}
