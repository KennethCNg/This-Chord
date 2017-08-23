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

require 'test_helper'

class ChatroomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
