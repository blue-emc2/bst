class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :col

  has_many :sections
end
