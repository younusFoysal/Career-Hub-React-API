import Banner from "../Banner/Banner.jsx";
import CategoryList from "../CategoryList/CategoryList.jsx";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs.jsx";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;