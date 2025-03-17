import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "next/head";
import FeaturedSection from '@/components/homeAuth/featuresSection';
import NewestCategory from '@/components/homeAuth/newestCategory';
import FavoritesCategory from '@/components/homeAuth/favoriteCategory';
import FeaturedCategory from '@/components/homeAuth/featuredCategory';
import ListCategories from '@/components/homeAuth/listCategories';
import Footer from '@/components/common/footer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PageSpinner from '@/components/common/spinner';

const HomeAuth = function () {

    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!sessionStorage.getItem("onebitflix-token")) {
        router.push("/login");
      } else {
        setLoading(false);
      }
    }, []);

    if (loading) {
      return <PageSpinner />;
    }
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