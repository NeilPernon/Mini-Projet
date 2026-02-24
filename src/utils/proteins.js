export const GOALS = [
  { id: "sedentaire", label: "Sédentaire", min: 0.8, max: 1.0 },
  { id: "endurance", label: "Endurance", min: 1.2, max: 1.6 },
  { id: "maintien", label: "Conservation de la masse musculaire", min: 1.6, max: 1.8 },
  { id: "prise", label: "Prise de masse musculaire", min: 1.8, max: 2.2 },
];

export function round1(x) {
  return Math.round(x * 10) / 10;
}

// ✅ tiret simple pour Excel
export function formatRange(minG, maxG) {
  return `${round1(minG)} - ${round1(maxG)} g/jour`;
}

export function toNumber(value) {
  const n = typeof value === "number" ? value : Number(String(value).replace(",", "."));
  return Number.isFinite(n) ? n : NaN;
}

export function buildWeights(minW, maxW, lines) {
  const n = Math.trunc(toNumber(lines));
  const a = toNumber(minW);
  const b = toNumber(maxW);

  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(n)) return [];
  if (n <= 0) return [];
  if (n === 1) return [round1(a)];

  const step = (b - a) / (n - 1);
  return Array.from({ length: n }, (_, i) => round1(a + i * step));
}

export function validateInputs({ selected, minW, maxW, lines }) {
  const errors = [];

  const min = toNumber(minW);
  const max = toNumber(maxW);
  const n = toNumber(lines);

  if (!selected || selected.length === 0) {
    errors.push("Choisis au moins un objectif.");
  }

  if (!Number.isFinite(min) || !Number.isFinite(max) || !Number.isFinite(n)) {
    errors.push("Tous les champs numériques doivent être remplis.");
    return errors;
  }

  if (min <= 0 || max <= 0) errors.push("Les poids doivent être des valeurs positives.");
  if (min >= max) errors.push("Le poids minimum doit être strictement inférieur au poids maximum.");

  if (!Number.isInteger(n) || n < 1) {
    errors.push("Le nombre de lignes doit être un entier supérieur ou égal à 1.");
  }

  if (Number.isInteger(n) && n > 200) {
    errors.push("Nombre de lignes trop élevé (max 200).");
  }

  return errors;
}