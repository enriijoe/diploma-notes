export class Logger {

  static IS_DEV = process.env.NODE_ENV === 'development';

  prefix;
  enabled = true;

  constructor(prefix, enabled) {

    this.prefix = prefix;

    if (enabled !== undefined) {
      this.enabled = enabled;
    }
  }

  // Functional methods.

  getPrefixed(prefix, enabled) {
    return new Logger(this.prefix + ' ' + prefix, enabled);
  }

  debug(...args) {

    if (Logger.IS_DEV && this.enabled) {
      console.debug(`%c${this.prefix}`, 'color: #bada53', '[D]', ...args);
    }
  }

  warn(...args) {

    if (Logger.IS_DEV && this.enabled) {
      console.warn(`%c${this.prefix}`, 'color: #bada53', ...args);
    }
  }

  error(...args) {
    console.error(`%c${this.prefix}`, 'color: #bada53', ...args);
  }

  info(...args) {

    if (Logger.IS_DEV && this.enabled) {
      console.info(`%c${this.prefix}`, 'color: #bada53', ...args);
    }
  }

  pushSeparator() {

    if (Logger.IS_DEV && this.enabled) {
      console.info('%c=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=', 'color: #bada53');
    }
  }

}
