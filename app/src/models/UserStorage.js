"use strict";

const db = require("../config/db");

class UserStorage {
    static getUserInfo(id) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM member WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                resolve(data[0]);
            });
        });
    }

    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "insert into member(id, pwd, name, address, gender, phone) values(?,?,?,?,?,?);";
            db.query(query, [userInfo.id, userInfo.pwd, userInfo.name, userInfo.address, userInfo.gender, userInfo.phone],
                (err) => {
                    if (err) reject(`${err}`);
                    resolve({ success: true });
                });
        });
    }
}

module.exports = UserStorage;