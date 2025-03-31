import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { LoadingButton } from "@/components";

const formSchema = z.object({
  age: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({
      required_error: "Age is required.",
      invalid_type_error: "Must be a valid number.",
    })
  ),
  sex: z.enum(["M", "F"]),
  chestPainType: z.enum(["ATA", "NAP", "ASY"]),
  restingBP: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({
      required_error: "Resting BP is required.",
      invalid_type_error: "Must be a valid number.",
    })
  ),
  cholestrol: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({
      required_error: "Cholestrol value is required.",
      invalid_type_error: "Must be a valid number.",
    })
  ),
  fastingBS: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({
      required_error: "Fasting Blood Square level is required.",
      invalid_type_error: "Must be a valid number.",
    })
  ),
  restingECG: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({
      required_error: "Resting ECG value is required.",
      invalid_type_error: "Must be a valid number.",
    })
  ),
  maxHR: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({
      required_error: "Max Heart Rate is required.",
      invalid_type_error: "Must be a valid number.",
    })
  ),
  exerciseAngina: z.enum(["Y", "N"]),
  oldPeak: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({
      required_error: "Old Peak value is required.",
      invalid_type_error: "Must be a valid number.",
    })
  ),
  stSlope: z.enum(["Flat", "Up"]),
});

type formType = z.infer<typeof formSchema>;

type Prop = {
  predict: (userData: FormData) => void;
  isLoading: boolean;
};

const UserDataForm = ({ predict, isLoading }: Prop) => {
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (formDataJson: formType) => {
    const formData = new FormData();
    formData.append("age", formDataJson.age.toString());
    formData.append("sex", formDataJson.sex);
    formData.append("chestPainType", formDataJson.chestPainType);
    formData.append("cholestrol", formDataJson.cholestrol.toString());
    formData.append("restingBP", formDataJson.restingBP.toString());
    formData.append("fastingBS", formDataJson.fastingBS.toString());
    formData.append("restingECG", formDataJson.restingECG.toString());
    formData.append("maxHR", formDataJson.maxHR.toString());
    formData.append("oldPeak", formDataJson.oldPeak.toString());
    formData.append("stSlope", formDataJson.stSlope);
    console.log(formData.values);
    predict(formData);
  };

  return (
    <div className="flex flex-col bg-cyan-50 rounded-2xl m-4 gap-4 px-10 py-5 items-center">
      <h1 className="text-2xl tracking-tight text-blue-500 font-bold">
        Enter your details:{" "}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="md:w-sm">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-5">
                  Age
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sex"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-5">
                  Sex
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex gap-4 mt-2"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="male" value="M" />
                      <FormLabel htmlFor="male" className="text-blue-500">
                        Male
                      </FormLabel>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="female" value="F" />
                      <FormLabel htmlFor="female" className="text-blue-500">
                        Female
                      </FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="chestPainType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-5">
                  Chest Pain Type
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex gap-4 mt-2"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="ATA" value="ATA" />
                      <FormLabel htmlFor="ATA" className="text-blue-500">
                        ATA
                      </FormLabel>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="NAP" value="NAP" />
                      <FormLabel htmlFor="NAP" className="text-blue-500">
                        NAP
                      </FormLabel>
                    </div>

                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="ASY" value="ASY" />
                      <FormLabel htmlFor="ASY" className="text-blue-500">
                        ASY
                      </FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="restingBP"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-5">
                  Resting BP
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cholestrol"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-5">
                  Cholesterol
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="fastingBS"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-5">
                  Fasting BS
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="restingECG"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-5">
                  Resting ECG
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="maxHR"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-5">
                  Max Heart Rate
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="exerciseAngina"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-5">
                  Exercise Angina
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex gap-4 mt-2"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="yes" value="Y" />
                      <FormLabel htmlFor="yes" className="text-blue-500">
                        Yes
                      </FormLabel>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="no" value="N" />
                      <FormLabel htmlFor="no" className="text-blue-500">
                        No
                      </FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="oldPeak"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-5">
                  Old Peak
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stSlope"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-5">
                  Exercise Angina
                </FormLabel>
                <FormControl>
                  <RadioGroup
                    className="flex gap-4 mt-2"
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="Up" value="Up" />
                      <FormLabel htmlFor="Up" className="text-blue-500">
                        Up
                      </FormLabel>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem id="Flat" value="Flat" />
                      <FormLabel htmlFor="Flat" className="text-blue-500">
                        Flat
                      </FormLabel>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex mt-6 ">
            {isLoading ? (
              <LoadingButton />
            ) : (
              <Button type="submit" className="bg-blue-600 rounded-xl text-lg">
                Predict
              </Button>
            )}
          </div>
        </form>
      </Form>
    </div>
  );
};

export { UserDataForm };
