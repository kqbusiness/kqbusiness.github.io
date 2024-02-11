import { c as create_ssr_component, a as subscribe, e as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="bg-orange-200 bg-[url(https://freepngimg.com/download/wave/110523-orange-vector-wave-png-image-high-quality.png)] bg-cover"><div class="${escape($page.route.id !== "/" ? "backdrop-blur-md" : "", true) + " duration-300"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
