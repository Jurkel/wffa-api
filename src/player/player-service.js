const PlayerService = {
    getAllPlayers(knex) {
        return knex.select('player_info').from('player');
    },
    getPlayerById(knex, id) {
        return knex.select(knex.raw(`player_info-> '${id}' as player`)).from('player');
    },
    getPlayersByIds(knex, ids) {
        console.log('getPlayersByIds function ids coming in: ' + ids);
        let playerIds = ids.split('|') || ids.split('%7C');
        console.log('getPlayersByIds function ids split: ' + playerIds);
        let one = playerIds[0];
        let two= playerIds[1];
        console.log('getPlayersByIds function id 0: ' + playerIds[0]);
        console.log('getPlayersByIds function id 1: ' + playerIds[1]);
        console.log(knex.select(knex.raw(`player_info-> '${one}' as player`)).from('player')
        .unionAll(function() {
            this.select(knex.raw(`player_info-> '${two}'`).from('player'))
        }));
        // let selectStatements = this.unionAll(knex, playerIds);
        return knex.select(knex.raw(`player_info-> '${one}' as player`)).from('player')
        .unionAll(function() {
            this.select(knex.raw(`player_info-> '${two}'`).from('player'))
        });;
    },
    // unionAll(knex, ids) {
    //     let selectStatements = [];
    //     let totalPlayes = ids.length;

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