import '../styles/globals.scss' 
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "../styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/services/courseService";
import SearchCard from '@/components/searchCard';
import { Container } from 'reactstrap';
import Footer from '@/components/common/footer';

const Search = function () {

    const router = useRouter();
    const searchName = router.query.name;

    const [searchResult, setSearchResult] = useState<CourseType[]>([]);
    const [searchRender, setSearchRender] = useState(false);

    const searchCourses = async () => {
        if (typeof searchName === "string") {
          const res = await courseService.getSearch(searchName);
    
          setSearchResult(res.data.courses);
    
          if (res.data.courses.length === 0) {
            setSearchRender(false);
          }
        }
    };

    useEffect(() => {
        searchCourses();
    }, [searchName]);

    return (
        <>
            <Head>
                <title>Onebitflix - {"searchName"}</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
			<main className={styles.main}>
                <div className={styles.header}>
                    <HeaderAuth />
                </div>
                <section className={styles.mainContent}>
                    {searchResult.length >= 1 ? (
                        <Container className="d-flex flex-wrap justify-content-center gap-5 py-4">
                        {searchResult?.map((course) => (
                            <SearchCard key={course.id} course={course} />
                        ))}
                        </Container>
                    ) : (
                        <p className={styles.noSearchText}>Nenhum resultado encontrado!</p>
                    )}
                </section>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </main>
        </>
    );
};

export default Search;