SET NAMES UTF8;
DROP DATABASE IF EXISTS sm;
CREATE DATABASE sm CHARSET=UTF8;
USE sm;
/* 用户信息表 */
CREATE TABLE mall_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  rtime DATETIME
  );
   /* 插入四个用户 */
INSERT INTO mall_user VALUES
(NULL, 'dingyiwei','19890822',NOW()),
(NULL, 'luoli','ll123456',NOW()),
(NULL, 'liuguoqiang','lgq0421',NOW()),
(NULL, 'liwei','586541',NOW());

/* 产品表 */
CREATE TABLE mall_products(
  pid VARCHAR(32),
  pname VARCHAR(32),
  subid VARCHAR(32),
  ori_price DECIMAL(10,2),
  pre_price DECIMAL(10,2),
  amount INT,
  detail VARCHAR(3000),
  sales INT,
  image1 VARCHAR(50),
  ctime VARCHAR(32),
  utime VARCHAR(32),
  pic VARCHAR(100),
 

  UNIQUE (pid)
  );


/* 子分类表 */
CREATE TABLE mall_categorysub(
  subid VARCHAR(32),
  cid VARCHAR(32),
  sname VARCHAR(32),
  UNIQUE (subid)
)
/* 分类表 */
CREATE TABLE mall_category(
  pic VARCHAR(100),
  cid VARCHAR(32),
  cname VARCHAR(32),
  UNIQUE (cid)
)