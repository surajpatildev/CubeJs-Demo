// Cube.js configuration options: https://cube.dev/docs/config

module.exports = {
  http: {
    cors: {
      origin: process.env.CUBEJS_ALLOWED_DOMAINS.split(","),
      allowedHeaders: [
        "Accept",
        "Accept-Encoding",
        "Authorization",
        "Content-Type",
        "Origin",
        "User-Agent",
        "X-CSRFToken",
        "sentry-trace",
      ],
      credentials: true,
    },
  },

  // queryTransformer: (query, { securityContext }) => {
  //   query.filters.push({
  //     member: "Tenants.id",
  //     operator: "equals",
  //     values: [securityContext.tenant_id],
  //   });
  //   return query;
  // },
};
