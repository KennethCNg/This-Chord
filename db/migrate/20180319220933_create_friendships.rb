class CreateFriendships < ActiveRecord::Migration[5.1]
  def change
    create_table :friendships do |t|
      t.integer :friend1_id, null: false
      t.integer :friend2_id, null: false
      t.boolean :friends?, null: false, default: false

      t.timestamps
    end

    add_index :friendships, [:friend1_id, :friend2_id], uniqueness: true
    add_index :friendships, :friend1_id
    add_index :friendships, :friend2_id
  end
end
