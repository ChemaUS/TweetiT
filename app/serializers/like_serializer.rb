class LikeSerializer < ActiveModel::Serializer
  attributes :id , "likeCount"
  has_one :tweet
  has_one :user
end
