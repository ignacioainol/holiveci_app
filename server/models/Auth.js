const { connecting } = require('./database');

const createUser = async (user) => {
    const connection = await connecting();

    try {
        const query = `INSERT INTO users
                      (role_id, user_name, user_lastname, user_rut, user_email, user_phonenumber, user_password) 
                      VALUES ($1, $2, $3, $4, $5, $6, $7)
                      RETURNING *`;

        const values = [user.role_id, user.name, user.lastname, user.rut, user.email, user.phonenumber, user.password];
        const result = await connection.query(query, values);
        let data = result.rows[0];
        return data ? data : [];

    } catch (error) {
        console.log(error);
    } finally {
        connection.release();
    }
}

const getUserByEmail = async (email) => {
    const connection = await connecting();
    try {
        const query = `SELECT * from users
                       WHERE user_email = $1`;
        const values = [email];
        const result = await connection.query(query, values);
        return result.rows[0] ? result.rows[0] : null;

    } catch (error) {
        return error.message;
    } finally {
        connection.release();
    }
}

module.exports = {
    createUser,
    getUserByEmail
}