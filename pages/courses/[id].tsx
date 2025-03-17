import courseService, { CourseType } from "@/services/courseService";
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "../../styles/coursePage.module.scss";
import HeaderAuth from "@/components/common/headerAuth";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Button, Container } from "reactstrap";
import EpisodeList from "@/components/episodesList";
import Footer from "@/components/common/footer";
import PageSpinner from "@/components/common/spinner";

const CoursePage = function () {

    const router = useRouter();
    const { id } = router.query;
    const [liked, setLiked] = useState(false);
    const [favorited, setFavorited] = useState(false);
    const [loading, setLoading] = useState(true);
    const [course, setCourse] = useState<CourseType>();

    useEffect(() => {
        if (!sessionStorage.getItem("onebitflix-token")) {
          router.push("/login");
        } else {
          setLoading(false);
        }
      }, []);

    const getCourse = async function () {
        if (typeof id !== "string") return;
    
        const res = await courseService.getEpisodes(id);
    
        if (res.status === 200) {
            setCourse(res.data);
            setLiked(res.data.liked);
            setFavorited(res.data.favorited);
        }
    };
    const handleLikeCourse = async () => {
        if (liked === true) {
            await courseService.removeLike(id as string);
            setLiked(false);
        } else {
            await courseService.like(id as string);
            setLiked(true);
        }
    };
    const handleFavCourse = async () => {
        if (favorited === true) {
            await courseService.removeFav(id as string);
            setFavorited(false);
        } else {
            console.log(id as string)
            await courseService.addToFav(id as string);
            setFavorited(true);
        }
    };

    useEffect(() => {
        getCourse();
    }, [id]);

    if(course === undefined) return <PageSpinner />
  
    if (loading) {
        return <PageSpinner />;
    }

    return (
        <>
            <Head>
	            <title>Onebitflix - {course?.name}</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <div  style={{
                    backgroundImage: `linear-gradient(to bottom, #6666661a, #151515),
                    url(${process.env.NEXT_PUBLIC_BASEURL}/${course?.thumbnailUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "450px",
                }}>
                    <HeaderAuth />
                </div>
                <Container className={styles.courseInfo}>
	                <p className={styles.courseTitle}>{course?.name}</p>
                    <p className={styles.courseDescription}>{course?.synopsis}</p>
                    <Button outline className={styles.courseBtn} disabled={course?.episodes?.length === 0 ? true : false} >
	                    ASSISTIR AGORA!
                        <img
                            src="/buttonPlay.svg"
                            alt="buttonImg"
                            className={styles.buttonImg}
                        />
                    </Button>
	                <div className={styles.interactions}>
                        {liked === false ? (
                            <img
                                src="/course/iconLike.svg"
                                alt="likeImage"
                                className={styles.interactionImages}
                                onClick={handleLikeCourse}
                            />
                            ) : (
                            <img
                                src="/course/iconLiked.svg"
                                alt="likedImage"
                                className={styles.interactionImages}
                                onClick={handleLikeCourse}
                            />
                        )}
                        {favorited === false ? (
                            <img
                                onClick={handleFavCourse}
                                src="/course/iconAddFav.svg"
                                alt="addFav"
                                className={styles.interactionImages}
                            />
                        ) : (
                            <img
                                onClick={handleFavCourse}
                                src="/course/iconFavorited.svg"
                                alt="favorited"
                                className={styles.interactionImages}
                            />
                        )}
                    </div>
                </Container>
                <Container className={styles.episodeInfo}>
                    <p className={styles.episodeDivision}>EPISÓDIOS</p>
                    <p className={styles.episodeLength}>
                        {course?.episodes?.length} episódios
                    </p>
                    {course?.episodes?.length === 0 ? (
                        <p>
                            <strong>Não temos episódios ainda, volte outra hora! &#x1F606;&#x1F918;</strong>
                        </p>
                    ) : (
                        course?.episodes?.map((episode) => (
                        <EpisodeList key={episode.id} episode={episode} course={course} />))
                    )}
                </Container>
                <Footer />
            </main>
        </>
    );
};

export default CoursePage;