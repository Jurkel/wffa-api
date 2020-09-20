const ManagerService = {
    getAllManagers(knex) {
        return knex.select('*').from('manager');
    },
    getManagerById(knex, id) {
        return knex.select('*').from('manager').where({owner_id: id}).first();
    },
    getManagerByFirstName(knex, name) {
        return knex.select('*').from('manager').where({firstName: `${name}`}).first();
    },
    getManagerByLastName(knex, lastName) {
        return knex.select('*').from('manager').where('lastName', `${lastName}`);
    },
    getManagerByDisplayName(knex, displayName) {
        return knex.select('*').from('manager').where('display_name', displayName);
    },
    getManagerByTeamName(knex, teamName) {
        return knex.select('*').from('manager').where({team_name: `${teamName}`});
    },
    updateManagerById(knex, id, data) {
        return knex('manager').where({owner_id, id}).update(data);
    },
    updateManagerByDisplayName(knex, name, data) {
        return knex('manager').where({display_name: `${name}`}).update(data);
    },
    updateManagerByTeamName(knex, name, data) {
        return knex('manager').where({team_name: `${name}`}).update(data);
    }
}

module.exports = ManagerService;