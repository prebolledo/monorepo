import { makeUsersMySQL } from "./infrastructure/adapters/mysql/users-mysql";
import { makeServer } from "./infrastructure/http/server";
import { makeUsersMemory } from "./infrastructure/adapters/memory/users-memory";

const usersPort = process.env.USE_LOCAL ? makeUsersMemory() : makeUsersMySQL();

const server = makeServer(usersPort);

server();