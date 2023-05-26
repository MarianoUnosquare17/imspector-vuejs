# Overview

Create an application that tracks Valorant profiles, stats, match history, match data using this api  https://docs.henrikdev.xyz/valorant.html
and also create an api to make user profiles, create different tips for each map aswell as adding their own strategies for any maps/agent

## Must have
- Must have a login
- Must have indivitual profiles
- User must be able to view his Valorant stats on his profile
- User must be able to view other players profiles and stats
- User must be able to see tips for any maps/agent aswell as adding new tips or strategies 

## Should have
- A user should be able to see his match history
- A user should be able to see other players match history
- The users should be able to search different player profiles

## Could have 
- The users could be able to add comments to other player profiles
- There could be a badge system on the profiles based on their stats
- The tips could be youtube videos

## Will not have
- The app wont track any other games

# Diagram

```mermaid
erDiagram
    
    USER_ACCOUNT ||--|{ PLAYER_STATS : has
    PLAYER_STATS ||--|{ MATCH_HISTORY : has
    MATCH_HISTORY ||--|{ ACCOUNT_GAME : has
    ACCOUNT_GAME ||--|{ COMMENTS : has
    USER_ACCOUNT ||--o{ TACTICS : creates
    PLAYER_STATS ||--o{ TACTICS : has
    USER_ACCOUNT ||--o{ COMMENTS : creates
    
```

# Entity relation diagram
```mermaid
erDiagram
    USER_ACCOUNT ||--o{ PLAYER_STATS : has
    USER_ACCOUNT {
        int id pk
        varchar username
        varchar email
        varchar password
        varchar valorant_account
        varchar valorant_tag
    }
        PLAYER_STATS {
        int id pk
        varchar valorant_account
        varchar valorant_tag
        varchar level
        varchar region
        varchar player_card
    }
    PLAYER_STATS ||--|{ MATCH_HISTORY : has

    MATCH_HISTORY{
        int id pk
        int score
        varchar map
        varchar kda
        varchar mode
    }
    MATCH_HISTORY ||--|{ ACCOUNT_GAME : has
    ACCOUNT_GAME{
        int id pk
        int score
        varchar map
        varchar mode
        int score
        int kills
        int deaths
        int assists
        int bodyshots
        int headshots
        int legshots 
    }
    ACCOUNT_GAME ||--|{ ACCOUNT_GAME_COMMENTS : has
    ACCOUNT_GAME_COMMENTS{
        int id pk
        varchar made_by
        varchar account_comment
    }
    USER_ACCOUNT ||--o{ TACTICS : creates
    TACTICS{
        int id pk
        varchar made_by
        varchar map
        varchar agent
        varchar tactic
    }
    PLAYER_STATS ||--o{ TACTICS : has
    USER_ACCOUNT ||--o{ USER_ACCOUNT_COMMENTS : creates
        USER_ACCOUNT_COMMENTS{
        int id pk
        varchar made_by
        varchar account_comment
    }
```