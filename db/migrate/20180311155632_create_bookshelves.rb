class CreateBookshelves < ActiveRecord::Migration[5.1]
  def change
    create_table :bookshelves do |t|
      t.string :name, null: false
      t.integer :user_id, null: false
    end
    add_index :bookshelves, :user_id
  end
end
