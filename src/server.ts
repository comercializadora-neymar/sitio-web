import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import { CSP_NONCE } from '@angular/core';
import express from 'express';
import { join } from 'node:path';
import crypto from 'node:crypto';
import helmet from 'helmet';
import compression from 'compression';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();

/**
 * Middleware to generate a unique nonce for each request.
 */
app.use((req, res, next) => {
  res.locals['nonce'] = crypto.randomBytes(16).toString('base64');
  next();
});

// Security Headers
app.use((req, res, next) => {
  const nonce = res.locals['nonce'] as string;
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'script-src': ["'self'", 'maps.googleapis.com', 'www.google.com', `'nonce-${nonce}'`, "'unsafe-inline'"],
        'script-src-attr': ["'self'", "'unsafe-inline'"],
        'style-src': ["'self'", 'fonts.googleapis.com', "'unsafe-inline'"],
        'style-src-attr': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'", 'data:', 'maps.gstatic.com', 'maps.googleapis.com', '*.google.com', 'inline:'],
        'font-src': ["'self'", 'fonts.gstatic.com', 'data:'],
        'connect-src': ["'self'", '*.googleapis.com', 'maps.googleapis.com', 'localhost:*', 'ws://localhost:*'],
        'frame-src': ["'self'", 'www.google.com'],
      },
    },
    crossOriginOpenerPolicy: { policy: 'same-origin' },
  })(req, res, next);
});

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
  const nonce = res.locals['nonce'] as string;
  angularApp
    .handle(req, {
      providers: [{ provide: CSP_NONCE, useValue: nonce }],
    })
    .then(async (response) => {
      if (!response) {
        return next();
      }

      // Intercept the response to inject the nonce into scripts that Angular might have missed
      // (e.g., event dispatch contract scripts from withEventReplay)
      const html = await response.text();
      const updatedHtml = html
        .replace(
          /<script(\s+type="text\/javascript")?\s+id="ng-event-dispatch-contract">/g,
          `<script$1 id="ng-event-dispatch-contract" nonce="${nonce}">`,
        )
        .replace(/<script>(window\.__jsaction_bootstrap)/g, `<script nonce="${nonce}">$1`);

      res.set('Content-Type', 'text/html');
      res.send(updatedHtml);
    })
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
