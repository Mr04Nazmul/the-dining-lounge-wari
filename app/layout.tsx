import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = {metadataBase:new URL('https://dining-lounge-wari.weenlife00.chatgpt.site'),title:'The Dining Lounge | Wari Rooftop, Dhaka',description:'Discover The Dining Lounge Wari Rooftop. Explore the real restaurant, its deep-dish pizza, menu and rooftop. Call to arrange your visit.',openGraph:{title:'The Dining Lounge — Wari Rooftop',description:'Good food. Beautiful company. A little above the everyday.',images:['/images/19.webp']},robots:{index:false,follow:false}};
export const viewport: Viewport = {themeColor:'#171d18'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}
