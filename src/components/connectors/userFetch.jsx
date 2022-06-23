import React, { useReducer, useEffect } from "react";


export default function Users () {
    const url = "https://jsonplaceholder.typicode.com/users";

    const { loading } = useFetch(url);

    if (loading) {
        return <p>მიმდინარეობს ჩატვირთვა...</p>;
      }
      const useFetch = (url) => {
        const types = {
          REQUEST: "REQUEST",
          SUCCESS: "SUCCESS",
          ERROR: "ERROR",
          REFETCH: "REFETCH",
        };
      
        const [state, dispatch] = useReducer(
          (state, action) => {
            switch (action.type) {
              case types.REQUEST:
                return {
                  ...state,
                  loading: true,
                };
      
              case types.SUCCESS:
                return {
                  ...state,
                  loading: false,
                  data: action.data,
                };
      
              case types.ERROR:
                return {
                  ...state,
                  loading: false,
                  error: action.error,
                };
      
              case types.REFETCH:
                return {
                  ...state,
                  refetch: state.refetch + 1,
                };
      
              default:
                return state;
            }
          },
          {
            loading: true,
            error: undefined,
            data: undefined,
            refetch: 0,
          }
        );
      
        useEffect(() => {
          dispatch({ type: types.REQUEST });
          fetch(url)
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Oops! There was a ${response.status} error`);
              }
              return response.json();
            })
            .then((data) => dispatch({ type: types.SUCCESS, data }))
            .catch((error) => dispatch({ type: types.ERROR, error }));
        }, [state.refetch]);
      
        return {
          ...state,
          refetch: () => dispatch({ type: types.REFETCH }),
        };
    }
}

