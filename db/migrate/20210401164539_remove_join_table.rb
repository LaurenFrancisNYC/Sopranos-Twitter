class RemoveJoinTable < ActiveRecord::Migration[6.1]
  def change
      drop_join_table :posts, :characters
    end
end
