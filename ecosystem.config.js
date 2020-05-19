module.exports = {
    apps: [{
      name: 'server',
      script: 'dist/server.js',
      instances: "max",
      autorestart: true,
      watch: 'dist/**/*.js',
      // eslint-disable-next-line @typescript-eslint/camelcase
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      env_production: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'app-watcher',
      script: 'npm run start',
      instances: 1,
      autorestart: true,
      watch: 'tsconfig.json',
      env: {
        NODE_ENV: 'development'
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      env_production: {
        NODE_ENV: 'production'
      }
    }]
  };
