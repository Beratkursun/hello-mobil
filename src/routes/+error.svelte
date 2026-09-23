<script lang="ts">
  // Adım 7: load() içinde error(404, ...) atılırsa bu sayfa gösterilir
  import { page } from "$app/state";
</script>

<div class="sayfa bos">
  <h2>{page.status}</h2>
  <p>{page.error?.message}</p>
  <a class="btn" href="/">Keşfet'e dön</a>
</div>
