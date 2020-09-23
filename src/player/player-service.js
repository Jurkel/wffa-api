const PlayerService = {
    getAllPlayers(knex) {
        return knex.select('player_info').from('player');
    },
    getPlayerById(knex, id) {
        return knex.select(knex.raw(`player_info-> '${id}' as player`)).from('player');
    },
    getPlayersByIds(knex, ids) {
        let playerIds = ids.split(',');
        let selectStatements = unionAll(knex, playerIds);
        return knex.select(knex.raw(`player_info-> '${selectStatements[0]}' as player`)).from('player').unionAll(selectStatements);
    },
    unionAll(knex, ids) {
        let selectStatements = [];
        let totalPlayers = playerIds.length;

        unionAllStatements = (statements) => {
            return statements;
        }
        let completeSelectStatements = ids.forEach((id, index) => {
            let select = getPlayerById(knex, id);
            if(index > 0) {
                selectStatements.push(select);
            }else if(index == totalPlayers - 1) {
                selectStatements.push(select);
                unionAll(selectStatements);
            } 
        })
        return completeSelectStatements;
    },
    updatePlayerInfo(knex, data) {
        let dataString = JSON.stringify(data).replace(/'/g, '');
        dataString = dataString.replace(/""/g, '"');
        return knex('player').update({player_info: dataString})
    }
}

module.exports = PlayerService;