export class Comment {

    public id: number;
    public author: string;
    public text: string;
    public user_id: number;
    public gallery_id: number;
    public created_at:string;
    
 
    constructor(id? ,author?, text?, user_id?, gallery_id?, created_at?) {
      this.id = id;
      this.author = author;
      this.text = text;
      this.user_id = user_id;
      this.gallery_id = gallery_id;
      this.created_at = created_at;
  }
 }