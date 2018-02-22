import { User } from "./user";

export class Comment {

    public id: number;
    public text: string;
    public user_id: number;
    public gallery_id: number;
    public created_at:string;
    public user: User;
    
 
    constructor(id?, text?, user_id?, gallery_id?, created_at?, user?) {
      this.id = id;
      this.text = text;
      this.user_id = user_id;
      this.gallery_id = gallery_id;
      this.created_at = created_at;
      this.user = user;
  }
 }