class Section < ApplicationRecord
  belongs_to :article
  has_one_attached :photo
end
