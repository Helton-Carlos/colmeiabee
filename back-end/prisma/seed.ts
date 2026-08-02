import 'dotenv/config';
import * as bcrypt from 'bcrypt';
import pg from 'pg';
import { PrismaClient } from '../src/generated/prisma/client.js';
import { PrismaPg } from '@prisma/adapter-pg';

async function ensureDatabase() {
  const databaseUrl = process.env.DATABASE_URL;

  if (!databaseUrl) {
    throw new Error('DATABASE_URL não definida no .env');
  }

  const url = new URL(databaseUrl);
  const dbName = url.pathname.slice(1);

  url.pathname = '/postgres';

  const client = new pg.Client({ connectionString: url.toString() });
  await client.connect();

  const result = await client.query(
    `SELECT 1 FROM pg_database WHERE datname = $1`,
    [dbName],
  );

  if (result.rowCount === 0) {
    await client.query(`CREATE DATABASE "${dbName}"`);
    console.log(`Banco "${dbName}" criado com sucesso!`);
  } else {
    console.log(`Banco "${dbName}" já existe.`);
  }

  await client.end();
}

async function main() {
  await ensureDatabase();

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
  const prisma = new PrismaClient({ adapter });

  const password = await bcrypt.hash('123456', 10);

  const users = [
    { email: 'admin@colmeiabee.com', name: 'Admin ColmeiaBee', password },
    { email: 'joao@email.com', name: 'João Apicultor', password },
    { email: 'maria@email.com', name: 'Maria Silva', password },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: user,
    });
  }

  console.log('Seed executado com sucesso!');
  console.log(`Usuários criados: ${users.length}`);
  console.log('Senha padrão: 123456');

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error('Erro ao executar seed:', e);
  process.exit(1);
});
