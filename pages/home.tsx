import '../styles/globals.scss' 
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "next/head";
import FeaturedSection from '@/components/homeAuth/featuresSection';
import NewestCategory from '@/components/homeAuth/newestCategory';
import FavoritesCategory from '@/components/homeAuth/favoriteCategory';
import FeaturedCategory from '@/components/homeAuth/featuredCategory';

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
        </main>
      </>
    );
};
  
export default HomeAuth;