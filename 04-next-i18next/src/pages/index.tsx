import { NextPageContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export async function getStaticProps(context: NextPageContext) {
  const { locale = "EN" } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
