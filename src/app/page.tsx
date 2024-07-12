import styles from './page.module.css';
import Header from '@/components/header/header';
import Image from 'next/image';
import SlideModels from '@/components/slide_models/SlideModels';
import Payment from '@/components/payment/Payment';
import CardModel from '@/components/cards/CardModel';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.section_1}>
        <Header />
        <CardModel />
      </div>

      <SlideModels />
      <div className={styles.quer_mais}>
        <p>QUER MAIS?</p>
        <Image alt="seta" src={'/seta_baixo.svg'} width={10} height={15} />
      </div>
      <Payment />
    </main>
  );
}
