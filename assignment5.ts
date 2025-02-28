// Exercise1

function updateUser(user: Partial<User>): void {
    console.log("Updating user with data:", user);
  }

  updateUser({ name: "John" });

//   Exercise2


type RequiredUserProfile = Required<UserProfile>;

// Exercise3

const config: Readonly<{ apiKey: string; timeout: number }> = {
    apiKey: "12345",
    timeout: 5000,
  };

//Exercise4

type ProductSummary = Pick<Product, "id" | "name" | "price">;

// Exercise5

type UserWithoutEmail = Omit<User, "email">;

// Exercise6
type UserRoles = Record<number, string>;
