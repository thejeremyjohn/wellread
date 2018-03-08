class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :author, null: false
      t.string :title, null: false
      t.text :description

      t.timestamps
    end
    add_index :books, :author, unique: true
    add_index :books, :title, unique: true
  end
end
