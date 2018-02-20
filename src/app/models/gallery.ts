import { User } from "./user";

export class Gallery {

    public id: number;
    public name: string;
    public description: string;
    public image_url: Array<any>;
    public user: User;
    public created_at :string;
  
 
    constructor(id? , name?, description?,image_url?, user?,created_at?) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.image_url = image_url;
      this.user = user;
      this.created_at = created_at;
      
  }
 }
 