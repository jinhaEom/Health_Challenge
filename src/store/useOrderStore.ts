import { create } from 'zustand';

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

interface OrderState {
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'orderDate' | 'status'>) => void;
  getOrderById: (id: string) => Order | undefined;
}

export const useOrderStore = create<OrderState>((set, get) => ({
  orders: [],

  addOrder: (orderData) => {
    const newOrder: Order = {
      ...orderData,
      id: Date.now().toString(),
      orderDate: new Date().toISOString(),
      status: 'completed',
    };

    set((state) => ({
      orders: [newOrder, ...state.orders],
    }));
  },

  getOrderById: (id) => {
    return get().orders.find(order => order.id === id);
  },
}));