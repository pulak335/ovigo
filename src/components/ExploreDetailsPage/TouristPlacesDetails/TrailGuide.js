const TrailGuide = ({ place }) => {
  return (
    <div
      className="bg-[#FBFBFB] rounded-[15px]"
      style={{ boxShadow: " 0px 0px 4px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div className="py-6 px-6">
        <h2 className="text-[#101828] text-2xl font-medium">Trail Guide</h2>
        <p className="text-[#5F646F] text-base mt-1">{place?.place_name}</p>
      </div>
      <div className="border-t border-gray-300">
        <div className="pl-4 pt-[15px] pb-[35px] lg:pr-16">
          <p className="text-base text-[#101828] mb-4">{place?.trial_guide}</p>
        </div>
      </div>
    </div>
  );
};

export default TrailGuide;
