class Bookshelf < ApplicationRecord
  validates :name, presence: true

  belongs_to :user
  has_many :bookshelf_memberships
  has_many :books, through: :bookshelf_memberships
  has_many :reviews, through: :bookshelf_memberships
end
