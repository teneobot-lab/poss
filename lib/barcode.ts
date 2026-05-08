export function normalizeBarcode(v: string) {
  return v.trim().replace(/s+/g, "")
}

export function isLikelyScannerInput(v: string) {
  return normalizeBarcode(v).length >= 6
}
