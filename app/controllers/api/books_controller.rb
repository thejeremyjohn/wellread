class Api::BooksController < ApplicationController
  def index
    # will be filtered by user(reader) assoc and bookshelf
    @books = Book.all
  end

  def show
    @book = Book.find_by(id: params[:id])
    if @book
      @book
    else
      render json: ["No book matching that id"], status: 404
    end
  end
end
