class CreateJoinTablePostsCharacters < ActiveRecord::Migration[6.1]
  def change
    create_join_table :posts, :characters do |t|
      # t.index [:post_id, :character_id]
      # t.index [:character_id, :post_id]
    end
  end
end
