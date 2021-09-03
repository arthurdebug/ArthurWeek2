import React, { useEffect } from "react";

import LinkList from "./LinkList";
import SearchBar from "./SearchBar";

import { useSelector, useDispatch } from "react-redux";
import { ListLinks } from "../Redux/links/actions";

const LoadLinks = () => {
  const linkStore = useSelector((state) => state.linkStore);
  const { loading, error, linkList } = linkStore;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("starting");
    dispatch(ListLinks(""));
  }, []);

  const onSearchBarChanged = (search) => {
    dispatch(ListLinks(search));
    console.log(search);
  };

  return (
    <div className="container-fluid">

        <div className="col-8">
          <LinkList key="uniqueKey" links={linkList} />
          <SearchBar onSearchChange={onSearchBarChanged} />
        </div>
      </div>
  );
};

export default LoadLinks;