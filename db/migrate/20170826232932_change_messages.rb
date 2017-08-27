class ChangeMessages < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :author_name, :string, null: false
  end
end
