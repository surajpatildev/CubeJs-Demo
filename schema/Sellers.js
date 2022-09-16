cube(`Sellers`, {
  sql: `SELECT * FROM public.sellers`,

  measures: {
    count: {
      type: `count`,
    },
  },

  dimensions: {
    sellerId: {
      sql: `seller_id`,
      type: `string`,
      primaryKey: true,
    },
    sellerCity: {
      sql: `seller_city`,
      type: `string`,
    },
    sellerState: {
      sql: `seller_state`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
