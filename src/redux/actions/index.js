export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const ADD_COMPANY_JOBS = "ADD_COMPANY_JOBS";
export const ADD_JOBS = "ADD_JOBS";

export const addToFavoriteAction = data => ({ type: ADD_TO_FAVOURITES, payload: data });
export const removeFromFavoriteAction = data => ({ type: REMOVE_FROM_FAVOURITES, payload: data });


export const getCompanyAction = params => {
  return async dispatch => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: ADD_COMPANY_JOBS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getJobsAction = query => {
  return async dispatch => {
    const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: ADD_JOBS, payload: data });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};