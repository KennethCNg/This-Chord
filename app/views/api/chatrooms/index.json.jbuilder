json.chatrooms do
  @chatrooms.each do |chatroom|
    if chatroom.private != true
        json.set! chatroom.id do
          json.extract! chatroom, :id, :name, :admin_id
        end
    end
  end
end

json.directMessages do
  @chatrooms.each do |chatroom|
    if chatroom.private == true
      json.set! chatroom.id do
        json.extract! chatroom, :id, :name
      end
    end
  end
end
