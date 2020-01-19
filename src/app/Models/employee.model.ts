export class Employees{
    id:number;
    name: string;
    gender: string;
    email?: string;
    //  Question Mark means its an opetional value/ we prvide or not does't matter
    phoneNumber?: number;
    contactPreference: string;
    dateOfBirth: Date;
    Department: string;
    isActive: boolean;
    photopath?: string;
}