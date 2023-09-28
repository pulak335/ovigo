import ExploreCard from "@/components/shared/ExploreCard/ExploreCard";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const CoveringLocation = ({ allExploreData }) => {
  return (
    <div className="container ">
      <SectionTitle>We are covering all 360 location</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {allExploreData.map((explore) => (
          <ExploreCard key={explore._id} explore={explore} />
        ))}
      </div>
    </div>
  );
};

export default CoveringLocation;
