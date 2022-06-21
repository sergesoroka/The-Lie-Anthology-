import Head from "next/head";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";
import Masonry from "react-masonry-css";
import styles from "../styles/Home.module.css";

import { quotes } from "../data/quotes";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

export default function Home({ data }) {
  const cardRender = quotes.map((quote, i) => {
    const speakerName = Object.values(data.personsDict).map((item) => {
      if (item.person_id == quote.person_id) {
        return item.name;
      }
    });

    return (
      <Card
        key={i}
        quote_id={quote.person_id}
        person_id={quote.person_id}
        evaluation={quote.evaluation}
        quote={quote.quote}
        quote_date={quote.quote_date}
        comment={quote.comment}
        source={quote.source}
        topic1={quote.topic1}
        topic2={quote.topic2}
        speakerName={speakerName}
      />
    );
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>The Lie Anthology | Vox Ukraine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.mainGrid}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={styles.myMasonryGrid}
          columnClassName={styles.myMasonryGrid_column}
        >
          {cardRender}
        </Masonry>
      </main>
      <div id="modal" />
      <footer className={styles.footer}>Footer</footer>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch(`https://nepravda.org/data/initialInfo.json`);
  const data = await res.json();
  return { props: { data } };
}
