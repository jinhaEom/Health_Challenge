import { useState, useCallback, useMemo } from 'react';
import { ProductList, ProductInfo } from '../data/ProductList';

export const useProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [products, setProducts] = useState<ProductInfo[]>([]);
  const [search, setSearch] = useState('');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  // 상품 목록 조회
  const fetchProducts = useCallback(async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);


    // 3% 확률로 서버 오류 시뮬레이션
    if (Math.random() < 0.03) {
      setError('상품 목록을 불러오는 중 오류가 발생했습니다.');
      setIsLoading(false);
      return false;
    }

    // Mock 데이터 로드
    setProducts([...ProductList]);
    setIsLoading(false);
    return true;
  }, []);

  // 특정 상품 조회
  const getProductById = useCallback(async (id: number): Promise<ProductInfo | null> => {
    setIsLoading(true);
    setError(null);


    const product = ProductList.find(p => p.id === id);

    if (!product) {
      setError('해당 상품을 찾을 수 없습니다.');
      setIsLoading(false);
      return null;
    }

    // 2% 확률로 상품 정보 로드 실패
    if (Math.random() < 0.02) {
      setError('상품 정보를 불러오는 중 오류가 발생했습니다.');
      setIsLoading(false);
      return null;
    }

    setIsLoading(false);
    return product;
  }, []);

  // 상품 검색
  const searchProducts = useCallback(async (query: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);



    // 5% 확률로 검색 실패
    if (Math.random() < 0.05) {
      setError('검색 중 오류가 발생했습니다.');
      setIsLoading(false);
      return false;
    }

    const filtered = ProductList.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );

    setProducts(filtered);
    setSearch(query);
    setIsLoading(false);
    return true;
  }, []);

  // 필터링된 상품 목록
  const filteredProducts = useMemo(() => {
    let filtered = products.length > 0 ? products : ProductList;

    if (search.trim() !== '') {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter(product => product.type === selectedType);
    }

    return filtered;
  }, [products, search, selectedType]);

  // 타입 필터 토글
  const handleTypePress = useCallback((type: string) => {
    if (selectedType === type) {
      setSelectedType(null);
    } else {
      setSelectedType(type);
    }
  }, [selectedType]);

  // 필터 초기화
  const resetFilters = useCallback(() => {
    setSearch('');
    setSelectedType(null);
    setProducts([]);
  }, []);

  const isTypeSelected = useCallback((type: string) => selectedType === type, [selectedType]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isLoading,
    error,
    products: filteredProducts,
    search,
    selectedType,
    fetchProducts,
    getProductById,
    searchProducts,
    setSearch,
    handleTypePress,
    resetFilters,
    isTypeSelected,
    clearError,
  };
};