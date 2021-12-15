-- auto-generated definition
create table my_table
(
    id int auto_increment primary key,
    message text null
);

insert into my_table (message) values ('{"message": "hello world"}');
insert into my_table (message) values ('{"message": "foo bar"}');
insert into my_table (message) values ('{"message": "test message"}');
