-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 10, 2023 at 02:47 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `products_database`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(50) NOT NULL,
  `product_description` varchar(175) NOT NULL,
  `brand` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `image_url` varchar(50) NOT NULL,
  `colors` varchar(60) NOT NULL,
  `memory` varchar(10) NOT NULL,
  `memory_variations` varchar(50) NOT NULL,
  `in_stock` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `product_description`, `brand`, `price`, `image_url`, `colors`, `memory`, `memory_variations`, `in_stock`) VALUES
(1, 'Apple iPhone 13 Pro', 'Unleash power with iPhone 13 Pro. ProMotion display, advanced camera system, and A15 Bionic chip. Elevate your mobile experience now!', 'Apple', 27499, 'AppleiPhone13Pro/iPhone13pro_1.webp', 'gold,black,green,white,blue', '128 GB', '128 GB,256 GB,512 GB,1 TB', 1),
(2, 'Apple iPhone 13 Pro', 'Unleash power with iPhone 13 Pro. ProMotion display, advanced camera system, and A15 Bionic chip. Elevate your mobile experience now!', 'Apple', 29499, 'AppleiPhone13Pro/iPhone13pro_2.webp', 'gold,black,green,white,blue', '256 GB', '128 GB,256 GB,512 GB,1 TB', 1),
(3, 'Apple iPhone 13 Pro', 'Unleash power with iPhone 13 Pro. ProMotion display, advanced camera system, and A15 Bionic chip. Elevate your mobile experience now!', 'Apple', 32999, 'AppleiPhone13Pro/iPhone13pro_3.webp', 'gold,black,green,white,blue', '512 GB', '128 GB,256 GB,512 GB,1 TB', 1),
(4, 'Apple iPhone 13 Pro', 'Unleash power with iPhone 13 Pro. ProMotion display, advanced camera system, and A15 Bionic chip. Elevate your mobile experience now!', 'Apple', 34999, 'AppleiPhone13Pro/iPhone13pro_4.webp', 'gold,black,green,white,blue', '1 TB', '128 GB,256 GB,512 GB,1 TB', 1),
(5, 'Apple iPhone SE 2020', 'iPhone SE 2020: Powerful performance meets compact design. A budget-friendly option with cutting-edge features. Elevate your mobile experience today!', 'Apple', 9999, 'AppleiPhoneSE2020/iPhoneSE2020_1.webp', 'red,black,white', '64 GB', '64 GB,128 GB,256 GB', 1),
(6, 'Apple iPhone SE 2020', 'iPhone SE 2020: Powerful performance meets compact design. A budget-friendly option with cutting-edge features. Elevate your mobile experience today!', 'Apple', 10999, 'AppleiPhoneSE2020/iPhoneSE2020_2.webp', 'red,black,white', '128 GB', '64 GB,128 GB,256 GB', 1),
(7, 'Apple iPhone SE 2020', 'iPhone SE 2020: Powerful performance meets compact design. A budget-friendly option with cutting-edge features. Elevate your mobile experience today!', 'Apple', 11999, 'AppleiPhoneSE2020/iPhoneSE2020_3.webp', 'red,black,white', '256 GB', '64 GB,128 GB,256 GB', 1),
(8, 'Apple iPhone 14 Pro Max', 'Unleash the future with iPhone 14 Pro Max. ProMotion display, advanced camera system, and A16 Bionic chip. Elevate your mobile experience to new heights!', 'Apple', 27499, 'iPhone14ProMax/iPhone14_pro_max_1.webp', 'black,purple,silver,gold', '128 GB', '128 GB,256 GB,512 GB,1 TB', 1),
(9, 'Apple iPhone 14 Pro Max', 'Unleash the future with iPhone 14 Pro Max. ProMotion display, advanced camera system, and A16 Bionic chip. Elevate your mobile experience to new heights!', 'Apple', 29999, 'iPhone14ProMax/iPhone14_pro_max_2.webp', 'black,purple,silver,gold', '256 GB', '128 GB,256 GB,512 GB,1 TB', 1),
(10, 'Apple iPhone 14 Pro Max', 'Unleash the future with iPhone 14 Pro Max. ProMotion display, advanced camera system, and A16 Bionic chip. Elevate your mobile experience to new heights!', 'Apple', 34999, 'iPhone14ProMax/iPhone14_pro_max_3.webp', 'black,purple,silver,gold', '512 GB', '128 GB,256 GB,512 GB,1 TB', 1),
(11, 'Apple iPhone 14 Pro Max', 'Unleash the future with iPhone 14 Pro Max. ProMotion display, advanced camera system, and A16 Bionic chip. Elevate your mobile experience to new heights!', 'Apple', 42999, 'iPhone14ProMax/iPhone14_pro_max_1.webp', 'black,purple,silver,gold', '1 TB', '128 GB,256 GB,512 GB,1 TB', 1),
(12, 'Samsung Galaxy A32', 'Samsung Galaxy A32: Stunning display, versatile camera, and powerful performance. Elevate your mobile experience with the Galaxy A32. Discover more today!', 'Samsung', 5999, 'SamsungGalaxyA32/GalaxyA32_1.webp', 'black,purple,blue,white', '64 GB', '64 GB,128 GB', 1),
(13, 'Samsung Galaxy A32', 'Samsung Galaxy A32: Stunning display, versatile camera, and powerful performance. Elevate your mobile experience with the Galaxy A32. Discover more today!', 'Samsung', 6399, 'SamsungGalaxyA32/GalaxyA32_2.webp', 'black,purple,blue,white', '128 GB', '64 GB,128 GB', 1),
(14, 'Samsung Galaxy A33', 'Meet the Samsung Galaxy A33: Sleek design, brilliant display, and advanced features for an exceptional mobile experience. Elevate your connectivity with the Galaxy A33 today!', 'Samsung', 6999, 'SamsungGalaxyA33/GalaxyA33_1.webp', 'black,gold,blue,white', '128 GB', '128 GB', 1),
(15, 'Samsung Galaxy A54', 'Discover the Samsung Galaxy A54: Stunning visuals, versatile camera system, and powerful performance in a sleek design. Elevate your mobile lifestyle with the Galaxy A54 today', 'Samsung', 8599, 'SamsungGalaxyA54/GalaxyA54_1.webp', 'green,black,purple,white', '128 GB', '128 GB,256 GB', 1),
(16, 'Samsung Galaxy A54', 'Discover the Samsung Galaxy A54: Stunning visuals, versatile camera system, and powerful performance in a sleek design. Elevate your mobile lifestyle with the Galaxy A54 today', 'Samsung', 9699, 'SamsungGalaxyA54/GalaxyA54_2.webp', 'green,black,purple,white', '256 GB', '128 GB,256 GB', 1),
(17, 'Samsung Galaxy M52', 'Unleash power with Samsung Galaxy M52. Vibrant display, high-performance features, and a versatile camera. Elevate your mobile experience with the Galaxy M52. Discover more!', 'Samsung', 9899, 'SamsungGalaxyM52/GalaxyM52_1.webp', 'black,blue,white', '128 GB', '128 GB', 1),
(18, 'Samsung Galaxy S22', 'Samsung Galaxy S22: Unleash innovation with a stunning display, powerful features, and cutting-edge technology. Elevate your mobile experience today!', 'Samsung', 14699, 'SamsungGalaxyS22/GalaxyS22_1.webp', 'black,green,white,pink,purple', '128 GB', '128 GB,256 GB', 1),
(19, 'Samsung Galaxy S22', 'Samsung Galaxy S22: Unleash innovation with a stunning display, powerful features, and cutting-edge technology. Elevate your mobile experience today!', 'Samsung', 15599, 'SamsungGalaxyS22/GalaxyS22_2.webp', 'black,green,white,pink,purple', '256 GB', '128 GB,256 GB', 1),
(20, 'Samsung Galaxy S23 Ultra', 'Samsung Galaxy S23 Ultra: The epitome of innovation. Unrivaled camera, stunning display, and next-level performance. Elevate your mobile experience with the Galaxy S23 Ultra.', 'Samsung', 24999, 'SamsungGalaxyS23Ultra/GalaxyS23Ultra_1.webp', 'green,black,white,pink', '256 GB', '256 GB,512 GB', 1),
(21, 'Samsung Galaxy S23 Ultra', 'Samsung Galaxy S23 Ultra: The epitome of innovation. Unrivaled camera, stunning display, and next-level performance. Elevate your mobile experience with the Galaxy S23 Ultra.', 'Samsung', 26999, 'SamsungGalaxyS23Ultra/GalaxyS23Ultra_2.webp', 'green,black,white,pink', '512 GB', '256 GB,512 GB', 1),
(22, 'Samsung Galaxy S23', 'Samsung Galaxy S23: Redefining excellence with cutting-edge features, a brilliant display, and unparalleled performance. Elevate your mobile experience with the Galaxy S23.', 'Samsung', 17399, 'SamsungS23/SamsungS23_1.webp', 'white,black,green,pink', '256 GB', '256 GB', 1),
(23, 'Xiaomi 12', 'Xiaomi 12: A flagship redefined. Exceptional performance, cutting-edge camera, and immersive display. Elevate your mobile experience with Xiaomi 12. Discover innovation!', 'Xiaomi', 15799, 'Xiaomi12/Xiaomi12_1.webp', 'gray,blue,pink,green', '128 GB', '128 GB,256 GB', 1),
(24, 'Xiaomi 12', 'Xiaomi 12: A flagship redefined. Exceptional performance, cutting-edge camera, and immersive display. Elevate your mobile experience with Xiaomi 12. Discover innovation!', 'Xiaomi', 16399, 'Xiaomi12/Xiaomi12_2.webp', 'gray,blue,pink,green', '256 GB', '128 GB,256 GB', 1),
(25, 'Xiaomi Redmi 12C', 'Xiaomi Redmi 12C: Budget-friendly brilliance with powerful performance, vibrant display, and a reliable camera. Elevate your mobile experience with Redmi 12C!', 'Xiaomi', 2099, 'XiaomiRedmi12C/Redmi12C_1.webp', 'blue,black', '32 GB', '32 GB,64 GB,128 GB', 1),
(26, 'Xiaomi Redmi 12C', 'Xiaomi Redmi 12C: Budget-friendly brilliance with powerful performance, vibrant display, and a reliable camera. Elevate your mobile experience with Redmi 12C!', 'Xiaomi', 2299, 'XiaomiRedmi12C/Redmi12C_2.webp', 'blue,black', '64 GB', '32 GB,64 GB,128 GB', 1),
(27, 'Xiaomi Redmi 12C', 'Xiaomi Redmi 12C: Budget-friendly brilliance with powerful performance, vibrant display, and a reliable camera. Elevate your mobile experience with Redmi 12C!', 'Xiaomi', 2499, 'XiaomiRedmi12C/Redmi12C_1.webp', 'blue,black', '128 GB', '32 GB,64 GB,128 GB', 1),
(28, 'Xiaomi Redmi Note 9', 'Xiaomi Redmi Note 9: Exceptional value with a powerful camera, stunning display, and reliable performance. Elevate your mobile experience with Redmi Note 9.', 'Xiaomi', 4199, 'XiaomiRedmiNote9/RedmiNote9_1.webp', 'green,white,gray,black', '64 GB', '64 GB,128 GB', 1),
(29, 'Xiaomi Redmi Note 9', 'Xiaomi Redmi Note 9: Exceptional value with a powerful camera, stunning display, and reliable performance. Elevate your mobile experience with Redmi Note 9.', 'Xiaomi', 4599, 'XiaomiRedmiNote9/RedmiNote9_2.webp', 'green,white,gray,black', '128 GB', '64 GB,128 GB', 1),
(30, 'Xiaomi Redmi Note 11', 'Xiaomi Redmi Note 11: Elevate your mobile experience with outstanding features, impressive camera, and powerful performance. Redefine your connectivity with the Redmi Note 11.', 'Xiaomi', 4499, 'XiaomiRedmiNote11/RedmiNote11_1.webp', 'fade,gray,blue', '64 GB', '64 GB,128 GB', 1),
(31, 'Xiaomi Redmi Note 11', 'Xiaomi Redmi Note 11: Elevate your mobile experience with outstanding features, impressive camera, and powerful performance. Redefine your connectivity with the Redmi Note 11.', 'Xiaomi', 3199, 'XiaomiRedmiNote11/RedmiNote11_2.webp', 'fade,gray,blue', '128 GB', '64 GB,128 GB', 1),
(32, 'Xiaomi Redmi Note 12', 'Xiaomi Redmi Note 12: Unleash innovation with powerful features, advanced camera, and stunning display. Elevate your mobile experience with the Redmi Note 12.', 'Xiaomi', 4399, 'XiaomiRedmiNote12/RedmiNote12_1.webp', 'gray,blue', '64 GB', '64 GB,128 GB,256 GB', 1),
(33, 'Xiaomi Redmi Note 12', 'Xiaomi Redmi Note 12: Unleash innovation with powerful features, advanced camera, and stunning display. Elevate your mobile experience with the Redmi Note 12.', 'Xiaomi', 4999, 'XiaomiRedmiNote12/RedmiNote12_2.webp', 'gray,blue', '128 GB', '64 GB,128 GB,256 GB', 1),
(34, 'Xiaomi Redmi Note 12', 'Xiaomi Redmi Note 12: Unleash innovation with powerful features, advanced camera, and stunning display. Elevate your mobile experience with the Redmi Note 12.', 'Xiaomi', 4599, 'XiaomiRedmiNote12/RedmiNote12_3.webp', 'gray,blue', '256 GB', '64 GB,128 GB,256 GB', 1);

