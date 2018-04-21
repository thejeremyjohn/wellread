class BookshelfMembership < ApplicationRecord
  belongs_to :book
  belongs_to :bookshelf
  validates :book_id, uniqueness: { scope: :bookshelf_id }
end
