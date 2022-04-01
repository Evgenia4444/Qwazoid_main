class CommenttsController < ApplicationController

	def index
		@commentts = Coment.all
	  end
	
	def create
		@post = Post.find(params[:post_id])
		@commentt = @post.commentts.create(params[:commentt].permit(:body).merge(user_id: current_user.id))
	end

end