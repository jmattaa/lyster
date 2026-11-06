import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
    output: 'static',
    site: 'https://jmattaa.github.io',
    base: '/lyster',
    build: {
        format: 'directory',
    },
    vite: {
        plugins: [tailwindcss()],
        server: {
            allowedHosts: ["jmattaa.local"]
        }
    },
});
