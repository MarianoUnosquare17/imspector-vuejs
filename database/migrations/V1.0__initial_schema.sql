CREATE TABLE IF NOT EXISTS public.accounts
(
    account_id serial constraint id_account_pk primary key,
    username varchar not null,
    email varchar not null,
    password varchar not null
);


CREATE TABLE IF NOT EXISTS public.players
(
    player_id serial constraint id_players_pk primary key,
    valorant_account varchar not null,
    valorant_tag varchar not null,
    level int not null,
    region varchar not null
);

CREATE TABLE IF NOT EXISTS public.tactics
(
    tactic_id serial constraint id_tactic_pk primary key,
    created_by varchar not null,
    map_id varchar not null,
    agent_id varchar not null,
    tactic varchar not null
);

CREATE TABLE IF NOT EXISTS public.maps
(
    map_id serial constraint id_map_pk primary key,
    name varchar not null
);

CREATE TABLE IF NOT EXISTS public.agents
(
    agent_id serial constraint id_agent_pk primary key,
    name varchar not null
);

CREATE TABLE IF NOT EXISTS public.modes
(
    mode_id serial constraint id_mode_pk primary key,
    name varchar not null
);

CREATE TABLE IF NOT EXISTS public.comments
(
    comment_id serial constraint id_game_comment_pk primary key,
    comment varchar not null,
    player_match_id int not null,
    date_created date not null,
    created_by varchar not null
);


CREATE TABLE IF NOT EXISTS public.player_matches
(
    match_id serial constraint id_acc_match_pk primary key,
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

