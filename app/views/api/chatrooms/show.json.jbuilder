# json.extract! @chatroom, :id, :name, :admin_id

# json.messages do
#   json.array! @chatroom.messages, partial: 'api/messages/message', as: :message
# end

json.messages do
  @chatroom.messages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :body, :author_id, :chatroom_id, :created_at, :author_name
    end
  end
end

json.users do
  @chatroom.members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :username
    end
  end
end
