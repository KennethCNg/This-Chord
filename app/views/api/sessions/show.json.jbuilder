json.currentUser do
  json.extract! @user, :id, :username
  json.dmIds @user.direct_messages.map(&:id)
  json.chatroom @chatroom.first
end
