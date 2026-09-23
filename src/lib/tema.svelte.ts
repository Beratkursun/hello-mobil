// Adım 15: Tema (gece / gündüz) — seçim localStorage'da saklanır
export type Tema = "gunduz" | "gece";

const ANAHTAR = "tema";

class TemaYonetici {
  // Başlangıç değeri app.html içindeki script'in <html> etiketine yazdığı değer
  mod = $state<Tema>(document.documentElement.dataset.tema === "gece" ? "gece" : "gunduz");

  degistir() {
    this.mod = this.mod === "gece" ? "gunduz" : "gece";
    document.documentElement.dataset.tema = this.mod;
    localStorage.setItem(ANAHTAR, this.mod);
  }
}

export const tema = new TemaYonetici();