-- --------------------------------------------------------

--
-- Table structure for table `products_images`
--

CREATE TABLE `products_images` (
  `image_id` int(11) NOT NULL,
  `image_url` varchar(50) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products_images`
--

INSERT INTO `products_images` (`image_id`, `image_url`, `product_id`) VALUES
(1, 'AppleiPhone13Pro/iPhone13pro_1.webp', 1),
(2, 'AppleiPhone13Pro/iPhone13pro_1.webp', 2),
(3, 'AppleiPhone13Pro/iPhone13pro_1.webp', 3),
(4, 'AppleiPhone13Pro/iPhone13pro_1.webp', 4),
(5, 'AppleiPhone13Pro/iPhone13pro_2.webp', 1),
(6, 'AppleiPhone13Pro/iPhone13pro_2.webp', 2),
(7, 'AppleiPhone13Pro/iPhone13pro_2.webp', 3),
(8, 'AppleiPhone13Pro/iPhone13pro_2.webp', 4),
(9, 'AppleiPhone13Pro/iPhone13pro_3.webp', 1),
(10, 'AppleiPhone13Pro/iPhone13pro_3.webp', 2),
(11, 'AppleiPhone13Pro/iPhone13pro_3.webp', 3),
(12, 'AppleiPhone13Pro/iPhone13pro_3.webp', 4),
(13, 'AppleiPhone13Pro/iPhone13pro_4.webp', 1),
(14, 'AppleiPhone13Pro/iPhone13pro_4.webp', 2),
(15, 'AppleiPhone13Pro/iPhone13pro_4.webp', 3),
(16, 'AppleiPhone13Pro/iPhone13pro_4.webp', 4),
(17, 'AppleiPhoneSE2020/iPhoneSE2020_1.webp', 7),
(18, 'AppleiPhoneSE2020/iPhoneSE2020_2.webp', 7),
(19, 'AppleiPhoneSE2020/iPhoneSE2020_3.webp', 7),
(20, 'AppleiPhoneSE2020/iPhoneSE2020_4.webp', 7),
(21, 'AppleiPhoneSE2020/iPhoneSE2020_1.webp', 6),
(22, 'AppleiPhoneSE2020/iPhoneSE2020_2.webp', 6),
(23, 'AppleiPhoneSE2020/iPhoneSE2020_3.webp', 6),
(24, 'AppleiPhoneSE2020/iPhoneSE2020_4.webp', 6),
(25, 'AppleiPhoneSE2020/iPhoneSE2020_1.webp', 5),
(26, 'AppleiPhoneSE2020/iPhoneSE2020_2.webp', 5),
(27, 'AppleiPhoneSE2020/iPhoneSE2020_3.webp', 5),
(28, 'AppleiPhoneSE2020/iPhoneSE2020_4.webp', 5),
(29, 'iPhone14ProMax/iPhone14_pro_max_1.webp', 11),
(30, 'iPhone14ProMax/iPhone14_pro_max_2.webp', 11),
(31, 'iPhone14ProMax/iPhone14_pro_max_3.webp', 11),
(32, 'iPhone14ProMax/iPhone14_pro_max_4.webp', 11),
(33, 'iPhone14ProMax/iPhone14_pro_max_1.webp', 10),
(34, 'iPhone14ProMax/iPhone14_pro_max_2.webp', 10),
(35, 'iPhone14ProMax/iPhone14_pro_max_3.webp', 10),
(36, 'iPhone14ProMax/iPhone14_pro_max_4.webp', 10),
(37, 'iPhone14ProMax/iPhone14_pro_max_1.webp', 9),
(38, 'iPhone14ProMax/iPhone14_pro_max_2.webp', 9),
(39, 'iPhone14ProMax/iPhone14_pro_max_3.webp', 9),
(40, 'iPhone14ProMax/iPhone14_pro_max_4.webp', 9),
(41, 'iPhone14ProMax/iPhone14_pro_max_1.webp', 8),
(42, 'iPhone14ProMax/iPhone14_pro_max_2.webp', 8),
(43, 'iPhone14ProMax/iPhone14_pro_max_3.webp', 8),
(44, 'iPhone14ProMax/iPhone14_pro_max_4.webp', 8),
(45, 'SamsungGalaxyA32/GalaxyA32_1.webp', 12),
(46, 'SamsungGalaxyA32/GalaxyA32_2.webp', 12),
(47, 'SamsungGalaxyA32/GalaxyA32_3.webp', 12),
(48, 'SamsungGalaxyA32/GalaxyA32_4.webp', 12),
(49, 'SamsungGalaxyA32/GalaxyA32_1.webp', 13),
(50, 'SamsungGalaxyA32/GalaxyA32_2.webp', 13),
(51, 'SamsungGalaxyA32/GalaxyA32_3.webp', 13),
(52, 'SamsungGalaxyA32/GalaxyA32_4.webp', 13),
(53, 'SamsungGalaxyA33/GalaxyA33_1.webp', 14),
(54, 'SamsungGalaxyA33/GalaxyA33_2.webp', 14),
(55, 'SamsungGalaxyA33/GalaxyA33_3.webp', 14),
(56, 'SamsungGalaxyA33/GalaxyA33_4.webp', 14),
(57, 'SamsungGalaxyA54/GalaxyA54_1.webp', 15),
(58, 'SamsungGalaxyA54/GalaxyA54_2.webp', 15),
(59, 'SamsungGalaxyA54/GalaxyA54_3.webp', 15),
(60, 'SamsungGalaxyA54/GalaxyA54_4.webp', 15),
(61, 'SamsungGalaxyA54/GalaxyA54_1.webp', 16),
(62, 'SamsungGalaxyA54/GalaxyA54_2.webp', 16),
(63, 'SamsungGalaxyA54/GalaxyA54_3.webp', 16),
(64, 'SamsungGalaxyA54/GalaxyA54_4.webp', 16),
(65, 'SamsungGalaxyM52/GalaxyM52_1.webp', 17),
(66, 'SamsungGalaxyM52/GalaxyM52_2.webp', 17),
(67, 'SamsungGalaxyM52/GalaxyM52_3.webp', 17),
(68, 'SamsungGalaxyM52/GalaxyM52_4.webp', 17),
(69, 'SamsungGalaxyS22/GalaxyS22_1.webp', 19),
(70, 'SamsungGalaxyS22/GalaxyS22_2.webp', 19),
(71, 'SamsungGalaxyS22/GalaxyS22_3.webp', 19),
(72, 'SamsungGalaxyS22/GalaxyS22_4.webp', 19),
(73, 'SamsungGalaxyS22/GalaxyS22_1.webp', 18),
(74, 'SamsungGalaxyS22/GalaxyS22_2.webp', 18),
(75, 'SamsungGalaxyS22/GalaxyS22_3.webp', 18),
(76, 'SamsungGalaxyS22/GalaxyS22_4.webp', 18),
(77, 'SamsungGalaxyS23Ultra/GalaxyS23Ultra_1.webp', 20),
(78, 'SamsungGalaxyS23Ultra/GalaxyS23Ultra_2.webp', 20),
(79, 'SamsungGalaxyS23Ultra/GalaxyS23Ultra_3.webp', 20),
(80, 'SamsungGalaxyS23Ultra/GalaxyS23Ultra_4.webp', 20),
(81, 'SamsungGalaxyS23Ultra/GalaxyS23Ultra_1.webp', 21),
(82, 'SamsungGalaxyS23Ultra/GalaxyS23Ultra_2.webp', 21),
(83, 'SamsungGalaxyS23Ultra/GalaxyS23Ultra_3.webp', 21),
(84, 'SamsungGalaxyS23Ultra/GalaxyS23Ultra_4.webp', 21),
(85, 'SamsungS23/SamsungS23_1.webp', 22),
(86, 'SamsungS23/SamsungS23_2.webp', 22),
(87, 'SamsungS23/SamsungS23_3.webp', 22),
(88, 'SamsungS23/SamsungS23_4.webp', 22),
(89, 'Xiaomi12/Xiaomi12_1.webp', 23),
(90, 'Xiaomi12/Xiaomi12_2.webp', 23),
(91, 'Xiaomi12/Xiaomi12_3.webp', 23),
(92, 'Xiaomi12/Xiaomi12_4.webp', 23),
(93, 'Xiaomi12/Xiaomi12_1.webp', 24),
(94, 'Xiaomi12/Xiaomi12_2.webp', 24),
(95, 'Xiaomi12/Xiaomi12_3.webp', 24),
(96, 'Xiaomi12/Xiaomi12_4.webp', 24),
(97, 'XiaomiRedmi12C/Redmi12C_1.webp', 25),
(98, 'XiaomiRedmi12C/Redmi12C_2.webp', 25),
(99, 'XiaomiRedmi12C/Redmi12C_3.webp', 25),
(100, 'XiaomiRedmi12C/Redmi12C_4.webp', 25),
(101, 'XiaomiRedmi12C/Redmi12C_1.webp', 26),
(102, 'XiaomiRedmi12C/Redmi12C_2.webp', 26),
(103, 'XiaomiRedmi12C/Redmi12C_3.webp', 26),
(104, 'XiaomiRedmi12C/Redmi12C_4.webp', 26),
(105, 'XiaomiRedmi12C/Redmi12C_1.webp', 27),
(106, 'XiaomiRedmi12C/Redmi12C_2.webp', 27),
(107, 'XiaomiRedmi12C/Redmi12C_3.webp', 27),
(108, 'XiaomiRedmi12C/Redmi12C_4.webp', 27),
(109, 'XiaomiRedmiNote9/RedmiNote9_1.webp', 28),
(110, 'XiaomiRedmiNote9/RedmiNote9_2.webp', 28),
(111, 'XiaomiRedmiNote9/RedmiNote9_3.webp', 28),
(112, 'XiaomiRedmiNote9/RedmiNote9_4.webp', 28),
(113, 'XiaomiRedmiNote9/RedmiNote9_1.webp', 29),
(114, 'XiaomiRedmiNote9/RedmiNote9_2.webp', 29),
(115, 'XiaomiRedmiNote9/RedmiNote9_3.webp', 29),
(116, 'XiaomiRedmiNote9/RedmiNote9_4.webp', 29),
(117, 'XiaomiRedmiNote11/RedmiNote11_1.webp', 30),
(118, 'XiaomiRedmiNote11/RedmiNote11_2.webp', 30),
(119, 'XiaomiRedmiNote11/RedmiNote11_3.webp', 30),
(120, 'XiaomiRedmiNote11/RedmiNote11_4.webp', 30),
(121, 'XiaomiRedmiNote11/RedmiNote11_1.webp', 31),
(122, 'XiaomiRedmiNote11/RedmiNote11_2.webp', 31),
(123, 'XiaomiRedmiNote11/RedmiNote11_3.webp', 31),
(124, 'XiaomiRedmiNote11/RedmiNote11_4.webp', 31),
(125, 'XiaomiRedmiNote12/RedmiNote12_1.webp', 32),
(126, 'XiaomiRedmiNote12/RedmiNote12_2.webp', 32),
(127, 'XiaomiRedmiNote12/RedmiNote12_3.webp', 32),
(128, 'XiaomiRedmiNote12/RedmiNote12_4.webp', 32),
(129, 'XiaomiRedmiNote12/RedmiNote12_1.webp', 33),
(130, 'XiaomiRedmiNote12/RedmiNote12_2.webp', 33),
(131, 'XiaomiRedmiNote12/RedmiNote12_3.webp', 33),
(132, 'XiaomiRedmiNote12/RedmiNote12_4.webp', 33),
(133, 'XiaomiRedmiNote12/RedmiNote12_1.webp', 34),
(134, 'XiaomiRedmiNote12/RedmiNote12_2.webp', 34),
(135, 'XiaomiRedmiNote12/RedmiNote12_3.webp', 34),
(136, 'XiaomiRedmiNote12/RedmiNote12_4.webp', 34);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `products_images`
--
ALTER TABLE `products_images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `products_images_ibfk_1` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `products_images`
--
ALTER TABLE `products_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=145;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products_images`
--
ALTER TABLE `products_images`
  ADD CONSTRAINT `products_images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
