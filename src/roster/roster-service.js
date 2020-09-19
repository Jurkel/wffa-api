const RosterService = {
    getAllRoster(knex) {
        return knex.select('*').from('roster');
    },
    getRosterById(knex, id) {
        return knex.select('*').from('roster').where({owner_id: id}).first();
    },
    getRosterByLeagueId(knex, id) {
        return knex.select('*').from('roster').where({league_id: id});
    },
    updateRosterById(knex, id, data) {
        return knex('roster').where({owner_id: id}).update(data);
    }
}

module.exports = RosterService;