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
          json.member_ids chatroom.member_ids
        end
      end
    end
  end
