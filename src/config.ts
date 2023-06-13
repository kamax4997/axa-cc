import * as dotenv from 'dotenv'

dotenv.config({ path: __dirname + '../.env' })

/**
 * Pattern for config is:
 * key: process.env['KEY'] ?? default
 */
const config = {
  nodeEnv: process.env['NODE_ENV'] ?? 'development',
  port: process.env['PORT'] ?? 3000,
  apiBaseUrl: process.env['API_BASE_URL'] ?? 'https://raw.githubusercontent.com/alj-devops/santa-data/master',

  clientOrigins: {
    'development': process.env['DEV_ORIGIN'] ?? '*',
    'production': process.env['PROD_ORIGIN'] ?? 'none'
  },

  smtpHost: process.env['SMTP_HOST'] ?? 'smtp.ethereal.email',
  smtpPort: process.env['SMTP_PORT'] ?? 587,
  smtpUsername: process.env['SMTP_USERNAME'] ?? 'kattie39@ethereal.email',
  smtpPassword: process.env['SMTP_PASSWORD'] ?? 'U9bbUvJmpatFWJSSs',
}

export default config
