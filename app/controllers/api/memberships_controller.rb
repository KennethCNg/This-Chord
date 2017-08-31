class Api::MembershipsController < ApplicationController

  def index
    @memberships = Membership.all
  end

  def create
    debugger
    @direct_message = Chatroom.new({name: params[:membership][:name]})
    @direct_message.admin_id = current_user.id
    @direct_message.private = true
    if @direct_message.save!
      nil
    else
      render json: @direct_message.errors.full_messages, status: 422
    end

    params[:membership][:member_ids].each do |member_id|
      @membership = Membership.new({channel_id: @direct_message.id, member_id: member_id})
      if @membership.save!
        nil
      else
        render json: @membership.errors.full_messages, status: 422
      end
    end

  end

  def membership_params
    params.require(:membership).permit(:channel_id, :member_ids, :name)
  end



end
