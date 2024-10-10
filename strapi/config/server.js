module.exports = ({ env }) => ({
  host: env("STRAPI_HOST", "0.0.0.0"),
  port: env.int("STRAPI_PORT", 1337),
  url: env("STRAPI_URL", "https://devshop.ae-solar.com/strapi/"),
  admin: {
    url: "https://devshop.ae-solar.com/",
  },
  app: {
    keys: env.array("STRAPI_APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
