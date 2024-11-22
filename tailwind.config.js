/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'Gblue': '#00CFFF', 
        'Gold': '#FFD700'
      },
      fontFamily:{
        orbitronBlack: ['Orbitron-black'],
        orbitronBold: ['Orbitron-bold'],
        orbitronExtrabold: ['Orbitron-extrabold'],
        DeathStar: ['DeathStar'],
        Dragon: ['Dragon'],
        QuickStarter: ['QuickStarter'],
        BruceForever: ['BruceForever'],
        ModernWarfare : ['ModernWarfare'],
        Recharge: ['Recharge']
      },
      dropShadow:{
        textShadow: 'drop-shadow(-1px 6px 4px #00ffff)',
      },
      backgroundImage: {
        'cardFrame': "url('./src/assets/Images/frame_1.png')"
      }
    },
  },
  plugins: [],
}