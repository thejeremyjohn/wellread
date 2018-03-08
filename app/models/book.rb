class Book < ApplicationRecord
  validates :author, :title, presence: true
    # has_many :readers,
    # through: 
end
