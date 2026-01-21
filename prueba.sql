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

CREATE TABLE if not exists bills (
    bill_id integer unsigned primary key auto_increment,
    client_id integer unsigned not null,
    total FLOAT,
    status enum('open', 'paid', 'lost') not null default 'open',
    created_at timestamp not null default current_timestamp,
    modified_at timestamp not null default current_timestamp on update current_timestamp,
    foreign key (client_id) references clients(client_id)
    on delete cascade
    on update cascade
);

CREATE TABLE if not EXISTS bill_products (
    bill_product_id integer unsigned primary key auto_increment,
    bill_id integer unsigned not null,
    product_id integer unsigned not null,
    quantity integer not null default 1,
    created_at timestamp not null default current_timestamp,
    modified_at timestamp not null default current_timestamp on update current_timestamp
    foreign key (bill_id) references bills(bill_id)
    on update cascade
    on delete cascade,
    foreign key (product_id) references products(product_id)
);


INSERT into bills(client_id, total) values(10, 15.00);
INSERT into clients(client_id, name, email) values(10, 'eduardo', 'eduardo@mail.com');


CREATE TABLE products (
    name VARCHAR(20),
    sku VARCHAR(15),
    slug VARCHAR(20),
    description TEXT,
    price FLOAT
);