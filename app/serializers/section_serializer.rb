class SectionSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :body, :photo

  belongs_to :article

  def photo
    rails_blob_url(object.photo) if object.photo.attached?
  end
end
