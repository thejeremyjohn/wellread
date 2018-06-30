class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :rating
      t.text :body
      t.integer :bookshelf_membership_id
      t.timestamps
    end
    add_index :reviews, :bookshelf_membership_id
  end
end
