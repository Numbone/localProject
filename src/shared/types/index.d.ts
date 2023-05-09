declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.svg'
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string
    }
  }
}
