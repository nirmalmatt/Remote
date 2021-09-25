import Home from "../pages/Home.svelte";
import Monitor from "../pages/Monitor.svelte";
import Video from "../pages/Video.svelte";
import Settings from "../pages/Settings.svelte";

const routes = {
  "/": Home,
  "/monitor": Monitor,
  "/video": Video,
  "/settings": Settings
};
export default routes;
