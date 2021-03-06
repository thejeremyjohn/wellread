class Api::SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password],
    )
    if @user
      signin(@user)
      render 'api/users/show'
    else
      render json: ['invalid username and/or password'], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Nobody to sign out"], status: 404
    end
  end

end
