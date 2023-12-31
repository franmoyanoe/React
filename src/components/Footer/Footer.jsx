export const Footer = () => {
  return (
    <>
      <footer className="classFooter text-center text-white">
        <div className="container p-2 pb-0">
          <section className="mb-3">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://www.linkedin.com/"
              target="_blank"
              role="button"
            >
              <i class="bi bi-linkedin"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="https://github.com/franmoyanoe/React.git"
              target="_blank"
              role="button"
            >
              <i class="bi bi-github"></i>
            </a>
          </section>
        </div>
        <div
          className="text-center p-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023{" "}
        </div>
      </footer>
    </>
  );
};
