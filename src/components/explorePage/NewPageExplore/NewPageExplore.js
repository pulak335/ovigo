import ExploreCard from "@/components/shared/ExploreCard/ExploreCard";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const NewPageExplore = ({ allExploreData }) => {
  const coverLocationData = allExploreData.slice(0, 4);
  return (
    <div className="container ">
      <SectionTitle>New place to Explore</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {coverLocationData.map((explore) => (
          <ExploreCard key={explore.id} explore={explore} />
        ))}
      </div>
    </div>
  );
};

export default NewPageExplore;
