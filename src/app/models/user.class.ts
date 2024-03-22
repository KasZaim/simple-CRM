export class User{
    firstname: string;
    lastname: string;
    birthDate: number;
    address: string;
    zipCode:number;
    city: string;
    mail: string

    constructor(obj?:any){
        this.firstname = obj?.firstname || ''; // ? steht für ein ternärer Operator der frägt ob obj existiert falls nicht wird dem :'' also leerer string zugewiesen
        this.lastname = obj?.lastname || '';
        this.birthDate = obj?.birthDate || '';
        this.address = obj?.address || '';
        this.zipCode = obj?.zipCode || '';
        this.city = obj?.city || '';
        this.mail = obj?.mail || '';
    }

    toJSON() {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            birthDate: this.birthDate,
            address: this.address,
            zipCode: this.zipCode,
            city: this.city,
            mail: this.mail
        };
    }
}