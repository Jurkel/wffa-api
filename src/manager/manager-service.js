const ManagerService = {
    getAllManagers(knex) {
        return knex.select('*').from('manager');
    },
    getManagerById(knex, id) {
        return knex.select('*').from('manager').where({owner_id: id}).first();
    },
    getManagerByFirstName(knex, name) {
        console.log(knex.select('*').from('manager').where({firstName: "'" + `${name}`} + "'"));
        return knex.select('*').from('manager').where({firstName: "'" + `${name}`} + "'");
    },
    getManagerByLastName(knex, name) {
        return knex.select('*').from('manager').where({lastName: "'" + `${name}` + "'"});
    },
    getManagerByDisplayName(knex, name) {
        return knex.select('*').from('manager').where({display_name: "'" + `${name}` + "'"});
    },
    getManagerByTeamName(knex, name) {
        return knex.select('*').from('manager').where({team_name: "'" + `${name}` + "'"});
    },
    updateManagerById(knex, id, data) {
        return knex('manager').where({owner_id, id}).update(data);
    },
    updateManagerByDisplayName(knex, name, data) {
        return knex('manager').where({display_name: "'" + `${name}` + "'"}).update(data);
    },
    updateManagerByTeamName(knex, name, data) {
        return knex('manager').where({team_name: "'" + `${name}` + "'"}).update(data);
    }
}

module.exports = ManagerService;