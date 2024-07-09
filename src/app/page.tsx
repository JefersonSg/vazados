import CardModel from '@/components/cards/CardModel';
import styles from './page.module.css';
import Header from '@/components/header/header';
import CardModelJuliana from '@/components/cards/Juliana/CardModelJuliana';
import Image from 'next/image';
import SlideModels from '@/components/slide_models/SlideModels';
import Payment from '@/components/payment/Payment';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <CardModel />
      <CardModelJuliana />
      <div className={styles.quer_mais}>
        <p>QUER MAIS?</p>
        <Image alt="seta" src={'/seta_baixo.svg'} width={10} height={15} />
      </div>
      <SlideModels />
      <Payment />
    </main>
  );
}
