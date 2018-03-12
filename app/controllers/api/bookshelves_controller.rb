class Api::BookshelvesController < ApplicationController
  def index
    # debugger
    @bookshelves = Bookshelf.where(user_id: current_user.id)
    # @bookshelves = current_user.bookshelves
  end

  def create
    @bookshelf = current_user.bookshelves.new(bookshelf_params)
    if @bookshelf.save
      render 'api/bookshelves/show'
    else
      render json: ['bookshelf must have a name'], status: 422
    end
  end

  def show
    @bookshelf = Bookshelf.find(params[:id])
  end

  def update
    @bookshelf = current_user.bookshelves.find(params[:id])
    if @bookshelf.update(bookshelf_params)
      render 'api/bookshelves/show'
    else
      render json: ['Users can only update their own bookshelves'], status: 401
    end
  end

  def destroy
    @bookshelf = current_user.bookshelves.find(params[:id])
    if @bookshelf
      @bookshelf.destroy!
      @bookshelves = current_user.bookshelves
      render 'api/bookshelves/index'
    else
      render json: ["No bookshelf matching that id for current user"], status: 404
    end
  end

  def bookshelf_params
    params.require(:bookshelf).permit(:name)
  end
end
