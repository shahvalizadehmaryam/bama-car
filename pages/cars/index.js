import carsData from "../../data/carsData";
import CarsPage from "../../components/templates/carsPage";

const Details = () => {
    return (  
        <div>
            <CarsPage data={carsData} />
        </div>
    );
}
 
export default Details;