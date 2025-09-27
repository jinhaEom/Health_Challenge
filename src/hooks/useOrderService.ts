import { useState, useCallback } from 'react';

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  items: OrderItem[];
  totalPrice: number;
  orderDate: string;
  status: 'completed' | 'pending' | 'cancelled';
}

// Mock 주문 데이터
const mockOrders: Order[] = [];

export const useOrder = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  // 주문 생성
  const createOrder = useCallback(async (items: OrderItem[], totalPrice: number): Promise<boolean> => {
    setIsLoading(true);
    setError(null);


    // 5% 확률로 결제 실패 시뮬레이션
    if (Math.random() < 0.05) {
      setError('결제 중 오류가 발생했습니다. 다시 시도해주세요.');
      setIsLoading(false);
      return false;
    }



    const newOrder: Order = {
      id: Date.now().toString(),
      items,
      totalPrice,
      orderDate: new Date().toISOString(),
      status: 'completed',
    };

    // Mock 데이터에 추가
    mockOrders.unshift(newOrder);
    setOrders([newOrder, ...orders]);

    setIsLoading(false);
    return true;
  }, [orders]);

  // 주문 목록 조회
  const fetchOrders = useCallback(async (): Promise<boolean> => {
    setIsLoading(true);
    setError(null);


    // 2% 확률로 서버 오류 시뮬레이션
    if (Math.random() < 0.02) {
      setError('주문 내역을 불러오는 중 오류가 발생했습니다.');
      setIsLoading(false);
      return false;
    }

    setOrders([...mockOrders]);
    setIsLoading(false);
    return true;
  }, []);

  // 특정 주문 조회
  const getOrderById = useCallback(async (orderId: string): Promise<Order | null> => {
    setIsLoading(true);
    setError(null);

    const order = mockOrders.find(o => o.id === orderId);

    if (!order) {
      setError('해당 주문을 찾을 수 없습니다.');
      setIsLoading(false);
      return null;
    }

    setIsLoading(false);
    return order;
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    isLoading,
    error,
    orders,
    createOrder,
    fetchOrders,
    getOrderById,
    clearError,
  };
};