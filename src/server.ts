import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import helmet from 'helmet';
import compression from 'compression';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();

// Security Headers
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'script-src': ["'self'", "'unsafe-inline'", 'maps.googleapis.com', 'www.google.com'],
        'script-src-attr': ["'self'", "'unsafe-inline'"],
        'style-src': ["'self'", "'unsafe-inline'", 'fonts.googleapis.com'],
        'style-src-attr': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'", 'data:', 'maps.gstatic.com', 'maps.googleapis.com', '*.google.com', 'inline:'],
        'font-src': ["'self'", 'fonts.gstatic.com', 'data:'],
        'connect-src': ["'self'", '*.googleapis.com', 'maps.googleapis.com', 'localhost:*', 'ws://localhost:*'],
        'frame-src': ["'self'", 'www.google.com'],
      },
    },
    crossOriginOpenerPolicy: { policy: 'same-origin' },
  }),
);

// Compression
app.use(compression());

const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
