const PlayerService = {
    getAllPlayers(knex) {
        return knex.select('player_info').from('player');
    },
    getPlayerById(knex, id) {
        return knex.select('player_info').from('player').whereRaw('data -> ', [player_id, JSON.stringify(id)]).first();
    },
    getPlayerNamesById(knex, id) {
        return knex.select('full_name', 'first_name', 'last_name').where({ player_id: id});
    },
    getPlayerStatByFullName(knex, name) {
        return knex.select('player_id', 'pandascore_id', 'yahoo_id', 'espn_id', 'sportradar_id', 'stats_id', 'rotowire_id', 'status', 'active', 'news_updated').where({ full_name: name});
    },
    getPlayerStatById(knex, id) {
        return knex.select('player_id', 'pandascore_id', 'yahoo_id', 'espn_id', 'sportradar_id', 'stats_id', 'rotowire_id', 'status', 'active', 'news_updated').where({ player_id: id});
    },
    getPlayerInjuryStatByFullName(knex, name) {
        return knex.select('player_id', 'pandascore_id', 'yahoo_id', 'espn_id', 'sportradar_id', 'stats_id', 'rotowire_id', 'injury_body_part', 'injury_status', 'injury_notes').where({ full_name: name});
    },
    getPlayerInjuryStatById(knex, id) {
        return knex.select('player_id', 'pandascore_id', 'yahoo_id', 'espn_id', 'sportradar_id', 'stats_id', 'rotowire_id', 'injury_body_part', 'injury_status', 'injury_notes').where({ player_id: id});
    },
    getPlayerInfoByFullName(knex, name) {
        return knex.select('player_id', 'pandascore_id', 'yahoo_id', 'espn_id', 'sportradar_id', 'stats_id', 'rotowire_id', 'position', 'practice_participation', 
        'high_school', 'practice_description', 'status', 'college', 'hashtag', 'age', 'height', 'active', 'birth_state', 'birth_date', 'years_exp', 'birth_city', 'team').where({ full_name: name});
    },
    getPlayerInfoById(knex, id) {
        return knex.select('player_id', 'pandascore_id', 'yahoo_id', 'espn_id', 'sportradar_id', 'stats_id', 'rotowire_id', 'position', 'practice_participation', 
        'high_school', 'practice_description', 'status', 'college', 'hashtag', 'age', 'height', 'active', 'birth_state', 'birth_date', 'years_exp', 'birth_city', 'team').where({ player_id: id});
    },
    updatePlayerById(knex, id, data) {
        return knex('player').where({player_id, id}).update(data);
    },
    updatePlayerInfo(knex, data) {
        return knex('player').update({player_info: JSON.stringify(data)})
    }
}

module.exports = PlayerService;