CREATE TABLE IF NOT EXISTS public.accounts
(
    account_id serial constraint accounts_pk primary key,
    username text,
    email text,
    password text
);


CREATE TABLE IF NOT EXISTS public.players
(
    player_id serial constraint players_pk primary key,
    valorant_account text,
    valorant_tag text,
    region text,
    level int,
    account_id int constraint players_accounts_account_id references public.accounts
);

CREATE TABLE IF NOT EXISTS public.maps
(
    map_id serial constraint maps_pk primary key,
    name text
);

CREATE TABLE IF NOT EXISTS public.agents
(
    agent_id serial constraint agents_pk primary key,
    name text
);

CREATE TABLE IF NOT EXISTS public.player_match_modes
(
    player_match_mode_id serial constraint modes_pk primary key,
    name text
);

CREATE TABLE IF NOT EXISTS public.tactics
(
    tactic_id serial constraint tactics_pk primary key,
    tactic text,
    map_id int constraint tactics_maps_map_id references public.maps,
    agent_id int constraint tactics_agents_agent_id references public.agents,
    created_by int constraint tactics_accounts_account_id references public.accounts
);

CREATE TABLE IF NOT EXISTS public.player_matches
(
    player_match_id serial constraint player_matches_pk primary key,
    score int,
    date_played timestamp,
    kills int,
    deaths int,
    assists int,
    money_spent int,
    bodyshots int,
    headshots int,
    legshots int,
    map_id int constraint player_matches_maps_map_id references public.maps,
    agent_id int constraint player_matches_agents_agent_id references public.agents,
    player_id int constraint player_matches_players_player_id references public.players,
    player_match_mode_id int constraint player_matches_player_match_modes_player_match_mode_id references public.player_match_modes
);

CREATE TABLE IF NOT EXISTS public.player_match_comments
(
    comment_id serial constraint comments_pk primary key,
    comment text,
    date_created timestamp,
    player_match_id int constraint player_match_comments_player_matches_player_match_id references public.player_matches,
    created_by int constraint player_match_comments_accounts_account_id references public.accounts
);