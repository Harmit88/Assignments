import { Iuser } from '../common.model';

export class RegisterUser implements Iuser{
    constructor(
       public id:number,
        public Admin:number,
        public Name:string,
        public Email:string,
        public Contact:string,
        public password:string,
        public confpassword:string,
        public Role:String
    ){}
    
}

