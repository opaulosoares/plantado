import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

// Definindo tipos
export interface User {
    _id?: string;
    name?: string;
    email?: string;
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    discountedPrice: number;
    hasDiscount: boolean;
    image: string;
    alt_text: string;
    subcategory: string;
    category: string;
}

interface AppState {
    isLoggedIn: boolean;
    user: User;
    cart: Product[];
    address?: {
        street: string;
        number: number;
        city: string;
        state: string;
        country: string;
        zipCode: string;
    };
    products: { [key: string]: Product };
    users: { [key: string]: User };
    categoryData: { [key: string]: any };
    bestDeals: { [key: string]: any };
}

// Estado inicial
const initialState: AppState = {
    isLoggedIn: true,
    user: {
        name: "John Doe",
        email: "johndoe@mail.com",
    },
    cart: [],
    products: {},
    users: {},
    categoryData: {},
    bestDeals: {},
};

// Criando um único slice para tudo
const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = { ...state.user, ...action.payload };
        },
        loggedIn: (state) => {
            state.isLoggedIn = true;
        },
        loggedOut: (state) => {
            state.isLoggedIn = false;
        },
        addToCart: (state, action: PayloadAction<Product>) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
        },
        clearCart: (state) => {
            state.cart = [];
        },
    },
});

// Combinando o único slice
const rootReducer = appSlice.reducer;

// Criando a store
const store = configureStore({
    reducer: rootReducer,
});

// Exportando actions para uso em componentes
export const {
    setUser,
    loggedIn,
    loggedOut,
    addToCart,
    removeFromCart,
    clearCart,
} = appSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
