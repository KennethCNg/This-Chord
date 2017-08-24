# == Schema Information
#
# Table name: chatrooms
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  private    :boolean          not null
#  admin_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Chatroom < ApplicationRecord

  has_many(
    :messages,
    primary_key: :id,
    foreign_key: :chatroom_id,
    class_name: 'Message'
  )

  belongs_to(
    :admin,
    primary_key: :id,
    foreign_key: :admin_id,
    class_name: 'User'
  )

  has_many(
    :memberships,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: 'Membership'
  )

  has_many(
    :members,
    through: :memberships,
    source: :member
  )

end
