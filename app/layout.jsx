import Navbar from '@/components/navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/global.css';
import AuthProvider from '@/components/AuthProvider';

export const metadata = {
  title: 'PropertyPulse | Find the Perfect Rental',
  description: 'Find the perfect rental property for you and your family. PropertyPulse is the best place to find your next home.',
  keyword: 'rental, property, home, house, apartment, condo, townhouse, real estate, property management, property manager'
}

const MainLayout = ({children}) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body>
          <Navbar/> 
          <main>{children}</main>
          <Footer/>
        </body>
      </html>
    </AuthProvider>
  )
} 

export default MainLayout