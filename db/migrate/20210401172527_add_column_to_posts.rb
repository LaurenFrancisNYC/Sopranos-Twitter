class AddColumnToPosts < ActiveRecord::Migration[6.1]
  def change
    add_column :posts, :character_id, :string 
  end
end
