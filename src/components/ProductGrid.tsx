import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category?: string;
  isNew?: boolean;
}

interface ProductGridProps {
  title: string;
  products: Product[];
}

const ProductGrid = ({ title, products }: ProductGridProps) => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
          {title}
        </h2>
        <div className="w-24 h-0.5 bg-accent mx-auto"></div>
      </motion.div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            {...product}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;