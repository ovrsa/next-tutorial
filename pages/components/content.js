export default function Content({ children }) {
  return (
    <>
      <div className="container">{children}</div>
      <hr />
      <footer>© 2022 kyo</footer>
    </>
  );
}
