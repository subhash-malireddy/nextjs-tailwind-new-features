import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
  description: "All about customers",
};
function page() {
  return <p>Customers Page</p>;
}

export default page;
