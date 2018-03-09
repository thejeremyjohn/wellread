class Api::BooksController < ApplicationController
  def index
    # will be filtered by user(reader) assoc and bookshelf
    @books = Book.all
  end

  def show
    @book = Book.find(params[:id])
  end
end
