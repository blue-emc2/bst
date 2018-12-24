class Article < ApplicationRecord
  has_many :sections, dependent: :destroy

  enum status: { draft: 0, published: 1 }
end
