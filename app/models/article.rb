class Article < ApplicationRecord
  has_many :section, dependent: :destroy

  enum status: { draft: 0, published: 1 }
end
