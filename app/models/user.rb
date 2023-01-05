class User < ApplicationRecord
    has_secure_password
    has_many :likes
    has_many :tweets
    validates :username, presence: true, length: { minimum: 3, maximum: 15  }
    validates :username, uniqueness: true
    validates :password, presence: true, length: { minimum: 8, maximum: 15  }
    validates :email, presence: true, length: { minimum: 5, maximum: 25 }
    validates :email, uniqueness: true
    

    mount_uploader :avatar, AvatarUploader
end
