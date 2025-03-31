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
  gender: z.enum(["M", "F"]),
  age: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({
      required_error: "Age is required.",
      invalid_type_error: "Must be a valid number.",
    })
  ),
  bpLow: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({
      required_error: "BP Low is required.",
      invalid_type_error: "Must be a valid number.",
    })
  ),
  bpHigh: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({
      required_error: "BP High is required.",
      invalid_type_error: "Must be a valid number.",
    })
  ),
  heartRate: z.preprocess(
    (value) => (value === "" ? undefined : Number(value)),
    z.number({
      required_error: "Heart Rate is required.",
      invalid_type_error: "Must be a valid number.",
    })
  ),
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
    formData.append("gender", formDataJson.gender);
    formData.append("bpLow", formDataJson.bpLow.toString());
    formData.append("bpHigh", formDataJson.bpHigh.toString());
    formData.append("heartRate", formDataJson.heartRate.toString());

    predict(formData);
  };

  return (
    <div className="flex flex-col bg-cyan-50 rounded-2xl m-4 gap-4 px-10 py-5 items-center">
      <h1 className="text-2xl tracking-tight text-blue-500 font-bold">
        Enter your details:{" "}
      </h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-3">
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
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-3">
                  Gender
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
            name="heartRate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl text-blue-500 mt-3">
                  Heart Rate
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col md:flex-row gap-4 mt-3">
            <FormField
              control={form.control}
              name="bpLow"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl text-blue-500">
                    BP Low
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="80" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bpHigh"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xl text-blue-500">
                    BP High
                  </FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="120" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
