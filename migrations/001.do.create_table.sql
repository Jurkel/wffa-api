CREATE TABLE manager (
    owner_id TEXT PRIMARY KEY,
    league_id TEXT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    height TEXT NOT NULL,
    weight INT NOT NULL,
    school TEXT NOT NULL,
    favoriteTeam TEXT NOT NULL,
    favoritePlayer TEXT NOT NULL,
    experience TEXT NOT NULL,
    display_name TEXT NOT NULL,
    photoLink TEXT,
    active Boolean
);

CREATE TABLE player (
    last_update DATE PRIMARY KEY,
    player_info jsonb
)



