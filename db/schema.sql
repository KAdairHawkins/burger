create database burgers_db;

use burgers_db;

create table burgers(
	id int(9) auto_increment primary key,
    burger_name varchar(255),
    devoured boolean,
    date_devoured TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);