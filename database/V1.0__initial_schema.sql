CREATE TABLE IF NOT EXISTS public.accounts
(
    id serial constraint id_pk primary key,
    username varchar not null,
    email varchar not null,
    password varchar not null
);


CREATE TABLE IF NOT EXISTS public.players
(
    id serial constraint id_player_pk primary key,
    valorant_account varchar not null,
    valorant_tag varchar not null,
    level int not null,
    region varchar not null
);

CREATE TABLE IF NOT EXISTS public.tactics
(
    id serial constraint id_tactics_pk primary key,
    created_by varchar not null,
    map_id varchar not null,
    agent_id varchar not null,
    tactic varchar not null
);

CREATE TABLE IF NOT EXISTS public.maps
(
    id serial constraint id_tactics_pk primary key,
    name varchar not null
);

CREATE TABLE IF NOT EXISTS public.agents
(
    id serial constraint id_tactics_pk primary key,
    name varchar not null
);

CREATE TABLE IF NOT EXISTS public.modes
(
    id serial constraint id_tactics_pk primary key,
    name varchar not null
);

CREATE TABLE IF NOT EXISTS public.comments
(
    id serial constraint id_game_comments_pk primary key,
    comment varchar not null
    player_match_id int not null,
    date_created date not null,
    created_by varchar not null
);


CREATE TABLE IF NOT EXISTS public.player_matches
(
    id serial constraint id_acc_games_pk primary key,
    score int not null,
    date_played date not null,
    kills int not null,
    deaths int not null,
    assists int not null,
    money_spent int not null,
    bodyshots int not null,
    headshots int not null,
    legshots int not null,
    agent_id int not null,
    map_id int not null,
    player_id int not null,
    player_match_mode_id int not null
);

