import ContactForm from '@/components/ContactForm';
import Navbar from '@/components/Navbar';

const ContactPage: React.FC = () => {
    // Define dynamic menu items
 const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
    // Add more items as needed
  ];
  return (
    <><Navbar menuItems={menuItems} />
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen flex items-center justify-center p-4">
    <ContactForm />
  </div>
  </>
  );
};

export default ContactPage;
