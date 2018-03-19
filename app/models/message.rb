# == Schema Information
#
# Table name: messages
#
#  id          :integer          not null, primary key
#  body        :text             not null
#  author_id   :integer          not null
#  chatroom_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  author_name :string           not null
#

class Message < ApplicationRecord
  validates :body, :author_id, :chatroom_id, presence: true

  belongs_to(
    :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: 'User'
  )

  belongs_to(
  :chatroom,
  primary_key: :id,
  foreign_key: :chatroom_id,
  class_name: 'Chatroom'
  )

end
