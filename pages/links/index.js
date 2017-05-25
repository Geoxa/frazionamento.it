import React from 'react';
import Layout from '../../layout';

class MyComponent extends React.Component {
  render() {
    return (
      <Layout title="Links">
        <ul>
          <li>Leica Geosystems</li>
          <li>Servizio catasto Pat</li>
          <li>New Engineering srl</li>
          <li>D4L design for living (ok)</li>
          <li>Collegio dei Geometri TN</li>
          <li>Collegio dei Periti TN</li>
        </ul>    
      </Layout>
    );
  }
}

export default MyComponent;