import styles from "./styles.module.scss";
import { CourseType } from "../../../services/courseService";
import Link from "next/link";

interface props {
  course: CourseType;
}

const SlideCard = function ({ course }: props) {

  console.log('NoAuth:',course.thumbnailUrl)
  return (
    <>
      <Link href={`/courses/${course.id}`} className={styles.link}>
        <div className={styles.slide}>
          <img
              src={`${course.thumbnailUrl}`}
              alt={course.name}
              className={styles.slideImg}
          /> 
          <p className={styles.slideTitle}>{course.name}</p>
          <p className={styles.slideDescription}>{course.synopsis}</p>
        </div>
      </Link>
    </>
  );
};

export default SlideCard;