CREATE DATABASE expensetracking;

CREATE TABLE budget(
    id SERIAL NOT NULL PRIMARY KEY,
    movement_date VARCHAR NOT NULL,
    movement_type VARCHAR(15) NOT NULL,
    movement_description VARCHAR(200) NOT NULL,
    movement_amount INTEGER NOT NULL
);

INSERT INTO budget (movement_date, movement_type, movement_description, movement_amount) VALUES ('2020-05-25', 'ingreso', 'regalo de mi papa', '25000');

INSERT INTO budget (movement_date, movement_type, movement_description, movement_amount) VALUES ('2020-06-10', 'egreso', 'arreglo heladera', '9000');

INSERT INTO budget (movement_date, movement_type, movement_description, movement_amount) VALUES ('2020-08-30', 'egreso', 'cuota gimnasio', '1350');

INSERT INTO budget (movement_date, movement_type, movement_description, movement_amount) VALUES ('2020-09-01', 'ingreso', 'honorarios cobrados', '35000');