import http from 'http';

import 'dotenv/config';

import application from '@/app/application';


const PORT = process.env.PORT || 3000;

const server = http.createServer(application.getInstance());

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));