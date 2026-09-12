CREATE TABLE `enquiries` (
	`id` int AUTO_INCREMENT NOT NULL,
	`type` enum('quote','contact') NOT NULL,
	`fullName` varchar(160) NOT NULL,
	`companyName` varchar(180),
	`country` varchar(120),
	`email` varchar(320) NOT NULL,
	`phone` varchar(60),
	`product` varchar(120),
	`quantity` varchar(120),
	`message` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `enquiries_id` PRIMARY KEY(`id`)
);
