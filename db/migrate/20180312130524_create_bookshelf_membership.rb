class CreateBookshelfMembership < ActiveRecord::Migration[5.1]
  def change
    create_table :bookshelf_memberships do |t|
      t.integer :bookshelf_id
      t.integer :book_id
      t.timestamps
    end
    add_index :bookshelf_memberships, :bookshelf_id
    add_index :bookshelf_memberships, :book_id
  end
end
