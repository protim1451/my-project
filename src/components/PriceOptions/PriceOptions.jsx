import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    [
        {
          "id": 1,
          "name": "Basic",
          "price": "$30/month",
          "features": [
            "Access to cardio machines",
            "Limited access to weightlifting area",
            "Access to group fitness classes twice a week"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": "$50/month",
          "features": [
            "Access to cardio machines",
            "Full access to weightlifting area",
            "Access to group fitness classes four times a week",
            "Personal trainer session once a month"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": "$80/month",
          "features": [
            "Access to cardio machines",
            "Full access to weightlifting area",
            "Unlimited access to group fitness classes",
            "Personal trainer session twice a month",
            "Access to sauna and spa facilities"
          ]
        }
      ]
      

    return (
        <div>
            <h2 className="text-5xl">Best Price in Town</h2>
            {
                PriceOptions.map(option => 
                <PriceOption key={option.id} option={option}>

                </PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;