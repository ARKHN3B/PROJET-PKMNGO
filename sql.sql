-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 05, 2017 at 08:53 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `PKMNGO`
--

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `id` int(11) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`id`, `startDate`, `endDate`, `type`) VALUES
(1, '0000-00-00', '0000-00-00', 'Insect'),
(2, '2018-08-28', '2018-08-30', 'Insect'),
(3, '2017-08-29', '2017-08-30', 'Feu'),
(4, '2017-08-29', '2017-08-30', 'Feu'),
(5, '2017-08-30', '2017-08-30', 'Feu'),
(6, '2017-08-29', '2017-08-30', 'Feu'),
(7, '2017-09-29', '2017-09-30', 'Feu');

-- --------------------------------------------------------

--
-- Table structure for table `map`
--

CREATE TABLE `map` (
  `id` int(11) NOT NULL,
  `pokemonID` int(11) NOT NULL,
  `lat` double NOT NULL,
  `lng` double NOT NULL,
  `PC` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `map`
--

INSERT INTO `map` (`id`, `pokemonID`, `lat`, `lng`, `PC`) VALUES
(1, 12, -54.33174776068982, 33.93198437049918, 733),
(2, 25, -131.3487112275095, -99.22906526331789, 195),
(3, 7, 53.89129686564917, -133.99897673308791, 784),
(4, 6, 58.7631968521803, 114.3682533618715, 1403),
(5, 20, -95.34601269061488, -63.73082058677005, 717),
(6, 19, -158.07739999837054, 125.24733397565757, 31),
(7, 2, 61.553438724450814, -145.76840666566045, 2017),
(8, 5, -132.2901942095737, 167.3237169954004, 1432),
(9, 3, -64.21552936692603, -152.69450179578564, 201),
(10, 12, 62.23481836849933, 117.39622252904752, 2244),
(11, 25, -27.434186380562693, 131.61977191733547, 939),
(12, 19, -143.0263484106272, 11.76671376011032, 1914),
(13, 23, 28.918283705199173, 77.26962570382648, 2060),
(14, 17, -52.375395293425385, 123.7823309461898, 1163),
(15, 14, -112.64866537789743, 46.40891593028533, 2240),
(16, 13, 147.9419504514657, 38.73104546192184, 1548),
(17, 18, 69.96407917869192, 102.68132027438105, 1890),
(18, 17, -125.51900187925642, -23.980109160759497, 1690),
(19, 13, -25.373287547186806, 6.985856294245394, 2135),
(20, 7, 64.49171846257778, -80.70578540204725, 1091),
(21, 13, 125.84739268884744, -98.30615476872549, 82),
(22, 11, 169.20007410174395, -135.2054624526711, 1151),
(23, 3, -62.65955282567853, -70.91939180851669, 388),
(24, 5, -9.897288230848886, -88.60048363236481, 1853),
(25, 25, 45.47226159476199, -95.15898361680622, 1162),
(26, 4, -109.68431169108337, 138.5513290529354, 2446),
(27, 18, -100.24453973055716, 108.81684257339305, 1892),
(28, 2, 30.964320310585066, -59.43661170561617, 1999),
(29, 10, 176.78590413606742, -36.11662420999272, 2115),
(30, 16, -93.65408086590753, 15.166724840734787, 2088),
(31, 16, -86.9231695111702, 22.906066534203035, 1520),
(32, 14, -131.561314946641, 153.92959595566163, 1366),
(33, 8, 48.579808799305795, 41.35724552400413, 2445),
(34, 11, 17.93695259947225, 155.2018165748375, 906),
(35, 22, -142.30230418066412, -67.53084902400593, 1902),
(36, 8, -103.15573647819484, -120.99945615430525, 2115),
(37, 17, 136.20439499641253, 154.8986579156866, 868),
(38, 7, 167.51864733957217, -9.230239798593743, 2497),
(39, 8, -170.59017648784447, -30.413616031086093, 1365),
(40, 4, 85.34686139955522, 30.0016397033215, 2422),
(41, 13, 40.64953452336562, 174.1116066644998, 1780),
(42, 3, -13.090409030832319, 66.37859365862099, 123),
(43, 3, 124.35865824134828, -154.27519895855144, 1266),
(44, 5, 114.29513815080833, 24.802958211607717, 2219),
(45, 6, -123.54781860759175, 20.982463468628794, 482),
(46, 4, -134.81386038526932, -21.498892351029696, 784),
(47, 24, -89.64168187206086, 177.42463454738976, 71),
(48, 20, -47.935605091677445, 143.89641595412445, 244),
(49, 16, 55.51322729243637, -96.84120690287696, 1622),
(50, 8, -144.84915032618034, -88.95735884727299, 1965),
(51, 20, -77.80466888273315, -125.72622312485308, 230),
(52, 11, -106.85167501165753, -159.98880385325708, 2106),
(53, 2, 40.45518304774012, 165.91732768132334, 1486),
(54, 21, -101.9780997728486, 84.19224207977265, 1930),
(55, 9, 109.2318140030037, -40.71587170017315, 30),
(56, 15, -40.23933237303211, -60.919220790496894, 1255),
(57, 12, 171.03150418381483, -68.7308945861274, 109),
(58, 22, -134.32939729304167, 49.023090111927985, 937),
(59, 11, 123.03810576553292, -106.03964267367792, 327),
(60, 19, 0.6229136359379481, -178.86547382236677, 252),
(61, 20, 67.354086297599, 141.33374367577346, 1290),
(62, 14, 157.24638559558417, 23.46248090622842, 233),
(63, 12, 90.56272044449668, -177.76032372869196, 367),
(64, 2, 108.80093295077484, -80.42739190584213, 1686),
(65, 3, -166.08306090909142, -145.69291148587448, 2288),
(66, 18, 91.04586352686295, 125.54329656559304, 1924),
(67, 24, 148.39117378522803, -18.18568711599542, 428),
(68, 4, -1.9160953111445735, -79.3533782106426, 2021),
(69, 8, 143.87033014482682, -74.40818903216585, 1426),
(70, 21, 12.183997201019622, -79.02418588112732, 1712),
(71, 14, -61.73394454446131, 131.19441214865049, 2103),
(72, 10, 170.72731358294914, 4.810464988946961, 1306),
(73, 6, 158.56438352027266, 124.13560882765876, 1156);

-- --------------------------------------------------------

--
-- Table structure for table `pokedex`
--

CREATE TABLE `pokedex` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `pokemonID` int(11) NOT NULL,
  `PC` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pokedex`
--

INSERT INTO `pokedex` (`id`, `userID`, `pokemonID`, `PC`) VALUES
(1, 1, 10, 2281),
(2, 1, 10, 2281),
(3, 1, 23, 615),
(4, 1, 19, 931),
(5, 1, 6, 2437),
(6, 1, 24, 1705),
(7, 1, 4, 1421),
(8, 1, 6, 1775),
(9, 1, 3, 659),
(10, 1, 4, 1508),
(11, 1, 4, 1035),
(12, 1, 9, 1828),
(13, 1, 5, 2345),
(14, 1, 14, 892),
(15, 1, 14, 892);

-- --------------------------------------------------------

--
-- Table structure for table `pokemon`
--

CREATE TABLE `pokemon` (
  `id` int(11) NOT NULL,
  `pokeId` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `type` varchar(10) NOT NULL,
  `imgMap` varchar(255) NOT NULL,
  `imgPokedex` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `pokemon`
--

INSERT INTO `pokemon` (`id`, `pokeId`, `name`, `type`, `imgMap`, `imgPokedex`) VALUES
(1, 1, 'Bulbizarre', 'Plante', '../assets/_pictures/PKMN/1.png', '../assets/_pictures/PKMN/1B.png'),
(2, 2, 'Herbizarre', 'Plante', '../assets/_pictures/PKMN/2.png', '../assets/_pictures/PKMN/2B.png'),
(3, 3, 'Florizarre', 'Plante', '../assets/_pictures/PKMN/3.png', '../assets/_pictures/PKMN/3B.png'),
(4, 4, 'Salamèche', 'Feu', '../assets/_pictures/PKMN/4.png', '../assets/_pictures/PKMN/4B.png'),
(5, 5, 'Reptincel', 'Feu', '../assets/_pictures/PKMN/5.png', '../assets/_pictures/PKMN/5B.png'),
(6, 6, 'Dracaufeu', 'Feu', '../assets/_pictures/PKMN/6.png', '../assets/_pictures/PKMN/6B.png'),
(7, 7, 'Carapuce', 'Eau', '../assets/_pictures/PKMN/7.png', '../assets/_pictures/PKMN/7B.png'),
(8, 8, 'Carabaffe', 'Eau', '../assets/_pictures/PKMN/8.png', '../assets/_pictures/PKMN/8B.png'),
(9, 9, 'Tortank', 'Eau', '../assets/_pictures/PKMN/9.png', '../assets/_pictures/PKMN/9B.png'),
(10, 10, 'Chenipan', 'Insect', '../assets/_pictures/PKMN/10.png', '../assets/_pictures/PKMN/10B.png'),
(11, 11, 'Chrysacier', 'Plante', '../assets/_pictures/PKMN/11.png', '../assets/_pictures/PKMN/11B.png'),
(12, 12, 'Papilusion', 'Insect', '../assets/_pictures/PKMN/12.png', '../assets/_pictures/PKMN/12B.png'),
(13, 13, 'Aspicot', 'Insect', '../assets/_pictures/PKMN/13.png', '../assets/_pictures/PKMN/13B.png'),
(14, 14, 'Coconfort', 'Insect', '../assets/_pictures/PKMN/14.png', '../assets/_pictures/PKMN/14B.png'),
(15, 15, 'Dardagnan', 'Insect', '../assets/_pictures/PKMN/15.png', '../assets/_pictures/PKMN/15B.png'),
(16, 16, 'Roucool', 'Vol', '../assets/_pictures/PKMN/16.png', '../assets/_pictures/PKMN/16B.png'),
(17, 17, 'Roucoups', 'Vol', '../assets/_pictures/PKMN/17.png', '../assets/_pictures/PKMN/17B.png'),
(18, 18, 'Roucarnage', 'Vol', '../assets/_pictures/PKMN/18.png', '../assets/_pictures/PKMN/18B.png'),
(19, 19, 'Rattata', 'Normal', '../assets/_pictures/PKMN/19.png', '../assets/_pictures/PKMN/19B.png'),
(20, 20, 'Rattatac', 'Normal', '../assets/_pictures/PKMN/20.png', '../assets/_pictures/PKMN/20B.png'),
(21, 21, 'Piafabec', 'Vol', '../assets/_pictures/PKMN/21.png', '../assets/_pictures/PKMN/21B.png'),
(22, 22, 'Rapasdepic', 'Vol', '../assets/_pictures/PKMN/22.png', '../assets/_pictures/PKMN/22B.png'),
(23, 23, 'Abo', 'Poison', '../assets/_pictures/PKMN/23.png', '../assets/_pictures/PKMN/23B.png'),
(24, 24, 'Arbok', 'Poison', '../assets/_pictures/PKMN/24.png', '../assets/_pictures/PKMN/24B.png'),
(25, 25, 'Pikachu', 'Electrique', '../assets/_pictures/PKMN/25.png', '../assets/_pictures/PKMN/25B.png');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `lastname` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birth` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `firstname`, `lastname`, `password`, `birth`) VALUES
(1, 'test@test.com', 'test', 'test', 'ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff', '1/01/2017');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `map`
--
ALTER TABLE `map`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pokemonID` (`pokemonID`);

--
-- Indexes for table `pokedex`
--
ALTER TABLE `pokedex`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`userID`);

--
-- Indexes for table `pokemon`
--
ALTER TABLE `pokemon`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `map`
--
ALTER TABLE `map`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;
--
-- AUTO_INCREMENT for table `pokedex`
--
ALTER TABLE `pokedex`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
--
-- AUTO_INCREMENT for table `pokemon`
--
ALTER TABLE `pokemon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `map`
--
ALTER TABLE `map`
  ADD CONSTRAINT `map_ibfk_1` FOREIGN KEY (`pokemonID`) REFERENCES `pokemon` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pokedex`
--
ALTER TABLE `pokedex`
  ADD CONSTRAINT `pokedex_ibfk_1` FOREIGN KEY (`userID`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
