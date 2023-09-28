import ExploreFeatureTab from "../ExploreFeatureTab/ExploreFeatureTab";
import SliderGallery from "../SliderGallery/SliderGallery";

const ExploreFeatureContainer = ({ place }) => {
  return (
    <div>
      <div className="container my-6">
        <div className="grid grid-cols-1 lg:grid-cols-7 lg:gap-5">
          {/* Explore Gallery */}
          <div className="lg:col-span-5">
            <SliderGallery place={place} />
          </div>
          {/* Explore Feature */}
          <div className="lg:col-span-2">
            <div className=" bg-white p-4 rounded-2xl">
              <ExploreFeatureTab />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreFeatureContainer;
