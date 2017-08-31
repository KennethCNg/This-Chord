@memberships.each do |membership|
  json.set! membership.id do
    json.extract! membership, :channel_id, :member_id
  end
end
