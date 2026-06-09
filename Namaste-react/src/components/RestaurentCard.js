// const RestaurentCard = (props) => {
//   const { resdata } = props;
//   const {
//     imageUrl,
//     name,
//     cuisines,
//     avgRating,
//     costForTwo,
//     deliveryTime,
//   } = resdata.data;

//   return (
//     <div className="rest-card" style={{ backgroundColor: "#f0f0f0" }}>
//       <img
//         className="rest-logo"
//         alt={name}
//         src={imageUrl}
//       />
//       <h3>{name}</h3>
//       <h4>{cuisines.join(", ")}</h4>
//       <h4>{avgRating} Stars</h4>
//       <h4>₹{costForTwo / 100} FOR TWO</h4>
//       <h4>{deliveryTime} minutes</h4>
//     </div>
//   );
// };
const RestaurentCard = ({ resdata }) => {
  return (
    <div className="rest-card">
      <img
        className="rest-logo"
        src={resdata.image}
        alt="food"
      />

      <h3>{resdata.name}</h3>
      <h4>{resdata.cuisine}</h4>
      <h4>{resdata.rating} Stars</h4>
      <h4>{resdata.prepTimeMinutes} Minutes</h4>
    </div>
  );
};
export default RestaurentCard;