<script lang="ts">
  // Adım 13: Biletlerim — satın alınan biletleri kod ile listele
  import { tarihYaz } from "$lib/data";
  import { biletlerim } from "$lib/biletler.svelte";
</script>

<div class="sayfa">
  <h1>Biletlerim</h1>

  {#each biletlerim.liste as b (b.kod)}
    <div class="kart bilet">
      <div class="ust">
        <strong>{b.baslik}</strong>
        <p>{tarihYaz(b.tarih)} · {b.mekan}</p>
        <p>{b.kategori} · {b.adet} kişi</p>
      </div>
      <div class="kod">
        <span>Bilet kodu</span>
        <code>{b.kod}</code>
      </div>
    </div>
  {:else}
    <p class="bos">Henüz biletiniz yok.<br /><a href="/">Bir etkinlik seçin →</a></p>
  {/each}
</div>

<style>
  h1 {
    margin: 0;
    font-size: 22px;
  }

  .bilet {
    overflow: hidden;
  }

  .ust {
    padding: 14px;
    border-left: 6px solid var(--renk-ana);
  }

  .ust p {
    margin: 2px 0;
    font-size: 14px;
    color: var(--yazi-soluk);
  }

  .kod {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 14px;
    border-top: 2px dashed var(--kenar);
    font-size: 13px;
    color: var(--yazi-soluk);
  }

  code {
    font-size: 16px;
    font-weight: 700;
    color: var(--yazi);
    letter-spacing: 1px;
  }

  .bos a {
    color: var(--renk-ana);
    font-weight: 600;
  }
</style>
