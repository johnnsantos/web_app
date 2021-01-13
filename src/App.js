import { useSelector } from "react-redux";

const App = () => {
  const { users } = useSelector((state) => state.Users);

  return (
    <>
      <button
        onClick={() => {
          console.log(users);
        }}
      >
        console
      </button>
    </>
  );
};

export default App;
