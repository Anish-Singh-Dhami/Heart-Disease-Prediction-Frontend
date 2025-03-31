import { usePredictionModel } from "@/api/PredictionModelApi";
import { PredicitionResult } from "@/components/PredicitionResult";
import { UserDataForm } from "@/forms";

const HomePage = () => {
  const { predict, predictionData, isPending } = usePredictionModel();
  return (
    <>
      <UserDataForm predict={predict} isLoading={isPending} />
      {predictionData && <PredicitionResult predictionData={predictionData} />}
    </>
  );
};

export { HomePage };
