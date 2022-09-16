cube(`Orders`, {
  sql: `SELECT * FROM public.orders`,

  preAggregations: {
    main: {
      measures: [Orders.count],
      timeDimension: Orders.orderPurchaseTimestamp,
      granularity: `hour`,
    },
  },

  joins: {
    Customers: {
      sql: `${CUBE}.customer_id = ${Customers}.customer_id`,
      relationship: `belongsTo`,
    },
    OrderItems: {
      sql: `${CUBE}.order_id = ${OrderItems}.order_id`,
      relationship: `hasMany`,
    },
    OrderPayments: {
      sql: `${CUBE}.order_id = ${OrderPayments}.order_id`,
      relationship: `hasMany`,
    },
  },

  measures: {
    count: {
      type: `count`,
      sql: "order_id",
      drillMembers: [
        orderId,
        orderStatus,
        orderPurchaseTimestamp,
        OrderPayments.paymentValue,
        Customers.customerCity,
      ],
    },
    canceledCount: {
      type: `count`,
      sql: "order_id",
      filters: [
        {
          sql: `${orderStatus} = 'canceled'`,
        },
      ],
    },
    cancelationRate: {
      type: `number`,
      sql: `CAST(${canceledCount} as float) / NULLIF(${count}, 0) * 100 ::float`,
      format: `percent`,
    },
  },

  dimensions: {
    orderId: {
      sql: `order_id`,
      type: `string`,
      primaryKey: true,
    },
    orderStatus: {
      sql: `order_status`,
      type: `string`,
    },
    orderPurchaseTimestamp: {
      sql: `order_purchase_timestamp`,
      type: `time`,
    },
    orderDeliveredCustomerDate: {
      sql: `order_delivered_customer_date`,
      type: `time`,
    },
    orderEstimatedDeliveryDate: {
      sql: `order_estimated_delivery_date`,
      type: `time`,
    },
  },
  dataSource: `default`,
});
