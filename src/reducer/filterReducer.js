const filterReducer = (state, action) => {
    switch (action.type) {
        case "LOAD_FILTER_PRODUCTS":
            let priceArr = action.payload.map(currElem => currElem.price);
            let maxPrice = Math.max(...priceArr);

            return {
                ...state,
                filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxPrice, price: maxPrice }
            }

        case "SET_GRID_VIEW":
            return {
                ...state,
                grid_view: true,
            }
        case "SET_LIST_VIEW":
            return {
                ...state,
                grid_view: false,
            }
        case "GET_SORT_VALUE":

            return {
                ...state,
                sort_value: action.payload,
            }

        case "SORTING_PRODUCTS":
            let newSortData;

            const { filter_products, sort_value } = state;
            let tempSortProducts = [...filter_products];

            const sortingProducts = (a, b) => {
                if (sort_value === "lowest") {
                    return a.price - b.price
                }
                if (sort_value === "highest") {
                    return b.price - a.price;
                }

                if (sort_value === "a-z") {
                    return a.name.localeCompare(b.name)
                }
                if (sort_value === "z-a") {
                    return b.name.localeCompare(a.name)
                }
            }



            newSortData = tempSortProducts.sort(sortingProducts)

            return {
                ...state,
                filter_products: newSortData,
            }

        case "UPDATE_FILTER_VALUE":
            const { name, value } = action.payload;

            return {
                ...state,
                filters: {
                    ...state.filters, [name]: value,
                }

            }



        case "FILTER_PRODUCTS":
            let { all_products } = state;
            let tempFilterProducts = [...all_products];

            let { text, category, company, color, price } = state.filters;

            if (text) {
                tempFilterProducts = tempFilterProducts.filter((currElem) => {
                    return currElem.name.toLowerCase().includes(text);
                })
            }
            if (category !== "all") {
                tempFilterProducts = tempFilterProducts.filter((currElem) => {
                    return currElem.category.toLowerCase() === category.toLowerCase();
                })
            }
            if (company !== "all") {
                tempFilterProducts = tempFilterProducts.filter((currElem) => {
                    return currElem.company.toLowerCase() === company.toLowerCase();
                })
            }
            if (color !== "all") {
                tempFilterProducts = tempFilterProducts.filter((currElem) => {
                    return currElem.colors.includes(color);
                })
            }
            if (price === 0) {
                tempFilterProducts = tempFilterProducts.filter((currElem) => currElem.price === price)

            } else {
                tempFilterProducts = tempFilterProducts.filter((currElem) => currElem.price <= price)
            }
            return {
                ...state,
                filter_products: tempFilterProducts,
            }

        case "CLEAR_FILTERS":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: "",
                    category: "all",
                    company: "all",
                    color: "all",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: 0

                },
            }

        default:
            return {
                ...state
            };
    }
}

export default filterReducer;