const PlayerService = {
    getAllPlayers(knex) {
        return knex.select('player_info').from('player');
    },
    getPlayerById(knex, id) {
        return knex.select(knex.raw(`player_info-> '${id}' as player`)).from('player');
    },
    getPlayersByIds(knex, ids) {
        let playerIds = ids.split(',');
        // let selectStatements = this.unionAll(knex, playerIds);
        return knex.select(knex.raw(`player_info-> '${playerIds[0]}' as player`)).from('player')
        .unionAll(knex.select(knex.raw(`player_info-> '${playerIds[1]}' as player`)));
    },
    // unionAll(knex, ids) {
    //     let selectStatements = [];
    //     let totalPlayers = ids.length;

    //     unionAllStatements = (statements) => {
    //         return statements;
    //     }
    //     let completeSelectStatements = ids.forEach((id, index) => {
    //         let select = this.getPlayerById(knex, id);
    //         if(index > 0) {
    //             selectStatements.push(select);
    //         }else if(index == totalPlayers - 1) {
    //             selectStatements.push(select);
    //             unionAllStatements(selectStatements);
    //         } 
    //     })
    //     return completeSelectStatements;
    // },
    updatePlayerInfo(knex, data) {
        let dataString = JSON.stringify(data).replace(/'/g, '');
        dataString = dataString.replace(/""/g, '"');
        return knex('player').update({player_info: dataString})
    }
}

module.exports = PlayerService;