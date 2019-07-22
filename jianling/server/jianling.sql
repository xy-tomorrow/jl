SET NAMES UTF8;
DROP DATABASE IF EXISTS jianling;
CREATE DATABASE jianling CHARSET=UTF8;
USE jianling;

CREATE TABLE jl_user(
   jid INT PRIMARY KEY  AUTO_INCREMENT,
   uname VARCHAR(32),
   upwd VARCHAR(32),   
   phone VARCHAR(16) NOT NULL 
);
CREATE TABLE jl_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  p_id INT, 
  title VARCHAR(128),
  price DECIMAL(10,2),
  pic VARCHAR(128)
);
CREATE TABLE jl_product_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  laptop_id INT,              
  sm VARCHAR(128),          
  md VARCHAR(128)         
);
CREATE TABLE jl_product_detail(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),                     
  price DECIMAL(10,2)
);
INSERT INTO jl_user VALUES
(NULL,"tongey",md5("123"),"13912345678"),
(NULL,"mark",md5("123"),"15712345678"),
(NULL,"lili",md5("123"),"15812345678"),
(NULL,"jary",md5("123"),"15612345678");


INSERT INTO jl_product_pic VALUES
(NULL, 1, '../public/detail_img/sm/01.jpg','../public/detail_img/md/01.jpg'),
(NULL, 1, '../public/detail_img/sm/02.jpg','../public/detail_img/md/02.jpg'),
(NULL, 1, '../public/detail_img/sm/03.jpg','../public/detail_img/md/03.jpg'),
(NULL, 1, '../public/detail_img/sm/04.jpg','../public/detail_img/md/04.jpg'),
(NULL, 1, '../public/detail_img/sm/05.jpg','../public/detail_img/md/05.jpg');


INSERT INTO jl_product VALUES
(null,1,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/01.jpg'),
(null,2,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/02.jpg'),
(null,3,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/03.jpg'),
(null,4,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/04.jpg'),
(null,5,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/05.jpg'),
(null,5,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/06.jpg'),
(null,5,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/07.jpg'),
(null,5,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/08.jpg'),
(null,5,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/09.jpg'),
(null,5,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/10.jpg'),
(null,5,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/11.jpg'),
(null,5,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/12.jpg'),
(null,5,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/13.jpg'),
(null,5,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/14.jpg'),
(null,5,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/15.jpg'),
(null,5,'【剑灵】拳师三系觉醒纪念款T恤',149,'../public/img/16.jpg');


INSERT INTO jl_product_detail VALUES
(null,'【剑灵】拳师三系觉醒纪念款T恤',149),
(null,'【剑灵】拳师三系觉醒纪念款T恤',149),
(null,'【剑灵】拳师三系觉醒纪念款T恤',149),
(null,'【剑灵】拳师三系觉醒纪念款T恤',149);