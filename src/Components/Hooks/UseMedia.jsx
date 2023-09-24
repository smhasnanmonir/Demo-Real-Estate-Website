import { useQuery } from "@tanstack/react-query";

const UseMedia = () => {
  const { refetch, data: medias = [] } = useQuery({
    queryKey: ["medias"],
    queryFn: async () => {
      const res = await fetch("/Media.json");
      return res.json();
    },
  });

  return [medias, refetch];
};

export default UseMedia;
