import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/dist/vite.js'
import Components from 'unplugin-vue-components/dist/vite.js'
import {TDesignResolver} from 'unplugin-vue-components/dist/resolvers.js'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [TDesignResolver({
                library: 'vue-next'
            })],
        }),
        Components({
            resolvers: [TDesignResolver({
                library: 'vue-next'
            })]
        })
    ],
})
