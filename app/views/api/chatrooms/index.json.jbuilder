
@chatrooms.each do |chatroom|
  json.set! chatroom.id do
    json.extract! chatroom, :id, :name, :admin_id
  end
end

json.directMessages do
  @directmessages.each do |message|
    json.set! message.id do
      json.extract! message, :id, :name
    end
  end
end
