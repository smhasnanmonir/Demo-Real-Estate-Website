const UpcomingPhase = () => {
  const [datas] = UseData();
  const ongoingFilter = datas.filter((data) => data.phase === "ongoing");
  return <div></div>;
};

export default UpcomingPhase;
