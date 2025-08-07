import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

const Index = () => {
  const bestSellerProducts = [
    {
      id: '1',
      name: 'Heritage Wool Coat',
      price: 'Rp 3.250.000',
      image: product1,
      category: 'Outerwear',
    },
    {
      id: '2',
      name: 'Cashmere Essential Scarf',
      price: 'Rp 1.150.000',
      image: product2,
      category: 'Accessories',
      isNew: true,
    },
    {
      id: '3',
      name: 'Oxford Leather Shoes',
      price: 'Rp 2.450.000',
      image: product3,
      category: 'Footwear',
    },
    {
      id: '4',
      name: 'Premium Knit Sweater',
      price: 'Rp 1.850.000',
      image: product4,
      category: 'Knitwear',
    },
  ];

  const newArrivals = [
    {
      id: '5',
      name: 'Tailored Blazer',
      price: 'Rp 2.850.000',
      image: product1,
      category: 'Formal',
      isNew: true,
    },
    {
      id: '6',
      name: 'Silk Pocket Square',
      price: 'Rp 350.000',
      image: product2,
      category: 'Accessories',
      isNew: true,
    },
    {
      id: '7',
      name: 'Leather Loafers',
      price: 'Rp 2.150.000',
      image: product3,
      category: 'Footwear',
      isNew: true,
    },
    {
      id: '8',
      name: 'Cotton Shirt',
      price: 'Rp 950.000',
      image: product4,
      category: 'Shirts',
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <ProductGrid 
          title="Best Sellers" 
          products={bestSellerProducts}
        />
        
        <ProductGrid 
          title="New Arrivals" 
          products={newArrivals}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
