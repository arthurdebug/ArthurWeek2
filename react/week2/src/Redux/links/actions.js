import axios from "axios";

 // Action constants
export const LINKS_REQUEST = "LINKS_REQUEST";
export const ADD_LINKS_SUCCESS = "ADD_LINKS_SUCCESS";
export const ADD_LINKS_FAIL = "ADD_LINKS_FAIL";
export const LIST_LINKS_SUCCESS = "LIST_LINKS_SUCCESS";
export const LIST_LINKS_FAIL = "LIST_LINKS_FAIL";

// Redux thunk actions:
export const ListLinks = (search) => async (dispatch) => {
  try {
    dispatch({ type: LINKS_REQUEST });
    const { data } = await axios.get(
      `http://localhost:8080/api/link?search=${search}`
    );
    dispatch({ type: LIST_LINKS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LIST_LINKS_FAIL, payload: error });
  }
};

export const AddLink = (link) => async (dispatch) => {
  try {
    console.log(link, "in redux");
    dispatch({ type: LINKS_REQUEST });
    const { data } = await axios.post("http://localhost:8080/api/link", link);
    // .post(`${process.env.REACT_APP_API_SERVER}/api/link/`, link)
    console.log("Gets here");
    console.log(data);
    dispatch({ type: ADD_LINKS_SUCCESS, payload: link });
  } catch (error) {
    dispatch({ type: ADD_LINKS_FAIL, payload: error });
  }
};