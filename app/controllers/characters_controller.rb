class CharactersController < ApplicationController
  # before_action :set_character, only: [:show, :update, :destroy]

  # GET /characters
  def index
    @characters = Character.all
    render json: @characters
  end


end
