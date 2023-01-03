# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#3 tables LIKES TWEETS USERS


puts "Seeding users...."

User.create!([
    {
        username: "narddawg", 
        password_digest: "password",
        email: "bernard12833@gmail.com",
    }, 
    {
        username: "cesar", 
        password_digest: "wordpass",
        email: "cesar@gmail.com",
    }, 
    {
        username: "cesar", 
        password_digest: "wordpass",
        email: "cesar@gmail.com",   
    }

])



puts "tweets..."
Tweet.create!([
    {
        message: "Feeling cute today. #ahaha"
    },
    {
        message: "Coding only gets harder. #onperiod"
    }, 
    {
        message: "I hope this project works out"
    }
])



puts "likes..."


User.all.each do |user|
    rand(1..3).times do
      # get a random guest
      tweet = Tweet.all.sample
  
      Like.create!(user_id: user.id, tweet_id: tweet.id, likeCount: rand(1..3))
    end
  end