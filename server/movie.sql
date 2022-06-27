create table movies(
  id serial not null primary key, 
  user_id int, 
  movie_id INT NOT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

