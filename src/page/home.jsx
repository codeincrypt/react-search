import React, { useState } from "react";
import { Link } from "react-router-dom";

import { InputGroup, FormControl } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Highlighter from "react-highlight-words";
import "./../App.css";
import alldatalist from "./../data";

const Homepage = (props) => {
  const [datalist, setData] = useState([]);
  const [datalist2] = useState(alldatalist);
  const [query, setQuery] = useState("");

  const onChangeSearch = (e) => {
    var searchString = e.toString().toLowerCase();
    setQuery(e);
    console.log(e, e.length);
    if (e.length > 2) {
      const query = datalist2.filter((item) => {
        return (
          item.id.toLowerCase().match(searchString) ||
          item.name.toLowerCase().match(searchString) ||
          item.address.toLowerCase().match(searchString) ||
          item.pincode.toLowerCase().match(searchString)
        );
      });
      console.log("query", query);
      setData(query);
    } else {
      setData("");
    }
  };

  return (
    <div className="App">
      <div className="col-lg-12" style={{ marginTop: 100 }}>
        <div className="row justify-content-center">
          <div className="col-lg-4">
       
            <div className="input-group">
              <div className="input-group-append border-right-0" style={{marginLeft:-1}}>
                <span className="input-group-text bg-white" id="basic-addon2">
                  🔍
                </span>
              </div>
              <input
                type="text"
                defaultValue={query}
                className="form-control form-control-lg border-left-0 rounded-0"
                placeholder="Search users by Id, address, name"
                onChange={(e) => onChangeSearch(e.target.value)}
              />
            </div>

            {Array.isArray(datalist) && datalist.length > 0 ? (
              <>
                <div
                  className="cards rounded-0"
                  style={{ height: 350, overflowY: "scroll" }}
                >
                  <div className="p-3">
                    <h4 className="font-weight-italic text-left text-dark">
                      {`"${query}"`} found in item
                    </h4>
                  </div>
                  {datalist.map((item, index) => (
                    <Link
                      to={`/${item.id}`}
                      className="border-bottom cardds text-left text-dark py-2 px-4 nav-link"
                      key={index}
                    >
                      <h5 className=" mt-2">{item.id}</h5>
                      <h4 className="text-primary font-weight-normal">
                        <i>{item.name}</i>
                      </h4>
                      <p>
                        {item.address} {item.pincode}
                      </p>
                    </Link>
                  ))}
                </div>
              </>
            ) : null}

            {query !== "" && Array.isArray(datalist) && datalist.length < 1 ? (
              <div className="cards rounded-0 p-5" style={{ height: 350 }}>
                <h3 className="mt-5">No User Found</h3>
                <p>
                  There isn't any user found from this keyword {`"${query}"`}{" "}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
