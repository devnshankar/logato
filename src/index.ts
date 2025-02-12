import fs from 'fs';
import path from 'path';

class Logato {
  private static applyColor(message: string, color: string): string {
    return `${color}${message}\x1b[0m`;
  }

  private static formatMessage(level: string, message: string): string {
    return `[${level}] [${new Date().toISOString()}]: ${message}`;
  }

  public static log(message: string): void {
    const formatted = Logato.formatMessage('LOG', message);
    console.log(formatted);
  }

  public static info(message: string): void {
    const formatted = Logato.applyColor(Logato.formatMessage('INFO', message), '\x1b[34m');
    console.info(formatted);
  }

  public static warn(message: string): void {
    const formatted = Logato.applyColor(Logato.formatMessage('WARN', message), '\x1b[33m');
    console.warn(formatted);
  }

  public static error(message: string): void {
    const formatted = Logato.applyColor(Logato.formatMessage('ERROR', message), '\x1b[31m');
    console.error(formatted);
  }

  public static debug(message: string): void {
    const formatted = Logato.applyColor(Logato.formatMessage('DEBUG', message), '\x1b[35m');
    console.debug(formatted);
  }

  public static success(message: string): void {
    const formatted = Logato.applyColor(Logato.formatMessage('SUCCESS', message), '\x1b[32m');
    console.log(formatted);
  }

  public static file(filePath: string): void {
    try {
      // Resolve file path from the current working directory (project root)
      const resolvedPath = path.join(process.cwd(), filePath);  // Use process.cwd() to get the project root
      const contents = fs.readFileSync(resolvedPath, 'utf-8');
      console.log(contents);
    } catch (err) {
      console.error('Logato: Failed to read file:', err);
    }
  }
}

export default Logato;
