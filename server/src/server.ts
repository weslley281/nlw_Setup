import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';
import fastify from 'fastify';

const app = fastify();
const prisma = new PrismaClient();
const port = 5000;

app.register(cors);

app.get('/', async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app
  .listen({ port })
  .then(() =>
    console.log(`The server is running on: http://localhost:${port}`)
  );
