import { c as create_ssr_component, e as escape } from "../../chunks/ssr.js";
import { b as base } from "../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col items-center justify-center h-screen text-white font-montserrat"><a href="${escape(base, true) + "/contact"}"><img src="${escape(base, true) + "/logo.png"}" class="transition-all duration-1000 hover:grayscale-0 grayscale filter cursor-pointer rounded-lg" alt="Logo"></a> </div>`;
});
export {
  Page as default
};
