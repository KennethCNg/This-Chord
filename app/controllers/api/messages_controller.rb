class Api::MessagesController < ApplicationController
    def index
      @messages = Message.all
      render :index
    end

    def create
      @message = Message.new(message_params)
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
      params.require(:message).permit(:body, :author_name, :author_id, :chatroom_id)
    end
end
