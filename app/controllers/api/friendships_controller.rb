class Api::FriendshipsController < ApplicationController
    
    def index
        @friendships = current_user.friends
        render :index
    end

    def create
        @friendship = Friendship.new(friendship_params)
        if @friendship.save
            # do nothing
        else
            render json: @friendship.errors.full_messages, status: 422
        end
    end

    private

    def friendship_params
        require(:friendship).permit(:user1_id, :user2_id)
    end
end
