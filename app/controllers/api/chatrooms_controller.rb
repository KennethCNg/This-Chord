class Api::ChatroomsController < ApplicationController

  def index
    @chatrooms = Chatroom.all
    render :index
  end

  def show
    @chatroom = Chatroom.find(params[:id])
  end

  def create
    @chatroom = Chatroom.new(chatroom_params)
    if @chatroom.save
      render :show
    else
      render json: @chatroom.errors.full_messages, status: 422
    end
  end

  def destroy
    chat = Chatroom.find(params[:id])
    chat.destroy
    render :show
  end

  def chatroom_params
    params.require(:chatroom).permit(:name, :admin_id, :private)
  end

end
