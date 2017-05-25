import React from 'react';
import Layout from '../../layout';

class MyComponent extends React.Component {
  render() {
    return (
      <Layout title="servizi">

        <p>Frazionamento.it opera al supporto di tecnici, pubbliche amministrazioni e privati.</p>

        <p>I campi di applicazione riguardano varie categorie di servizi così di seguito distinte.</p>

        <p>Gestione del territorio:</p>

        <ul>
          <li>La viabilità.</li>
          <li>I centri urbani.</li>
          <li>La morfologia.</li>
          <li>Le reti tecnologiche e gli impianti.</li>
        </ul>

        <p>Problematiche catastali:</p>

        <ul>
          <li>Frazionamenti.</li>
          <li>Riconfinazioni.</li>
          <li>Materializzazione nuovi punti fiduciali o loro integrazione in zone di scarsa copertura.</li>
          <li>Riposizionamento della cartografia catastale (CLICCA) se vuoi vedere i comuni già rilevati.</li>
        </ul>

        <p>Tracciamenti:</p>

        <ul>
          <li>Opere stradali.</li>
          <li>Opere edili di civile abitazione.</li>
          <li>Opere ingegneristiche.</li>
        </ul>

        <p>Infrastrutture:</p>
        <ul>
          <li>Dettagli architettonici di facciate, esterni ed interni.</li>
        </ul>
      </Layout>
    );
  }
}

export default MyComponent;