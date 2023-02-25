const eventRerender = new Event("rerender");


const store = {
    name: "",
    user: {
        name: "",
        age: 0,
        adres: {
            street: "",
            number: 0
        }
    },
    buttonText: ""
}

type IStore = typeof store;

type middleWareFunc = (store: IStore) => void

const middleWares: middleWareFunc[] = [
    (store) => { console.log("store:   ", { store }) }
];

const setStore = (newStore: IStore) => {
    middleWares.forEach(middleWare => {
        middleWare(newStore)
    })

    store.name = newStore.name;
    store.user.name = newStore.user.name;
    store.user.age = newStore.user.age;
    store.user.adres.number = newStore.user.adres.number;
    store.user.adres.street = newStore.user.adres.street;
    store.buttonText = newStore.buttonText;

    context.root?.dispatchEvent(eventRerender)
}

type funcStore = (newStore: IStore) => void;
type funcEvent = () => void;

const context: { root: HTMLElement | undefined, storeUpdate: undefined | funcEvent } = { root: undefined, storeUpdate: undefined }

export const createContext = (root: HTMLElement, storeUpdate: funcEvent) => {
    context.root = root;
    context.storeUpdate = storeUpdate;
}

export const useStore = (): [IStore, funcStore] => {
    if (!context.root) throw new Error("context is undefined use createContext")
    if (!context.storeUpdate) throw new Error("context is undefined use createContext")

    context.root.addEventListener("rerender", context.storeUpdate, false)


    return [store, setStore]
}
