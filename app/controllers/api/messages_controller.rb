class Api::MessagesController < ApplicationController
    def index
      @messages = Message.all
      render :index
    end

    def create
      @message = Message.new(message_params)
      @message.author_id = current_user.id
      @message.author_name = current_user.username
      if @message.save
        render :show
      else
        render json: @message.errors.full_messages, status: 422
      end
    end

    def destroy
      @message = Message.find(params[:id])
       if @message.destroy
         render :show
       else
         render json: @message.errors.full_messages, status: 422
       end
    end

    def message_params
      params.require(:message).permit(:body, :chatroom_id)
    end
end
