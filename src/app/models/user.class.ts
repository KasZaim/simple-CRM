export class User{
    firstname: string;
    lastname: string;
    birthDate: number;
    adress: string;
    zipCode:number;
    city: string

    constructor(obj?:any){
        this.firstname = obj ? obj.firstname: ''; // ? steht für ein ternärer Operator der frägt ob obj existiert falls nicht wird dem :'' also leerer string zugewiesen
        this.lastname = obj ? obj.lastname: '';
        this.birthDate = obj ? obj.birthDate: '';
        this.adress = obj ? obj.adress: '';
        this.zipCode = obj ? obj.zipCode: '';
        this.city = obj ? obj.city: '';
    }

    toJSON() {
        return {
            firstname: this.firstname,
            lastname: this.lastname,
            birthDate: this.birthDate,
            adress: this.adress,
            zipCode: this.zipCode,
            city: this.city,
        };
    }
}