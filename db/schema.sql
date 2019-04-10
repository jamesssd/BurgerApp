CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABlE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false;
    PRIMARY KEY (id)
);
