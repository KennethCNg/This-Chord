class Api::ChatroomsController < ApplicationController

  def index
    @chatrooms = Chatroom.all
    render :index
  end

  def show
    @chatroom = Chatroom.find(params[:id])
    render :show
  end

  def create
    @chatroom = Chatroom.new(chatroom_params)
    @chatroom.admin_id = current_user.id
    if @chatroom.save
      nil
    else
      render json: @chatroom.errors.full_messages, status: 422
    end
  end

  def destroy
    chatroom = Chatroom.find(params[:id])
    chatroom.destroy
  end

  def chatroom_params
    params.require(:chatroom).permit(:name)
  end

end
