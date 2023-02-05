import express from "express";
import { User } from "../../db/models/index.js";
import sequelize from "sequelize";
const usersRouter = express.Router();

usersRouter.route("/").get(async (req, res, next) => {
  try {
    const data = await User.findAll({});
    res.send(data);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

usersRouter.route("/").post(async (req, res, next) => {
  try {
    const data = await User.create(req.body);
    res.send(data);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

usersRouter.route("/:id").get(async (req, res, next) => {
  try {
    const data = await User.findOne({
      where: {
        id: req.params.id
      }
    });
    res.send(data);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
usersRouter.route("/:id").put(async (req, res, next) => {
  try {
    const data = await User.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    });

    res.send(data[1][0]);
  } catch (e) {
    console.log(e);
    next(e);
  }
});
usersRouter.route("/:id").delete(async (req, res, next) => {
  try {
    const data = await User.destroy({
      where: {
        id: req.params.id
      }
    });
    res.send({ rows: data });
  } catch (e) {
    console.log(e);
    next(e);
  }
});

export default usersRouter;
