class MenuSection < ApplicationRecord
  has_many :items, dependent: :destroy
  belongs_to :restaurant

  validates :name, presence: true
end
