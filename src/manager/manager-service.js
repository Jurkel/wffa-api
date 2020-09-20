const ManagerService = {
    getAllManagers(knex) {
        return knex.select('*').from('manager');
    },
    getManagerById(knex, id) {
        return knex.select('*').from('manager').where({owner_id: id});
    },
    getManagerByFirstName(knex, name) {
        return knex.select('*').from('manager').where({firstname: name});
    },
    getManagerByLastName(knex, name) {
        return knex.select('*').from('manager').where({lastname: name});
    },
    getManagerByDisplayName(knex, name) {
        return knex.select('*').from('manager').where({display_name: name});
    },
    updateManagerById(knex, id, data) {
        return knex('manager').where({owner_id, id}).update(data);
    },
    updateManagerByDisplayName(knex, name, data) {
        return knex('manager').where({display_name: name}).update(data);
    }
}

module.exports = ManagerService;