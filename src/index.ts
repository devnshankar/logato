// src/index.ts
class Logato {
  private static getTimestamp(): string {
    return new Date().toISOString();
  }

  private static applyColor(message: string, color: string): string {
    return `${color}${message}\x1b[0m`;  // Reset color after the message
  }

  private static formatMessage(level: string, message: string): string {
    const timestamp = Logato.getTimestamp();
    return `[${level}] [${timestamp}]: ${message}`;
  }

  public static log(message: string): void {
    console.log(Logato.formatMessage('LOG', message));
  }

  public static info(message: string): void {
    console.info(Logato.applyColor(Logato.formatMessage('INFO', message), '\x1b[34m')); // Blue for info
  }

  public static warn(message: string): void {
    console.warn(Logato.applyColor(Logato.formatMessage('WARN', message), '\x1b[33m')); // Yellow for warn
  }

  public static error(message: string): void {
    console.error(Logato.applyColor(Logato.formatMessage('ERROR', message), '\x1b[31m')); // Red for error
  }
}

export default Logato;
