json.currentUser do
  json.extract! @user, :id, :username
  json.dmIds @user.direct_messages.map(&:id)
  unless (@chatroom.nil?)
    json.chatroom @chatroom.first
  end
  json.friends @user.friends.select { |potential_friend| potential_friend.id if potential_friend.friend? }
end
