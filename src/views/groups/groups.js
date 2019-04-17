import React, { Component, Fragment } from "react";
import { Row, Col, Card, CardBody, CardImg, CardTitle, CardSubtitle, CardText, CardLink, Button } from "reactstrap";
import cardImg02 from "../../assets/img/photos/02.jpg";
import cardImg06 from "../../assets/img/photos/06.jpg";
import cardImg08 from "../../assets/img/photos/08.jpg";
import cardImg09 from "../../assets/img/photos/09.jpg";
import cardImg10 from "../../assets/img/photos/10.jpg";
import cardImg14 from "../../assets/img/photos/14.jpg";

import cardImg12 from "../../assets/img/photos/12.jpg";
import cardImg13 from "../../assets/img/photos/13.jpg";
import cardImg17 from "../../assets/img/photos/17.jpg";
class Groups extends Component {
    API = 'http://localhost:8081/group/all';

    constructor() {
        super();
        this.state = {
            isOpen: false,
            groupList: [],
        };

    }

    componentDidMount() {
        // fetch data and update state
        fetch(this.API).then((response) => {
            return response.json();
        }).then(({ groupList }) => {
            console.log(groupList);
            this.setState({
                groupList: groupList,
            })
        });
    }

   render() {
      return (
          <Fragment>
              <Row>
                  <Col xs="12">
                      <div className="content-header">Groups</div>
                  </Col>
              </Row>

              <Card>
                  <CardBody>
                      <div className="grid-hover">
                          <Row className="row-eq-height">
                              {this.state.groupList.map(function(g, idx){
                                  return (

                                      <Col sm="12" md="4" key={idx}>
                                      <Card>
                                      <CardImg top width="100%" src={cardImg14} alt="Card cap" />
                                      <CardBody>
                                      <CardTitle>{g.username}</CardTitle>
                                  <CardSubtitle>Find yourself... again...</CardSubtitle>
                                  <CardText>
                                  Yearly escape
                                  </CardText>
                                  <Button className="btn-round" outline color="danger">
                                      Join
                                  </Button>
                                  </CardBody>
                              </Card>
                              </Col>
                                  )
                              })}

                              <Col sm="12" md="4">
                                  <Card>
                                      <CardImg top width="100%" src={cardImg14} alt="Card cap" />
                                      <CardBody>
                                          <CardTitle>Basic</CardTitle>
                                          <CardSubtitle>Card subtitle</CardSubtitle>
                                          <CardText>
                                              Some quick example text to build on the card title and make up the bulk of the card's content.
                                          </CardText>
                                          <Button className="btn-round" outline color="danger">
                                              Button
                                          </Button>
                                      </CardBody>
                                  </Card>
                              </Col>
                              <Col sm="12" md="4">
                                  <Card>
                                      <CardImg top width="100%" src={cardImg14} alt="Card cap" />
                                      <CardBody>
                                          <CardTitle>Basic</CardTitle>
                                          <CardSubtitle>Card subtitle</CardSubtitle>
                                          <CardText>
                                              Some quick example text to build on the card title and make up the bulk of the card's content.
                                          </CardText>
                                          <Button className="btn-round" outline color="danger">
                                              Button
                                          </Button>
                                      </CardBody>
                                  </Card>
                              </Col>
                          </Row>
                      </div>
                  </CardBody>
              </Card>
          </Fragment>
      );
   }
}

export default Groups;
