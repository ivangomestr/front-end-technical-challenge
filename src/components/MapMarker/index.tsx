import styles from './styles.module.scss';

interface MapMarkerProps {
  name: string;
  revenueSpecial: boolean;
}

export function MapMarker({ name, revenueSpecial }: MapMarkerProps) {
  console.log(revenueSpecial)
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        {/* <p className={styles.text}>{name}</p> */}
      </div>
      <img src={revenueSpecial ? '/images/marker-red.png' : '/images/marker-blue.png'} alt="Icon" />
    </div>
  );
}
