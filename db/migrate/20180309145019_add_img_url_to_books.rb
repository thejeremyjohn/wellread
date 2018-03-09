class AddImgUrlToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :img_url, :string
  end
end
