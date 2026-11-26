// Inkwell service worker (generated into dist/sw.js at build time).
// Caches the whole app so it opens and works offline once installed on the home screen.
const VERSION = '0d2194573ee8';
const PRECACHE = ["./","assets/geist-cyrillic-ext-wght-normal-DjL33-gN.woff2","assets/geist-cyrillic-wght-normal-BEAKL7Jp.woff2","assets/geist-latin-ext-wght-normal-DC-KSUi6.woff2","assets/geist-latin-wght-normal-BgDaEnEv.woff2","assets/geist-vietnamese-wght-normal-6IgcOCM7.woff2","assets/index-DDTJQIo1.css","assets/index-O1i74dAL.js","assets/kalam-devanagari-400-normal-Dy6c0U2e.woff2","assets/kalam-devanagari-400-normal-Dyzod-UE.woff","assets/kalam-devanagari-700-normal-B52CSkpd.woff","assets/kalam-devanagari-700-normal-BeU_-hjz.woff2","assets/kalam-latin-400-normal-Bl-H2BUA.woff","assets/kalam-latin-400-normal-BthBl_aR.woff2","assets/kalam-latin-700-normal-7TSuSrjP.woff","assets/kalam-latin-700-normal-D2H-9ISU.woff2","assets/kalam-latin-ext-400-normal-AcQmRO9z.woff","assets/kalam-latin-ext-400-normal-DtcdGa4L.woff2","assets/kalam-latin-ext-700-normal-BA-KJHgr.woff","assets/kalam-latin-ext-700-normal-CwgfRD_T.woff2","assets/pdf.worker.min-CIqJB0yW.mjs","icons/apple-touch-icon.png","icons/favicon-64.png","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","index.html","manifest.webmanifest","pdfjs/cmaps/78-EUC-H.bcmap","pdfjs/cmaps/78-EUC-V.bcmap","pdfjs/cmaps/78-H.bcmap","pdfjs/cmaps/78-RKSJ-H.bcmap","pdfjs/cmaps/78-RKSJ-V.bcmap","pdfjs/cmaps/78-V.bcmap","pdfjs/cmaps/78ms-RKSJ-H.bcmap","pdfjs/cmaps/78ms-RKSJ-V.bcmap","pdfjs/cmaps/83pv-RKSJ-H.bcmap","pdfjs/cmaps/90ms-RKSJ-H.bcmap","pdfjs/cmaps/90ms-RKSJ-V.bcmap","pdfjs/cmaps/90msp-RKSJ-H.bcmap","pdfjs/cmaps/90msp-RKSJ-V.bcmap","pdfjs/cmaps/90pv-RKSJ-H.bcmap","pdfjs/cmaps/90pv-RKSJ-V.bcmap","pdfjs/cmaps/Add-H.bcmap","pdfjs/cmaps/Add-RKSJ-H.bcmap","pdfjs/cmaps/Add-RKSJ-V.bcmap","pdfjs/cmaps/Add-V.bcmap","pdfjs/cmaps/Adobe-CNS1-0.bcmap","pdfjs/cmaps/Adobe-CNS1-1.bcmap","pdfjs/cmaps/Adobe-CNS1-2.bcmap","pdfjs/cmaps/Adobe-CNS1-3.bcmap","pdfjs/cmaps/Adobe-CNS1-4.bcmap","pdfjs/cmaps/Adobe-CNS1-5.bcmap","pdfjs/cmaps/Adobe-CNS1-6.bcmap","pdfjs/cmaps/Adobe-CNS1-UCS2.bcmap","pdfjs/cmaps/Adobe-GB1-0.bcmap","pdfjs/cmaps/Adobe-GB1-1.bcmap","pdfjs/cmaps/Adobe-GB1-2.bcmap","pdfjs/cmaps/Adobe-GB1-3.bcmap","pdfjs/cmaps/Adobe-GB1-4.bcmap","pdfjs/cmaps/Adobe-GB1-5.bcmap","pdfjs/cmaps/Adobe-GB1-UCS2.bcmap","pdfjs/cmaps/Adobe-Japan1-0.bcmap","pdfjs/cmaps/Adobe-Japan1-1.bcmap","pdfjs/cmaps/Adobe-Japan1-2.bcmap","pdfjs/cmaps/Adobe-Japan1-3.bcmap","pdfjs/cmaps/Adobe-Japan1-4.bcmap","pdfjs/cmaps/Adobe-Japan1-5.bcmap","pdfjs/cmaps/Adobe-Japan1-6.bcmap","pdfjs/cmaps/Adobe-Japan1-UCS2.bcmap","pdfjs/cmaps/Adobe-Korea1-0.bcmap","pdfjs/cmaps/Adobe-Korea1-1.bcmap","pdfjs/cmaps/Adobe-Korea1-2.bcmap","pdfjs/cmaps/Adobe-Korea1-UCS2.bcmap","pdfjs/cmaps/B5-H.bcmap","pdfjs/cmaps/B5-V.bcmap","pdfjs/cmaps/B5pc-H.bcmap","pdfjs/cmaps/B5pc-V.bcmap","pdfjs/cmaps/CNS-EUC-H.bcmap","pdfjs/cmaps/CNS-EUC-V.bcmap","pdfjs/cmaps/CNS1-H.bcmap","pdfjs/cmaps/CNS1-V.bcmap","pdfjs/cmaps/CNS2-H.bcmap","pdfjs/cmaps/CNS2-V.bcmap","pdfjs/cmaps/ETHK-B5-H.bcmap","pdfjs/cmaps/ETHK-B5-V.bcmap","pdfjs/cmaps/ETen-B5-H.bcmap","pdfjs/cmaps/ETen-B5-V.bcmap","pdfjs/cmaps/ETenms-B5-H.bcmap","pdfjs/cmaps/ETenms-B5-V.bcmap","pdfjs/cmaps/EUC-H.bcmap","pdfjs/cmaps/EUC-V.bcmap","pdfjs/cmaps/Ext-H.bcmap","pdfjs/cmaps/Ext-RKSJ-H.bcmap","pdfjs/cmaps/Ext-RKSJ-V.bcmap","pdfjs/cmaps/Ext-V.bcmap","pdfjs/cmaps/GB-EUC-H.bcmap","pdfjs/cmaps/GB-EUC-V.bcmap","pdfjs/cmaps/GB-H.bcmap","pdfjs/cmaps/GB-V.bcmap","pdfjs/cmaps/GBK-EUC-H.bcmap","pdfjs/cmaps/GBK-EUC-V.bcmap","pdfjs/cmaps/GBK2K-H.bcmap","pdfjs/cmaps/GBK2K-V.bcmap","pdfjs/cmaps/GBKp-EUC-H.bcmap","pdfjs/cmaps/GBKp-EUC-V.bcmap","pdfjs/cmaps/GBT-EUC-H.bcmap","pdfjs/cmaps/GBT-EUC-V.bcmap","pdfjs/cmaps/GBT-H.bcmap","pdfjs/cmaps/GBT-V.bcmap","pdfjs/cmaps/GBTpc-EUC-H.bcmap","pdfjs/cmaps/GBTpc-EUC-V.bcmap","pdfjs/cmaps/GBpc-EUC-H.bcmap","pdfjs/cmaps/GBpc-EUC-V.bcmap","pdfjs/cmaps/H.bcmap","pdfjs/cmaps/HKdla-B5-H.bcmap","pdfjs/cmaps/HKdla-B5-V.bcmap","pdfjs/cmaps/HKdlb-B5-H.bcmap","pdfjs/cmaps/HKdlb-B5-V.bcmap","pdfjs/cmaps/HKgccs-B5-H.bcmap","pdfjs/cmaps/HKgccs-B5-V.bcmap","pdfjs/cmaps/HKm314-B5-H.bcmap","pdfjs/cmaps/HKm314-B5-V.bcmap","pdfjs/cmaps/HKm471-B5-H.bcmap","pdfjs/cmaps/HKm471-B5-V.bcmap","pdfjs/cmaps/HKscs-B5-H.bcmap","pdfjs/cmaps/HKscs-B5-V.bcmap","pdfjs/cmaps/Hankaku.bcmap","pdfjs/cmaps/Hiragana.bcmap","pdfjs/cmaps/KSC-EUC-H.bcmap","pdfjs/cmaps/KSC-EUC-V.bcmap","pdfjs/cmaps/KSC-H.bcmap","pdfjs/cmaps/KSC-Johab-H.bcmap","pdfjs/cmaps/KSC-Johab-V.bcmap","pdfjs/cmaps/KSC-V.bcmap","pdfjs/cmaps/KSCms-UHC-H.bcmap","pdfjs/cmaps/KSCms-UHC-HW-H.bcmap","pdfjs/cmaps/KSCms-UHC-HW-V.bcmap","pdfjs/cmaps/KSCms-UHC-V.bcmap","pdfjs/cmaps/KSCpc-EUC-H.bcmap","pdfjs/cmaps/KSCpc-EUC-V.bcmap","pdfjs/cmaps/Katakana.bcmap","pdfjs/cmaps/LICENSE","pdfjs/cmaps/NWP-H.bcmap","pdfjs/cmaps/NWP-V.bcmap","pdfjs/cmaps/RKSJ-H.bcmap","pdfjs/cmaps/RKSJ-V.bcmap","pdfjs/cmaps/Roman.bcmap","pdfjs/cmaps/UniCNS-UCS2-H.bcmap","pdfjs/cmaps/UniCNS-UCS2-V.bcmap","pdfjs/cmaps/UniCNS-UTF16-H.bcmap","pdfjs/cmaps/UniCNS-UTF16-V.bcmap","pdfjs/cmaps/UniCNS-UTF32-H.bcmap","pdfjs/cmaps/UniCNS-UTF32-V.bcmap","pdfjs/cmaps/UniCNS-UTF8-H.bcmap","pdfjs/cmaps/UniCNS-UTF8-V.bcmap","pdfjs/cmaps/UniGB-UCS2-H.bcmap","pdfjs/cmaps/UniGB-UCS2-V.bcmap","pdfjs/cmaps/UniGB-UTF16-H.bcmap","pdfjs/cmaps/UniGB-UTF16-V.bcmap","pdfjs/cmaps/UniGB-UTF32-H.bcmap","pdfjs/cmaps/UniGB-UTF32-V.bcmap","pdfjs/cmaps/UniGB-UTF8-H.bcmap","pdfjs/cmaps/UniGB-UTF8-V.bcmap","pdfjs/cmaps/UniJIS-UCS2-H.bcmap","pdfjs/cmaps/UniJIS-UCS2-HW-H.bcmap","pdfjs/cmaps/UniJIS-UCS2-HW-V.bcmap","pdfjs/cmaps/UniJIS-UCS2-V.bcmap","pdfjs/cmaps/UniJIS-UTF16-H.bcmap","pdfjs/cmaps/UniJIS-UTF16-V.bcmap","pdfjs/cmaps/UniJIS-UTF32-H.bcmap","pdfjs/cmaps/UniJIS-UTF32-V.bcmap","pdfjs/cmaps/UniJIS-UTF8-H.bcmap","pdfjs/cmaps/UniJIS-UTF8-V.bcmap","pdfjs/cmaps/UniJIS2004-UTF16-H.bcmap","pdfjs/cmaps/UniJIS2004-UTF16-V.bcmap","pdfjs/cmaps/UniJIS2004-UTF32-H.bcmap","pdfjs/cmaps/UniJIS2004-UTF32-V.bcmap","pdfjs/cmaps/UniJIS2004-UTF8-H.bcmap","pdfjs/cmaps/UniJIS2004-UTF8-V.bcmap","pdfjs/cmaps/UniJISPro-UCS2-HW-V.bcmap","pdfjs/cmaps/UniJISPro-UCS2-V.bcmap","pdfjs/cmaps/UniJISPro-UTF8-V.bcmap","pdfjs/cmaps/UniJISX0213-UTF32-H.bcmap","pdfjs/cmaps/UniJISX0213-UTF32-V.bcmap","pdfjs/cmaps/UniJISX02132004-UTF32-H.bcmap","pdfjs/cmaps/UniJISX02132004-UTF32-V.bcmap","pdfjs/cmaps/UniKS-UCS2-H.bcmap","pdfjs/cmaps/UniKS-UCS2-V.bcmap","pdfjs/cmaps/UniKS-UTF16-H.bcmap","pdfjs/cmaps/UniKS-UTF16-V.bcmap","pdfjs/cmaps/UniKS-UTF32-H.bcmap","pdfjs/cmaps/UniKS-UTF32-V.bcmap","pdfjs/cmaps/UniKS-UTF8-H.bcmap","pdfjs/cmaps/UniKS-UTF8-V.bcmap","pdfjs/cmaps/V.bcmap","pdfjs/cmaps/WP-Symbol.bcmap","pdfjs/standard_fonts/FoxitDingbats.pfb","pdfjs/standard_fonts/FoxitFixed.pfb","pdfjs/standard_fonts/FoxitFixedBold.pfb","pdfjs/standard_fonts/FoxitFixedBoldItalic.pfb","pdfjs/standard_fonts/FoxitFixedItalic.pfb","pdfjs/standard_fonts/FoxitSerif.pfb","pdfjs/standard_fonts/FoxitSerifBold.pfb","pdfjs/standard_fonts/FoxitSerifBoldItalic.pfb","pdfjs/standard_fonts/FoxitSerifItalic.pfb","pdfjs/standard_fonts/FoxitSymbol.pfb","pdfjs/standard_fonts/LICENSE_FOXIT","pdfjs/standard_fonts/LICENSE_LIBERATION","pdfjs/standard_fonts/LiberationSans-Bold.ttf","pdfjs/standard_fonts/LiberationSans-BoldItalic.ttf","pdfjs/standard_fonts/LiberationSans-Italic.ttf","pdfjs/standard_fonts/LiberationSans-Regular.ttf","pdfjs/wasm/LICENSE_JBIG2","pdfjs/wasm/LICENSE_OPENJPEG","pdfjs/wasm/LICENSE_PDFJS_JBIG2","pdfjs/wasm/LICENSE_PDFJS_OPENJPEG","pdfjs/wasm/LICENSE_PDFJS_QCMS","pdfjs/wasm/LICENSE_PDFJS_QUICKJS","pdfjs/wasm/LICENSE_QCMS","pdfjs/wasm/LICENSE_QUICKJS","pdfjs/wasm/jbig2.wasm","pdfjs/wasm/jbig2_nowasm_fallback.js","pdfjs/wasm/openjpeg.wasm","pdfjs/wasm/openjpeg_nowasm_fallback.js","pdfjs/wasm/qcms_bg.wasm","pdfjs/wasm/quickjs-eval.js","pdfjs/wasm/quickjs-eval.wasm"];
const CACHE = 'inkwell-' + VERSION;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      // 'reload': straight from the server, never a stale copy from the browser's HTTP cache
      .then((cache) => cache.addAll(PRECACHE.map((url) => new Request(url, { cache: 'reload' }))))
      .then(() => self.skipWaiting()),
  );
});

