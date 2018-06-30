class Review < ApplicationRecord
  belongs_to :bookshelf_membership
  validates :bookshelf_membership_id, uniqueness: true
end
