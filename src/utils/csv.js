export function csvEscape(value) {
  const s = String(value);
  if (s.includes(";") || s.includes('"') || s.includes("\n")) {
    return `"${s.replaceAll('"', '""')}"`;
  }
  return s;
}

export function buildCsv(rows, sep = ";") {
  return rows.map((r) => r.map(csvEscape).join(sep)).join("\n");
}

export function downloadTextFile(filename, content, mime = "text/csv;charset=utf-8") {
  // ✅ BOM UTF-8 : Excel Windows lit correctement
  const BOM = "\uFEFF";
  const blob = new Blob([BOM + content], { type: mime });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;

  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);
}