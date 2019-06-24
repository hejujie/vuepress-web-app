/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "93ace1e064b603d7f65744f342d8bf0b"
  },
  {
    "url": "assets/css/0.styles.a6229f19.css",
    "revision": "3338b641ff6aa711a48b388099497403"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.9ae675b4.js",
    "revision": "da68ef8f48354f09acc4b952d41b379d"
  },
  {
    "url": "assets/js/10.5ae4662e.js",
    "revision": "44b01f4fc1e2586982a25de2424ff18a"
  },
  {
    "url": "assets/js/11.a4f8c3cc.js",
    "revision": "d782a6bea532505685b4b1ca9b405fdf"
  },
  {
    "url": "assets/js/12.ce11e7ca.js",
    "revision": "45b5465ddd578eba289858fc44a3b656"
  },
  {
    "url": "assets/js/13.ee2af3d4.js",
    "revision": "a87864dd0caef7c088a216dac76de6a8"
  },
  {
    "url": "assets/js/14.670a824e.js",
    "revision": "d4efbdb556436f66059f2f3f2928caf5"
  },
  {
    "url": "assets/js/15.84a56836.js",
    "revision": "8affc5c95bdd549fc8fd36dd24f557ab"
  },
  {
    "url": "assets/js/16.3677bc96.js",
    "revision": "1ff9c64f5c040b991a8737fa55d8d9a7"
  },
  {
    "url": "assets/js/17.51d3f652.js",
    "revision": "7e2e0c1e8d62ae02fa59747ba26709dd"
  },
  {
    "url": "assets/js/18.6a9a3f15.js",
    "revision": "0fd1a2b00328a970507ce1d6c380dfac"
  },
  {
    "url": "assets/js/19.83cfb73c.js",
    "revision": "17069d5e6f79e874c00fec9b0c78692f"
  },
  {
    "url": "assets/js/2.2edfbcee.js",
    "revision": "bbb17b0c06bd845a659d1ec938d0576a"
  },
  {
    "url": "assets/js/20.ce3e66c0.js",
    "revision": "01fb6a3ef9364578a75e49a667f0d626"
  },
  {
    "url": "assets/js/21.5c2ab4e2.js",
    "revision": "f381e0d04cfb55610fe3e406838467f2"
  },
  {
    "url": "assets/js/22.5db2285c.js",
    "revision": "51d4deb454c7389eaa2cdfbb1a31c8d2"
  },
  {
    "url": "assets/js/23.6734ad96.js",
    "revision": "b83c70a4a06e5c902cd3f9015bda0829"
  },
  {
    "url": "assets/js/24.e488cc4d.js",
    "revision": "bae86121627449fa488f39ffc27d5def"
  },
  {
    "url": "assets/js/25.cfd33d03.js",
    "revision": "f619c8d73f95d76dfeb2381d3aeffe0f"
  },
  {
    "url": "assets/js/26.052c72cf.js",
    "revision": "4e1a3e8934526fb664a7d113858459eb"
  },
  {
    "url": "assets/js/27.19bc940e.js",
    "revision": "3a530ba1fa6d2a484ef8ba760036a848"
  },
  {
    "url": "assets/js/28.35565430.js",
    "revision": "6d625f6a7ca4f437e279b5a213263169"
  },
  {
    "url": "assets/js/29.1792cc7f.js",
    "revision": "c9f57d28c6e3142a5d9b3661a1ae09e1"
  },
  {
    "url": "assets/js/3.dcea37e2.js",
    "revision": "6413e3dc54cbd30aea88dd0698bf897d"
  },
  {
    "url": "assets/js/30.32750f93.js",
    "revision": "9ca5e911320f206cf4abc32d6dc241b3"
  },
  {
    "url": "assets/js/31.dc1577ea.js",
    "revision": "29ab68553ceb616b96f59863ffe034c2"
  },
  {
    "url": "assets/js/32.f7d3428f.js",
    "revision": "c3c20f11b2c06ccfcae9edc2e8ab5f3a"
  },
  {
    "url": "assets/js/33.ec59ba3c.js",
    "revision": "7e1110caa432341b8f48897b60e3432d"
  },
  {
    "url": "assets/js/34.b0fb11af.js",
    "revision": "8bde9cc1a8f8ef244d73efd0a3e0d2d7"
  },
  {
    "url": "assets/js/35.8fbb75a7.js",
    "revision": "96bbd8a99c961761c13a3ed28a7fbf7a"
  },
  {
    "url": "assets/js/36.45eff5b3.js",
    "revision": "14256fcc876841126cb23e2ba9896864"
  },
  {
    "url": "assets/js/37.f35e5f8f.js",
    "revision": "92066c225782977dc2f6787ca8f0b176"
  },
  {
    "url": "assets/js/38.586867dd.js",
    "revision": "6693ac1ef4b7334b0028145bc539e25b"
  },
  {
    "url": "assets/js/39.1e6b096c.js",
    "revision": "b345105586f8d88b92ea359ac145a2d3"
  },
  {
    "url": "assets/js/5.6b8fbb79.js",
    "revision": "80fa0702e45466ef0c4baf55e1879454"
  },
  {
    "url": "assets/js/6.8f9f667b.js",
    "revision": "55c3e2d95d1c6ef4b906c57b4e319ea2"
  },
  {
    "url": "assets/js/7.04be6fc1.js",
    "revision": "04f3ef14af1938e2e0e2907c8eabaf7b"
  },
  {
    "url": "assets/js/8.5bc15774.js",
    "revision": "9966710cb67048daccc25312c8c7d209"
  },
  {
    "url": "assets/js/9.c905988f.js",
    "revision": "df96929c7695b1d0567f133e8826c10c"
  },
  {
    "url": "assets/js/app.28b8cc31.js",
    "revision": "a699a820b5903a2b089ea327d8ca49ef"
  },
  {
    "url": "assets/js/vendors~docsearch.919c6b64.js",
    "revision": "564de09df6e552159a1a398ba948420a"
  },
  {
    "url": "en/application/index.html",
    "revision": "6efa488bada711fc768fe7df6e7764b7"
  },
  {
    "url": "en/index.html",
    "revision": "ef20bc1468104318f873d6bd63d062b2"
  },
  {
    "url": "google21c733509a589aaa.html",
    "revision": "dc170db798841bd226dabf5217b26a1f"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "bf9fc4406a3840645c9b762d8c0fb7ad"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "35565751c6b628c5de1f6f4ba2732459"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "d8f7e1c5df51f575589f26b3cbfff706"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "cbcbd08d98eabb259fcb16a72ef268d7"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2b04eca1ae92a244149afd5abeca1ce9"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "6808484c1b5067a9f6f32d534fd11b7c"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "0d5a26850f76ad55786b29467a406dff"
  },
  {
    "url": "images/MG-1P.png",
    "revision": "b33194b1fcd1a81287fee93e49e43c86"
  },
  {
    "url": "index.html",
    "revision": "3e1adf4fa53c1611de2520c5d0fb8b63"
  },
  {
    "url": "logo.png",
    "revision": "dfaa3c3e7a2d84fe769b20cb75c8603d"
  },
  {
    "url": "logo.svg",
    "revision": "0bc11315eb4ecc8b732764361dbe1302"
  },
  {
    "url": "zh/application/index.html",
    "revision": "36724cdfe22fa82972a25deadc2b123d"
  },
  {
    "url": "zh/article/awesome-quickapp.html",
    "revision": "033fe99618adf260088e6723b73f82a3"
  },
  {
    "url": "zh/article/beautify-vue-by-eslint-and-prettier.html",
    "revision": "b88951fa1b64b1af4acf2259ac844beb"
  },
  {
    "url": "zh/article/develop-quick-app-experience-notes.html",
    "revision": "1c5969d4df0fbb8b4c9332d87f86b336"
  },
  {
    "url": "zh/article/how-to-elegantly-handle-quickapp-request.html",
    "revision": "76d4ef2975d684ed7465debcb9c2f6dc"
  },
  {
    "url": "zh/article/index.html",
    "revision": "f66a721e5464f5906ac4a24285a75455"
  },
  {
    "url": "zh/article/quickapp-boilerplate-template.html",
    "revision": "04b03dfaf5d04e07d13bd54adb6c697c"
  },
  {
    "url": "zh/article/talk-about-my-blogs.html",
    "revision": "0a78f560cdbe4c66db692e15b2fae878"
  },
  {
    "url": "zh/article/talk-about-nice-links.html",
    "revision": "b882829ed0d0ded3de71617ab87cbae9"
  },
  {
    "url": "zh/article/top-100-front-end-awesome-awesome-list.html",
    "revision": "454c7e74b679ffd9f9ace9b8d0cd818f"
  },
  {
    "url": "zh/article/vue-webpack-boilerplate-template.html",
    "revision": "0267b404b33eb1e3f86612f21e208f08"
  },
  {
    "url": "zh/blog/csdn-blog.html",
    "revision": "8fbe4f149ccbedd9c6355419a85017b9"
  },
  {
    "url": "zh/blog/docz-blog.html",
    "revision": "cf3bbf4005b7af817375ad0a5cd97778"
  },
  {
    "url": "zh/blog/ghost-blog.html",
    "revision": "d535a80faddc9df7a5c4a17034016867"
  },
  {
    "url": "zh/blog/hexo-blog.html",
    "revision": "0102196a109bcc1ffbcc3464d639149a"
  },
  {
    "url": "zh/blog/index.html",
    "revision": "bbf60b60eacb3af5fc0f97bd04eb1828"
  },
  {
    "url": "zh/blog/jekyll-blog.html",
    "revision": "46fb7b35c2c74cb134257267fd73a57b"
  },
  {
    "url": "zh/blog/jianshu-blog.html",
    "revision": "4dae007b70f511c824428b244d1585c2"
  },
  {
    "url": "zh/blog/vuepress-blog.html",
    "revision": "191f8dcf709aabaeab3d0f0adeb706b1"
  },
  {
    "url": "zh/blog/wechat-blog.html",
    "revision": "a93c52b33583cd86f51703366c8bfda1"
  },
  {
    "url": "zh/index.html",
    "revision": "350474f4dbf66c9d9231bed42ed7b5f0"
  },
  {
    "url": "zh/recruit/index.html",
    "revision": "a9ff3869020263b370cac83aa5c45efc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
