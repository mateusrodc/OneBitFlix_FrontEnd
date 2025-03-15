import Head from "next/head";
import '../styles/globals.scss' 
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/HomeNoAuth.module.scss' 
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import CardsSection from "@/components/homeNoAuth/cardsSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
import { ReactNode, useEffect } from "react";
import courseService, { CourseType } from "@/services/courseService";
import { GetStaticProps } from "next";
import Footer from "@/components/common/footer";
import AOS from "aos";
import "aos/dist/aos.css";

interface IndexPageProps {
    children?: ReactNode;
    course: CourseType[];
}


const HomeNotAuth = function ({ course }: IndexPageProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
		<>
			<Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
				<meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."></meta>
      </Head>
			<main>
        <div className={styles.sectionBackground} data-aos="fade-zoom-in" data-aos-duration="1600">
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <div data-aos="fade-right" data-aos-duration="1200">
          <CardsSection />
        </div>
        <div data-aos="fade-up" data-aos-duration="1350">
          <SlideSection newestCourses={course}/>
        </div>
        <Footer />
      </main>
		</>
)};

export const getStaticProps: GetStaticProps = async () => {
  const res = await courseService.getNewestCourses();
  if (res && res.data) {
    return {
      props: {
        course: res.data,
      },
      revalidate: 3600 * 24,
    };
  } else {
    console.error("getStaticProps: Dados da API inválidos ou ausentes.");
    return {
      props: {
        course: [],
      },
      revalidate: 3600 * 24,
    };
  }
};

export default HomeNotAuth;