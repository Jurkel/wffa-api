const PlayerService = {
    getAllPlayers(knex) {
        return knex.select('player_info').from('player');
    },
    getPlayerById(knex, id) {
        return knex.select(knex.raw(`player_info-> '${id}' as player`)).from('player');
    },
    getPlayersByIds(knex, ids) {
        let playerIds = ids.split('-');
        let dynamicSelectStatement = this.retrieveDynamicQuery(playerIds);
        console.log('dynamicSelectStatement: ' + dynamicSelectStatement);
        return knex.raw(`${dynamicSelectStatement}`);
    },
    retrieveDynamicQuery(ids) {
        let selects = '';
        let totalPlayers = ids.length;

        dynamicSelect = (id) => {
            return `select player_info-> '${id}' as player from player`;
        }
        ids.forEach((id, index) => {
            let select = dynamicSelect(id);
            if (index == totalPlayers - 1) {
                selects += select;
            } else {
                selects += select + ' union all ';
            }
        })
        return selects;
    },
    updatePlayerInfo(knex, data) {
        let dataString = JSON.stringify(data).replace(/'/g, '');
        dataString = dataString.replace(/""/g, '"');
        return knex('player').update({player_info: dataString})
    }
}

module.exports = PlayerService;