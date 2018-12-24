class ArticleSerializer < ActiveModel::Serializer
  has_many :sections
end
