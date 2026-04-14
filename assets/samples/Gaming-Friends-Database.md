# Gaming Friends Database

## Sample
This section contains the database schema for the Gaming Friends system. It defines the structure of the database, including table creation, relationships between entities using primary and foreign keys, and many-to-many mapping tables for game statistics and teams.

---
```sql
/*******************************************************************************
   StudentId: W0496661
   Name: Leon Wasiliew
   Date: 2024-12-03
********************************************************************************/


/*******************************************************************************
   Create Database
********************************************************************************/

CREATE DATABASE gaming_friends;
USE gaming_friends;


/*******************************************************************************
   Drop Tables
********************************************************************************/

DROP TABLE IF EXISTS Gamers;

DROP TABLE IF EXISTS ContactInfo;

DROP TABLE IF EXISTS PhysicalAddress;

DROP TABLE IF EXISTS LogicalAddress;

DROP TABLE IF EXISTS Avatars;

DROP TABLE IF EXISTS CODStatsCODTeams;

DROP TABLE IF EXISTS CODStats;

DROP TABLE IF EXISTS CODTeams;

DROP TABLE IF EXISTS FortkiteStats;

DROP TABLE IF EXISTS MaddeningStatsMaddeningTeams;

DROP TABLE IF EXISTS Maddening2025Stats;

DROP TABLE IF EXISTS Maddening2025Teams;

DROP TABLE IF EXISTS GamerStats;

DROP TABLE IF EXISTS GamerProfiles;

DROP TABLE IF EXISTS SecretSantaDecisions;

/*******************************************************************************
   Create Tables
********************************************************************************/

CREATE TABLE ContactInfo
(
    contact_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    email NVARCHAR(255)  NOT NULL
);

CREATE TABLE PhysicalAddress
(
    physical_address_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    address NVARCHAR(150),
    postal_zip NVARCHAR(15),
    city NVARCHAR(170),
    province_state NVARCHAR(75),
    country NVARCHAR(75),
    other NVARCHAR(100)
);

CREATE TABLE LogicalAddress
(
    logical_address_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    ip_address NVARCHAR(39) NOT NULL
);

CREATE TABLE SecretSantaDecisions
(
    secret_santa_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    decision NVARCHAR(15) NOT NULL
);

CREATE TABLE Gamers
(
    gamer_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    name NVARCHAR(100),
    contact_id INTEGER,
    physical_address_id INTEGER,
    logical_address_id INTEGER,
    secret_santa_id INTEGER,
    FOREIGN KEY (contact_id) REFERENCES ContactInfo (contact_id)
        ON DELETE SET NULL ON UPDATE CASCADE, 
    FOREIGN KEY (physical_address_id) REFERENCES PhysicalAddress (physical_address_id)
        ON DELETE SET NULL ON UPDATE CASCADE, 
    FOREIGN KEY (logical_address_id) REFERENCES LogicalAddress (logical_address_id)
        ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (secret_santa_id) REFERENCES SecretSantaDecisions (secret_santa_id)
        ON DELETE SET NULL ON UPDATE CASCADE 
);

CREATE TABLE Avatars
(
    avatar_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    avatar BLOB  NOT NULL
);

CREATE TABLE CODStats
(
    COD_stat_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    COD_kills INTEGER,
    COD_wins INTEGER
);

CREATE TABLE CODTeams
(
    COD_team_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    COD_team NVARCHAR(75)  NOT NULL
);

CREATE TABLE CODStatsCODTeams
(
    COD_stat_id INTEGER  NOT NULL,
    COD_team_id INTEGER  NOT NULL,
    CONSTRAINT PK_CODStatsCODTeams PRIMARY KEY (COD_stat_id, COD_team_id),
    FOREIGN KEY (COD_stat_id) REFERENCES CODStats (COD_stat_id)
	ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (COD_team_id) REFERENCES CODTeams (COD_team_id)
	ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE FortkiteStats
(
    Fortkite_stat_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    Fortkite_kills INTEGER,
    Fortkite_wins INTEGER
);

CREATE TABLE Maddening2025Stats
(
    Maddening_stat_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    Maddening_wins INTEGER,
    Maddening_losses INTEGER,
    Maddening_ties INTEGER
);

CREATE TABLE Maddening2025Teams
(
    Maddening_team_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    Maddening_team NVARCHAR(75)  NOT NULL
);

CREATE TABLE MaddeningStatsMaddeningTeams
(
    Maddening_stat_id INTEGER  NOT NULL,
    Maddening_team_id INTEGER  NOT NULL,
    CONSTRAINT PK_MaddeningStatsMaddeningTeams PRIMARY KEY  (Maddening_stat_id, Maddening_team_id),
    FOREIGN KEY (Maddening_stat_id) REFERENCES Maddening2025Stats (Maddening_stat_id)
	ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (Maddening_team_id) REFERENCES Maddening2025Teams (Maddening_team_id)
	ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE GamerStats
(
    gamer_stat_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    COD_stat_id INTEGER,
    Fortkite_stat_id INTEGER,
    Maddening_stat_id INTEGER,
    FOREIGN KEY (COD_stat_id) REFERENCES CODStats (COD_stat_id)
        ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (Fortkite_stat_id) REFERENCES FortkiteStats (Fortkite_stat_id)
        ON DELETE SET NULL ON UPDATE CASCADE, 
    FOREIGN KEY (Maddening_stat_id) REFERENCES Maddening2025Stats (Maddening_stat_id) 
        ON DELETE SET NULL ON UPDATE CASCADE 
);

CREATE TABLE GamerProfiles
(
    gamer_tag_id INTEGER PRIMARY KEY AUTO_INCREMENT  NOT NULL,
    gamer_tag NVARCHAR(50) UNIQUE,
    gamer_stat_id INTEGER  NOT NULL,
    gamer_id INTEGER NOT NULL,
    avatar_id INTEGER DEFAULT 1  NOT NULL,
    FOREIGN KEY (gamer_id) REFERENCES Gamers (gamer_id)
        ON DELETE RESTRICT ON UPDATE CASCADE, 
    FOREIGN KEY (avatar_id) REFERENCES Avatars (avatar_id)
        ON DELETE SET DEFAULT ON UPDATE CASCADE,
    FOREIGN KEY (gamer_stat_id) REFERENCES GamerStats (gamer_stat_id)
        ON DELETE RESTRICT ON UPDATE CASCADE 
);
```
---