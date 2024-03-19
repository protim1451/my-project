import PropTypes from 'prop-types';
import { FaCheckDouble } from "react-icons/fa";

const PriceOption = ({ option }) => {
    const { name, price, features } = option;

    return (
        <div className=' bg-green-500 rounded-2xl p-4 text-white flex flex-col'>
            
            <h2 className='text-center'> 
                <span className='text-4xl'>{price}</span>  
            </h2>
            <h4 className='m-4 text-center'>{name}</h4>
            <ul className=' pl-4 flex-grow'>
                {features.map((feature, index) => (
                    <li className='flex  items-center gap-3' key={index}><FaCheckDouble />{feature}</li>
                ))}
            </ul>
            <button className=' mt-12 bg-blue-500 w-full py-2 
            font-bold rounded-3xl hover:bg-pink-400'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired
};

export default PriceOption;
