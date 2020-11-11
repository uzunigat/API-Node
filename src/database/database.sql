CREATE DATABASE IF NOT EXISTS cvtheque;

USE cvtheque;

CREATE TABLE IF NOT EXISTS Phone(
  numero VARCHAR(10),
  type ENUM('mobile', 'home') NOT NULL,
  PRIMARY KEY(numero)
  
);

CREATE TABLE IF NOT EXISTS Candidate(

  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  password VARCHAR(30) NOT NULL,
  name VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL, 
  numero VARCHAR(10),
  FOREIGN KEY(numero) REFERENCES Phone(numero),
  UNIQUE (name, lastname, email)
  

);

CREATE TABLE IF NOT EXISTS Ref(

  name VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  numero VARCHAR(10) PRIMARY KEY REFERENCES Phone(numero)
  

);

CREATE TABLE IF NOT EXISTS Web_Page(

  url VARCHAR(60) PRIMARY KEY,
  type ENUM('profesional', 'personal') NOT NULL,
  candidate INT(10) REFERENCES Candidate(id)

);

CREATE TABLE IF NOT EXISTS Publication(

  title VARCHAR(30) NOT NULL,
  ISBN NUMERIC(13) PRIMARY KEY,
  date DATE NOT NULL,
  content VARCHAR(100) NOT NULL,
  candidate INT(11) REFERENCES Candidate(id)

);

CREATE TABLE IF NOT EXISTS CV(

  title VARCHAR(30) NOT NULL,
  status ENUM('active', 'confidential', 'disabled') NOT NULL,
  language VARCHAR(30) NOT NULL,
  date_creation DATE NOT NULL,
  date_update DATE NOT NULL,
  candidate INT(10) PRIMARY KEY REFERENCES Candidate(id)
 
);

CREATE TABLE IF NOT EXISTS Languages(

  language VARCHAR(30) PRIMARY KEY

);

CREATE TABLE IF NOT EXISTS Level(

  candidate INT(10) REFERENCES Candidate(id),
  language VARCHAR(30) REFERENCES Languages(language),
  level ENUM('A1', 'A2', 'B1', 'B2', 'C1', 'C2') NOT NULL,
  PRIMARY KEY(candidate, language)

);

CREATE TABLE IF NOT EXISTS Skills(

  skill VARCHAR(30) PRIMARY KEY

);

CREATE TABLE IF NOT EXISTS Sector(

  sector VARCHAR(30) PRIMARY KEY

);


CREATE TABLE IF NOT EXISTS Professional_Experience(

  id INT(10) AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  date_begin Date NOT NULL, 
  date_end Date NOT NULL, 
  fonction_assure VARCHAR(30) NOT NULL, 
  position VARCHAR(30) NOT NULL, 
  cv INT(10) REFERENCES CV(candidate),
  sector VARCHAR(30) REFERENCES Sector(sector)
 
);

CREATE TABLE IF NOT EXISTS Associations(

  id INT(10) AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(30) NOT NULL, 
  date_begin DATE NOT NULL, 
  date_end DATE NOT NULL, 
  cv INT(10) REFERENCES CV(candidate),
  sector VARCHAR(30) REFERENCES Sector(sector)

);

CREATE TABLE IF NOT EXISTS Formation(

  id INT(10) AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  type ENUM('professional', 'personal') NOT NULL, 
  date_begin DATE NOT NULL, 
  date_end DATE NOT NULL, 
  establishment VARCHAR(30) NOT NULL, 
  country VARCHAR(30) NOT NULL, 
  city VARCHAR(30) NOT NULL, 
  cv INTEGER REFERENCES CV(candidate)

);

CREATE TABLE IF NOT EXISTS Skills_CV(

  skill VARCHAR(30) REFERENCES Skills(skill),
  cv INT(10) REFERENCES CV(candidate),
  PRIMARY KEY(skill, cv)

);

CREATE TABLE IF NOT EXISTS Candidate_Ref(

  candidate INT(10) REFERENCES Candidate(id), 
  referent VARCHAR(10) REFERENCES Ref(name),
  PRIMARY KEY(candidate, referent)

);


