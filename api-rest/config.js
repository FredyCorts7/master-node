// Container for all the environments
let environments = {};

// Staging (default) environment
environments.staging = {
  port: 3000,
  envName: 'staging',
};

// Production environment
environments.production = {
  port: 5000,
  envName: 'production',
};

// Determine which env was passed as a command-line argument
const currentEnv =
  typeof process.env.NODE_ENV == 'string'
    ? process.env.NODE_ENV.toLocaleLowerCase()
    : '';

// Check that current env is one of the envs above, if not, default to staging
let envToExport =
  typeof environments[currentEnv] == 'object'
    ? environments[currentEnv]
    : environments.staging;

module.exports = envToExport;
