export class User {

   public id: number;
   public first_name: string;
   public last_name: string;
   public email: string;
   public password: string;

   constructor(id? , first_name?,last_name?, email?, password?,password_confirmation?) {
     this.id = id;
     this.first_name = first_name;
     this.last_name = last_name;
     this.email = email;
     this.password = password;
 }
}
