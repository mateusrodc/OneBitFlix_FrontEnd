import styles from "./styles.module.scss";
import { CourseType } from "../../../services/courseService";
import Link from "next/link";
import Image from 'next/image';

interface props {
  course: CourseType;
}

const SlideCard = function ({ course }: props) {
  return (
    <>
      <Link href={`/courses/${course.id}`} className={styles.link}>
        <div className={styles.slide}>
          <Image
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