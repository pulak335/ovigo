import ExploreCard from "@/components/shared/ExploreCard/ExploreCard";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const BestOfCouple = ({ allExploreData }) => {
  const coverLocationData = allExploreData.slice(0, 4);
  return (
    <div className="container mt-10">
      <SectionTitle>Best For Couple</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {coverLocationData.map((explore) => (
          <ExploreCard key={explore.id} explore={explore} />
        ))}
      </div>
    </div>
  );
};

export default BestOfCouple;
