class Server {
  constructor(ip, port) {
    this.ip = ip;
    this.port = port;
  }

  get url() {
    return `http://${this.ip}:${this.port}`;
  }
}

const aws = (server) => {
  server.isAWS = true;
  server.awsInfo = () => server.url;
  return server;
};

const azure = (server) => {
  server.port += 1000;
  server.isAzure = true;
  return server;
};

// Just a random server
const server = new Server('10.32.1.23', 4200);

console.log(server.url);

// Adding aws config
const awsServer = aws(server);

console.log(awsServer.awsInfo());
console.log(awsServer.isAWS);

// Adding azure config
const azureServer = azure(server);
console.log(azureServer.port);

//Applying two decorators and overriding previous property
const lastDecorator = (server) => {
  server.port = 1000;
  server.last = 'property';
  return server;
};

const testServer = lastDecorator(awsServer);
console.log(testServer.isAWS);
console.log(testServer.last);
console.log(testServer.url);
