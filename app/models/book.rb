class Book < ApplicationRecord
  validates :author, :title, presence: true

  has_many :bookshelf_memberships
  has_many :bookshelves, through: :bookshelf_memberships
  has_many :users, through: :bookshelves
end
