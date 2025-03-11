import '../styles/globals.scss' 
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "next/head";
import FeaturedSection from '@/components/homeAuth/featuresSection';
import NewestCategory from '@/components/homeAuth/newestCategory';
import FavoritesCategory from '@/components/homeAuth/favoriteCategory';
import FeaturedCategory from '@/components/homeAuth/featuredCategory';
import ListCategories from '@/components/homeAuth/listCategories';
import Footer from '@/components/common/footer';

const HomeAuth = function () {
    return (
      <>
        <Head>
            <title>Onebitflix - Home</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <FeaturedSection />
            <NewestCategory />
            <FavoritesCategory />
            <FeaturedCategory />
            <ListCategories />
            <Footer />
        </main>
      </>
    );
};
  
export default HomeAuth;