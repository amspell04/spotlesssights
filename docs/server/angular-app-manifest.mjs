
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/spotlesssights/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/spotlesssights"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27221, hash: '90855e74cba348adaf9817470f94fb591ff58f870cd968a64e490f25bacf4771', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 20797, hash: '81638e97fe0daa5d37cd65f31ec55e8822073c3818a9d3f45fa937bc0b217a41', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48488, hash: '001eff666200e81a547d86e94dc0e866bc13c23364ebb3b300d993f06c097159', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-36AW6TKX.css': {size: 6979, hash: 'vY6tjD/ce7M', text: () => import('./assets-chunks/styles-36AW6TKX_css.mjs').then(m => m.default)}
  },
};
