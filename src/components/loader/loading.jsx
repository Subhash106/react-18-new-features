import "./style.css";

const Loading = () => {
  return (
    <div>
      <div
        style={{
          display: "grid",
          gridGap: "1rem",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <span className="skelten-loader-background"></span>
        <span className="skelten-loader-background"></span>
        <span className="skelten-loader-background"></span>
        <span className="skelten-loader-background"></span>
        <div className="skelten-loader-background"></div>
      </div>
    </div>
  );
};

export default Loading;
