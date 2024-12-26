import { Link } from 'react-router-dom';


function MainNavigation() {
  return (
    <header className="container">
        <div className="row">
            <div className="col-sm-12 col-md-3">
                <Link to="#"><img src="/img/team-1.jpg" className="img-fluid" /></Link>
            </div>
             <div className="col-sm-12 col-md-3">
                <Link to="#"><img src="/img/team-2.jpg" className="img-fluid" /></Link>
            </div>
             <div className="col-sm-12 col-md-3">
                <Link to="#"><img src="/img/team-3.jpg" className="img-fluid" /></Link>
            </div>
             <div className="col-sm-12 col-md-3">
                <Link to="#"><img src="/img/team-4.jpg" className="img-fluid" /></Link>
            </div>
             <div className="col-sm-12 col-md-3">
                <Link to="#"><img src="/img/team-1.jpg" className="img-fluid" /></Link>
            </div>
             <div className="col-sm-12 col-md-3">
                <Link to="#"><img src="/img/team-1.jpg" className="img-fluid" /></Link>
            </div>
        </div>
    </header>
  );
}

export default MainNavigation;
