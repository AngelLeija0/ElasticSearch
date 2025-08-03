import 'kleur/colors';
import { d as decodeKey } from './chunks/astro/server_ER5m5TVx.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CQ7VKCZt.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/angel/Documents/04%20Projects%20VSCode/04%20ElasticWatch/elastic-watch-app/","cacheDir":"file:///C:/Users/angel/Documents/04%20Projects%20VSCode/04%20ElasticWatch/elastic-watch-app/node_modules/.astro/","outDir":"file:///C:/Users/angel/Documents/04%20Projects%20VSCode/04%20ElasticWatch/elastic-watch-app/dist/","srcDir":"file:///C:/Users/angel/Documents/04%20Projects%20VSCode/04%20ElasticWatch/elastic-watch-app/src/","publicDir":"file:///C:/Users/angel/Documents/04%20Projects%20VSCode/04%20ElasticWatch/elastic-watch-app/public/","buildClientDir":"file:///C:/Users/angel/Documents/04%20Projects%20VSCode/04%20ElasticWatch/elastic-watch-app/dist/client/","buildServerDir":"file:///C:/Users/angel/Documents/04%20Projects%20VSCode/04%20ElasticWatch/elastic-watch-app/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/images.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/images\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"images.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/images.json.js","pathname":"/api/images.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/middlewares/internal-key","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/middlewares\\/internal-key\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"middlewares","dynamic":false,"spread":false}],[{"content":"internal-key","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/middlewares/internal-key.js","pathname":"/api/middlewares/internal-key","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/middlewares/origin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/middlewares\\/origin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"middlewares","dynamic":false,"spread":false}],[{"content":"origin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/middlewares/origin.js","pathname":"/api/middlewares/origin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/movies.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/movies\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"movies.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/movies.json.js","pathname":"/api/movies.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/search.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/search\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"search.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/search.json.js","pathname":"/api/search.json","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/services/bonsaisearch","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/services\\/BonsaiSearch\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"services","dynamic":false,"spread":false}],[{"content":"BonsaiSearch","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/services/BonsaiSearch.js","pathname":"/api/services/BonsaiSearch","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.BM5KiW1a.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/api/middlewares/internal-key@_@js":"pages/api/middlewares/internal-key.astro.mjs","\u0000@astro-page:src/pages/api/middlewares/origin@_@js":"pages/api/middlewares/origin.astro.mjs","\u0000@astro-page:src/pages/api/services/BonsaiSearch@_@js":"pages/api/services/bonsaisearch.astro.mjs","\u0000@astro-page:src/pages/api/images.json@_@js":"pages/api/images.json.astro.mjs","\u0000@astro-page:src/pages/api/movies.json@_@js":"pages/api/movies.json.astro.mjs","\u0000@astro-page:src/pages/api/search.json@_@js":"pages/api/search.json.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_C5sf-zfI.mjs","\u0000@astrojs-manifest":"manifest_DykZJ__A.mjs","@/components/Movies.vue":"_astro/Movies.BaHfEnbS.js","@astrojs/vue/client.js":"_astro/client.1rPQlxGr.js","C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/components/Home.astro?astro&type=script&index=0&lang.ts":"_astro/Home.astro_astro_type_script_index_0_lang.UxK1H8oa.js","C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/components/Navbar.astro?astro&type=script&index=0&lang.ts":"_astro/Navbar.astro_astro_type_script_index_0_lang.BWufQ60p.js","C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/components/Home.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const e=document.getElementById(\"darkmode-toggle\");e&&(e.addEventListener(\"click\",()=>{console.log(\"Toggling dark mode\"),document.documentElement.classList.toggle(\"dark\"),document.documentElement.classList.contains(\"dark\")?localStorage.setItem(\"theme\",\"dark\"):localStorage.setItem(\"theme\",\"light\")}),localStorage.getItem(\"theme\")===\"dark\"&&document.documentElement.classList.add(\"dark\"))});"],["C:/Users/angel/Documents/04 Projects VSCode/04 ElasticWatch/elastic-watch-app/src/components/Navbar.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const c=localStorage.getItem(\"theme\"),d=window.matchMedia(\"(prefers-color-scheme: dark)\").matches,r=c??(d?\"dark\":\"light\");document.documentElement.setAttribute(\"data-theme\",r);const t=document.querySelector(\"#theme-button\");t&&t.addEventListener(\"click\",()=>{const n=(document.documentElement.getAttribute(\"data-theme\")||\"light\")===\"dark\"?\"light\":\"dark\";document.documentElement.setAttribute(\"data-theme\",n),localStorage.setItem(\"theme\",n)});const e=document.querySelector(\"#to-top-button\");e&&(window.addEventListener(\"scroll\",()=>{window.scrollY>800?e.classList.remove(\"hidden\"):e.classList.add(\"hidden\")}),e.addEventListener(\"click\",()=>{window.scrollTo({top:0,behavior:\"smooth\"})}));const o=document.querySelector(\"#go-to-search-button\");o&&o.addEventListener(\"click\",()=>{window.scrollTo({top:0,behavior:\"smooth\"})})});"]],"assets":["/_astro/index.BM5KiW1a.css","/favicon.svg","/imdb-logo.svg","/_astro/client.1rPQlxGr.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CtSceO8m.js","/_astro/Movies.BaHfEnbS.js","/_astro/runtime-dom.esm-bundler.CrhLlqhy.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"mHUIWBc65u78/FHDApUOoiAoiki+KDmdrL1//rRDgZ8="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
