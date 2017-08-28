# json.extract! @chatroom, :id, :name, :admin_id

json.messages do
  json.array! @chatroom.messages, partial: 'api/messages/message', as: :message
end
