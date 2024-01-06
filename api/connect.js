import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "wMxDFb9UDW7GQjR9.",
  database: "social",
});
