import "./App.css";
import Card from "./components/Card";
import Collapse from "./components/Collapse.js";

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="card-group">
          <div className="col">
            <Collapse>
              <Card
                cardTitle="Card I"
                cardTime="3"
                image="https://st3.myideasoft.com/idea/ct/82/myassets/blogs/fron-end-developer-becerileri.jpg"
              />
            </Collapse>
          </div>

          <div className="col">
            <Collapse>
              <Card
                cardTitle="Card 2"
                cardTime="30"
                image="https://railsware.com/blog/wp-content/uploads/2019/07/Why-we-use-ReactJS-for-our-projects-Illustration.jpg"
              />
            </Collapse>
          </div>

          <div className="col">
            <Collapse>
              <Card
                cardTitle="Card 3"     
                cardTime="95"           
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvaiviV_EatiH5y4VCz8C6wgD4-xq-wDbvmA&usqp=CAU"
              />
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
