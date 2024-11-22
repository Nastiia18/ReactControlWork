export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch("https://reqres.in/api/users?page=1");

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return [];
  }
};

export const deleteUser = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`https://reqres.in/api/users/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    console.log(`User with ID ${id} deleted successfully.`);
  } catch (error) {
    console.error(`Failed to delete user with ID ${id}:`, error);
  }
};
