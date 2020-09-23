const PlayerService = {
    getAllPlayers(knex) {
        return knex.select('player_info').from('player');
    },
    getPlayerById(knex, id) {
        return knex.raw(`select player_info-> ${id}`).from('player');
    },
    getPlayersByIds(knex, ids) {
        let selectStatements = [];
        let playerIds = ids.split(',');
        let totalPlayers = playerIds.length;

        unionAllStatements = (statements) => {
            return statements;
        }
        
        let completeSelectStatements = playerIds.forEach((id, index) => {
            let select = getPlayerById(knex, id);
            if(index > 0) {
                selectStatements.push(select);
            }else if(index == totalPlayers - 1) {
                selectStatements.push(select);
                unionAll(selectStatements);
            } 
        })

        return knex.raw("select player_info-> '" + completeSelectStatements[0] + "'").from('player').unionAll(selectStatements);
    },
    updatePlayerInfo(knex, data) {
        let dataString = JSON.stringify(data).replace(/'/g, '');
        dataString = dataString.replace(/""/g, '"');
        return knex('player').update({player_info: dataString})
    }
}

module.exports = PlayerService;