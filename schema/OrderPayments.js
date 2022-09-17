cube(`OrderPayments`, {
  sql: `SELECT * FROM public.order_payments`,

  joins: {
    Orders: {
      sql: `${CUBE}.order_id = ${Orders}.order_id`,
      relationship: `belongsTo`,
    },
  },

  measures: {
    count: {
      type: `count`,
    },
    paymentValue: {
      sql: `payment_value`,
      type: `sum`,
    },
    avgPaymentValue: {
      sql: `payment_value`,
      type: `avg`,
      title: "Average Order Value",
    },
  },

  dimensions: {
    paymentId: {
      sql: `payment_id`,
      type: `number`,
      primaryKey: true,
    },
    paymentType: {
      sql: `payment_type`,
      type: `string`,
    },
  },

  preAggregations: {
    avgOrderValueByMonth: {
      measures: [OrderPayments.avgPaymentValue],
      timeDimension: Orders.orderPurchaseTimestamp,
      granularity: `month`,
    },
  },

  dataSource: `default`,
});
