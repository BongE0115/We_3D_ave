-- Active: 1732260994073@@127.0.0.1@3306@piece
-- 사용자 정보를 저장하는 테이블
CREATE TABLE `User` (
	`USERNO` INT NOT NULL, -- 사용자 고유 번호 (Primary Key)
	`USERID` VARCHAR(100) NOT NULL, -- 사용자 ID
	`PASSWORD` VARCHAR(100) NOT NULL, -- 사용자 비밀번호
	`USERNAME` VARCHAR(100) NOT NULL, -- 사용자 이름
	`EMAIL` VARCHAR(50) NOT NULL, -- 사용자 이메일
	`PHONE` VARCHAR(50) NOT NULL, -- 사용자 전화번호
	`BIRTH` VARCHAR(50) NOT NULL, -- 사용자 생년월일
	`ENROLL_DATE` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, -- 가입 날짜
	`LAST_UPDATE` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP -- 마지막 정보 수정 날짜
);

-- 사용자 권한 정보를 저장하는 테이블
CREATE TABLE `Auth` (
	`AUTH_NO` INT NOT NULL, -- 권한 고유 번호 (Primary Key)
	`USERNO` INT NOT NULL, -- 사용자 번호 
	`AUTH_TYPE` VARCHAR(100) NOT NULL -- 권한 유형
);

-- 주문 정보를 저장하는 테이블
CREATE TABLE `ORDER` (
	`ORDER_NO` INT NOT NULL, -- 주문 고유 번호 (Primary Key)
	`USERNO` INT NOT NULL, -- 사용자 번호 
	`PRODUCT_NO` VARCHAR(100) NOT NULL, -- 주문한 상품 NO
	`TOTAL_PRICE` INT NOT NULL, -- 주문 총 금액
	`ORDER_ENROLL` TIMESTAMP NOT NULL, -- 주문 등록 날짜
	`ADDRESSEE` VARCHAR(100) NOT NULL -- 수령인 정보
);

-- 상품 정보를 저장하는 테이블
CREATE TABLE `PRODUCT` (
	`PRODUCT_NO` INT NOT NULL, -- 상품 고유 번호 (Primary Key)
	`CATEGORY_NO` INT NOT NULL, -- 카테고리 번호 
	`P_NAME` VARCHAR(100) NOT NULL, -- 상품명
	`P_PRICE` INT NOT NULL, -- 상품 가격
	`P_INFO` VARCHAR(255) NULL, -- 상품 설명
	`P_STOCK` INT NOT NULL, -- 상품 재고량
	`P_ENROLL` TIMESTAMP NOT NULL, -- 상품 등록 날짜
	`P_FIX` TIMESTAMP NOT NULL, -- 상품 수정 날짜
	`P_STAR` ENUM('0','1') NOT NULL -- 추천 상품 여부
);

-- 상품 카테고리 정보를 저장하는 테이블
CREATE TABLE `CATEGORY` (
	`CATEGORY_NO` INT NOT NULL, -- 카테고리 고유 번호 (Primary Key)
	`CATEGORYNAME` VARCHAR(100) NOT NULL -- 카테고리명
);

-- 장바구니 정보를 저장하는 테이블
CREATE TABLE `CART` (
	`CART_ID` INT NOT NULL, -- 장바구니 고유 번호 (Primary Key)
	`USERNO` INT NOT NULL, -- 사용자 번호 
	`PRODUCT_NO` INT NOT NULL, -- 상품 번호 
	`CART_QUANTITY` INT NOT NULL -- 장바구니에 담긴 상품 수량
);

-- 결제 정보를 저장하는 테이블
CREATE TABLE `PAYMENT` (
	`PAY_NO` INT NOT NULL, -- 결제 고유 번호 (Primary Key)
	`ORDER_NO` INT NOT NULL, -- 주문 번호 
	`PRODUCT_NO` INT NOT NULL -- 상품 번호
);

-- 쿠폰 정보를 저장하는 테이블
CREATE TABLE `COUPON` (
	`COUPON_NO` INT NOT NULL, -- 쿠폰 고유 번호 (Primary Key)
	`USERNO` INT NOT NULL, -- 사용자 번호 
	`COUPON_NAME` VARCHAR(100) NOT NULL, -- 쿠폰명
	`DISCOUNT_RATE` INT NULL, -- 할인율
	`DISCOUNT_PRICE` INT NULL, -- 할인 금액
	`COUPON_INFO` VARCHAR(255) NULL, -- 쿠폰 설명
	`COUPON_STATUS` ENUM('0', '1') NOT NULL -- 쿠폰 상태 (0: 비활성, 1: 활성)
);

-- User 테이블의 Primary Key 설정
ALTER TABLE `User` ADD CONSTRAINT `PK_USER` PRIMARY KEY (
	`USERNO`
);

-- Auth 테이블의 Primary Key 설정
ALTER TABLE `Auth` ADD CONSTRAINT `PK_AUTH` PRIMARY KEY (
	`AUTH_NO`
);

