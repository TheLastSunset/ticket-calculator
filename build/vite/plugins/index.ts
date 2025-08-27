/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */

import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { ConfigSvgIconsPlugin } from './svgIcons';
import { AutoRegistryComponents } from './component';
import { AutoImportDeps } from './autoImport';
import { ConfigMockPlugin } from './mock';
import { ConfigCompressPlugin } from './compress';
import { ConfigPagesPlugin } from './pages';
import { ConfigRestartPlugin } from './restart';
import { ConfigProgressPlugin } from './progress';
import { ConfigEruda } from './eruda';
import { ConfigImageminPlugin } from './imagemin';
import { ConfigVisualizerConfig } from './visualizer';
import basicSsl from '@vitejs/plugin-basic-ssl';

export function createVitePlugins(env: ViteEnv, isBuild: boolean) {
  const { VITE_USE_MOCK, VITE_USE_ERUDA, VITE_USE_COMPRESS, VITE_USE_REPORT, VITE_USE_HTTPS } = env;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
  ];

  // 自动按需引入组件
  vitePlugins.push(AutoRegistryComponents());

  // 自动按需引入依赖
  vitePlugins.push(AutoImportDeps());

  // 自动生成路由
  vitePlugins.push(ConfigPagesPlugin());

  // 监听配置文件改动重启
  vitePlugins.push(ConfigRestartPlugin());

  // 构建时显示进度条
  vitePlugins.push(ConfigProgressPlugin());

  // eruda
  if (VITE_USE_ERUDA) {
    vitePlugins.push(ConfigEruda());
  }

  // rollup-plugin-visualizer
  if (VITE_USE_REPORT) {
    vitePlugins.push(ConfigVisualizerConfig());
  }

  // vite-plugin-mock
  if (VITE_USE_MOCK) {
    vitePlugins.push(ConfigMockPlugin(isBuild));
  }

  // vite-plugin-svg-icons
  vitePlugins.push(ConfigSvgIconsPlugin(isBuild));

  if (VITE_USE_HTTPS) {
    vitePlugins.push(basicSsl());
  }

  if (isBuild) {
    // vite-plugin-imagemin
    vitePlugins.push(ConfigImageminPlugin());

    // 开启.gz压缩  rollup-plugin-gzip
    if (VITE_USE_COMPRESS) {
      vitePlugins.push(ConfigCompressPlugin());
    }
  }

  return vitePlugins;
}
