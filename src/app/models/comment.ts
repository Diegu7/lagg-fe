class Comment {
	comment_id: number;
	votes: number;
	body: string;
	created_at: Date;
	post_id: number;
	user_id: number;

   	constructor(){
   		this.comment_id = 0;
   		this.votes = 0;
   		this.body = "";
   		this.created_at = new Date();
   		this.post_id = 0;
  		this.user_id = 0;
   	}
}

export default Comment;
