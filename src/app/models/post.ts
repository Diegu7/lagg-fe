class Post {
  	post_id: number;
	votes: number;
	title: string;
	link: string;
	created_at: Date;
	user_id: number;

   	constructor(){
   		this.post_id = 0;
   		this.votes = 0;
   		this.title = "";
   		this.link = "";
   		this.created_at = new Date();
   		this.user_id = 0;
   	}
}

export default Post;