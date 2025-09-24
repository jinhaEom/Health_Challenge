import { useState, useMemo } from 'react';
import { ProductList } from '../data/ProductList';

export const useProductFilter = () => {
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    let filtered = ProductList;

    if (search.trim() !== '') {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (selectedType) {
      filtered = filtered.filter(product => product.type === selectedType);
    }

    return filtered;
  }, [search, selectedType]);

  const handleTypePress = (type: string) => {
    if (selectedType === type) {
      setSelectedType(null);
    } else {
      setSelectedType(type);
    }
  };

  const resetFilters = () => {
    setSearch('');
    setSelectedType(null);
  };

  const isTypeSelected = (type: string) => selectedType === type;

  return {
    search,
    setSearch,
    selectedType,
    filteredProducts,
    handleTypePress,
    resetFilters,
    isTypeSelected,
  };
};
