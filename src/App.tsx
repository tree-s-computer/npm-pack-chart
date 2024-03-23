import { Main } from "./page/Main";

function App() {
  return (
    <>
      <header>NPM PACK COUNT </header>
      <div
        style={{
          backgroundImage:
            "linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) ",
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Main />
      </div>
    </>
  );
}

export default App;
