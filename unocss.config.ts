import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
  } from 'unocss'
  
export default defineConfig({
    shortcuts: [
      ['btn-primary', 'bg-primary cursor-pointer hover:bg-primary-dark b-rd-5 p-2'],
      ['input', 'b-rd-5 p-2 focus:outline-none  bg-transparent border'],
    ],
    theme: {
      colors: {
        primary: '#2D6CEA',
        primaryDark: '#1B5CDC',
        gray: '#D9D9D9', 
        green: '#00DC82'
      }
    },
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons({
        scale: 1.2,
        warn: true,
      }),
      presetTypography(),
      presetWebFonts({
        fonts: {
          sans: 'DM Sans',
          serif: 'DM Serif Display',
          mono: 'DM Mono',
        },
      }),
    ],
  })