class User < ApplicationRecord
    has_many :likes
    has_many :tweets, through: :likes
    has_secure_password
    validates :username, presence: true, length: { minimum: 3, maximum: 15  }
    validates :username, presence: true
    validates :password, presence: true, length: { minimum: 8, maximum: 15  }
    validates :email, presence: true, length: { minimum: 5, maximum: 25 }
    validates :email, presence: true
end
