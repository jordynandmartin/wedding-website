export class Guest {
    
    first_name : string;
    last_name : string;
    party_id : string;
    
    constructor(first_name : string = "", last_name : string = "" , party_id : string = "" ){
        this.first_name = first_name;
        this.last_name = last_name;
        this.party_id = party_id;
    }
    
    fullName() : string{
        return this.first_name + " " + this.last_name;
    }
    
    
}
