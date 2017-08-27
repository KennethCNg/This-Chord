# json.array! @messages, :id, :body, :author_id, :chatroom_id

@messages.each do |message|
  json.set! message.id do
    json.extract! message, :id, :body, :author_name, :author_id, :chatroom_id, :created_at
  end
end
