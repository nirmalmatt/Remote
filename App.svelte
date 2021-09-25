<script>
  import Router from "svelte-spa-router";
  import AppHeader from "./components/AppHeader.svelte";
  import NavBar from "./components/NavBar.svelte";
  import { onMount } from "svelte";
  import {
    HomeIcon,
    BarChartIcon,
    SettingsIcon,
    VideoIcon,
    LogInIcon,
    WifiIcon,
    WifiOffIcon
  } from "svelte-feather-icons";
  import routes from "./utils/routes.js";
  import {
    signIn,
    auth,
    initFirebaseAuth,
    signOutUser
  } from "./utils/firebase.js";

  onMount(initFirebaseAuth);
  let isSignedIn = !!$auth.currentUser;
  $: isSignedIn = !!$auth.currentUser;

  const navRoutes = [
    {
      path: "#/",
      component: HomeIcon,
      label: "Home"
    },
    {
      path: "#/monitor",
      component: BarChartIcon,
      label: "Monitor"
    },
    {
      path: "#/video",
      component: VideoIcon,
      label: "Video"
    },
    {
      path: "#/settings",
      component: SettingsIcon,
      label: "Settings"
    }
  ];
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");
  main {
    font-family: Poppins, sans-serif;
  }
</style>

<main class="bg-gray-200 w-screen min-h-screen dark:bg-gray-800 dark:text-gray-50">
  {#if isSignedIn}
    <AppHeader appTitle="" appIcon="assets/favicon-32x32.png">
      <div slot="nav">
        <NavBar {navRoutes} />
      </div>
      <div slot="rt" class="grid items-center text-gray-600">
        <WifiIcon size="1.5x"/>
      </div>
    </AppHeader>
    <Router {routes} />
  {:else}
  <button 
    class="px-4 py-2 bg-blue-500 text-white rounded sh-lg m-auto flex" 
    on:click={signIn}>
    <LogInIcon size='1.5x' class="mr-3"></LogInIcon>
    Sign In
    </button>
  {/if}
</main>