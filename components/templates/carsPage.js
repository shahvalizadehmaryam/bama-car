import Card from "../modules/Card";

const CarsPage = ({ data }) => {
  return (
    <div>
      {data.map((car) => (
        <Card key={car.id} car={car} />
      ))}
    </div>
  );
};

export default CarsPage;
