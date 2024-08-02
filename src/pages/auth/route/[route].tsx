import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter();
  return <p>Post: {router.query.route}</p>;
};

export default DynamicRoute;
