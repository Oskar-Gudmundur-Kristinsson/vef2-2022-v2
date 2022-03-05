-- Útfæra schema
CREATE TABLE IF NOT EXISTS events (
    ID SERIAL PRIMARY KEY,
    NAMEe VARCHAR(64) NOT NULL,
    SLUG VARCHAR(64),
    DESCRIPTIONtxt TEXT,
    CREATED timestamp with time zone not null default Current_timestamp,
    MODIFIED timestamp with time zone not null default Current_timestamp
);

CREATE TABLE IF NOT EXISTS registration(
    ID      SERIAL PRIMARY KEY,
    NAMEe    VARCHAR(64)     NOT NULL,
    COMMENT TEXT,
    eventno   INT REFERENCES events(ID)
);

CREATE TABLE IF NOT EXISTS users (
    id serial primary key,
    username character varying(64) NOT NULL,
    password character varying(256) NOT NULL,
    isAdmin boolean NOT NULL
);
