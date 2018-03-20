json.currentUser do
  json.extract! @user, :id, :username
  json.dmIds @user.direct_messages.map(&:id)
  unless (@chatroom.nil?)
    json.chatroom @chatroom.first
  end
  json.friends @user.friends.map(&:id)
end
