import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Eye, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  category?: string;
  isNew?: boolean;
  index?: number;
}

const ProductCard = ({ id, name, price, image, category, isNew, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -8,
        rotateY: 2,
        scale: 1.02
      }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 cursor-hover transform-gpu"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-[3/4]">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1, rotate: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        />
        
        {/* New Badge */}
        {isNew && (
          <div className="absolute top-3 left-3 bg-accent text-primary px-2 py-1 text-xs font-medium rounded">
            New
          </div>
        )}

        {/* Overlay with Quick Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-primary/20 flex items-center justify-center gap-3 transition-opacity duration-300"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Button variant="secondary" size="sm" className="backdrop-blur-sm">
              <Eye className="h-4 w-4 mr-2" />
              Quick View
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Button variant="default" size="sm" className="backdrop-blur-sm">
              <ShoppingBag className="h-4 w-4 mr-2" />
              Tambah
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {category && (
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
            {category}
          </p>
        )}
        
        <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-primary">
            {price}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-full hover:bg-accent transition-colors cursor-hover"
          >
            <motion.div
              whileHover={{ y: -1 }}
              transition={{ duration: 0.2 }}
            >
              <ShoppingBag className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;