import "./PageLayout.css";
export type PageLayoutProps = {
  children?: React.ReactNode;
};
export default function PageLayout(props: PageLayoutProps) {
  return (
    <>
      <main>
        <div className="page__layout">{props.children}</div>
      </main>
    </>
  );
}
