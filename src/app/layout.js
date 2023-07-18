
import './globals.css'
import NavBar from '@/components/NavBar'
import { AppProvider } from '@/Context/AppContext'
import { Space_Mono} from 'next/font/google'



const font = Space_Mono({ weight: ["400"], subsets: ['latin'] })

export const metadata = {
  title: 'DevFinder',
  description: 'DevFinder',
}

export default function RootLayout({ children }) {
  return (
    <html className='dark' lang="en">
      <AppProvider> 
      <body className={`${font.className} w-full flex flex-col items-center`}>
        <NavBar/>
        {children}
        </body>
      </AppProvider>
    </html>
  )
}
