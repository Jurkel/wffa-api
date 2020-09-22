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

-- CREATE TABLE player (
--     id SERIAL PRIMARY KEY,
--     position TEXT,
--     practice_participation TEXT,
--     rotoworld_id TEXT,
--     high_school TEXT,
--     practice_description TEXT,
--     first_name TEXT NOT NULL,
--     status TEXT NOT NULL,
--     college TEXT,
--     hashtag TEXT,
--     search_first_name TEXT,
--     fantasy_data_id INT UNIQUE NOT NULL,
--     pandascore_id INT,
--     injury_body_part TEXT,
--     age INT,
--     height TEXT,
--     depth_chart_order INT,
--     number INT,
--     search_last_name TEXT,
--     metadata TEXT,
--     last_name TEXT NOT NULL,
--     injury_status TEXT,
--     sport TEXT,
--     depth_chart_position INT,
--     birth_country TEXT,
--     active BOOLEAN,
--     injury_notes TEXT,
--     yahoo_id INT,
--     injury_start_date DATE,
--     fantasy_positions TEXT[],
--     espn_id INT,
--     birth_state TEXT,
--     news_updated TEXT,
--     sportradar_id TEXT,
--     birth_date DATE,
--     years_exp INT,
--     stats_id INT,
--     rotowire_id INT,
--     full_name TEXT,
--     search_full_name TEXT,
--     player_id TEXT,
--     birth_city INT,
--     weight TEXT,
--     birth_cityd TEXT,
--     team TEXT
-- );



