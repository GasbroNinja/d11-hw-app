import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
//import { useDispatch, useSelector } from "react-redux";
//import { getCompanyAction } from "../redux/actions";

const CompanySearchResults = () => {
//  const dispatch = useDispatch()
  const [jobs, setJobs] = useState([])
  const params = useParams();
  

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
  getJobs()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Container
      fluid
      className="bg-secondary p-5"
      style={{ minHeight: "100vh" }}
    >
      <Row>
        <Col>
        <h1>Compnays</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
