class BookshelfMembership < ApplicationRecord
  validates :book_id, uniqueness: { scope: :bookshelf_id }

  belongs_to :book
  belongs_to :bookshelf
  has_one :review
end
