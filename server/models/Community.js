const { connecting } = require('./database');

const createCommunity = async (community) => {
    const connection = await connecting();

    try {
        const query = `INSERT INTO communities (community_name, commune_id, user_id)
                       VALUES ($1, $2, $3)
                       RETURNING *`;

        const values = [community.name, community.commune_id, community.user_id];
        const result = await connection.query(query, values);
        return result.rows[0];
    } catch (error) {

    } finally {
        connection.release();
    }
}

module.exports = {
    createCommunity
}