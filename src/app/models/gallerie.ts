export class Gallerie {

    public id: number;
    public name: string;
    public description: string;
    public image_url: Array<any>;
    public user_id: number;
    public created_at :string;
  
 
    constructor(id? , name?, description?,image_url?, user_id?,created_at?) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.image_url = image_url;
      this.user_id = user_id;
      this.created_at = created_at;
      
  }
 }
 