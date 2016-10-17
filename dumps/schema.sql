--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.0
-- Dumped by pg_dump version 9.6.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: crash; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE crash (
    id integer NOT NULL,
    "ipId" integer,
    "versionId" integer,
    "currentScene" text,
    exception text,
    "playerId" integer
);


--
-- Name: crash_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE crash_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: crash_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE crash_id_seq OWNED BY crash.id;


--
-- Name: ip; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE ip (
    id integer NOT NULL,
    ip text NOT NULL
);


--
-- Name: ip_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE ip_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: ip_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE ip_id_seq OWNED BY ip.id;


--
-- Name: version; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE version (
    id integer NOT NULL,
    version text
);


--
-- Name: version_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE version_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: version_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE version_id_seq OWNED BY version.id;


--
-- Name: crash id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY crash ALTER COLUMN id SET DEFAULT nextval('crash_id_seq'::regclass);


--
-- Name: ip id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY ip ALTER COLUMN id SET DEFAULT nextval('ip_id_seq'::regclass);


--
-- Name: version id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY version ALTER COLUMN id SET DEFAULT nextval('version_id_seq'::regclass);


--
-- Name: crash crash_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY crash
    ADD CONSTRAINT crash_pkey PRIMARY KEY (id);


--
-- Name: ip ip_ip_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY ip
    ADD CONSTRAINT ip_ip_key UNIQUE (ip);


--
-- Name: ip ip_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY ip
    ADD CONSTRAINT ip_pkey PRIMARY KEY (id);


--
-- Name: version version_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY version
    ADD CONSTRAINT version_pkey PRIMARY KEY (id);


--
-- Name: crash crash_ipId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY crash
    ADD CONSTRAINT "crash_ipId_fkey" FOREIGN KEY ("ipId") REFERENCES ip(id);


--
-- Name: crash crash_versionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY crash
    ADD CONSTRAINT "crash_versionId_fkey" FOREIGN KEY ("versionId") REFERENCES version(id);


--
-- PostgreSQL database dump complete
--

