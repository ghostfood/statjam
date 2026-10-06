import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const SOURCE = fileURLToPath(new URL('../src/data/array-ukcharthits.json', import.meta.url));
const OUTPUT = fileURLToPath(new URL('../public/data/array-ukcharthits.min.json', import.meta.url));

function compile(logger) {
  try {
    const data = JSON.parse(readFileSync(SOURCE, 'utf8'));
    mkdirSync(dirname(OUTPUT), { recursive: true });
    const min = JSON.stringify(data);
    writeFileSync(OUTPUT, min);
    logger.info(`ukcharthits: ${data.data.length} rows -> array-ukcharthits.min.json (${(min.length / 1e6).toFixed(2)} MB)`);
  } catch (err) {
    // On a build, fail loudly; in dev, keep serving the last good file.
    throw new Error(`ukcharthits: ${SOURCE} is not valid JSON: ${err.message}`);
  }
}

export default function ukcharthits() {
  return {
    name: 'ukcharthits',
    hooks: {
      'astro:config:setup': ({ logger }) => compile(logger),
      'astro:server:setup': ({ server, logger }) => {
        server.watcher.add(SOURCE);
        server.watcher.on('change', (file) => {
          if (file !== SOURCE) return;
          try {
            compile(logger);
          } catch (err) {
            logger.error(err.message);
          }
        });
      },
    },
  };
}
