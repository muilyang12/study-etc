import { getServerSidePropsWithTranslation } from "@utils/ssrTranslationUtils";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <div>{t("GREETING", { ns: "greeting" })}</div>
      </main>

      <style jsx>
        {`
          main {
            display: flex;
            flex-direction: column;
            align-items: center;

            font-size: 50px;
          }
        `}
      </style>
    </>
  );
}

export const getServerSideProps = getServerSidePropsWithTranslation();
