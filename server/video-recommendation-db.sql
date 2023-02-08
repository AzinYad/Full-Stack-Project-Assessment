DROP TABLE IF EXISTS videos;
CREATE TABLE videos (
  id                 SERIAL PRIMARY KEY,
  video_title        VARCHAR(200) NOT NULL,
  video_url          VARCHAR(200) NOT NULL,
  video_rating       INT NOT NULL
  
);

INSERT INTO videos (video_title, video_url, video_rating) VALUES ('Never Gonna Give You Up', 'https://www.youtube.com/embed/dQw4w9WgXcQ', 23);
INSERT INTO videos (video_title, video_url, video_rating) VALUES ('The Coding Train', 'https://www.youtube.com/embed/HerCR8bw_GE', 230);
INSERT INTO videos (video_title, video_url, video_rating) VALUES ('Mac & Cheese | Basics with Babish', 'https://www.youtube.com/embed/FUeyrEN14Rk', 2111);
INSERT INTO videos (video_title, video_url, video_rating) VALUES ('Videos for Cats to Watch - 8 Hour Bird Bonanza', 'https://www.youtube.com/embed/xbs7FT7dXYc', 11);
INSERT INTO videos (video_title, video_url, video_rating) VALUES ('The Complete London 2012 Opening Ceremony | London 2012 Olympic Games', 'https://www.youtube.com/embed/4As0e4de_rI', 3211);
INSERT INTO videos (video_title, video_url, video_rating) VALUES ('Learn Unity - Beginner`s Game Development Course', 'https://www.youtube.com/embed/gB1F9G0JXOo', 211);
INSERT INTO videos (video_title, video_url, video_rating) VALUES ('Cracking Enigma in 2021 - Computerphile', 'https://www.youtube.com/embed/RzWB5jL5RX0', 111);
INSERT INTO videos (video_title, video_url, video_rating) VALUES ('Coding Adventure: Chess AI', 'https://www.youtube.com/embed/U4ogK0MIzqk', 671);
INSERT INTO videos (video_title, video_url, video_rating) VALUES ('Coding Adventure: Ant and Slime Simulations', 'https://www.youtube.com/embed/X_iSQQgOd1A', 76);
INSERT INTO videos (video_title, video_url, video_rating) VALUES ('Why the Tour de France is so brutal', 'https://www.youtube.com/embed/ZacOS8NBK6U', 73);
