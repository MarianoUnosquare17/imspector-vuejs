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
    MATCH_HISTORY ||--|{ MATCH : has
    MATCH ||--|{ COMMENTS : has
    USER_ACCOUNT ||--o{ TACTICS : creates
    PLAYER_STATS ||--o{ TACTICS : has
    USER_ACCOUNT ||--o{ COMMENTS : creates
    
```

# Entity relation diagram
```mermaid
erDiagram
    USER ||--o{ ACCOUNT : creates
    ACCOUNT {
        int user_id pk
        varchar username
        varchar email
        varchar password
        varchar ValorantID
        varchar tag
    }
    USER ||--|{ COMMENTS : creates
    COMMENTS {
        int id pk
        int user_id
        varchar ValorantID
        varchar tag
        varchar text
    }

        USER ||--|{ TIPS-STRATEGIES : creates
    TIPS-STRATEGIES {
        int id pk
        int user_id
        varchar ValorantID
        varchar tag
        varchar title
        varchar text
        varchar video_link
    }

```