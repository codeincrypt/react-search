import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl } from "react-bootstrap";
import { useState } from "react";
import alldatalist from "./data";

function App() {
  const [datalist, setData] = useState(['']);
  const [datalist2] = useState(alldatalist);
  const [query, setQuery] = useState("");

  const onChangeSearch = (e) => {
    var searchString = e.toString().toLowerCase();
    setQuery(e);
    console.log(e, e.length);
    if(e.length > 2){
      const query = datalist2.filter((item) => {
        return (
          item.id.toLowerCase().match(searchString) ||
          item.name.toLowerCase().match(searchString) ||
          item.address.toLowerCase().match(searchString) ||
          item.pincode.toLowerCase().match(searchString)
        );
      });
      console.log('query', query)
      setData(query);
    }
    else {
      setData("")
    }
  };

  return (
    <div className="App">
      <div className="col-lg-12" style={{ marginTop: 100 }}>
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <InputGroup className="mb-3">
              <FormControl
                size="lg"
                defaultValue={query}
                placeholder="Search users by Id, address, name"
                aria-label="Search"
                aria-describedby="basic-addon1"
                onChange={(e) => onChangeSearch(e.target.value)}
              />
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
              </InputGroup.Prepend>
            </InputGroup>
            {datalist.length > 0 ? (
            <div className="p-3">
                <h4 className="font-weight-italic text-left text-dark">{`"${query}"`} found in item</h4>
              </div>
            ) : null}

            {Array.isArray(datalist) && datalist.length > 0 ? (
              <>
              <div style={{height:300, overflowY:'scroll'}}>
                {datalist.map((item, index) => (
                  <div
                  className="card text-left py-2 px-4 "
                    key={index}
                  >
                    <h5 className="mt-2">{item.id}</h5>
                    <h4 className="text-primary"><i>{item.name}</i></h4>
                    <p>{item.address} {item.pincode}</p>
                  </div>
                ))
                }
            </div>
            </>
              ) : null
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
