import { Form } from "@remix-run/react";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");

  return {
    id: Math.random().toLocaleString(),
    createdAt: new Date(),
    name,
    email,
  };
};
export default function form() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <h1 className="">Form</h1>
      <Form method="post" className="mt-50">
        <label htmlFor="name">Nome</label>
        <input
          className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
          type="text"
          name="name"
        />
        <label htmlFor="email">Email</label>
        <input
          className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
          type="email"
          name="email"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
        >
          enviar
        </button>
      </Form>
    </div>
  );
}
