import React from 'react';
import { Link } from 'react-router-dom';
import './scss/_not_found.scss';

const NotFoundPage = () => {
  
  return (
    <React.Fragment>
      <section className="container not-found-page">
        <div className="v-center">
          <h1>404 | Page Not Found</h1>
          <p>It seems, the page you are looking for has been moved or deleted permanently</p>
          <Link to={`/`}>Back to Home</Link>
        </div>
      </section>
    </React.Fragment>
  );
};

NotFoundPage.propTypes = {};

export default NotFoundPage;
