import http from 'http';

import application from '@/app/application';
import config from '@/app/config';


const server = http.createServer(application.getInstance());

server.listen(config.server.PORT, () => {
  console.log(`Server running on port ${config.server.PORT}`)
});

// application.run(config.server.PORT);