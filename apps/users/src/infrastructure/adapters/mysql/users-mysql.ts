import { makeUser, User } from "../../../domain/entities/user";
import { UsersPort } from "../../../domain/ports/users";
import  { RowDataPacket, ResultSetHeader, createConnection } from "mysql2";
import { UserId } from "../../../domain/value-objects/UserId";
import { ConnectionOptions } from "mysql2/typings/mysql/lib/Connection";

interface UserModel extends RowDataPacket {
  id?: string;
  email?: string;
  name?: string;
}

const users: User[] = [];

export const makeUsersMySQL = (): UsersPort => {
  const connOpts: ConnectionOptions = {
    host: "mydb",
    user: "user",
    password: "monorepo",
    database: "monorepo",
  };

  const conn = createConnection(connOpts);

  const register = async (user: User): Promise<boolean> => {
    const insert = new Promise((resolve, reject) => {
      conn.query<ResultSetHeader>(
        "insert into users(id, email, name) values(?,?,?)",
        [user.id.get(), user.email, user.name],
        (err, res) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(res);
          }
        },
      );
    });
    
    await insert;
    users.push(user);
    return true;
  };

  const getAll = async (): Promise<User[]> => {
    const select = new Promise<UserModel[]>((resolve, reject) => {
      conn.query<UserModel[]>(
        "select id, email, name from users;",
        (err, res) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(res);
          }
        },
      );
    });
    
    const rows: UserModel[] = await select;
    return rows.map((model) => makeUser({
      id: new UserId(model.id),
      email: model.email ?? "",
      name: model.name ?? "",
    }));
  };
  
  const findById = async (id: string): Promise<User | null> => {

    const select = new Promise<UserModel[]>((resolve, reject) => {
      conn.query<UserModel[]>(
        "select id, email, name from users where id=?;",
        [id],
        (err, res) => {
          if (err) {
            console.log(err);
            reject(err);
          } else {
            resolve(res);
          }
        },
      );
    });

    const rows: UserModel[] = await select;

    if (rows.length === 0) {
      return null;
    }

    return rows.map((model) => makeUser({
      id: new UserId(model.id),
      email: model.email ?? "",
      name: model.name ?? "",
    }))[0];
  };  

  return {
    register,
    getAll,
    findById,
  };
};