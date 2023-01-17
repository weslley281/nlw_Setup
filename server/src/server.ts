import { PrismaClient } from '.prisma/client';
import fastify from 'fastify';

const app = fastify();
const prisma = new PrismaClient();
const port = 5000;

app.get('/', () => {
  const habits = prisma.habits.findMany({
    where: { title: { statartsWith: 'M' } },
  });
  return 'Olá Mundo';
});

app
  .listen({ port })
  .then(() =>
    console.log(`The server is running on: http://localhost:${port}`)
  );
