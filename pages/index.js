import React from 'react';
import Layout from '../layout';

class HomeView extends React.Component {
  render() {
    return (
      <Layout title="Benvenuti su frazionamento.it">
        <h2>Misuriamo la terra attraverso il futuro!</h2>
        <p>Perché sceglierci:</p>
        <ul>
          <li>I servizi che offriamo sono indispensabili per alleggerire la vostra attività, dalla fase di progettazione alla consegna finale.</li>
          <li>Garantiamo i più alti standard qualitativi anche grazie all’ultima tecnologia di misurazione e software.</li>
          <li>Capiamo l’importanza delle vostre necessità e riusciamo in tempi brevi a eseguire ogni tipo di rilievo.</li>
          <li>Con più di 22 anni di esperienza abbiamo una reputazione solida e riusciamo ad offrire supporto su tutto il territorio del Trentino Alto-Adige. Rileviamo territori o parti di esso, dal semplice all’estremamente complesso: dalle città, alle aree industriali, a quelle residenziali o commerciali fino ai giardini.</li>
        </ul>
      </Layout>
    );
  }
}

export default HomeView;