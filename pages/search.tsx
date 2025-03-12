import '../styles/globals.scss' 
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "../styles/search.module.scss";
import Head from "next/head";
import HeaderAuth from "../src/components/common/headerAuth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import courseService, { CourseType } from "@/services/courseService";

const Search = function () {

    const router = useRouter();
    const searchName = router.query.name;

    const [searchResult, setSearchResult] = useState<CourseType[]>([]);

    const searchCourses = async function () {
        if (searchName != null) {
            const res = await courseService.getSearch(searchName.toString());
    
            setSearchResult(res.data.courses);
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
            <main>
                <HeaderAuth />
                {searchResult?.map((course) => (
                    <div key={course.id}>
                        <p>{course.name}</p>
                    </div>
                ))}
            </main>
        </>
    );
};

export default Search;