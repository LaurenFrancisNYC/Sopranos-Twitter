class CharactersController < ApplicationController
  # before_action :set_character, only: [:show, :update, :destroy]

  # GET /characters
  def index
    @characters = Character.all

    render json: @characters
  end

  def add_character
    @post = Post.find(params[:post_id])
    @character = Character.find(params[:id])
    @post.characters.push(@character)

    render json: @post, include: :characters
  end

  # def add_character
  # end

  # GET /characters/1
  # def show
  #   render json: @character
  # end

  # POST /characters
  # def create
  #   @character = Character.new(character_params)

  #   if @character.save
  #     render json: @character, status: :created, location: @character
  #   else
  #     render json: @character.errors, status: :unprocessable_entity
  #   end
  # end

  # PATCH/PUT /characters/1
  # def update
  #   if @character.update(character_params)
  #     render json: @character
  #   else
  #     render json: @character.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /characters/1
  # def destroy
  #   @character.destroy
  # end

  # private
    # Use callbacks to share common setup or constraints between actions.
    # def set_character
    #   @character = Character.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    # def character_params
    #   params.require(:character).permit(:name, :img_url)
    # end
end
