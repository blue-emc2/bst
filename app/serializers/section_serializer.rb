class SectionSerializer < ActiveModel::Serializer
  attributes :id, :body, :photo

  belongs_to :article
end
