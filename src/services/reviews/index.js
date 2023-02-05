import express from "express";
import { Review, Product } from "../../db/models/index.js";
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      const data = await Review.findAll({
        include: Product,
      });
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Review.create(req.body);
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Review.findOne({
        where: {
          id: req.params.id,
        },
        include: Product,
      });
      res.send(data);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Review.update(req.body, {
        where: {
          id: req.params.id,
        },
        returning: true,
      });

      res.send(data[1][0]);
    } catch (e) {
      console.log(e);
      next(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const data = await Review.destroy({
        where: {
          id: req.params.id,
        },
      });

      res.send({ rows: data });
    } catch (e) {
      console.log(e);
      next(e);
    }
  });

export default router;
