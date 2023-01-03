class LikesController < ApplicationController
    skip_before_action :check_user, only:[:index]
    def index
        likes = Like.all
        render json: likes
    end
    def show
        like = Like.find_by(id: params[:id])
        if like 
            render json: like
        else 
            render json: {message: "Try again"}, status: 404
    end
end
end
