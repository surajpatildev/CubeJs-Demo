cube(`Products`, {
  sql: `SELECT * FROM public.products`,

  measures: {
    count: {
      type: `count`,
    },
  },

  dimensions: {
    productId: {
      sql: `product_id`,
      type: `string`,
      primaryKey: true,
    },

    productCategoryName: {
      sql: `product_category_name`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
