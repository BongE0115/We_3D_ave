-- 테이블 삭제
DROP TABLE IF EXISTS `auth`;
DROP TABLE IF EXISTS `cart`;
DROP TABLE IF EXISTS `category`;
DROP TABLE IF EXISTS `coupon`;
DROP TABLE IF EXISTS `order`;
DROP TABLE IF EXISTS `payment`;
DROP TABLE IF EXISTS `product`;
DROP TABLE IF EXISTS `user`;

-- 사용자 정보를 저장하는 테이블
CREATE TABLE `User` (
	`USERNO` INT NOT NULL AUTO_INCREMENT, -- 사용자 고유 번호
	`USERID` VARCHAR(100) NOT NULL, -- 사용자 ID
	`PASSWORD` VARCHAR(100) NOT NULL, -- 사용자 비밀번호
	`USERNAME` VARCHAR(100) NOT NULL, -- 사용자 이름
	`EMAIL` VARCHAR(50) NOT NULL, -- 사용자 이메일
	`PHONE` VARCHAR(50) NOT NULL, -- 사용자 전화번호
	`BIRTH` VARCHAR(50) NOT NULL, -- 사용자 생년월일
	`ENROLL_DATE` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 가입 날짜
	`LAST_UPDATE` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- 마지막 정보 수정 날짜
	PRIMARY KEY (`USERNO`)
);

-- 사용자 권한 정보를 저장하는 테이블
CREATE TABLE `Auth` (
	`AUTH_NO` INT NOT NULL AUTO_INCREMENT, -- 권한 고유 번호
	`USERNO` INT NOT NULL, -- 사용자 번호 
	`AUTH_TYPE` VARCHAR(100) NOT NULL, -- 권한 유형
	PRIMARY KEY (`AUTH_NO`),
	FOREIGN KEY (`USERNO`) REFERENCES `User` (`USERNO`) ON DELETE CASCADE
);

-- 주문 정보를 저장하는 테이블
CREATE TABLE `Order` (
	`ORDER_NO` INT NOT NULL AUTO_INCREMENT, -- 주문 고유 번호
	`USERNO` INT NOT NULL, -- 사용자 번호 
	`PRODUCT_NO` INT NOT NULL, -- 주문한 상품 번호
	`TOTAL_PRICE` INT NOT NULL, -- 주문 총 금액
	`ORDER_ENROLL` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 주문 등록 날짜
	`ADDRESSEE` VARCHAR(100) NOT NULL, -- 수령인 정보
	PRIMARY KEY (`ORDER_NO`),
	FOREIGN KEY (`USERNO`) REFERENCES `User` (`USERNO`) ON DELETE CASCADE,
	FOREIGN KEY (`PRODUCT_NO`) REFERENCES `Product` (`PRODUCT_NO`) ON DELETE CASCADE
);

-- 상품 정보를 저장하는 테이블
CREATE TABLE `Product` (
	`PRODUCT_NO` INT NOT NULL AUTO_INCREMENT, -- 상품 고유 번호
	`CATEGORY_NO` INT NOT NULL, -- 카테고리 번호 
	`P_NAME` VARCHAR(100) NOT NULL, -- 상품명
	`P_PRICE` INT NOT NULL, -- 상품 가격
	`P_INFO` VARCHAR(255), -- 상품 설명
	`P_STOCK` INT NOT NULL, -- 상품 재고량
	`P_ENROLL` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 상품 등록 날짜
	`P_FIX` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, -- 상품 수정 날짜
	`P_STAR` ENUM('0','1') NOT NULL, -- 추천 상품 여부
	PRIMARY KEY (`PRODUCT_NO`),
	FOREIGN KEY (`CATEGORY_NO`) REFERENCES `Category` (`CATEGORY_NO`) ON DELETE CASCADE
);

-- 상품 카테고리 정보를 저장하는 테이블
CREATE TABLE `Category` (
	`CATEGORY_NO` INT NOT NULL AUTO_INCREMENT, -- 카테고리 고유 번호
	`CATEGORYNAME` VARCHAR(100) NOT NULL, -- 카테고리명
	PRIMARY KEY (`CATEGORY_NO`)
);

-- 장바구니 정보를 저장하는 테이블
CREATE TABLE `Cart` (
	`CART_ID` INT NOT NULL AUTO_INCREMENT, -- 장바구니 고유 번호
	`USERNO` INT NOT NULL, -- 사용자 번호 
	`PRODUCT_NO` INT NOT NULL, -- 상품 번호 
	`CART_QUANTITY` INT NOT NULL, -- 장바구니에 담긴 상품 수량
	PRIMARY KEY (`CART_ID`),
	FOREIGN KEY (`USERNO`) REFERENCES `User` (`USERNO`) ON DELETE CASCADE,
	FOREIGN KEY (`PRODUCT_NO`) REFERENCES `Product` (`PRODUCT_NO`) ON DELETE CASCADE
);

-- 결제 정보를 저장하는 테이블
CREATE TABLE `Payment` (
	`PAY_NO` INT NOT NULL AUTO_INCREMENT, -- 결제 고유 번호
	`ORDER_NO` INT NOT NULL, -- 주문 번호 
	`PRODUCT_NO` INT NOT NULL, -- 상품 번호
	PRIMARY KEY (`PAY_NO`),
	FOREIGN KEY (`ORDER_NO`) REFERENCES `Order` (`ORDER_NO`) ON DELETE CASCADE,
	FOREIGN KEY (`PRODUCT_NO`) REFERENCES `Product` (`PRODUCT_NO`) ON DELETE CASCADE
);

-- 쿠폰 정보를 저장하는 테이블
CREATE TABLE `Coupon` (
	`COUPON_NO` INT NOT NULL AUTO_INCREMENT, -- 쿠폰 고유 번호
	`USERNO` INT NOT NULL, -- 사용자 번호 
	`COUPON_NAME` VARCHAR(100) NOT NULL, -- 쿠폰명
	`DISCOUNT_RATE` INT, -- 할인율
	`DISCOUNT_PRICE` INT, -- 할인 금액
	`COUPON_INFO` VARCHAR(255), -- 쿠폰 설명
	`COUPON_STATUS` ENUM('0', '1') NOT NULL, -- 쿠폰 상태 (0: 비활성, 1: 활성)
	PRIMARY KEY (`COUPON_NO`),
	FOREIGN KEY (`USERNO`) REFERENCES `User` (`USERNO`) ON DELETE CASCADE
);
