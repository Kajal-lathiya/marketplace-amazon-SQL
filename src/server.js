import express from "express";
import sequelize, { testDB } from "./db/index.js";
// import productsRouter from "./services/products/index.js";
// import reviewsRouter from "./services/reviews/index.js";
// import usersRouter from "./services/users/index.js";
// import categoryRouter from "./services/categories/index.js";
// import cartRouter from "./services/cart/index.js";
import cors from "cors";

const server = express();
const port = process.env.PORT || 3000;
server.use(cors());
server.use(express.json());
// server.use("/products", productsRouter);
// server.use("/reviews", reviewsRouter);
// server.use("/categories", categoryRouter);
// server.use("/users", usersRouter);
// server.use("/cart", cartRouter);

server.listen(port, async () => {
  console.log("server is running on port ", port);
  await testDB();
  sequelize
    .sync({ logging: false })
    .then(() => {
      console.log("DB synced");
    })
    .catch((e) => {
      console.log(e);
    });
});
