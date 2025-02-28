import { defineNuxtModule } from '@nuxt/kit';
import { resolve } from 'path';

export default defineNuxtModule({
    meta: {
        name: 'blogPost',
        configKey: 'blogPost',
    },

    setup(moduleOptions, nuxt) {
        const themeDir = resolve(__dirname, '..');

        nuxt.hook('pages:extend', (pages) => {
            pages.push({
                name: 'blogPostList',
                path: '/blog-post/list',
                file: resolve(themeDir, 'blogPost/pages/list/List.vue'),
            });
        });

        nuxt.hook('pages:extend', (pages) => {
            pages.push({
                name: 'blogPostRegister',
                path: '/blog-post/register',
                file: resolve(themeDir, 'blogPost/pages/register/Register.vue'),
            });
        });

        nuxt.hook('imports:dirs', (dirs) => {
            dirs.push(resolve(__dirname, 'store'));
        });
    },
});

