# Simple Logger (logato) 📜

![logato banner](https://res.cloudinary.com/dtoyohjdm/image/upload/v1739257843/logato.png)

A simple, fast, and minimal logger for Node.js 🚀. Perfect for logging information, warnings, errors, and more with ease and speed!

<!-- npm Downloads Badge -->
![NPM Downloads](https://img.shields.io/npm/d18m/logato)


## Installation 🚀

### npm
```bash
npm install logato
```

### yarn
```bash
yarn add logato
```

### pnpm
```bash
pnpm add logato
```

### bun
```bash
bun add logato
```

### Install from GitHub registry:
1. Ensure you have set up GitHub Packages authentication.
2. Run the following command to install from GitHub:
```bash
npm install @devnshankar/logato@0.0.3 --registry=https://npm.pkg.github.com 
```

## Usage 📄

Once installed, you can use the logger in your Node.js project.

```javascript
import logato from 'logato';

// Logging to console
logato.log('This is a log message');
logato.info('This is an info message');
logato.warn('This is a warning message');
logato.error('This is an error message');
logato.debug('This is a debug message');
logato.success('Operation was successful!');

// Print contents of a file
// make sure the assets folder is in the root of the project 
logato.file('./assets/data.txt');
```

### Methods:
- `logato.log(message)` - Logs a generic message
- `logato.info(message)` - Logs an informational message
- `logato.warn(message)` - Logs a warning message
- `logato.error(message)` - Logs an error message

## Features ✨
- **Simple**: Just a few lines of code to get started.
- **Fast**: Optimized for speed, ideal for production.
- **Minimal**: No unnecessary features—just what you need.

## License 📝
MIT License.
