const pool = require('../utils/pool');

class Recipe {
  id;
  userId;
  title;
  timeToCook;
  servings;
  ingredients;
  instructions;
  recipeUrl;

  constructor(row) {
    this.id = row.id;
    this.userId = row.user_id;
    this.title = row.title;
    this.timeToCook = row.time_to_cook;
    this.servings = row.servings;
    this.ingredients = row.ingredients;
    this.instructions = row.instructions;
    this.recipeUrl = row.recipe_url;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
      SELECT * from recipes
      `
    );
    return rows.map((row) => new Recipe(row));
  }

  // static async getNewEvents() {
  //   const { rows } = await pool.query(
  //     `
  //     SELECT * from scraper WHERE new_post is true
  //     ORDER BY date
  //     `
  //   );
  //   if (rows.length === 0) {
  //     return null;
  //   } else return rows.map((row) => new Recipe(row));
  // }

  // static async getById(id) {
  //   const { rows } = await pool.query('SELECT * from scraper WHERE id = $1', [
  //     id,
  //   ]);
  //   if (rows.length === 0) {
  //     return null;
  //   }
  //   return new Recipe(rows[0]);
  // }

  // static async updateById(id) {
  //   const event = await Recipe.getById(id);
  //   if (!evenRecipet) return null;
  //   const { rows } = await pool.query(
  //     `UPDATE scraper
  //     SET new_post = false
  //     WHERE id = $1
  //     RETURNING *
  //     `,
  //     [id]
  //   );
  //   return new Event(rows[0]);
  // }

  static async insert({
    userId,
    title,
    timeToCook,
    servings,
    ingredients,
    instructions,
    recipeUrl,
  }) {
    const { rows } = await pool.query(
      `
        INSERT INTO recipes (user_id, title, time_to_cook, servings, ingredients, instructions, recipe_url)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *   
        `,
      [
        userId,
        title,
        timeToCook,
        servings,
        ingredients,
        instructions,
        recipeUrl,
      ]
    );
    return new Recipe(rows[0]);
  }
}

module.exports = Recipe;
