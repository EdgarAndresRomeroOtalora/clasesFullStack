const SQLiteModel = function (sqlite) {

    this.getAll = function (table) {
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {
                sqlite.all("SELECT * FROM " + table, function (error, rows) {
                    if (error) {
                        let info = {
                            message: error.message,
                            table: table
                        }
                        reject(info);
                    } else {
                        resolve(rows);
                    }
                });
            });
        });
    };

    this.getById = function (table, id) {
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {
                sqlite.all("SELECT * FROM " + table + " WHERE id=" + id, function (error, rows) {
                    if (error) {
                        let info = {
                            message: error.message,
                            table: table,
                            id: id
                        }
                        reject(info);
                    } else {
                        resolve(rows[0]);
                    }
                });
            });
        });
    };

    this.create = function (table, params) {
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {

                let query = 'INSERT INTO ' + table + ' ('
                let columnNames = '';
                let columnValues = '';
                for (let [key, value] of Object.entries(params)) {
                    columnNames += "'" + key + "', "
                    if (isNaN(value)) {
                        columnValues += "'" + value + "', ";
                    } else {
                        columnValues += value + ", ";
                    }
                }
                query += columnNames.substring(0, columnNames.length - 2);
                query += ') VALUES (';
                query += columnValues.substring(0, columnValues.length - 2);
                query += ');';

                try {
                    sqlite.run(query);
                    resolve(params);
                } catch (error) {
                    let info = {
                        message: error.message,
                        table: table,
                        params: params
                    }
                    reject(info);
                }
            });
        });
    };

    this.update = function (table, params, id) {
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {

                let query = 'UPDATE ' + table + ' SET '
                let element = '';
                for (let [key, value] of Object.entries(params)) {
                    //columnNames+="'"+key+"', "
                    element += key + '=';
                    if (isNaN(value)) {
                        element += '"' + value + '", ';
                    } else {
                        element += value + ', ';
                    }
                }
                query += element.substring(0, element.length - 2);
                query += ' WHERE id=' + id;

                try {
                    sqlite.run(query);
                    resolve(params);
                } catch (error) {
                    let info = {
                        message: error.message,
                        table: table,
                        params: params,
                        id: id
                    }
                    reject(info);
                }
            });
        });
    };

    this.delete = function (table, id) {
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {

                let query = 'DELETE FROM ' + table + ' WHERE id=' + id;
                try {
                    sqlite.run(query);
                    resolve('se ha eliminado ' + id);
                } catch (error) {
                    let info = {
                        message: error.message,
                        table: table,
                        id: id
                    }
                    reject(info);
                }
            });
        });
    };

    this.clean = function (table) {
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {

                let query = 'DROP TABLE IF EXISTS ' + table;
                try {
                    sqlite.run(query);
                    resolve('se limpió la base de datos ' + table);
                } catch (error) {
                    let info = {
                        message: error.message,
                        table: table
                    }
                    reject(info);
                }
            });
        });
    };

    this.initialize = function (table, params) {
        return new Promise((resolve, reject) => {
            sqlite.serialize(function () {

                let query = 'CREATE TABLE IF NOT EXISTS ' + table + ' (id INTEGER PRIMARY KEY, '
                let element = '';
                for (let [key, value] of Object.entries(params)) {
                    element += key + ' ' + value + ', ';
                }
                query += element.substring(0, element.length - 2);
                query += ');';

                try {
                    sqlite.run(query);
                    params.id = 'INTEGER PRIMARY KEY';
                    resolve(params);
                } catch (error) {
                    let info = {
                        message: error.message,
                        table: table,
                        params: params
                    }
                    reject(info);
                }
            });
        });
    };

    return this;
};

module.exports = SQLiteModel;