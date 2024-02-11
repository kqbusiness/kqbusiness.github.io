import { c as create_ssr_component, a as subscribe, b as set_store_value, e as escape, d as each } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $products, $$unsubscribe_products;
  const products = writable([]);
  $$unsubscribe_products = subscribe(products, (value) => $products = value);
  set_store_value(
    products,
    $products = [
      ...$products,
      {
        label: "Sunset lamp",
        price: 8,
        image: `/logo.png`
      }
    ],
    $products
  );
  $$unsubscribe_products();
  return `<div class="flex justify-center items-center w-full h-screen"><a href="${escape(base, true) + "/"}"><img src="${escape(base, true) + "/logo.png"}" alt="hej" class="rounded-full absolute top-2 left-2 w-24 h-24 border border-orange-50 shadow-lg shadow-neutral-950"></a> <div class="grid grid-cols-4 grid-rows-2 gap-4"> ${each($products, (product) => {
    return `<div class="bg-neutral-950 p-4 rounded-md text-white"><img src="${escape(base, true) + "/" + escape(product.image, true)}" alt="product" class="w-32 border-2 border-orange-500 rounded-md"> <h1 class="w-full text-center my-2 font-Guerilla font-semibold">${escape(product.label)}</h1> <a href="${escape(base, true) + "/"}"><h2 class="bg-orange-500 w-full text-center py-1 px-2 rounded-sm font-Guerilla">${escape(product.price)} Euro
					</h2></a> </div>`;
  })} </div></div>`;
});
export {
  Page as default
};
