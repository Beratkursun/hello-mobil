<script lang="ts">
  // Adım 8: Etkinlik detay sayfası — bilet kategorisi ve adet seçimi
  import { type Etkinlik, tarihYaz, tl } from "$lib/data";
  import { sepet } from "$lib/sepet.svelte";

  let { etkinlik: e }: { etkinlik: Etkinlik } = $props();

  let seciliIndex = $state(0);
  let adet = $state(1);
  const secili = $derived(e.biletler[seciliIndex]);

  function sepeteEkle() {
    sepet.ekle(e, secili, adet);
    window.location.href = "/sepet";
  }
</script>

<div class="afis" style:background={e.renk}>
  <span>{e.kategori}</span>
  <h1>{e.baslik}</h1>
</div>

<div class="sayfa">
  <div class="kart bilgi">
    <p>📅 {tarihYaz(e.tarih)}</p>
    <p>📍 {e.mekan}, {e.sehir}</p>
    <p class="aciklama">{e.aciklama}</p>
  </div>

  <h2>Kategori seçin</h2>
  {#each e.biletler as b, i}
    <label class="kart secenek" class:aktif={seciliIndex === i}>
      <input type="radio" name="kategori" value={i} bind:group={seciliIndex} />
      <span>{b.ad}</span>
      <strong>{tl(b.fiyat)}</strong>
    </label>
  {/each}

  <div class="adet">
    <span>Adet</span>
    <button onclick={() => adet--} disabled={adet <= 1}>−</button>
    <b>{adet}</b>
    <button onclick={() => adet++} disabled={adet >= 6}>+</button>
  </div>

  <button class="btn" onclick={sepeteEkle}>
    Sepete ekle · {tl(secili.fiyat * adet)}
  </button>
</div>

<style>
  .afis {
    padding: 48px 16px 20px;
    color: #fff;
  }

  .afis span {
    font-size: 13px;
    font-weight: 600;
    opacity: 0.85;
  }

  .afis h1 {
    margin: 4px 0 0;
    font-size: 24px;
  }

  .bilgi {
    padding: 14px;
  }

  .bilgi p {
    margin: 4px 0;
  }

  .aciklama {
    color: var(--yazi-soluk);
    font-size: 14px;
  }

  h2 {
    margin: 8px 0 -4px;
    font-size: 17px;
  }

  .secenek {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 14px;
    cursor: pointer;
  }

  .secenek.aktif {
    border-color: var(--renk-ana);
    box-shadow: 0 0 0 1px var(--renk-ana);
  }

  .secenek input {
    accent-color: var(--renk-ana);
  }

  .secenek span {
    flex: 1;
  }

  .adet {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .adet span {
    flex: 1;
    font-weight: 600;
  }

  .adet button {
    width: 40px;
    height: 40px;
    border: 1px solid var(--kenar);
    border-radius: 50%;
    background: var(--kart);
    font-size: 20px;
  }

  .adet button:disabled {
    opacity: 0.4;
  }
</style>
