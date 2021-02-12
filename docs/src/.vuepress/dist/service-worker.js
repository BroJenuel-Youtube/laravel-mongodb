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
    "revision": "fcd7e9d9455c8ed6789f968e8c714f14"
  },
  {
    "url": "3xx/configuration.html",
    "revision": "059589f199b9b461078c191bd64bd958"
  },
  {
    "url": "3xx/create-function.html",
    "revision": "e26535c392014bbc67d13e5b22e9553b"
  },
  {
    "url": "3xx/dates.html",
    "revision": "3c4eca3db76403c51133802ea5e8eb9f"
  },
  {
    "url": "3xx/delete-function.html",
    "revision": "137034e4711ddbbb3d2d70eeccbb6dec"
  },
  {
    "url": "3xx/embeds-many.html",
    "revision": "32a48991b0dbc07ea23ef181f0a7bf6d"
  },
  {
    "url": "3xx/embeds-one.html",
    "revision": "14052ce71f20e2a953f6d30e325ced68"
  },
  {
    "url": "3xx/extending.html",
    "revision": "63107a8bbbee3f1f032eec27c3bd5de5"
  },
  {
    "url": "3xx/hasMany.html",
    "revision": "ef8081bbc474912a64b311a34304af6b"
  },
  {
    "url": "3xx/index.html",
    "revision": "d51ca6583871512ad2ece357a73e57e1"
  },
  {
    "url": "3xx/installation.html",
    "revision": "14c0cd36f6faa830966b6cc2ef69f406"
  },
  {
    "url": "3xx/read-function.html",
    "revision": "0fbff8c07f901cd78125e7de82073ce7"
  },
  {
    "url": "3xx/relationbasicusage.html",
    "revision": "bae9eaa555d7415bd7e2fdac5750d384"
  },
  {
    "url": "3xx/schema.html",
    "revision": "1b7518c4d1324d1b777f5de78cc63e9e"
  },
  {
    "url": "3xx/test.html",
    "revision": "dc1c89f324f84e0422cea47b998edce9"
  },
  {
    "url": "3xx/update-function.html",
    "revision": "72d3e6eb582c3ab14a564201bb3388c4"
  },
  {
    "url": "404.html",
    "revision": "9fe4745f00b628ce00c92337766954c7"
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
    "url": "assets/js/10.89d7326d.js",
    "revision": "862494918bfefa997fccc1d9ca3761ec"
  },
  {
    "url": "assets/js/11.014de042.js",
    "revision": "2a5ee1b1bef0bb86272a282eaa145022"
  },
  {
    "url": "assets/js/12.d5b3fd29.js",
    "revision": "82f37bbe6e35587003d09581b8dbe5d5"
  },
  {
    "url": "assets/js/13.0d868411.js",
    "revision": "b7874624f0b1169a5008f530f92467ae"
  },
  {
    "url": "assets/js/14.2fbeee2c.js",
    "revision": "c60bfbf0b083451558ec8abcb0aac235"
  },
  {
    "url": "assets/js/15.68382e4a.js",
    "revision": "e656e3ffc265a0d1a0168157e41c473a"
  },
  {
    "url": "assets/js/16.0e8d4694.js",
    "revision": "0da9625fecbf7eb2432ac2734b9ca529"
  },
  {
    "url": "assets/js/17.b983a892.js",
    "revision": "02e9a7e20377effe7f024ee9193639d0"
  },
  {
    "url": "assets/js/18.f4e9f865.js",
    "revision": "65adcc3a9997a04a45e487dddbc7bfb7"
  },
  {
    "url": "assets/js/19.94e148a3.js",
    "revision": "1845e3ec2b04a56624266327e9a4c426"
  },
  {
    "url": "assets/js/2.565aba24.js",
    "revision": "fe7c05bc3d8a435a701359ed0199e7cd"
  },
  {
    "url": "assets/js/20.cc7a7bac.js",
    "revision": "efecaa834b7f99b1ca06f1ffb63b687d"
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
    "url": "assets/js/8.ed4b4f96.js",
    "revision": "ee1d8db92e98faea011fdb2ace0fa3e3"
  },
  {
    "url": "assets/js/9.529dea73.js",
    "revision": "9c84188b3e5e066f949afd79aabdb231"
  },
  {
    "url": "assets/js/app.337a1175.js",
    "revision": "45ee0df2833e1e23495aebe6ab4b9562"
  },
  {
    "url": "index.html",
    "revision": "7a7ff5049735bbf324da0b2da558bf58"
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
