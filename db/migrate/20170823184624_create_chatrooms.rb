class CreateChatrooms < ActiveRecord::Migration[5.1]
  def change
    create_table :chatrooms do |t|
      t.string :name, null: false
      t.boolean :private, null: false
      t.integer :admin_id, null: false

      t.timestamps
    end
    add_index :chatrooms, :admin_id
  end
end
