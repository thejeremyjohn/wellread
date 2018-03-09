class DropBooksFixIndex < ActiveRecord::Migration[5.1]
  def change

    drop_table :books

    create_table :books do |t|
      t.string :author, null: false
      t.string :title, null: false
      t.string :img_url
      t.text :description

      t.timestamps
    end
    
    add_index :books, :author
    add_index :books, :title

  end
end
