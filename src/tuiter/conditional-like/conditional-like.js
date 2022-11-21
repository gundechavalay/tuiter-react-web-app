import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk}
  from "../../services/tuits-thunks";

const ConditionalLike = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        const updatedTuit = {
            ...tuit
        }
        updatedTuit.likes = updatedTuit.liked ? updatedTuit.likes - 1 : updatedTuit.likes + 1
        updatedTuit.liked = !updatedTuit.liked;
        dispatch(updateTuitThunk(updatedTuit));   
    }
    return (
        <span onClick={() => likeTuitHandler(tuit)}>
            {
                tuit.liked &&
                <i className="fa-solid fa-thumbs-up"></i>
            }
            {
                !tuit.liked &&
                <i className="fa-regular fa-thumbs-up"></i>
            }

            &nbsp;{tuit.likes}&nbsp;&nbsp;
        </span>
);
}
export default ConditionalLike;