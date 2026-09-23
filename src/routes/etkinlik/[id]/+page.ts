// Adım 7: Dinamik route — /etkinlik/3 adresindeki "3" değeri params.id olarak gelir
import { error } from "@sveltejs/kit";
import { etkinlikBul } from "$lib/data";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  const etkinlik = etkinlikBul(Number(params.id));
  if (!etkinlik) error(404, "Etkinlik bulunamadı");
  return { etkinlik };
};