// This version's cache first: caches.match() alone searches the oldest cache first, which would hand out
// the previous version's index page and files. The previous cache is only a fallback for an open old page.
async function cached(req) {
  return (await (await caches.open(CACHE)).match(req, { ignoreSearch: true })) || (await caches.match(req, { ignoreSearch: true }));
}

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // keep the newest previous cache too, so a page that is still open can lazy-load its old files
      // caches.keys() lists caches oldest first (names are content hashes, so never sort them)
      const keys = (await caches.keys()).filter((k) => k.startsWith('inkwell-') && k !== CACHE);
      const stale = keys.slice(0, Math.max(0, keys.length - 1));
      await Promise.all(stale.map((k) => caches.delete(k)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  if (req.mode === 'navigate') {
    // app shell: network first (to pick up updates), fall back to the cached shell offline
    event.respondWith(
      fetch(req)
        .then((res) => {
          // only a good copy of the app page itself replaces the offline one (never an error page)
          const scope = new URL('./', self.location.href).href;
          if (res.ok && !res.redirected && (url.href === scope || url.href.startsWith(scope + '?') || url.href === scope + 'index.html')) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put('./', copy));
          }
          return res;
        })
        .catch(async () => (await cached('./')) || (await cached('index.html'))),
    );
    return;
  }

  event.respondWith(
    cached(req).then(
      (hit) =>
        hit ||
        fetch(req).then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        }),
    ),
  );
});
