import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addToFavoriteAction, removeFromFavoriteAction } from '../redux/actions';

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const favourites = useSelector((state) => state.favourites.content);
  const isInFavourites = favourites.includes(data.company_name);


return (
  <Row
    className="mx-0 mt-3 p-3 align-items-center"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={2} className="p-2">
      <Button
        variant="light"
        className="text-success border-3 border fw-bold"
        onClick={() => {
          isInFavourites
            ? dispatch(removeFromFavoriteAction(data.company_name))
            : dispatch(addToFavoriteAction(data.company_name));
        }}
      >
        Set to favorite
      </Button>
    </Col>
    <Col className="ps-0">
      <Link
        className="text-decoration-none text-light"
        to={`/${data.company_name}`}
      >
        🏦&nbsp;{data.company_name}
      </Link>
    </Col>
    <Col xs={5}>
      <a
        className="text-decoration-none text-light"
        href={data.url}
        target="_blank"
        rel="noreferrer"
      >
        {data.title}
      </a>
    </Col>
  </Row>
);
}
export default Job
