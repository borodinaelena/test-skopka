const express = require('express')
const { PrismaClient } = require('@prisma/client')
const cors = require('cors')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/items', async (req, res) => {
    const { column, order, ids, search } = req.query;
    let scope = {};

    if (column) {
      scope = {
        orderBy: [
          {
            [column]: order,
          },
        ]
      }
    }
    if (ids && JSON.parse(ids) && JSON.parse(ids).length && JSON.parse(ids).length > 0) {
      scope = {
        ...scope,
        where: {
          id: { in: JSON.parse(ids) },
        }
      }
    }

    if (search && search.length > 0) {
      scope = {
        ...scope,
        where: {
          OR: [
            {
              name: {
                contains: search,
              },
            },
            {
              description:
                { contains: search }
            },
          ],
        },
      };
    }

    const items = await prisma.item.findMany(scope);
    res.json(items)
  }
)

const server = app.listen(8001, () =>
  console.log(`🚀 Server ready at: http://localhost:8001`),
)
