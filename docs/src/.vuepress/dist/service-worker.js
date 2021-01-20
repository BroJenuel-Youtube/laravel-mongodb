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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "2xx/index.html",
    "revision": "c00e3cc138f8a7e71f93169b26c06a5b"
  },
  {
    "url": "3xx/configuration.html",
    "revision": "c215239cd9d015f486f53ad2adf52a6c"
  },
  {
    "url": "3xx/create-function.html",
    "revision": "55961829485e4520b2dcc381c8267826"
  },
  {
    "url": "3xx/dates.html",
    "revision": "da753636886c833bec0c1d2570ff1580"
  },
  {
    "url": "3xx/delete-function.html",
    "revision": "5fae50f4c07e76737e94253162eee983"
  },
  {
    "url": "3xx/embeds-many.html",
    "revision": "ff19ade86f1eab36bfadd46a9b3724c9"
  },
  {
    "url": "3xx/embeds-one.html",
    "revision": "32b6ee90cf35a4a569df6dca9bc335a6"
  },
  {
    "url": "3xx/extending.html",
    "revision": "def485fd09d54e7a31ef2207f09d7c9b"
  },
  {
    "url": "3xx/hasMany.html",
    "revision": "3a26b919795b8cd4b6c45874028801e3"
  },
  {
    "url": "3xx/index.html",
    "revision": "a23cf8efeb2b763d123eb4368a019944"
  },
  {
    "url": "3xx/installation.html",
    "revision": "d4240729370ea6edbdcde6dd31314c0b"
  },
  {
    "url": "3xx/read-function.html",
    "revision": "b67a2ad3bd502942dcc88bfb685e2fc2"
  },
  {
    "url": "3xx/relationbasicusage.html",
    "revision": "e1107945cbd260181babd874757c369f"
  },
  {
    "url": "3xx/schema.html",
    "revision": "041e4be3fbe3c8ee14597b48cdc0bb02"
  },
  {
    "url": "3xx/test.html",
    "revision": "25eb7f75e8ccef0fb2d959dfcb111aca"
  },
  {
    "url": "3xx/update-function.html",
    "revision": "f724f476f87a37ff72261a492fed5321"
  },
  {
    "url": "404.html",
    "revision": "8b9544864651c0a7160f4abf4a3558b8"
  },
  {
    "url": "assets/css/0.styles.2f7e57cd.css",
    "revision": "e17c515735b36851d82feba383959153"
  },
  {
    "url": "assets/favicons/llm.png",
    "revision": "7ad7ff99f0a85592f9b3497f54b644b7"
  },
  {
    "url": "assets/img/icons/android-chrome-192x192.png",
    "revision": "062cf6aab2094ccc13a25da5759167e3"
  },
  {
    "url": "assets/img/icons/android-chrome-512x512.png",
    "revision": "b193ea15169ad730f0464478226f83b6"
  },
  {
    "url": "assets/img/icons/android-chrome-maskable-192x192.png",
    "revision": "fd8af56581dbe23c462c7636cf30e261"
  },
  {
    "url": "assets/img/icons/android-chrome-maskable-512x512.png",
    "revision": "e05b6a7c55715fcbf749a0be41e0f31f"
  },
  {
    "url": "assets/img/icons/apple-touch-icon-120x120.png",
    "revision": "da5575a71de1a9f0f6b31ac00f6b708e"
  },
  {
    "url": "assets/img/icons/apple-touch-icon-152x152.png",
    "revision": "482dc3bfade1a7119d4e96d759ccb41b"
  },
  {
    "url": "assets/img/icons/apple-touch-icon-180x180.png",
    "revision": "5ba5ef1dd87193fd7a18ae147041a632"
  },
  {
    "url": "assets/img/icons/apple-touch-icon-60x60.png",
    "revision": "483c3856deaa50c1f91f3b5b34cbc175"
  },
  {
    "url": "assets/img/icons/apple-touch-icon-76x76.png",
    "revision": "cd8fa1d66792a02a23b5bdfc599b0610"
  },
  {
    "url": "assets/img/icons/apple-touch-icon.png",
    "revision": "fdcaf24788a469d669250408d49be78b"
  },
  {
    "url": "assets/img/icons/favicon-16x16.png",
    "revision": "71b99543bcc96b24f4240ed9c4dd646b"
  },
  {
    "url": "assets/img/icons/favicon-32x32.png",
    "revision": "3b43ddaaecfa3e2af79d88658632324c"
  },
  {
    "url": "assets/img/icons/msapplication-icon-144x144.png",
    "revision": "ae949b3c98fa87c65910caa1c03dd3e0"
  },
  {
    "url": "assets/img/icons/mstile-150x150.png",
    "revision": "00d78c39d601567bcd9f4cc128e025f8"
  },
  {
    "url": "assets/img/icons/safari-pinned-tab.svg",
    "revision": "577d4eb6417bbf4d394775b457f224c2"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "e369c41ed7ffc74e54fc10f94dec0e5e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1bfff3e6.js",
    "revision": "269c44d5123d50098fd4224e19201980"
  },
  {
    "url": "assets/js/11.15cc72cf.js",
    "revision": "d7a0e4956f4d14c3ed57b66ca7634e05"
  },
  {
    "url": "assets/js/12.da106aa5.js",
    "revision": "2a63b3f8f9a137a06ad06822833080f8"
  },
  {
    "url": "assets/js/13.ecdb2476.js",
    "revision": "855b131c1f0c6c35c93f2f61216b02d4"
  },
  {
    "url": "assets/js/14.38fd5f47.js",
    "revision": "10d98a026b61e53b2271d6d23265115b"
  },
  {
    "url": "assets/js/15.6011c17c.js",
    "revision": "54de222af6284cfd0e4d954ddae855e4"
  },
  {
    "url": "assets/js/16.3f8170de.js",
    "revision": "9ef52dcf06bf03540718714fc5404e6e"
  },
  {
    "url": "assets/js/17.e24800ea.js",
    "revision": "15e291890bd36f4a91f9e827150fe503"
  },
  {
    "url": "assets/js/18.f4e9f865.js",
    "revision": "65adcc3a9997a04a45e487dddbc7bfb7"
  },
  {
    "url": "assets/js/19.35dd3e02.js",
    "revision": "82c991c32588fc0969e351dcbac84ded"
  },
  {
    "url": "assets/js/2.1d23b361.js",
    "revision": "2ec1f03c6bf6c8d4470d8c9a7c12c97c"
  },
  {
    "url": "assets/js/20.5108949b.js",
    "revision": "53ef81173721699dfc8b10a525e8d4ec"
  },
  {
    "url": "assets/js/21.7b20426e.js",
    "revision": "db69018848f0eb0b3203502626b4df27"
  },
  {
    "url": "assets/js/22.009318ed.js",
    "revision": "ade502a0ae298ad47efe4d1909fd38e3"
  },
  {
    "url": "assets/js/23.a29a4356.js",
    "revision": "2bb213aa1d0b89341125d53192b3cfd3"
  },
  {
    "url": "assets/js/24.605af778.js",
    "revision": "256d6caf9e36ea3aa2aa7ad4fa11ceb7"
  },
  {
    "url": "assets/js/3.5cf20c5f.js",
    "revision": "203d46c7a3d6b36dec7fa9b505106e9c"
  },
  {
    "url": "assets/js/4.3d8de8a9.js",
    "revision": "eecf71cdf3191c85d9cd0d7f618ddb99"
  },
  {
    "url": "assets/js/5.d2a1603c.js",
    "revision": "74ef8fad5b7638a65116faef660a0232"
  },
  {
    "url": "assets/js/6.78b7e4da.js",
    "revision": "8b375c94f9fb61d10a01ff4c9d544096"
  },
  {
    "url": "assets/js/7.596b4dbb.js",
    "revision": "f77428752405eb6f261433bad31592f1"
  },
  {
    "url": "assets/js/8.b98ad66c.js",
    "revision": "4082fac8ff39a77084e6f96a102bcf45"
  },
  {
    "url": "assets/js/9.e2029b6e.js",
    "revision": "0a2b96268923715ff6e1956a44e9a0f0"
  },
  {
    "url": "assets/js/app.d005a35a.js",
    "revision": "a78669f4886cb881c4211baa67c19c62"
  },
  {
    "url": "index.html",
    "revision": "c5da5731088444ded6181bebdcb39d59"
  }
].concat(self.__precacheManifest || []);
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
