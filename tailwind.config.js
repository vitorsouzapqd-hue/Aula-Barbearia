/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,vue,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Palette
        primary: {
          DEFAULT: '#D4A373', // Tom areia/dourado amadeirado (Classic Barbershop Gold)
          light: '#E6CCB2',
          dark: '#BC8A5F',
        },
        secondary: {
          DEFAULT: '#2D3047', // Azul/cinza muito denso e elegante (Deep Navy/Charcoal)
          light: '#414561',
          dark: '#1B1D2A',
        },
        accent: {
          DEFAULT: '#932822', // Vermelho bordô clássico (Subtle Barber Pole Red)
          light: '#B23A33',
          dark: '#731C17',
        },
        // Backgrounds & Surfaces (Premium Dark Mode Vibe)
        background: {
          DEFAULT: '#111111', // Preto com fundo premium
          paper: '#1A1A1A',   // Preto levemente mais claro (Para Cartões/Containers)
          alt: '#222222',     // Estado de hover / pequenas variações
        },
        // Text Colors
        typography: {
          DEFAULT: '#F5F5F5', // Branco suavizado para não cansar a vista
          muted: '#A3A3A3',   // Cinza para descrições, subtítulos e labels
        }
      },
    },
  },
  plugins: [],
}

