CREATE TABLE list (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(80) NOT NULL,
    "likes" INT, 
    "description" VARCHAR(140) NOT NULL,
);

INSERT INTO list ("path", "likes", "description")
VALUES ('images/goat_small.jpg', 12, 'Photo of a goat taken at Glacier National Park.');