// src/index.ts
import fs from 'fs';
import path from 'path';

class Logato {
  private static logFilePath = path.join(process.cwd(), 'logato.log');
  private static enableFileLogging = false;
  private static logLevels = ['LOG', 'INFO', 'WARN', 'ERROR', 'DEBUG', 'SUCCESS'];
  
  private static getTimestamp(): string {
    return new Date().toISOString();
  }

  private static applyColor(message: string, color: string): string {
    return `${color}${message}\x1b[0m`;
  }

  private static formatMessage(level: string, message: string): string {
    return `[${level}] [${Logato.getTimestamp()}]: ${message}`;
  }

  private static writeToFile(logMessage: string): void {
    if (Logato.enableFileLogging) {
      fs.appendFile(Logato.logFilePath, logMessage + '\n', (err) => {
        if (err) console.error('Logato: Failed to write to log file:', err);
      });
    }
  }

  public static enableFileLoggingOption(enable: boolean, filePath?: string): void {
    Logato.enableFileLogging = enable;
    if (filePath) Logato.logFilePath = filePath;
  }

  public static log(message: string): void {
    const formatted = Logato.formatMessage('LOG', message);
    console.log(formatted);
    Logato.writeToFile(formatted);
  }

  public static info(message: string): void {
    const formatted = Logato.applyColor(Logato.formatMessage('INFO', message), '\x1b[34m');
    console.info(formatted);
    Logato.writeToFile(Logato.formatMessage('INFO', message));
  }

  public static warn(message: string): void {
    const formatted = Logato.applyColor(Logato.formatMessage('WARN', message), '\x1b[33m');
    console.warn(formatted);
    Logato.writeToFile(Logato.formatMessage('WARN', message));
  }

  public static error(message: string): void {
    const formatted = Logato.applyColor(Logato.formatMessage('ERROR', message), '\x1b[31m');
    console.error(formatted);
    Logato.writeToFile(Logato.formatMessage('ERROR', message));
  }

  public static debug(message: string): void {
    const formatted = Logato.applyColor(Logato.formatMessage('DEBUG', message), '\x1b[35m');
    console.debug(formatted);
    Logato.writeToFile(Logato.formatMessage('DEBUG', message));
  }

  public static success(message: string): void {
    const formatted = Logato.applyColor(Logato.formatMessage('SUCCESS', message), '\x1b[32m');
    console.log(formatted);
    Logato.writeToFile(Logato.formatMessage('SUCCESS', message));
  }
}

export default Logato;