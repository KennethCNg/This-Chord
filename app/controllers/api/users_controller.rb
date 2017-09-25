class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def update
    @user = User.find(current_user.id)
    if @user.update_attributes(user_params)
      nil
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/sessions/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end


  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end
