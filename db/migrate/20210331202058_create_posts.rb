class CreatePosts < ActiveRecord::Migration[6.1]
  def change
    create_table :posts do |t|
      t.text :content
      t.string :user_id
      t.integer :score

      t.timestamps
    end
  end
end
