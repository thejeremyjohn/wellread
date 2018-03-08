class Api::BooksController < ApplicationController
  def index
    # will be filtered by user(reader) assoc and bookshelf
  end

  def show
    @book = Book.find(params[:id])
  end
end
