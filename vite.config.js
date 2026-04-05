import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    // GitHub Pages base URL - change 'saveitbro' to your repo name if different
    base: process.env.GITHUB_PAGES === 'true' ? '/saveitbro/' : '/',
    plugins: [
        react(),
        {
            name: 'spa-fallback',
            configureServer: function (server) {
                return function () {
                    server.middlewares.use(function (req, res, next) {
                        // Skip if it's a static asset with file extension or is a known API route
                        if (req.url.match(/\.(js|css|json|png|svg|ico|webmanifest|html)($|\?)/)) {
                            return next();
                        }
                        // Skip API routes to backend
                        if (req.url.startsWith('/api') ||
                            req.url.startsWith('/fetch-info') ||
                            req.url.startsWith('/download') ||
                            req.url.startsWith('/submit-issue')) {
                            return next();
                        }
                        // For all other GET requests, serve index.html for React Router to handle
                        if (req.method === 'GET') {
                            req.url = '/';
                        }
                        next();
                    });
                };
            }
        }
    ],
    server: {
        port: 3000,
    },
});
