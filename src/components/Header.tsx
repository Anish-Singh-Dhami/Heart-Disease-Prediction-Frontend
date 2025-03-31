const Header = () => {
  return (
    <>
      <div className="bg-cyan-50 p-3 rounded-2xl m-4">
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-blue-500">
            Heart Disease Prediction
          </h1>
          <p className="text-lg md:text-2xl text-blue-500">
            Check how vulnerable you are to heart disease
          </p>
        </div>
      </div>
    </>
  );
};

export { Header };
