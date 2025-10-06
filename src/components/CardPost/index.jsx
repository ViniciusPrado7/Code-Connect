import Image from "next/image";
import { Avatar } from "../Avatar";
import styles from "./cardPost.module.css"

export const CardPost = ({ post }) => {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <figure className={styles.figure}>
          <Image src={post.cover} alt={`Capa do post de titulo: ${post.title}`} width={438} height={133} />
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
  );
};
