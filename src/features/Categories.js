import styles from "./Categories.module.css";

const Categories = () => {
  return (
    <article>
      <h2 className="title">Hover para mostrar contenido</h2>

      <div className={styles.content}>
        <div>
          <p>
            Este contenido sólo se ve al hacer hover en el título. Y lo hace con
            una animación.
            <br />
            <br />
            Normalmente no se puede animar una altura automáticamente al
            contenido, pero con este truco se puede hacer sin problemas.
            <br />
            <br />
          </p>
        </div>
      </div>
    </article>
  );
};

export default Categories;
