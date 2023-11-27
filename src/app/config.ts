import 'dotenv/config';

const PORT = process.env.PORT || 3001;

export default {
  server: {
    name: 'LOCALHOST',
    PORT: PORT
  },
  db: {
    host: '',
    port: 5432
  }
}