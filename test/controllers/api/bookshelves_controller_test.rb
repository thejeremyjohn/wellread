require 'test_helper'

class Api::BookshelvesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_bookshelves_index_url
    assert_response :success
  end

  test "should get create" do
    get api_bookshelves_create_url
    assert_response :success
  end

  test "should get show" do
    get api_bookshelves_show_url
    assert_response :success
  end

  test "should get update" do
    get api_bookshelves_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_bookshelves_destroy_url
    assert_response :success
  end

end
