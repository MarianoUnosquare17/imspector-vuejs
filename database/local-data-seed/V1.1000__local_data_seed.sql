insert into public.accounts (username, email, password) values ('DonBarre','email@email.com','Password');

insert into public.players (valorant_account, valorant_tag, region, level) values ('MikeRib','1703','na', '100');

insert into public.maps (name) values ('bind');

insert into public.agents (name) values ('killjoy');

insert into public.player_match_modes (name) values ('competitive'); 

insert into  public.tactics (tactic) values ('rush b rush b');

insert into public.player_matches (score, date_played, kills, deaths, assists, money_spent, bodyshots, headshots, legshots) values (123432, now(), 12, 3, 5, 1234, 7, 18, 5); 

insert into public.player_match_comments (comment, date_created) values ('Hello', now());
