export class User{
    firstname: string;
    lastname: string;
    birthDate: number;
    adress: string;
    zipCode:number;
    city: string;
    mail: string

    constructor(obj?:any){
        this.firstname = obj?.firstname || ''; // ? steht für ein ternärer Operator der frägt ob obj existiert falls nicht wird dem :'' also leerer string zugewiesen
        this.lastname = obj?.lastname || '';
        this.birthDate = obj?.birthDate || '';
        this.adress = obj?.adress || '';
        this.zipCode = obj?.zipCode || '';
        this.city = obj?.city || '';
        this.mail = obj?.mail || '';
    }

    toJSON() {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            birthDate: this.birthDate,
            adress: this.adress,
            zipCode: this.zipCode,
            city: this.city,
            mail: this.mail
        };
    }
}