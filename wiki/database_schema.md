<!-- -Books
  - belongs to author
-Bookshelves
  - belongs to user (reader)
-Reviews
  - belongs to reader
-Read Status (will read, have read, etc.)
  -
-Bonus: Search across multiple models
  -
-Bonus: Tags
  -
 -->

# schema

+ Books
  - id
  - title
  - author_id
  - read_status

<!-- + Read Statuses
  - id
  - status -->

+ Bookshelves
  - id
  - user_id
  - read_status_id

+ Reviews
  - id
  - user_id
  - body
