module.exports = {
  apps: [
    {
      name: "edaberk-frontend-1",
      script: "yarn",
      args: "start",
      env_development: {
        NODE_ENV: "development",
      },
      env_test: {
        NODE_ENV: "test",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
