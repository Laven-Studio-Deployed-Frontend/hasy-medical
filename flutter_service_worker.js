'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a536b3c095536d4d9c73b69b2b226909",
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
".git/index": "c2fce3236b0f632c17da0368579db516",
".git/info/exclude": "8298222a610b393014f8848c3a8184d5",
".git/logs/HEAD": "8771b3b8d71f95d14f1672954af3ec3a",
".git/logs/refs/heads/main": "8564a2ae924bb801358f27f309849725",
".git/logs/refs/remotes/origin/main": "d12d1845d16326d864d734b42d9d0cd3",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/01/5e312dee854a8a973a372d584ddce7bf9acd8e": "92d0ff43393011aaa3380f0f66673387",
".git/objects/02/6eb50a41518c289df84f8a36dc0f821ccaeda4": "a81e8d6aa4ce6bb1c785795060d92937",
".git/objects/03/d65c5ed91d0847ec25f59c73bfdc47f0d35099": "0ded357ad8f7c49996983c512c7c9b8e",
".git/objects/05/b8179dd2da9980ba4f96e90e06d089e0ae08b9": "9abae28ddae00918ead62b422482febe",
".git/objects/06/3195203f796c8ecc003fd5765678ce650d71dc": "bebe78e5eadb6e05ea2d98656227c890",
".git/objects/06/af9e59480e0a77458d522ce2efc4836566e120": "b31109d22be31774ef13fe4e6ade9b54",
".git/objects/06/cb1bbe4afd2334877ef035f0e4384952ea0bc0": "687554b60d9b2e8d38d33b6f57e1b688",
".git/objects/11/0e13f9c17e01a85e0ab869e456c9f8099ac427": "8c369b36f9beb9138b0cdfb4a6250188",
".git/objects/11/57c466e2af53586996d8ac84fa32f7b4647e27": "3cb49fbf25daff1c387035c8bccdb6ac",
".git/objects/12/8d62b294ec113430725ea8deacd4d3ab977a3d": "6980387e70944cad17e210f085590d34",
".git/objects/15/0e343f68708cbb7d5bf82b5a28d6e3711327b5": "ecb0aa6f21fdcc30f7d7c18ba1d3ce49",
".git/objects/17/774c1f9fe470952ba14c81f50b7db5f1abe44c": "4fa36fd56635d1a9b65b0801d7d27e4e",
".git/objects/18/38449afec6346117aff2071c8f547d27338864": "2425bbd6744d8a64e392fb89a1c80890",
".git/objects/19/4b960f38460d58fd5bf5ecd84dcec204a3effd": "6afd39751a5d6ca238ff1eb487180d72",
".git/objects/1f/145587d7229d3a73ace488d1ead2d38ff931c1": "5f6b01a2b2996f5ec8c081dcca3080e7",
".git/objects/20/2b7221b78841a8369682aad9ecb10b41d1f910": "43db4d6908bdd30d015173f35906aabd",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/bcf1645bdda709efa389133dfe222be434d633": "cd7d5c4d2e5a097777e2a84a452bc3bd",
".git/objects/27/fa140c939723d8717f08bf0518640518df8ead": "67dc16b854179941d59e2249d5cab808",
".git/objects/2b/aec5774e3a80a49a0f1f48895bb83cd60cb778": "8aaca834b44280fe824214cd8d9aba02",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/f9cc6cac3e2994e3df3d3cf305ed3d1105dc97": "d9ddaaba564a8a6f5e3108a33211fa0b",
".git/objects/35/d23c0038d88d22db83a9e96a90587ebde17eeb": "2baf9cab585a06ca4c5513bd48f66a40",
".git/objects/37/c3efcdb55df681ceea926734e5a555ac9e021e": "2d91d2e82ed356b39dbf6a2b2e3c4eb6",
".git/objects/3a/4537d9709513614d0facb23cad9048bfae3119": "18d59738505f7bce1c4ab06bf70ea10f",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/40/4c97dbdcf87195019229040690e390243b78cd": "9d835154912373445d44af752d165510",
".git/objects/42/90844e697bd92a40c7cf8c67390ab7fba405b2": "70b75be55b29078131e59321b1392b25",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/53ba4b78351338c3c1d9a76ac7c5f1aa8e4a8f": "fd4203693e5823c832c2a70c5031508c",
".git/objects/48/128061e0544e28a22975f5d0c032caef686e20": "cff86d862c2f10a3fb230209ab19a048",
".git/objects/49/2b320949716395197f376b07feabc3f738d004": "946c88b0f67f0eb4d4d030f730fb1213",
".git/objects/4d/2b9dcac5dba29d6a933ed1913a66be2f4a1480": "c8e8a4a95c54f350a0492925a49f75f2",
".git/objects/4d/7a7dcdb5495ad3e2801522cd7c7552551a7b8b": "809b86b0ae94854a322182275c5ff89e",
".git/objects/56/9cea38320d007972614a2a27f9c299cfb35519": "5f9e34a4c843d3617be5debeaba11f73",
".git/objects/58/af3c1f9385d759f1786d90e6a6ff0441e30f7d": "05bd497ad38a981e8e33f792159be4cc",
".git/objects/5b/ea053357dd0cc07c9bca145c5f8012118d91d7": "1e5879005675fbfe09c0ed41d6d566dc",
".git/objects/5e/5c45c9361431ec9f5b5d084c8d79111bbce95f": "04135cdf30576873c599b8e54543d7fb",
".git/objects/60/a4b5a9ee668ab153553140616a9ec26d1b6802": "e1e39f28bbcdb114d9be2db6a4a015a3",
".git/objects/63/fa739c65603f2281d16e203734f9d297884db7": "46d505931886f35325f95780d5cb72a7",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/69/3252cca664387a871f2e085f7e5eb1f21387c1": "2313542c345c6082421da8af18ea6811",
".git/objects/6f/dee98fc04b1f18dd59cf0c8695476702ee804c": "fc19e0d89549613ef4a9c2d7b2e9818e",
".git/objects/72/ec12b007e16b246faf8e478fe50f2057bb511b": "f4a9413259e5d888698e63375adf1c6b",
".git/objects/74/0b57ba50029892c79d539ecc8eb9ff233fb2a8": "197d4b1381b47948e15d5d8d747917b4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/4e163a6798aaf241ecada1ebdf7068592d36a4": "1f10b5e1b814992285ed447d592b7212",
".git/objects/7c/77776afabb9576549a08ccad67efb249b67fc2": "3d7c14f723dba14b777769d1d7e2005c",
".git/objects/7e/be2e72048c69421e097ddaa9599b487d3da928": "3b9fb3bda7ff156d7ec541a21da500bb",
".git/objects/7f/f221f69bf57b968dc7d68753dff78ba499f866": "3f3f26e993a089ab806712d3499a6839",
".git/objects/82/65b91f193aa4b5211b36fc4f60d6865d4edf92": "d75bcd30d65af598c006c011d30f2ae8",
".git/objects/83/803bdb7fa4ea96bbd5cbbaa8c15db0cf7722e4": "9a5bc7675c8ac7531111beaa70cefdcb",
".git/objects/87/04dc6155f7e28de40b21b514cb8720d6b2202c": "4a552615d07727f7e38446265557abf1",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/e2de1f15f2cece2a9bdbdd7822f33075b014f4": "75585fa1ee2bc73986e28843711d7284",
".git/objects/8e/9b1e779def2050bb0d2cdad9314f1439e8e62f": "52ee832116b6c0f3fc8e9416dc808c5e",
".git/objects/93/d02d10dd4cfa791c7b61109869d775dcf753e6": "a4a55c85c11f8e04ee485077ba6054d1",
".git/objects/99/7e4be7a89786f5ce8265bbeed7c6fb734f6013": "9aaefb340944b67615bf7497833ccb34",
".git/objects/9a/2e8b20855a08fd4c8e24e3309b62215203f855": "d90497fec965822bd4e6c04036031738",
".git/objects/9f/d7a5f5db2c2434ab2020e4cb7532f0b3b2fe46": "c5c99f9009456209d6585518f04153dd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/eb745f80d69e5955b32169f443ac47d907cb10": "ffc5f2dccd37d2853cbb8af9111d4e1c",
".git/objects/a6/7c5acc4a1db019cd12ec96e3e70f453ab987d6": "883af2342ba8b5efdb14e33d47be5cd2",
".git/objects/a6/fabb4cc8d054abc02d06f69e662395ff1e0b95": "ef57dc0c64f1929be6fb76b64abcb808",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/2b25701451f50486bb25203ee36008c8d5844a": "fa84aba4004c0002facf3d4d56d89915",
".git/objects/a9/c442e318f3509650d8071761b78a547ec8f73b": "25c4b1e98dda58b4ae7b14898d049e01",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/b0/6f152c15ce03b98f72f8ac7a9549ba066a4868": "6f02fec6552caeee57f992b39dee19e8",
".git/objects/b1/66a23735a6b2f83acedc04d361b0d4934610c5": "8ce6245f9c9e9b381afb40d3c2023ba9",
".git/objects/b2/21a3617f0cc55c8a699d67e659da7f850755b9": "c2d2217188de2544f275a620a22ff96c",
".git/objects/b4/7f609456983b9b28aafad30de4907696cd5cb0": "c3f604f00e6765498417f759820ae5fa",
".git/objects/b6/a629a151db4e327a10fb1b0775ac86768763bb": "adb89fc2b0f357d8ca93f74cc5a55ddc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/430320fe4917d6256bc33b4579e4a8519775dc": "3a12e129fd5331f965ebf01eaafa2a6b",
".git/objects/c8/efc141ba2e51a80430fa3e80d98b228734f380": "062940fcfd34605e68cfe7f8bcebc5df",
".git/objects/c8/f12361c8c542796ac79c914dae6a87a3521bec": "3e2cc9716c3bb0d92ba20956359c4559",
".git/objects/ca/5c77ef6a764030b378c3b2f8fb60771e1346e5": "e54d7f41056c93c3aab7569f39196be7",
".git/objects/d2/213310cc974472f6e9989ff36aa3628522805f": "bc7f1b653c66269967a3ff601465ccb3",
".git/objects/d2/2950738e92066a2f39ae17ff9fd5f18a0b7ec2": "1f436aef6a1ee8413a683bbda2d498fd",
".git/objects/d4/b086425c7ae7fa4047e3fc141b392397aa5307": "9f1c76e7b772ec6f3ab64a42cd257197",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/889b90074148300e701758ef619fbfcf0fb8b3": "29545feeee80fe8d68f00a951ae73e9d",
".git/objects/df/1607e95767c7a894ae3a9ccd28ff84ca4424c2": "342f626328740f402cbb67b3fc65bc8f",
".git/objects/df/f7c6baa527f8a7824932a78109ce8f41e65e9d": "0016940fab8459a1a0a2a2c101592e3c",
".git/objects/e3/9143a836ca1a26f35a6ac87865d099cf20aa05": "c3b122b75951d98a7bef547f7ad38908",
".git/objects/e5/532b16f1c436aaf3b8e0142f8b03dd4a232e8b": "1a0a13dc51f87fcbf6837b77dd22e48d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/1353b9721cb843ace5713b9f5e8379aaa66c75": "17dbfce704cae1d9b614ac7af6ddb5b4",
".git/objects/ea/c5588506793a5d386596010a4ee84467038d1d": "183342d1feb7099a76f1f83594c6daa0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/63874a553c5472e682312ac0236bbfa1318cf7": "466195b582f9c34e851e1503e62f962b",
".git/objects/f2/0f51d3b3cbeb790a94a334ec5ee216063907e9": "2305d3560678580dff2f08d59bd4e012",
".git/objects/f4/0fba071b0ad68ed036e00be592951e54fd1333": "0a529222a121d543ed46d510dcc0f4f0",
".git/objects/f6/45eda34de4b8935eb53f5bcc6561a38668feb4": "613710cf7374542d806a134cb018d38c",
".git/objects/f7/aa61f129089efa6fccc13037e97cb0e53c4f90": "be0e4ac40ac96a5fec09e5fdd9b9f60c",
".git/objects/f9/c5efc6596e54fabfe8d5d70bbc624eb39413c3": "1ac20aaba5db79555b7645dd01fd2336",
".git/objects/ff/5d644389b0c5b34a9eb2b3cef1392854bf7ab4": "967c805e1aca0b6f84ad51941c7604d0",
".git/refs/heads/main": "246eb8ddfe742dd88eee82da5bf7f734",
".git/refs/remotes/origin/main": "246eb8ddfe742dd88eee82da5bf7f734",
"assets/AssetManifest.json": "67dc65a8ba71fda5e0471618658a6404",
"assets/assets/icons/facebook.png": "e4700f800a509a5cb70358ce98044b85",
"assets/assets/icons/google.png": "09a3bb83429e0db73c06131c94c6de5e",
"assets/assets/pictures/authBackground.jpg": "e0a144d34c5a9996eaf3e220efe379c0",
"assets/assets/pictures/no-avatar.png": "9b7428a348821a6e0c150499c0ae0625",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b5a2abee70db9b2ac2be0e776e0a6ba6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f36626e020c10164891deacbb6974b0a",
"/": "f36626e020c10164891deacbb6974b0a",
"main.dart.js": "a07fe0b88d3f468ce47aaabaaf0b9a42",
"manifest.json": "ade40baeb11cba39286e54e8286bbfba",
"version.json": "883e2374d490c678c60234d93cf30c64"
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
