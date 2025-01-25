import styles from "./Dashboard.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { userFetchDocuments } from "../../hooks/userFetchDocuments";
import { userDeleteDocument } from "../../hooks/userDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts } = userFetchDocuments("posts", null, uid);

  const { deleteDocument } = userDeleteDocument("posts");

  console.log(uid);
  console.log(posts);

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

      {posts &&
        posts.map((post) => (
          <div className={styles.post_row} key={post.id}>
            <p>{post.title}</p>
            <div className={styles.actions}>
              <Link to={`/posts/${post.id}`} className="btn btn-plus-outline">
                Ver
              </Link>
              <Link to={`/posts/edit/${post.id}`} className="btn btn-plus-outline">
                Editar
              </Link>
              <button
                onClick={() => deleteDocument(post.id)}
                className="btn btn-outline"
              >
                Excluir
              </button> 
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
