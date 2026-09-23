<script lang="ts">
  // Adım 3: Ortak layout — üst başlık + alt menü her sayfada görünür
  import "../app.css";
  import { page } from "$app/state";
  import { sepet } from "$lib/sepet.svelte";

  let { children } = $props();

  const menu = [
    { href: "/", ad: "Keşfet", ikon: "🏟️" },
    { href: "/biletlerim", ad: "Biletlerim", ikon: "🎟️" },
    { href: "/sepet", ad: "Sepet", ikon: "🛒" },
    { href: "/profil", ad: "Profil", ikon: "👤" },
  ];
</script>

<header class="ust">
  <a href="/" class="logo">passo<span>klon</span></a>
</header>

<main>
  {@render children()}
</main>

<nav class="alt-menu">
  {#each menu as m}
    <a href={m.href} class:aktif={page.url.pathname === m.href}>
      <span class="ikon">{m.ikon}</span>
      {m.ad}
      <!-- Adım 9: sepetteki bilet sayısı rozeti -->
      {#if m.href === "/sepet" && sepet.adet > 0}
        <b class="rozet">{sepet.adet}</b>
      {/if}
    </a>
  {/each}
</nav>

<style>
  .ust {
    position: sticky;
    top: 0;
    z-index: 10;
    padding: calc(12px + env(safe-area-inset-top)) 16px 12px;
    background: var(--renk-koyu);
  }

  .logo {
    color: #fff;
    font-size: 22px;
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  .logo span {
    color: var(--renk-ana);
  }

  main {
    padding-bottom: calc(80px + env(safe-area-inset-bottom));
  }

  .alt-menu {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    padding-bottom: env(safe-area-inset-bottom);
    background: var(--kart);
    border-top: 1px solid var(--kenar);
  }

  .alt-menu a {
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 10px 0;
    font-size: 12px;
    color: var(--yazi-soluk);
  }

  .alt-menu a.aktif {
    color: var(--renk-ana);
    font-weight: 600;
  }

  .ikon {
    font-size: 22px;
  }

  .rozet {
    position: absolute;
    top: 4px;
    left: calc(50% + 6px);
    min-width: 18px;
    padding: 0 5px;
    border-radius: 9px;
    background: var(--renk-ana);
    color: #fff;
    font-size: 11px;
    line-height: 18px;
  }
</style>
