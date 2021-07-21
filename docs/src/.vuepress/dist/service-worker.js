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
    "revision": "ce63eeb4cff7a06657db3754000e7954"
  },
  {
    "url": "3xx/guide.html",
    "revision": "cc1a34588a9bf641dc5bcd7bb8f318f3"
  },
  {
    "url": "3xx/index.html",
    "revision": "cdd638ba6e2403e460578b03d8750917"
  },
  {
    "url": "404.html",
    "revision": "678a111e7b67d823342e9abd2c4969c5"
  },
  {
    "url": "assets/css/0.styles.00b3f121.css",
    "revision": "69b9847d30bfb1dbbc88cfa0cbe2edd9"
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
    "url": "assets/js/10.9422f283.js",
    "revision": "63a47d6ee8466ad70e800b1089a11b2f"
  },
  {
    "url": "assets/js/11.d27c366d.js",
    "revision": "94a9ad614973bba027f110cf792231c3"
  },
  {
    "url": "assets/js/2.7d16e0a0.js",
    "revision": "a19f9e5afff32fafb7e0f01c645dba3d"
  },
  {
    "url": "assets/js/3.f0c43581.js",
    "revision": "1bc5a26d61c1c7524923bcd3bd56768d"
  },
  {
    "url": "assets/js/4.18e6b38d.js",
    "revision": "f7598dd58b232a68bd172c6dc92fd184"
  },
  {
    "url": "assets/js/5.4d3df407.js",
    "revision": "ec797e016f5e5557412b23fea98acbdd"
  },
  {
    "url": "assets/js/6.0991aa63.js",
    "revision": "b53cbaab26bbd34cdb51fe480c48ed94"
  },
  {
    "url": "assets/js/7.c7162488.js",
    "revision": "95dc24a0c1560ca14408241d5bbd0ec5"
  },
  {
    "url": "assets/js/8.a79b4c78.js",
    "revision": "97089976ec174972dbb08dff2a304359"
  },
  {
    "url": "assets/js/9.822b995c.js",
    "revision": "e0b50b437a0743b260729a319309cc34"
  },
  {
    "url": "assets/js/app.1e70265b.js",
    "revision": "df78ca8c4b00019399d0317306dbccb8"
  },
  {
    "url": "index.html",
    "revision": "048dd7cbca05572243a7e1b6d7ee4a0b"
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
