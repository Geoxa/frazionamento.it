import React from 'react';
import Layout from '../../layout';

class MyComponent extends React.Component {
  render() {
    return (
      <Layout title="Casi">
        <p>Tutti abbiamo diritto di difendere la nostra proprietà.</p>
        <p>
          Il problema sorge dove non sono certi i confini fra le varie particelle fondiarie.
          I motivi possono essere svariati: semiabbandono, incauto acquisto, difficoltà di accordo
          tra confinanti.
        </p>
        <p>
          Il primo caso si pone solo da qualche decennio. Sicuramente i nostri antenati sapevano
          con esattezza dove terminava la proprietà (e spesso anche quella di altri). Purtroppo
          non ce lo hanno insegnato oppure non li abbiamo ascoltati. Spesso il bosco è abbandonato
          e dopo pochi anni ci si ritrova a dover chiamare un tecnico per ridefinirne i confini.
          Sarebbe sufficiente dare una spruzzata di sprey una volta all’anno o, in alternativa,
          misurare con una cordella metrica qualche riferimento vicino, ad es. piante o massi, e
          disegnare una monografia ben chiara per ogni cippo.
        </p>
        <p>
          Il secondo caso si presenta quando ci fidiamo troppo dei venditori. La regola sarebbe di
          non versare soldi prima di aver visto i confini e di aver parlato con tutti confinanti.
          Spesso accade che la particella viene misurata all’ultimo momento e il picchettamento
          avviene senza aver avvisato l’altra parte. I confini devono essere accettati da tutti,
          solo in questo caso è consigliato l’acquisto.
        </p>
        <p>Inoltre, la misura reale misurata sul terreno solitamente è in difetto almeno del 5%
          rispetto a quella riportata al Catasto; questo è normale perché la morfologia del
          territorio è cambiata molto in questi ultimi 100 anni, spesso a causa di alluvioni o di
          strade che si sono allargate.
        </p>
        <p>Il terzo caso è il più complicato. Spesso crediamo che per memoria visiva il confine sia
          in un determinato punto, senza che sia presente un elemento fisico sul terreno che lo
          contrassegna(cippo, picchetto, lapide, chiodo, sasso, croce incisa, muro, edificio,
          recinzione, steccato, manufatto, ecc.). E’ evidente che difformità nell’ordine di alcuni
          metri vanno sicuramente considerate come errori di mappa e risolti all’origine attraverso
          indagini catastali, ma nella maggior parte dei casi è consigliabile accettare una
          soluzione di mezzo in modo da evitare contenziosi e spese.
        </p>
      </Layout>
    );
  }
}

export default MyComponent;