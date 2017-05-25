import React from 'react';
import Layout from '../../layout';

class MyComponent extends React.Component {
  render() {
    return (
      <Layout title="preventivo">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScnraR9gymbQKzn8i3KnNW_ZITXZd3vV-MEHhASrQYOIHmf9Q/viewform?embedded=true" width="806" height="1388" frameborder="0" marginheight="0" marginwidth="0" class='google-form-preventivo'>Loading...</iframe>
      </Layout>
    );
  }
}

export default MyComponent;