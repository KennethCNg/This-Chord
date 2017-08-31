# == Schema Information
#
# Table name: memberships
#
#  id         :integer          not null, primary key
#  member_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Membership < ApplicationRecord
  validates :member_id, :channel_id, presence: true

  belongs_to(
    :member,
    primary_key: :id,
    foreign_key: :member_id,
    class_name: 'User'
  )

  belongs_to(
    :channel,
    primary_key: :id,
    foreign_key: :channel_id,
    class_name: 'Chatroom'
  )
end
