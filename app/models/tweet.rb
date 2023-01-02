class Tweet < ApplicationRecord
    has_many :likes
    has_many :users, through: :likes
    validates :message, presence: true, length: { maximum: 140 }
   
  #mount_uploader :media, MediaUploader
end
