const Logger = use("Logger");

class Log {
  async handle({ request }, next) {
    Logger.info(`Request made to: ${request.url()}`);
    await next();
  }
}

module.exports = Log;
