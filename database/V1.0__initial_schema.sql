CREATE TABLE IF NOT EXISTS public.user_account
(
    id serial constraint id_pk primary key,
    username varchar not null,
    user_email varchar not null,
    user_password varchar not null,
    valorant_account varchar not null,
    valorant_tag varchar not null
);


CREATE TABLE IF NOT EXISTS public.player_stats
(
    id serial constraint id_player_pk primary key,
    valorant_account varchar not null,
    valorant_tag varchar not null,
    level int not null,
    region varchar not null,
    player_card varchar not null
);

CREATE TABLE IF NOT EXISTS public.tactics
(
    id serial constraint id_tactics_pk primary key,
    made_by varchar not null,
    map varchar not null,
    agent varchar not null,
    tactic varchar not null
);

CREATE TABLE IF NOT EXISTS public.match_history
(
    id serial constraint id_match_pk primary key,
    score int not null,
    date_played date not null,
    map varchar not null,
    kills int not null,
    deaths int not null,
    assists int not null,
    mode varchar not null
);

CREATE TABLE IF NOT EXISTS public.account_game
(
    id serial constraint id_acc_games_pk primary key,
    map varchar not null,
    mode varchar not null,
    agent varchar not null,
    date_played date not null,
    score int not null,
    money_spent_game int not null,
    money_spent_round int not null,
    kills int not null,
    deaths int not null,
    assists int not null,
    bodyshots int not null,
    headshots int not null,
    legshots int not null
);

CREATE TABLE IF NOT EXISTS public.user_game_comments
(
    id serial constraint id_game_comments_pk primary key,
    date_created date not null,
    made_by varchar not null,
    account_comment varchar not null
);
