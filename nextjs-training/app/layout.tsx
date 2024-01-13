import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";

export const metadata = {
  title: "My JAMK App",
  description: "Generated by create next app",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className={styles.header}>
          <div>Header from Layout</div>

          {/* Routes */}
          <div>
            <Link href="/profile/lecturer">Lecturer</Link>
          </div>
          <div>
            <Link href="/profile/student">Student</Link>
          </div>
          <div>
            <Link href="/profile/norris">Norris</Link>
          </div>
        </div>

        {/* Renders the page */}
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;