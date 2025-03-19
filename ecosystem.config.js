module.exports = {
  apps: [{
    name: "github-pipeline-test",
    script: "dist/app.js", // Use the compiled JS file from the dist directory
    instances: 1,
    exec_mode: "fork",
    env_dev: {
      NODE_ENV: "dev",
      PORT: 8000,
      DB_USER: "node_api",       // Add DB credentials for dev environment
      DB_PASSWORD: "node_api@12345",
      DB_NAME: "node_testdb"
    },
    env_prod: {
      NODE_ENV: "prod",
      PORT: 5000,
      DB_USER: "node_api",       // Add DB credentials for prod environment
      DB_PASSWORD: "node_api@12345",
      DB_NAME: "node_testdb"
    }
  }]
}
