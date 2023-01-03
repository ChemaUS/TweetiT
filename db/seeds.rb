# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
        user1= User.create(
        username: "narddawg",
        password: "password",
        email: "bernard12833@gmail.com")
        user2= User.create(
        username: "Bryan",
        password: "password",
        email: "bryan@gmail.com")
        user3= User.create(
            username: "flatiron",
            password: "password",
            email: "flatiron@gmail.com")
  
puts "tweets..."
         tweet1= Tweet.create( message: "Feeling cute today. #ahaha")
        tweet2= Tweet.create(message: "Coding only gets harder. #onperiod")
        tweet3= Tweet.create(message: "I hope this project works out")
puts "likes..."
# User.all.each do |user|
#     rand(1..3).times do
#       # get a random guest
#       tweet = Tweet.all.sample
#       Like.create!(user: user1, tweet: tweet1, likeCount: rand(1..3))
#     end
#   end
like1 = Like.create(likeCount: 10 , user:user1, tweet:tweet1)
like2 = Like.create(likeCount: 1 , user:user2, tweet:tweet2)
like3 = Like.create(likeCount: 1000 , user:user3, tweet:tweet3)