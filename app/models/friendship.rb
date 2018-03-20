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

class Friendship < ApplicationRecord
    validates :friend1_id, :friend2_id, :friends?, presence: true
    validates_uniqueness_of :friend1_id, :scope => [:friend2_id]
    validates :friends?, inclusion: { in: [ true, false ] }
    validate :update_friendship?, after: :create
    

    belongs_to(
        :friend1,
        primary_key: :id,
        foreign_key: :friend2_id,
        class_name: :User
    )

    belongs_to(
        :friend2,
        primary_key: :id,
        foreign_key: :friend2_id,
        class_name: :User
    )

    private

    def update_friendship?
        friendship_1 = Friendship.where('friend1_id = ? AND friend2_id', friend1.id, friend2.id)
        friendship_2 = Friendship.where('friend1_id = ? AND friend2_id', friend2.id, friend1.id)
        
        if friendship_1 && friendship_2
            friendship_1.first.friends? = true
            friendship_2.first.friends? = true
        end
    end

end
