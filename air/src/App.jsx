import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PropertyGallery from './components/PropertyGallery';
import PropertyDetails from './components/PropertyDetails';
import Reviews from './components/Reviews';


export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <PropertyGallery />
        <PropertyDetails />
        <Reviews />
      </main>
    </div>
  );
}
