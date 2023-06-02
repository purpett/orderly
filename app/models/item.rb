class Item < ApplicationRecord
  belongs_to :menu_section

  validates :name, :price, presence: true
  validates :price, numericality: { greater_than_or_equal_to: 0 }
end
