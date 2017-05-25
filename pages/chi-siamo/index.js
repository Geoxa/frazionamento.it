import React from 'react';
import Layout from '../../layout';

class ChiSiamoView extends React.Component {
  render() {
    return (
      <Layout title="Chi siamo">
        <p>
          FRAZIONAMENTO.IT è nato dall’unione di un gruppo di amici con esperienza pluridecennale
          in ambito topografico che sono riusciti a trasformare una passione in professione.
        </p>

        <p>Staff:</p>
        
        <ul>
          <li>Rodolfo Grandi: Geometra</li>
          <li>Gabriele Groff: Geometra</li>
          <li>Guido Antoniol: Geometra</li>
          <li>Michele Bonvecchio: Perito industriale spec. Edilizia</li>
        </ul>

        Tutto il personale può essere contattato cliccando qui.
      </Layout>
    );
  }
}

export default ChiSiamoView;