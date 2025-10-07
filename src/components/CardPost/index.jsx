import Image from "next/image";
import { Avatar } from "../Avatar";
import styles from "./cardPost.module.css";
import Link from "next/link";

export const CardPost = ({ post, highlight }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
      <article className={styles.card} style={{width: highlight ? 993 : 486}}>
        <header className={styles.header}>
          <figure className={styles.figure} style={{height: highlight ? 300 : 133}}>
            <Image
              src={post.cover}
              alt={`Capa do post de titulo: ${post.title}`}
              width={438}
              height={133}
            />
          </figure>
        </header>
        <section className={styles.body}>
          <h2 className={styles.h2}>{post.title}</h2>
          <p className={styles.p}>{post.body}</p>
        </section>
        <footer className={styles.footer}>
          <Avatar imageSrc={post.author.avatar} name={post.author.username} />
        </footer>
      </article>
    </Link>
  );
};
