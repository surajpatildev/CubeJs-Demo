cube(`Customers`, {
  sql: `SELECT * FROM public.customers`,

  measures: {
    count: {
      type: `count`,
    },
  },

  dimensions: {
    customerId: {
      sql: `customer_id`,
      type: `string`,
      primaryKey: true,
    },

    customerCity: {
      sql: `customer_city`,
      type: `string`,
    },

    customerState: {
      sql: `customer_state`,
      type: `string`,
    },
  },

  dataSource: `default`,
});
