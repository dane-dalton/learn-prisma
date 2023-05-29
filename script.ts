import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  // await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Dane",
  //       age: 24,
  //       email: "dane@test.com",
  //     },
  //     {
  //       name: "Dane",
  //       age: 23,
  //       email: "dane@test1.com",
  //     },
  //     {
  //       name: "Dane",
  //       age: 26,
  //       email: "dane@test4.com",
  //     },
  //   ],
  // })
  // const user = await prisma.post.findMany({
  //   where: {
  //     author: {
  //       is: {
  //         age: 27,
  //       },
  //     },
  //   },
  // })

  const user = await prisma.user.update({
    where: {
      email: "dane@test.com",
    },
    data: {
      userPreference: {
        disconnect: true,
      },
    },
  })

  // const preference = await prisma.userPreference.create({
  //   data: {
  //     emailUpdates: true,
  //   },
  // })

  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "NewDane",
  //   },
  //   include: { userPreference: true },
  // })

  console.log(user)
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
