import { getServerSidePropsWithTranslation } from "@utils/ssrTranslationUtils";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <>
      <main>{t("GREETING")}</main>

      <style jsx>
        {`
          main {
            display: flex;
            justify-content: center;
            font-size: 50px;
          }
        `}
      </style>
    </>
  );
}

export const getServerSideProps = getServerSidePropsWithTranslation();