-- ORDER 테이블의 Primary Key 설정
ALTER TABLE `ORDER` ADD CONSTRAINT `PK_ORDER` PRIMARY KEY (
	`ORDER_NO`
);

-- PRODUCT 테이블의 Primary Key 설정
ALTER TABLE `PRODUCT` ADD CONSTRAINT `PK_PRODUCT` PRIMARY KEY (
	`PRODUCT_NO`
);

-- CATEGORY 테이블의 Primary Key 설정
ALTER TABLE `CATEGORY` ADD CONSTRAINT `PK_CATEGORY` PRIMARY KEY (
	`CATEGORY_NO`
);

-- CART 테이블의 Primary Key 설정
ALTER TABLE `CART` ADD CONSTRAINT `PK_CART` PRIMARY KEY (
	`CART_ID`
);

-- PAYMENT 테이블의 Primary Key 설정
ALTER TABLE `PAYMENT` ADD CONSTRAINT `PK_PAYMENT` PRIMARY KEY (
	`PAY_NO`
);

-- COUPON 테이블의 Primary Key 설정
ALTER TABLE `COUPON` ADD CONSTRAINT `PK_COUPON` PRIMARY KEY (
	`COUPON_NO`
);

-- Auth 테이블의 USERNO를 User 테이블의 USERNO에 연결
ALTER TABLE `Auth`
ADD CONSTRAINT `FK_Auth_User`
FOREIGN KEY (`USERNO`) REFERENCES `User` (`USERNO`)
ON DELETE CASCADE;

-- ORDER 테이블의 USERNO를 User 테이블의 USERNO에 연결
ALTER TABLE `ORDER`
ADD CONSTRAINT `FK_Order_User`
FOREIGN KEY (`USERNO`) REFERENCES `User` (`USERNO`)
ON DELETE CASCADE;

-- ORDER 테이블의 PRODUCT_NO를 PRODUCT 테이블의 PRODUCT_NO에 연결 (이름 일치 수정 필요)
ALTER TABLE `ORDER`
ADD CONSTRAINT `FK_Order_Product`
FOREIGN KEY (`PRODUCT_NO`) REFERENCES `PRODUCT` (`PRODUCT_NO`)
ON DELETE CASCADE;

-- PRODUCT 테이블의 CATEGORY_NO를 CATEGORY 테이블의 CATEGORY_NO에 연결
ALTER TABLE `PRODUCT`
ADD CONSTRAINT `FK_Product_Category`
FOREIGN KEY (`CATEGORY_NO`) REFERENCES `CATEGORY` (`CATEGORY_NO`)
ON DELETE CASCADE;

-- CART 테이블의 USERNO를 User 테이블의 USERNO에 연결
ALTER TABLE `CART`
ADD CONSTRAINT `FK_Cart_User`
FOREIGN KEY (`USERNO`) REFERENCES `User` (`USERNO`)
ON DELETE CASCADE;

-- CART 테이블의 PRODUCT_NO를 PRODUCT 테이블의 PRODUCT_NO에 연결
ALTER TABLE `CART`
ADD CONSTRAINT `FK_Cart_Product`
FOREIGN KEY (`PRODUCT_NO`) REFERENCES `PRODUCT` (`PRODUCT_NO`)
ON DELETE CASCADE;

-- PAYMENT 테이블의 ORDER_NO를 ORDER 테이블의 ORDER_NO에 연결
ALTER TABLE `PAYMENT`
ADD CONSTRAINT `FK_Payment_Order`
FOREIGN KEY (`ORDER_NO`) REFERENCES `ORDER` (`ORDER_NO`)
ON DELETE CASCADE;

-- PAYMENT 테이블의 PRODUCT_NO를 PRODUCT 테이블의 PRODUCT_NO에 연결
ALTER TABLE `PAYMENT`
ADD CONSTRAINT `FK_Payment_Product`
FOREIGN KEY (`PRODUCT_NO`) REFERENCES `PRODUCT` (`PRODUCT_NO`)
ON DELETE CASCADE;

-- COUPON 테이블의 USERNO를 User 테이블의 USERNO에 연결
ALTER TABLE `COUPON`
ADD CONSTRAINT `FK_Coupon_User`
FOREIGN KEY (`USERNO`) REFERENCES `User` (`USERNO`)
ON DELETE CASCADE;

-- 수정 사항:
-- 1. Foreign Key가 설정되지 않아 데이터 무결성 보장이 어렵습니다. 각 테이블에 적절한 Foreign Key를 추가하세요.
--    예: `Auth.USERNO`는 `User.USERNO`를 참조하도록 Foreign Key 추가.
-- 2. `PAYMENT` 테이블의 `Field` 컬럼 이름이 모호합니다. 사용 목적을 명확히 하고, 필요하지 않다면 삭제를 고려하세요.
-- 3. ENUM 타입의 활용 범위를 좀 더 명확히 정의하세요. 예: `P_STAR`는 '0', '1' 대신 '추천 아님', '추천'과 같은 직관적인 값으로 설정.