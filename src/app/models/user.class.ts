export class User{
    firstname: string;
    lastname: string;
    birthDate: number;
    adress: string;
    zipCode:number;
    city: string

    constructor(obj?:any){
        this.firstname = obj ? obj.firstname: '';
        this.lastname = obj ? obj.lastname: '';
        this.birthDate = obj ? obj.birthDate: '';
        this.adress = obj ? obj.adress: '';
        this.zipCode = obj ? obj.zipCode: '';
        this.city = obj ? obj.city: '';
    }
}