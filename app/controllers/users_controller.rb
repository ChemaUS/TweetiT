class UsersController < ApplicationController
    wrap_parameters format: []
    skip_before_action :check_user, only: [:create]

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: { message: "Not logged in" }, status: 404
        end
    end

    # signup
    def create
        user = User.create!(user_params)
        if user
        session[:user_id] = user.id
        render json: user, status: :created
        else
            render json: {error: user.errors.full_messages}, status: :unprocessable_entitiy
        end
    end

    private

    def user_params
        params.permit(:username, :email, :password,:password_confirmation)
    end

end
