import '../styles/globals.scss' 
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from "next/head";
import FeaturedSection from '@/components/homeAuth/featuresSection';

const HomeAuth = function () {
    return (
      <>
        <Head>
            <title>Onebitflix - Home</title>
            <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        </Head>
        <main>
            <FeaturedSection />
        </main>
      </>
    );
};
  
export default HomeAuth;