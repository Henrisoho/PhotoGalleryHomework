CREATE TABLE list (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(80) NOT NULL,
    "likes" INT, 
    "description" VARCHAR(140) NOT NULL,
);

INSERT INTO list ("path", "likes", "description")
VALUES 
('https://images.unsplash.com/photo-1551782450-a2132b4ba21d', 0, 'burger.'),
('https://images.unsplash.com/photo-1522770179533-24471fcdba45', 0, 'camera.'),
('https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c', 0, 'coffee.'),
('https://images.unsplash.com/photo-1533827432537-70133748f5c8', 0, 'hats.'),
('https://images.unsplash.com/photo-1551963831-b3b1ca40c98e', 0, 'photo of breakfast.');