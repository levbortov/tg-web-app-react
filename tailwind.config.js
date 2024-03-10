/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      /* Telegram */
      'bg_color': 'var(--tg-theme-bg-color)',
      'text_color': 'var(--tg-theme-text-color)',
      'hint_color': 'var(--tg-theme-hint-color)',
      'link_color': 'var(--tg-theme-hint-color)',
      'button_color': '#121212',
      'button_text_color': 'var(--tg-theme-button-text-color)',
      'secondary_bg_color': 'var(--tg-theme-secondary-bg-color)',
      'header_bg_color ': 'var(--tg-theme-header-bg-color)',
      'accent_text_color': 'var(--tg-theme-accent-text-color)',
      'section_bg_color': 'var(--tg-theme-section-bg-color)',
      'section_header_text_color': 'var(--tg-theme-section-header-text-color)',
      'subtitle_text_color ': 'var(--tg-theme-subtitle-text-color)',
      'destructive_text_color': 'var(--tg-theme-destructive-text-color)',
    },
    extend: {},
  },
  plugins: [],
}