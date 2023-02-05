import sequelize from "../index.js";

import s from "sequelize";

const { DataTypes } = s;

const Cart = sequelize.define("cart", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
});

export default Cart;
