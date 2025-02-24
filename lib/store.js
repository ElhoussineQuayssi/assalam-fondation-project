import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

// Connect to MySQL database
const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log('MySQL Connected Successfully via Prisma');
  } catch (error) {
    console.error('MySQL Connection Error:', error.message);
    process.exit(1);
  }
};

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  console.log('Prisma connection closed through app termination');
  process.exit(0);
});

export { connectDB, prisma };
