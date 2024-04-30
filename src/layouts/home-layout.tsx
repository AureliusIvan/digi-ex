// HomeLayout.tsx

import Navbar from '../components/navbar';
import {
  ReactNode
} from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <header className="App-header">
        <Navbar />
      </header>
      <main
        className='bg-white'
      >
        {children}
      </main>
    </div>
  );
}

export default Layout;