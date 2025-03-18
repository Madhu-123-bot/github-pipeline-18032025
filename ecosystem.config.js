// ecosystem.config.js
module.exports = {
  apps: [{
    name: "github-pipeline-test",
    script: "dist/app.js",
    instances: 1,
    exec_mode: "fork",
    env_dev: {
      NODE_ENV: "dev",
      PORT: 8000
      // Other environment variables
    },
    env_prod: {
      NODE_ENV: "prod",
      PORT: 5000
      // Other environment variables
    }
  }]
}
