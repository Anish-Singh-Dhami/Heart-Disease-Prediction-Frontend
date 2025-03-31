type Prop = {
  predictionData: any;
};

const PredicitionResult = ({ predictionData }: Prop) => {
  return (
    <div className="bg-cyan-50 p-3 rounded-2xl m-4">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl font-bold tracking-tight text-blue-500">
          Result:
        </h1>
        <p className=" text-blue-500">
          You are <span className="font-bold">{predictionData}</span>%
          vulnerable to Heart Disease (Cardio Vascular Disease).
        </p>
      </div>
    </div>
  );
};

export { PredicitionResult };
