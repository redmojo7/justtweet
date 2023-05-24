const { Component } = require("react")

class Footer extends Component{
    render(){
        return(
            <footer className="footer py-3 bg-dark">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="text-white">Contact Us</h3>
                    <p className="text-white">Kent St</p>
                    <p className="text-white">Bentley, WA 6102</p>
                    <p className="text-white">Email: 21053409@student.curtin.edu.au</p>
                  </div>
                  <div className="col-md-6">
                    <h3 className="text-white">Follow Us</h3>
                    <ul className="list">
                      <li className="list text-muted"><a href="https://www.curtin.edu.au/"><i className="fa fa-linkedin "></i>Curtin University</a></li>
                      <li className="list text-muted"><a href="https://www.linkedin.com/in/peng-cai/"><i className="fa fa-linkedin "></i>Linkedin</a></li>
                    </ul>
                  </div>
                </div>
                <p className="text-muted text-center">&copy; 2023 Curti University</p>
              </div>
          </footer>
        )
    }
}

export default Footer;