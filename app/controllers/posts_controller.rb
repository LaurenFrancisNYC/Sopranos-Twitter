class PostsController < ApplicationController
  before_action :authorize_request, only: [ :create, :update, :destroy ]
  before_action :set_user_post, only: [:update, :destroy]
  before_action :set_post, only: [:upvote_score, :downvote_score] 
  
  # GET /posts
  def index
    if params[:character_id]
      @posts = Post.where(character_id: params[:character_id])
    else
      @posts = Post.all
    end
    render json: @posts, include: [:character, :user] 
  end

  # GET /posts/1
  def show
    @post = Post.find(params[:id])
    render json: @post, include: [:character, :user] 
  end

  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user
    @post.score = 0

    if @post.save
      render json: @post, status: :created, location: @post, include: [:character, :user] 
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post, include: [:character, :user]  
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def upvote_score
    @post.score +=1 
    if @post.save
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def downvote_score
    @post.score -=1 
    if @post.save
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_post
      @post = @current_user.posts.find(params[:id])
    end

    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def post_params
      params.require(:post).permit(:content, :character_id)
    end
end
