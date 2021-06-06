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
    "revision": "101099f31c29139d62ac3802e93b00ce"
  },
  {
    "url": "3xx/configuration.html",
    "revision": "a0ba81a9a30ad1c963e0bc90e592218d"
  },
  {
    "url": "3xx/create-function.html",
    "revision": "a0b4cc33210e3df3d3b499fa266f3b0c"
  },
  {
    "url": "3xx/dates.html",
    "revision": "e5c709542f9ea8e20d1ea9b9e577aba4"
  },
  {
    "url": "3xx/delete-function.html",
    "revision": "fdf7a42f7b7db2de2967fd48d790e3ff"
  },
  {
    "url": "3xx/embeds-many.html",
    "revision": "940094e0b790bb1eab3ac7ebc64729b9"
  },
  {
    "url": "3xx/embeds-one.html",
    "revision": "953b4b7066f961ba6962434fedfe6968"
  },
  {
    "url": "3xx/extending.html",
    "revision": "aea0cd853d7999e3d394f6b75575e589"
  },
  {
    "url": "3xx/hasMany.html",
    "revision": "f034821fa5d1cca4107eae7e45db624a"
  },
  {
    "url": "3xx/index.html",
    "revision": "b6c2e8b67296ad0a1c7415438701d710"
  },
  {
    "url": "3xx/installation.html",
    "revision": "7668063a7f54a4aa7a8375c945bf0977"
  },
  {
    "url": "3xx/read-function.html",
    "revision": "6abfae1d00bcf8c64ce00e1dbba75336"
  },
  {
    "url": "3xx/relationbasicusage.html",
    "revision": "3f7abff67e864baf492ae564144f96bf"
  },
  {
    "url": "3xx/schema.html",
    "revision": "fb5d40252ef5c437f8e6ad69e0669356"
  },
  {
    "url": "3xx/test.html",
    "revision": "81820d5e4b2e768bd7f66af0c4ecc73b"
  },
  {
    "url": "3xx/update-function.html",
    "revision": "2a75b0d8dd195f1d51a6b151de27f1af"
  },
  {
    "url": "404.html",
    "revision": "2ee97ca3f98665252289438345b645cf"
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
    "url": "assets/js/10.34944311.js",
    "revision": "0117d265ca3362324d5cdfcd501ee33e"
  },
  {
    "url": "assets/js/11.095831e5.js",
    "revision": "acbb3c2623f9d6594c3e70351bbaa9d6"
  },
  {
    "url": "assets/js/12.f7cd8a67.js",
    "revision": "6fd67d87bea5a128cddb7a5b7fca7511"
  },
  {
    "url": "assets/js/13.cfc23acf.js",
    "revision": "de84cbd1b9e0d2e9821b74ac107892a7"
  },
  {
    "url": "assets/js/14.5b10010c.js",
    "revision": "bd8b6b5bc057354257c09ee8f08d2cea"
  },
  {
    "url": "assets/js/15.7296ce07.js",
    "revision": "05bfba62f42ca65807d827c8cf22a831"
  },
  {
    "url": "assets/js/16.4142779c.js",
    "revision": "1bdc702f26ac7ea6a65a91c5f9ea3056"
  },
  {
    "url": "assets/js/17.507c6ac0.js",
    "revision": "6c06e62a02f623291112f0c8a05b2938"
  },
  {
    "url": "assets/js/18.11821264.js",
    "revision": "ec911ffbb6cbfd2d1c6c8cbfea9c1fb2"
  },
  {
    "url": "assets/js/19.f138d426.js",
    "revision": "1292ee7db865fb4ccf4f0c9542f6f1cf"
  },
  {
    "url": "assets/js/2.b0d7233a.js",
    "revision": "64ed79e4768ecb5f7335e1ced31706d6"
  },
  {
    "url": "assets/js/20.8ba098fc.js",
    "revision": "9cbd990681b189980478e5abdcb224ac"
  },
  {
    "url": "assets/js/21.fcf2cfd9.js",
    "revision": "3b05cc0c07895ab0f128ce42473e9311"
  },
  {
    "url": "assets/js/22.928024c6.js",
    "revision": "78c6637be3d01033463db4be3eb2d447"
  },
  {
    "url": "assets/js/23.75df3434.js",
    "revision": "eb7505485327d9b5a5502b83924e05f8"
  },
  {
    "url": "assets/js/24.a477b84f.js",
    "revision": "b2db6292f75c908eef45518c987c9529"
  },
  {
    "url": "assets/js/3.b80e39f2.js",
    "revision": "2abe01a79b00853f4ac8d5eb4136c2f9"
  },
  {
    "url": "assets/js/4.cbb334d4.js",
    "revision": "43c64c73b93f1a5d1885691685543915"
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
    "url": "assets/js/7.e32abb76.js",
    "revision": "2a0db62c22b8cca72cd5f349028bee82"
  },
  {
    "url": "assets/js/8.04495c9f.js",
    "revision": "bc9eeff7a889fbb5b0150aebc11035a5"
  },
  {
    "url": "assets/js/9.dc6d4f65.js",
    "revision": "9cf54adc195b1c885746e0201f509397"
  },
  {
    "url": "assets/js/app.09f313c4.js",
    "revision": "66ba11d112548c1bddb928282430a7a7"
  },
  {
    "url": "index.html",
    "revision": "721d17c0b2acdd208f34ade15c80a594"
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
