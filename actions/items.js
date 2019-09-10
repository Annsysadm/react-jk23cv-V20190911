import axios from "axios";

export function itemsHasError(bool) {
    return {
        type: 'GET_ITEMS_FAILURE',
        hasError: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        dispatch(itemsIsLoading(true));
          axios.get(url).then((response) => {
                dispatch(itemsIsLoading(false));
                dispatch(itemsFetchDataSuccess(response.data.results));
                console.log(response.data.results);
            })
            .catch((error)=>{
              dispatch(itemsHasError(true));
            });
        };
}