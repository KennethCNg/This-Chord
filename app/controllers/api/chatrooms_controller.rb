class Api::ChatroomsController < ApplicationController

  def index
    @chatrooms = Chatroom.all
    @username = current_user.username

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
      # publish chatroom

    # Pusher.trigger('thischord_', 'create_chatroom', {
    #   id: @chatroom.id,
    #   name: @chatroom.name,
    #   private: @chatroom.private,
    #   admin_id: @chatroom.admin_id,
    # })

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
