import React,{ useState } from "react";
import { useDispatch } from "react-redux";
import { AddLink } from "../Redux/links/actions";

function LinkFormType(){

    const dispatch = useDispatch();
    const [tags, setTags] = useState([]);
  const [title, setTitle] = useState("");
  const [url, setURL] = useState("");
  const inputTitle = (e) => setTitle(e.currentTarget.value);
  const inputUrl = (e) => setURL(e.currentTarget.value);
  // const inputTag = () => setTags(tags.concat([{ name: "" }]));
  // const onTagChange = (i, e) => {
  //   const newTags = tags.slice();
  //   newTags[i] = {
  //     name: e.currentTarget.value,
  //   };
  //   setTags(newTags);
  // };
const addLink = () => {
    const newLink = { tags, title, url };
    console.log(newLink);
    dispatch(AddLink(newLink));
    setTags([]);
    setTitle("");
    setURL("");
  };
// function inputTag (e) {
//     const newTags = tags.slice();
//     newTags[i] = {
//       name: e.currentTarget.value,
//     };
//     setTags(newTags);
//    }

return (
    <form onSubmit={addLink}>
        <input 
        name="url"
        type="text"
        value={url}
        onChange={inputUrl}
        />
        <input 
        name="name"
        type="text"
        value={title}
        onChange={inputTitle}
        />
        <input 
        name="tag"
        type="text"
        //value={tag}
        //onChange={inputTag}
        />
        <button className="btn btn-danger" type="submit">Submit</button>
    </form>
)
}
export default LinkFormType;