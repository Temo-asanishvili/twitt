import React, { useReducer, useEffect } from "react";
import "./App.scss";


    const App = () => {
      const url = "https://jsonplaceholder.typicode.com/posts/";
      const { loading, error, data, refetch } = useFetch(url);
      
      if (loading) {
        return <p>Loading...</p>;
      }
      
      if (error) {
        return <p>Error: {error.message}</p>;
      }
      
      return (
        <div>
          <button onClick={refetch}>Refetch</button>
          <ul>
            {data.map(post => (
              <li key={post.id}>
                <div> პოსტის დასახელება </div>
               <div>{post.title}</div> 
                ნომერი: {post.id}

               
                <a href={post.id}> დეტალური ინფორმაცია</a>
                
              </li>
            ))}
          </ul>
        </div>
      );
    };
    
    const useFetch = (url) => {
      const types = {
        REQUEST: "REQUEST",
        SUCCESS: "SUCCESS",
        ERROR: "ERROR",
        REFETCH: "REFETCH",
      };
      
      const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
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
      }, {
        loading: true,
        error: undefined,
        data: undefined,
        refetch: 0,
      });
        
      useEffect(() => {
        dispatch({ type: types.REQUEST });
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Oops! There was a ${response.status} error`);
            }
            return response.json();
          })
          .then(data => dispatch({ type: types.SUCCESS, data }))
          .catch(error => dispatch({ type: types.ERROR, error }))
      }, [state.refetch]);
      
      return {
        ...state,
        refetch: () => dispatch({ type: types.REFETCH }),
      };
    };
    




export default App