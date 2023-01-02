class LikeSerializer < ActiveModel::Serializer
  attributes :id, :likeCount
  has_one :user
  has_one :tweet
end
