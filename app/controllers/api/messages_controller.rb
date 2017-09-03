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
        # publish message
        Pusher.trigger('create_message', 'thischord_' + @message.chatroom_id.to_s, {
          id: @message.id,
          body: @message.body,
          author_id: @message.author_id,
          author_name: @message.author_name,
          chatroom_id: @message.chatroom_id,
          created_at: @message.created_at,
          })
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
