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
    validates :friend1_id, :friend2_id, presence: true
    validates :friends?, inclusion: { in: [ true, false ] }
    validates_uniqueness_of :friend1_id, :scope => [:friend2_id]
    validate :friendship_exists?, on: :create

    belongs_to(
        :friender,
        primary_key: :id,
        foreign_key: :friend1_id,
        class_name: :User
    )

    belongs_to(
        :friendee,
        primary_key: :id,
        foreign_key: :friend2_id,
        class_name: :User
    )
    
    def friendship_exists?
        # example of lazy loading
        friendship_1 = Friendship.where('friend1_id = ? AND friend2_id', friendee.id, friender.id)
        friendship_2 = Friendship.where('friend1_id = ? AND friend2_id', friender.id, friendee.id)
        
        if  friendship_1 || friendship_2
            if friendship_1.first.friends? && friendship_1.first.friends?
                return errors.add(:friendship, "You're already friends!")
            else
                return errors.add(:friendship, "You already sent a friend request!")
            end
        end
    end
end
