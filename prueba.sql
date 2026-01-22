CREATE TABLE clients (
    client_id INTEGER unsigned primary key auto_increment,
    name VARCHAR(100) not null,
    email VARCHAR(60) not null unique,
    phone_number VARCHAR(15),
    created_at timestamp not null default current_timestamp,
    modified_at timestamp not null default current_timestamp on update current_timestamp
);
CREATE TABLE if not exists products (
    product_id integer unsigned primary key auto_increment,
    name VARCHAR(100) not null,
    slug VARCHAR(200) not null unique,
    description text,
    created_at timestamp not null default current_timestamp,
    modified_at timestamp not null default current_timestamp on update current_timestamp
);

CREATE TABLE if not exists products (
    product_id integer unsigned primary key auto_increment,
    sku VARCHAR(20) not null unique,
    name VARCHAR(50) not null,
    slug VARCHAR(50) not null unique,
    description text,
    created_at timestamp not null default current_timestamp,
    modified_at timestamp not null default current_timestamp on update current_timestamp
);

insert ignore into products(sku,name,slug,description,price) values


CREATE TABLE if not exists bills (
    bill_id integer unsigned primary key auto_increment,
    client_id integer unsigned not null,
    total FLOAT,
    status enum('open', 'paid', 'lost') not null default 'open',
    created_at timestamp not null default current_timestamp,
    modified_at timestamp not null default current_timestamp on update current_timestamp
);

CREATE TABLE if not EXISTS bill_products (
    bill_product_id integer unsigned primary key auto_increment,
    bill_id integer unsigned not null,
    product_id integer unsigned not null,
    date_added timestamp not null,
    quantity integer not null default 1,
    price decimal(10, 2) not null,
    discount FLOAT not null default 0,
    created_at timestamp not null default current_timestamp,
    modified_at timestamp not null default current_timestamp on update current_timestamp
);

CREATE TABLE test (
    test_id integer unsigned primary key auto_increment,
    name VARCHAR(100) not null,
    qty integer,
    created_at timestamp not null default current_timestamp
);

ALTER TABLE test add column price FLOAT;
ALTER TABLE test drop column price;


ALTER TABLE test modify column price decimal(10,3) not null;

ALTER TABLE test rename column price to prices;

ALTER TABLE test rename to tests;



INSERT into clients(client_id, name, email, phone_number) values(1, 'eduardo', 'eduardo@mail.com');
INSERT into products(name, slug) values('cuaderno', 'slug-cuaderno');

INSERT into bills(client_id, total) values(10, 15.00);
INSERT into bill_products(product_id, bill_id) values(1, 3);


INSERT into products(name, slug) values('Pluma azul', 'pluma-azul');
INSERT into products(name, slug) values('Pluma azul', 'pluma-azul')
 on duplicate key update description = price;
 
 
 concat ('hola: ',values(slug));


INSERT into products(name, slug) values('Pluma roja', 'pluma-azul');
INSERT into products(name, slug) values
('Pluma negra', 'pluma-negra'),
('Pluma rosa', 'pluma-rosa');
INSERT into products(name, slug) values('Pluma roja', 'pluma-azul');

| product_id  | int unsigned | NO   | PRI | NULL              | auto_increment                                |
| name        | varchar(100) | NO   |     | NULL              |                                               |
| slug        | varchar(200) | NO   | UNI | NULL              |                                               |
| description | text         | YES  |     | NULL              |                                               |
| created_at  | timestamp    | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED                             |
| modified_at | timestamp    | NO   |     | CURRENT_TIMESTAMP | DEFAULT_GENERATED on update CURRENT_TIMESTAMP |


SELECT name FROM clients WHERE rand() < 0.001;
SELECT name FROM products WHERE price * 10 > 5000;

SELECT name,price FROM products WHERE price * 10 between 6000 and 7000;

select * from bill_products where discount > 0;

select * from bill_products where date_added < '2024-09-24';
select * from bill_products where date_added between '2026-12-24' and '2026-06-24' and product_id in 825, 500, 1986;

UPDATE table [table] set [column = nuevo_valor, ...] WHERE [condition, ...] 

UPDATE clients set phone_number = '+521234657890' WHERE client_id = 1 limit 1;

UPDATE clients set phone_number = null where name like 'Laura%';

select * from clients WHERE name like 'Laura%';

alter table products add column stock integer not null default 0 after price;

update products set stock = stock -1 WHERE product_id = 8;

 alter table clients add column active tinyint not null default 1 after phone_number;

 DELETE FROM clients WHERE name like '%oz';

 SELECT
 FROM
 WHERE
 GROUP BY
 HAVING
 ORDER BY
 LIMIT

select product_id, name, price, stock from products where price < 100;
select product_id, name, price, stock from products where price < 100 and stock > 90;
select product_id, name, price, stock from products where price < 100 and stock > 90 order by stock desc;


select product_id, name, price, stock, price * stock as total from products where price < 100 and stock > 90 order by total desc;
select product_id, name, price, stock, price * stock as total from products order by total desc limit 10;

select email from clients;

select email, if(email like '%@mail.com', 1, 0) as mail,
             if(email like '%@outlook.com', 1, 0) as outlook
              from clients order by rand() limit 30; 
select email, if(email like '%hotmail.com', 1, 0) from clients order by rand() limit 30; 

select 
case 
when email like '%@gmail.com' then 'gmail'
when email like '%@hotmail.com' then 'hotmail'
when email like '%@yahoo.com' then 'yahoo'
else 'another provider mail'
end as provedor,
count(*) as total_clients
from clients
where name like '%Moreno'
group by provedor
having total_clients < 20000
order by total_clients asc;


select
case 
when email like '%@gmail.com' then 'gmail'
when email like '%@hotmail.com' then 'hotmail'
when email like '%@yahoo.com' then 'yahoo'
else 'another provider mail'
end as provedor,
count(*) as total_clients
from clients
group by provedor
having total_clients < 20000
order by total_clients asc;
;


create table investment (
    investment_id INTEGER unsigned primary key auto_increment,
    product_id INTEGER unsigned not null,
    investment INTEGER not null default 0
);


insert into investment(product_id, investment) 
select product_id, stock*price from products;

select * from investment order by investment desc limit 10;

select * from investment where investment > 100000 and investment_id % 10 = 0;

select p.product_id as pid, p.name, p.price, i.investment
from investment as i
left join products as p
on p.product_id = i.product_id
where investment > 100000 and investment_id % 10 = 0;


select p.product_id as pid, p.name, p.price, i.investment,
round(i.investment / p.price) as inv_calculated,
p.stock,
if(round(i.investment / p.price) = p.stock, 'Perfect', 'error') as status
from investment as i
left join products as p
on p.product_id = i.product_id
where investment > 100000 and investment_id % 10 = 0;


select b.bill_id, b.status, c.name,
count(bp.bill_product_id) as number_of_products,

round(sum(bp.quantity * p.price * (1 - bp.discount/100))) as total

select concat('Client ', c.name, ' has an account ', b.status,
 ' with ', count(bp.bill_product_id), ' products and sum $', 
 round(sum(bp.quantity * p.price * (1 - bp.discount/100)))) as result

from bills as b 

left join clients as c
on b.client_id = c.client_id
left join bill_products as bp
on bp.bill_id = b.bill_id
left join products as p
on p.product_id = bp.product_id
group by b.bill_id;





