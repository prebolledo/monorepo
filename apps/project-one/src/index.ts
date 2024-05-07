import { Server, ServerConfig } from '@monorepo/lib-server';

const createServer = (config: ServerConfig): Server => {
  return () => {
    console.log(`starting server on port ${config.port}`);
  }
};

const server = createServer({
  port: 80
});

server();