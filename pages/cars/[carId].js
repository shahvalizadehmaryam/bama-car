import { useRouter } from "next/router";

const CarDetail = () => {
  const router = useRouter();
  const { carId } = router.query;
  return <h3>car detail {carId}</h3>;
};

export default CarDetail;
