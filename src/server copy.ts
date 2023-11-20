import { z } from "zod";

const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: "the name should to be 3 caracters" })
    .transform((name) => name.toLocaleUpperCase()),
  age: z.number().min(18, { message: "the age to be ether than 18" }),
});

type User = z.infer<typeof userSchema>;

function saveUserToDatabase(user: User): User {
  const u = userSchema.parse(user);
  console.log({ u });
  return u;
}

saveUserToDatabase({ name: "gilson.russo", age: 38 });
