
import { makeUsersMySQL } from "./infrastructure/adapters/mysql/users-mysql";
import { makeServer } from "./infrastructure/http/server";
//import { makeUsersMemory } from "./infrastructure/adapters/memory/users-memory";

const usersPort = makeUsersMySQL();

const server = makeServer(usersPort);

server();