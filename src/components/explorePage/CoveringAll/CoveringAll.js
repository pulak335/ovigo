import ExploreCard from "@/components/shared/ExploreCard/ExploreCard";
import Pagination from "@/components/shared/Pagination/Pagination";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const CoveringAll = ({ allExploreData }) => {
  return (
    <div className="container mt-10">
      <SectionTitle>We are Covering all</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {allExploreData.map((explore) => (
          <ExploreCard key={explore.id} explore={explore} />
        ))}
      </div>

      <Pagination />
    </div>
  );
};

export default CoveringAll;
