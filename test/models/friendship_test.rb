# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  friend1_id :integer          not null
#  friend2_id :integer          not null
#  friends?   :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class FriendshipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
