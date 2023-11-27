import 'dotenv/config';

export default {
  server: {
    name: 'LOCALHOST',
    PORT: process.env.PORT || 3004
  },
  db: {
    host: process.env.DB_HOST,
    port: process.env.PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  }
}