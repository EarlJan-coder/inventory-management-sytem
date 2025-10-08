import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const demoUserId = '8a247e16-4b16-4441-9b93-3085dd0552ef';

    await prisma.product.createMany({
        data: Array.from({ length: 25 }).map((_, i) => ({
            userId: demoUserId,
            name: `Product ${i + 1}`,
            price: (Math.random() * 90 + 10).toFixed(2),
            quantity: Math.floor(Math.random() * 20),
            lowStockAt: 5,
            createdAt: new Date(Date.now() - 10000 * 60 * 60 * 24 * (i * 5)),
        })),
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {``
        await prisma.$disconnect();
    })