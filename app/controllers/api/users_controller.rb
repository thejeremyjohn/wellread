class Api::UsersController < ApplicationController
  def new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      signin(@user)
      @user.bookshelves.create(name: 'read')
      @user.bookshelves.create(name: 'currently reading')
      @user.bookshelves.create(name: 'want to read')
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end

  def show
    @user = User.find(params[:id])
  end

end
