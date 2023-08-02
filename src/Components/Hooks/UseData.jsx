import { useQuery } from "@tanstack/react-query";

const UseData = () => {
  const { refetch, data: datas = [] } = useQuery({
    queryKey: ["datas"],
    queryFn: async () => {
      const res = await fetch("/OurProject.json");
      return res.json();
    },
  });

  return [datas, refetch];
};

export default UseData;
