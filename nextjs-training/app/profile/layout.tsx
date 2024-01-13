const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className={styles.innerLayout}>
    <div>
      <div>
        Note: Sample message here! This will be shown later to Lecturer and
        Student... you can remove this!
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
