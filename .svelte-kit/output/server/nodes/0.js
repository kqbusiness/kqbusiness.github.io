import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CbWWSgzR.js","_app/immutable/chunks/scheduler.DKOoNem6.js","_app/immutable/chunks/index.DH12svWG.js","_app/immutable/chunks/stores.DsYbvmvB.js","_app/immutable/chunks/entry.CUDfPk1A.js","_app/immutable/chunks/index.BqhD36UH.js","_app/immutable/chunks/paths.B3UJravO.js"];
export const stylesheets = ["_app/immutable/assets/0.Biba76S3.css"];
export const fonts = [];
