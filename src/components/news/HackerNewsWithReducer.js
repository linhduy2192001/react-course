import axios from "axios";

import React, { useEffect, useReducer, useRef, useState } from "react";
// http://hn.algolia.com/api/v1/search?query=react

const initialState = {
  hits: [],
  query: "",
  loading: true,
  errorMessage: "",
  url: "http://hn.algolia.com/api/v1/search?query=''",
};
const HackerNewsReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, hits: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, loading: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, errorMessage: action.payload };
    }
    case "SET_QUERY": {
      return { ...state, query: action.payload };
    }
    case "SET_URL": {
      return { ...state, url: action.payload };
    }
    default:
      break;
  }
};
const HackerNewsWithReducer = () => {
  const [state, dispatch] = useReducer(HackerNewsReducer, initialState);
  // const [hits, setHits] = useState([]);
  // const [query, setQuery] = useState("");
  // const [loading, setLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState("");
  // const [url, setUrl] = useState(
  //   `http://hn.algolia.com/api/v1/search?query=${query}`
  // );
  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    dispatch({
      type: "SET_LOADING",
      payload: true,
    });
    // setLoading(true);
    try {
      const response = await axios.get(state.url);
      dispatch({
        type: "SET_DATA",
        payload: response.data?.hits || [],
      });
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      // setHits(response.data?.hits || []);
      // setLoading(false);
    } catch (error) {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
      dispatch({
        type: "SET_ERROR",
        payload: `The error happend ${error}`,
      });
    }
  };
  useEffect(() => {
    handleFetchData.current();
  }, [state.url]);
  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-200 p-5 block w-full rounded-md   transition-all focus:border-blue-400"
          defaultValue={state.query}
          placeholder="Typing your keyword"
          onChange={(e) =>
            dispatch({
              type: "SET_QUERY",
              payload: e.target.value,
            })
          }
        />
        <button
          disabled={state.loading}
          style={{
            opacity: state.loading ? "0.25" : "1",
          }}
          onClick={() => {
            dispatch({
              type: "SET_URL",
              payload: `http://hn.algolia.com/api/v1/search?query=${state.query}`,
            });
          }}
          className="bg-blue-500 text-white font-semibold p-5 rounded-md flex-shrink-0"
        >
          Fetching{" "}
        </button>
      </div>

      {!state.loading && state.errorMessage && <p>{state.errorMessage}</p>}
      {state.loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!state.loading &&
          state.hits.length > 0 &&
          state.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3 key={item.objectID} className="p-3 bg-gray-100 ">
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithReducer;
