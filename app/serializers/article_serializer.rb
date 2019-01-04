class ArticleSerializer < ActiveModel::Serializer
  attributes :id

  has_many :sections
end
