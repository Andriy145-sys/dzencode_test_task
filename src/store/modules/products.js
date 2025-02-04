export default {
    state: {
        // Initial state with an empty product list
        productList: []
    },
    mutations: {
        // Mutation to set the product list in the state
        setProductList(state, list) {
            state.productList = list;
        },
        // Mutation to clear the product list in the state
        clearProductList(state) {
            state.productList = [];
        }
    },
    actions: {
        // Action to fetch and set the product list
        async getProductList({ commit }) {
            try {
                // Simulating an asynchronous API call to fetch the product list
                const newList = [
                    {
                        id: 1,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 1",
                        type: "Monitors",
                        specification: "Specification 1",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [
                            { value: 100, symbol: "USD", isDefault: 0 },
                            { value: 2600, symbol: "UAH", isDefault: 1 },
                        ],
                        order: 1,
                        date: "2017-06-29 12:09:33",
                    },
                    {
                        id: 2,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 1",
                        type: "Monitors2",
                        specification: "Specification 1",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [
                            { value: 100, symbol: "USD", isDefault: 0 },
                            { value: 2600, symbol: "UAH", isDefault: 1 },
                        ],
                        order: 2,
                        date: "2017-06-29 12:09:33",
                    },
                    {
                        id: 3,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 3",
                        type: "Monitors3",
                        specification: "Specification 1",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [
                            { value: 1000, symbol: "USD", isDefault: 0 },
                            { value: 26000, symbol: "UAH", isDefault: 1 },
                        ],
                        order: 3,
                        date: "2017-06-29 12:09:33",
                    },

                    {
                        id: 4,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 1",
                        type: "Monitors2",
                        specification: "Specification 1",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [
                            { value: 100, symbol: "USD", isDefault: 0 },
                            { value: 2600, symbol: "UAH", isDefault: 1 },
                        ],
                        order: 1,
                        date: "2017-06-29 12:09:33",
                    },
                    {
                        id: 5,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 1",
                        type: "Monitors3",
                        specification: "Specification 1",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [
                            { value: 100, symbol: "USD", isDefault: 0 },
                            { value: 2600, symbol: "UAH", isDefault: 1 },
                        ],
                        order: 1,
                        date: "2017-06-29 12:09:33",
                    },
                    {
                        id: 6,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 1",
                        type: "Monitors",
                        specification: "Specification 1",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [
                            { value: 100, symbol: "USD", isDefault: 0 },
                            { value: 2600, symbol: "UAH", isDefault: 1 },
                        ],
                        order: 1,
                        date: "2017-06-29 12:09:33",
                    },
                    {
                        id: 7,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 1",
                        type: "Monitors",
                        specification: "Specification 1",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [
                            { value: 100, symbol: "USD", isDefault: 0 },
                            { value: 2600, symbol: "UAH", isDefault: 1 },
                        ],
                        order: 1,
                        date: "2017-06-29 12:09:33",
                    },
                    {
                        id: 8,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 1",
                        type: "Monitors3",
                        specification: "Specification 1",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [
                            { value: 100, symbol: "USD", isDefault: 0 },
                            { value: 2600, symbol: "UAH", isDefault: 1 },
                        ],
                        order: 1,
                        date: "2017-06-29 12:09:33",
                    },
                    {
                        id: 9,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 1",
                        type: "Monitors",
                        specification: "Specification 1",
                        group: "Довга назва групи",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [
                            { value: 100, symbol: "USD", isDefault: 0 },
                            { value: 2600, symbol: "UAH", isDefault: 1 },
                        ],
                        order: 1,
                        date: "2017-06-29 12:09:33",
                    },
                    {
                        id: 10,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 2",
                        type: "Monitors2",
                        specification: "Specification 1",
                        orderName: "Довга придовга назва замовлення",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [
                            { value: 500, symbol: "Euro", isDefault: 0 },
                            { value: 100, symbol: "USD", isDefault: 0 },
                            { value: 2600, symbol: "UAH", isDefault: 1 },
                        ],
                        order: 2,
                        date: "2017-06-29 12:09:33",
                    },
                    {
                        id: 11,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 2",
                        type: "Monitors",
                        specification: "Specification 2",
                        ownerName: "Довга придовга назва власника",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [{ value: 2600, symbol: "UAH", isDefault: 1 }],
                        order: 4,
                        date: "2017-06-29 12:09:33",
                    },
                    {
                        id: 12,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 2",
                        type: "Monitors",
                        group: "Довга назва групи",
                        orderName: "Довга придовга назва замовлення",
                        ownerName: "Довга придовга назва власника",
                        specification: "Specification 2",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [{ value: 2600, symbol: "UAH", isDefault: 1 }],
                        order: 4,
                        date: "2017-06-29 12:09:33",
                    },
                    {
                        id: 13,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 1",
                        type: "Monitors",
                        specification: "Specification 2",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [{ value: 2600, symbol: "UAH", isDefault: 1 }],
                        order: 4,
                        date: "2017-06-29 12:09:33",
                    },
                    {
                        id: 14,
                        serialNumber: 1234,
                        isNew: 1,
                        photo: "monitor.jpg",
                        title: "Product 2",
                        type: "Monitors",
                        specification: "Specification 2",
                        guarantee: {
                            start: "2017-06-29 12:09:33",
                            end: "2017-06-29 12:09:33",
                        },
                        price: [{ value: 2600, symbol: "UAH", isDefault: 1 }],
                        order: 4,
                        date: "2017-06-29 12:09:33",
                    },
                ];
                commit('setProductList', newList)
            } catch (e) {
                // If an error occurs during the fetch, set an error in the state
                commit('setError', e)
                throw e
            }
        }
    },
    getters: {
        // Getter to retrieve the product list from the state
        productList: state => state.productList
    }
}
