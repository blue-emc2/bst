class SectionSerializer < ActiveModel::Serializer
  attributes :id, :body

  belongs_to :article
end
