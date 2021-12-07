'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "fdd80bc13946e8a57abb1577fcd4e87d",
".git/config": "5b51ddf7d54eceb545a23313e77a4cb5",
".git/description": "7aec40c23547f48178e9ef8d3aca94e3",
".git/HEAD": "dcb566d75af024ab0031fee557bc75b5",
".git/hooks/applypatch-msg.sample": "c358d818d0cbd0bdf3dc379151207f50",
".git/hooks/commit-msg.sample": "f237ee62eda3a6a5662eb0516fba1f0c",
".git/hooks/post-update.sample": "6b1ada32db7a2c41968b316a09b20eb9",
".git/hooks/pre-applypatch.sample": "610c36ed32e46798467e6c7dcd13ad17",
".git/hooks/pre-commit.sample": "65eeb74f2d72f98ee8d7becf45233470",
".git/hooks/pre-push.sample": "5c3d437f483e570f9c0d8bc2b8f5320d",
".git/hooks/pre-rebase.sample": "c65aedace904f0fae4b8dafc5ad08e5e",
".git/hooks/pre-receive.sample": "c9793b6f93db47a875f02ca7ef3d6f3b",
".git/hooks/prepare-commit-msg.sample": "5f920929ada92d3ddbb6ce6feef9caf9",
".git/hooks/update.sample": "78eb5839eb79f320ce6e3708f946f5fe",
".git/index": "6f48b4a44920b71eced4b94fc6e95ad7",
".git/info/exclude": "8298222a610b393014f8848c3a8184d5",
".git/logs/HEAD": "cd4c7a3a75d34a2f8dc0cdbbe795bbde",
".git/logs/refs/heads/main": "92ec884efdc0e24444bda3b958c50576",
".git/logs/refs/remotes/origin/main": "6b6417f11509a8642a3b730702dbbab5",
".git/objects/05/b8179dd2da9980ba4f96e90e06d089e0ae08b9": "9abae28ddae00918ead62b422482febe",
".git/objects/18/38449afec6346117aff2071c8f547d27338864": "2425bbd6744d8a64e392fb89a1c80890",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/bcf1645bdda709efa389133dfe222be434d633": "cd7d5c4d2e5a097777e2a84a452bc3bd",
".git/objects/2b/aec5774e3a80a49a0f1f48895bb83cd60cb778": "8aaca834b44280fe824214cd8d9aba02",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/42/90844e697bd92a40c7cf8c67390ab7fba405b2": "70b75be55b29078131e59321b1392b25",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/58/af3c1f9385d759f1786d90e6a6ff0441e30f7d": "05bd497ad38a981e8e33f792159be4cc",
".git/objects/5b/ea053357dd0cc07c9bca145c5f8012118d91d7": "1e5879005675fbfe09c0ed41d6d566dc",
".git/objects/5e/5c45c9361431ec9f5b5d084c8d79111bbce95f": "04135cdf30576873c599b8e54543d7fb",
".git/objects/74/0b57ba50029892c79d539ecc8eb9ff233fb2a8": "197d4b1381b47948e15d5d8d747917b4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/4e163a6798aaf241ecada1ebdf7068592d36a4": "1f10b5e1b814992285ed447d592b7212",
".git/objects/7c/77776afabb9576549a08ccad67efb249b67fc2": "3d7c14f723dba14b777769d1d7e2005c",
".git/objects/7e/be2e72048c69421e097ddaa9599b487d3da928": "3b9fb3bda7ff156d7ec541a21da500bb",
".git/objects/7f/f221f69bf57b968dc7d68753dff78ba499f866": "3f3f26e993a089ab806712d3499a6839",
".git/objects/87/04dc6155f7e28de40b21b514cb8720d6b2202c": "4a552615d07727f7e38446265557abf1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/eb745f80d69e5955b32169f443ac47d907cb10": "ffc5f2dccd37d2853cbb8af9111d4e1c",
".git/objects/a6/7c5acc4a1db019cd12ec96e3e70f453ab987d6": "883af2342ba8b5efdb14e33d47be5cd2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/c442e318f3509650d8071761b78a547ec8f73b": "25c4b1e98dda58b4ae7b14898d049e01",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/6f152c15ce03b98f72f8ac7a9549ba066a4868": "6f02fec6552caeee57f992b39dee19e8",
".git/objects/b2/21a3617f0cc55c8a699d67e659da7f850755b9": "c2d2217188de2544f275a620a22ff96c",
".git/objects/b6/a629a151db4e327a10fb1b0775ac86768763bb": "adb89fc2b0f357d8ca93f74cc5a55ddc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d2/213310cc974472f6e9989ff36aa3628522805f": "bc7f1b653c66269967a3ff601465ccb3",
".git/objects/d2/2950738e92066a2f39ae17ff9fd5f18a0b7ec2": "1f436aef6a1ee8413a683bbda2d498fd",
".git/objects/da/889b90074148300e701758ef619fbfcf0fb8b3": "29545feeee80fe8d68f00a951ae73e9d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/1353b9721cb843ace5713b9f5e8379aaa66c75": "17dbfce704cae1d9b614ac7af6ddb5b4",
".git/objects/ee/63874a553c5472e682312ac0236bbfa1318cf7": "466195b582f9c34e851e1503e62f962b",
".git/objects/f6/45eda34de4b8935eb53f5bcc6561a38668feb4": "613710cf7374542d806a134cb018d38c",
".git/objects/f9/c5efc6596e54fabfe8d5d70bbc624eb39413c3": "1ac20aaba5db79555b7645dd01fd2336",
".git/objects/ff/5d644389b0c5b34a9eb2b3cef1392854bf7ab4": "967c805e1aca0b6f84ad51941c7604d0",
".git/refs/heads/main": "d8636b2389d922d3e6e6e8a6d972d530",
".git/refs/remotes/origin/main": "d8636b2389d922d3e6e6e8a6d972d530",
"assets/AssetManifest.json": "67dc65a8ba71fda5e0471618658a6404",
"assets/assets/icons/facebook.png": "e4700f800a509a5cb70358ce98044b85",
"assets/assets/icons/google.png": "09a3bb83429e0db73c06131c94c6de5e",
"assets/assets/pictures/authBackground.jpg": "e0a144d34c5a9996eaf3e220efe379c0",
"assets/assets/pictures/no-avatar.png": "9b7428a348821a6e0c150499c0ae0625",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "0518e3e8fe7aae75035b33a92feab71a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1af2d41fc116253cbb110ccd3f7b9272",
"/": "1af2d41fc116253cbb110ccd3f7b9272",
"main.dart.js": "583550cfa090d061a4645b1965918109",
"manifest.json": "ade40baeb11cba39286e54e8286bbfba",
"version.json": "2e47a2507c9f8af85e5caaaa5679c998"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
