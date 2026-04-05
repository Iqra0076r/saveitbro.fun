import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
var spaFallback = function () { return ({
    name: 'spa-fallback',
    configureServer: function (server) {
        return function () {
            server.middlewares.use(function (req, res, next) {
                // Check if the request is for a file/asset
                if (/\.[a-z\d]+($|\?)/i.test(req.url) || req.url.startsWith('/node_modules')) {
                    return next();
                }
                // Skip API routes
                if (req.url.startsWith('/api') || req.url.startsWith('/fetch-info')) {
                    return next();
                }
                // Rewrite all other requests to index.html for SPA routing
                req.url = '/index.html';
                return next();
            });
        };
    }
}); };
export default defineConfig({
    base: process.env.GITHUB_PAGES === 'true' ? '/saveitbro/' : '/',
    plugins: [
        react(),
        spaFallback(),
    ],
    server: {
        port: 3000,
    },
});
