import UseData from "../../Components/Hooks/UseData";

const TestData = () => {
  const [cart] = UseData();
  console.log(cart);
  return (
    <div>
      <h1>
        {cart.map((carts) => (
          <p key={carts.id}>{carts.name}</p>
        ))}
      </h1>
    </div>
  );
};

export default TestData;
