create table movies(
  id serial not null primary key, 
  user_id text, 
  movie_id varchar(), 
  PRIMARY KEY(user_id), 
  CONSTRAINT username FOREIGN KEY(user_id) REFERENCES users(username)
);

