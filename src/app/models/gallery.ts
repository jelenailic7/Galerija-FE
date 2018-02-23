import { User } from "./user";
import {Comment} from './comment';

export class Gallery {

    public id: number;
    public name: string;
    public description: string;
    public image_url: Array<any>;
    public user: User;
    public created_at :string;
    public comments: Comment;
    public user_id: number;
  
 
    constructor(id? , name?, description?, image_url?, user?, created_at?, comments?,user_id?) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.image_url = image_url;
      this.user = user;
      this.created_at = created_at;
      this.comments = comments;
      this.user_id = user_id;
      
  }
 }
 