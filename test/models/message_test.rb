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
#  author_name :string
#

require 'test_helper'

class MessageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
