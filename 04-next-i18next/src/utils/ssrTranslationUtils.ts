import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const defaultGetServerSideProps: GetServerSideProps = async () => {
  return { props: {} };
};

export const getServerSidePropsWithTranslation = (
  getServerSideProps: GetServerSideProps = defaultGetServerSideProps
) => {
  return async (context: GetServerSidePropsContext) => {
    const { locale = "en" } = context;

    const getServerSidePropsResult: GetServerSidePropsResult<any> =
      await getServerSideProps(context);

    if ("props" in getServerSidePropsResult) {
      return {
        props: {
          ...getServerSidePropsResult.props,
          ...(await serverSideTranslations(locale, ["common", "greeting"])),
        },
      };
    } else if ("redirect" in getServerSidePropsResult) {
      return {
        redirect: getServerSidePropsResult.redirect,
      };
    } else if ("notFound" in getServerSidePropsResult) {
      return {
        notFound: getServerSidePropsResult.notFound,
      };
    }
  };
};

export const getStaticPropsWithTranslation = () => {
  return () => {};
};
