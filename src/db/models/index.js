import Product from "./product.js";
import Review from "./reviews.js";
import Category from "./category.js";
import User from "./user.js";
import ProductCategory from "./productCategory.js";
import Cart from "./cart.js";

Product.hasMany(Review, { onDelete: "CASCADE" });
Review.belongsTo(Product, { onDelete: "CASCADE" });

User.hasMany(Review, { onDelete: "CASCADE" });
Review.belongsTo(User, { onDelete: "CASCADE" });

Category.belongsToMany(Product, {
  through: ProductCategory,
  onDelete: "CASCADE",
});
Product.belongsToMany(Category, {
  through: ProductCategory,
  onDelete: "CASCADE",
});

User.hasMany(Cart, { onDelete: "CASCADE" });
Cart.belongsTo(User, { onDelete: "CASCADE" });

Product.hasMany(Cart, { onDelete: "CASCADE" });
Cart.belongsTo(Product, { onDelete: "CASCADE" });

export { Product, Review, Category, ProductCategory, User, Cart };
