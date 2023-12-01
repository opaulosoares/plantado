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

// Função para carregar o estado do localStorage
const loadState = (): AppState | undefined => {
    try {
        const serializedState = localStorage.getItem("appState");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

// Função para salvar o estado no localStorage
const saveState = (state: AppState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("appState", serializedState);
    } catch (err) {
        // Tratar erros ao salvar no localStorage, se necessário
    }
};

// Estado inicial
const initialState: AppState = loadState() || {
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
            saveState(state);
        },
        loggedIn: (state) => {
            state.isLoggedIn = true;
            saveState(state);
        },
        loggedOut: (state) => {
            state.isLoggedIn = false;
            saveState(state);
        },
        addToCart: (state, action: PayloadAction<Product>) => {
            state.cart.push(action.payload);
            saveState(state);
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.cart = state.cart.filter(
                (item) => item.id !== action.payload
            );
            saveState(state);
        },
        clearCart: (state) => {
            state.cart = [];
            saveState(state);
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
