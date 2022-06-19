import { Layout } from "../components/Layout/Layout";
import { AddAuthorForm } from "../components/AddAuthorForm/AddAuthorForm";
import "./AddAuthor.scss";

export const AddAuthor = () => {
  return (
    <Layout>
      <section className="add-author">
        <div className="container">
          <h1>Add an Author</h1>
          <AddAuthorForm />
        </div>
      </section>
    </Layout>
  );
};
