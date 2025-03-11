import Head from "next/head";
import '../styles/globals.scss' 
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../styles/HomeNoAuth.module.scss' 
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import CardsSection from "@/components/homeNoAuth/cardsSection";
import SlideSection from "@/components/homeNoAuth/slideSection";
import { ReactNode } from "react";
import courseService, { CourseType } from "@/services/courseService";
import { GetStaticProps } from "next";
import Footer from "@/components/common/footer";

interface IndexPageProps {
    children?: ReactNode;
    course: CourseType[];
}


const HomeNotAuth = function ({ course }: IndexPageProps) {
  return (
		<>
			<Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
				<meta name="description" content="Tenha acesso aos melhores conteúdos sobre programação de uma forma simples e fácil."></meta>
      </Head>
			<main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardsSection />
        <SlideSection newestCourses={course}/>
        <Footer />
      </main>
		</>
)};

export const getStaticProps: GetStaticProps = async () => {
    const res = await courseService.getNewestCourses();
    return {
      props: {
        course: res.data,
      },
      revalidate: 3600 * 24,
    };
};

export default HomeNotAuth;