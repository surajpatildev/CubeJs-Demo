cube(`OrderItems`, {
  sql: `SELECT * FROM public.order_items`,

  joins: {
    Orders: {
      sql: `${CUBE}.order_id = ${Orders}.order_id`,
      relationship: `belongsTo`,
    },

    Products: {
      sql: `${CUBE}.product_id = ${Products}.product_id`,
      relationship: `belongsTo`,
    },

    Sellers: {
      sql: `${CUBE}.seller_id = ${Sellers}.seller_id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },

    price: {
      sql: `price`,
      type: `sum`,
    },

    freightValue: {
      sql: `freight_value`,
      type: `sum`,
    },
  },

  dimensions: {
    orderId: {
      sql: `order_id`,
      type: `string`,
      primaryKey: true,
    },

    orderItemId: {
      sql: `order_item_id`,
      type: `string`,
      primaryKey: true,
    },
  },

  dataSource: `default`,
});
