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
