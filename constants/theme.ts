export const colors = {
  background: "#FFF1C9",
  foreground: "#5E1B49",
  card: "#FFF1C9",
  muted: "#F0A0A0",
  mutedForeground: "rgba(94, 27, 73, 0.65)",
  primary: "#5E1B49",
  accent: "#BD5579",
  border: "rgba(94, 27, 73, 0.15)",
  success: "#5F9E7A",
  destructive: "#C94F5F",
  subscription: "#EA9999",
} as const;

export const spacing = {
  0: 0,
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  7: 28,
  8: 32,
  9: 36,
  10: 40,
  11: 44,
  12: 48,
  14: 56,
  16: 64,
  18: 72,
  20: 80,
  24: 96,
  30: 120,
} as const;

export const components = {
  tabBar: {
    height: spacing[18],
    horizontalInset: spacing[5],
    radius: spacing[8],
    iconFrame: spacing[12],
    itemPaddingVertical: spacing[2],
  },
} as const;

export const theme = {
  colors,
  spacing,
  components,
} as const;