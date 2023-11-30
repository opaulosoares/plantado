import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

type Address = {
    street: string;
    number: number;
    city: string;
    state: string;
    country: string;
    zipCode: string;
};

// Definindo tipos
export interface User {
    _id?: string;
    name?: string;
    email?: string;
    address?: Address;
}

interface Product {
    _id: string;
    // outros campos do produto
}

interface CartItem extends Product {
    amount: number;
}

interface AppState {
    isLoggedIn: boolean;
    cart: Record<string, CartItem>;
    user: User;
    products: Record<string, Product>;
    users: Record<string, User>;
    categoryData: Record<string, any>; // Ajuste conforme a estrutura real
    bestDeals: Record<string, any>; // Ajuste conforme a estrutura real
}

// Estado inicial
const initialState: AppState = {
    isLoggedIn: false,
    cart: {},
    user: { name: "John Doe", email: "johndoe@mail.com" },
    products: {},
    users: {},
    categoryData: {},
    bestDeals: {},
};

// Criando um slice para o usuário
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        loggedIn: (state) => {
            state.isLoggedIn = true;
        },
        loggedOut: (state) => {
            state.isLoggedIn = false;
        },
    },
});

// Criando um slice para o carrinho de compras
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const productId = action.payload._id;
            state.cart[productId] = {
                ...action.payload,
                amount: (state.cart[productId]?.amount || 0) + 1,
            };
        },
        removeFromCart: (state, action: PayloadAction<Product>) => {
            const productId = action.payload._id;
            if (state.cart[productId]?.amount === 1) {
                delete state.cart[productId];
            } else {
                state.cart[productId].amount -= 1;
            }
        },
        clearProductAmount: (state, action: PayloadAction<Product>) => {
            const productId = action.payload._id;
            delete state.cart[productId];
        },
        clearCart: (state) => {
            state.cart = {};
        },
        // Outras ações relacionadas ao carrinho
    },
});

// Combinando os slices
const rootReducer = {
    user: userSlice.reducer,
    cart: cartSlice.reducer,
    // Adicione outros slices aqui conforme necessário
};

// Criando a store
const store = configureStore({
    reducer: rootReducer,
});

// Exportando actions para uso em componentes
export const { setUser, loggedIn, loggedOut } = userSlice.actions;
export const { addToCart, removeFromCart, clearProductAmount, clearCart } =
    cartSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
