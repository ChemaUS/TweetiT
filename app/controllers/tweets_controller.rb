class TweetsController < ApplicationController
    before_action :check_user
    skip_before_action :check_user, only:[:index]
    def index
        tweets= Tweet.all 
        render json: tweets
    end
    def show 
        tweet = Tweet.find_by(id: params[:id])
        if user
        render json: tweet
        else 
            render json: {message: "Tweet not found"}, status: 404
    end
end
    def create
        tweet = Tweet.create!(tweet_params)
        if tweet
        render json: tweet, status: :created
        else 
            render json:{error: tweet.errors.full_messages}, status: :unprocessable_entitiy
    end
end
    def destroy
        tweet = Tweet.find_by(id: params[:id])
        tweet.destroy
        head :no_content
    end
    private
    def tweet_params
        params.permit(:message)
    end
end
