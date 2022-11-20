import { Badge } from "@nextui-org/react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import EndCard from "../../components/EndCard";
import Layout from "../../components/Layout";
import CreofinNavbar from "../../components/navbar/navbar";

const End: NextPage = () => {
	const router = useRouter();
	const { surveyId } = router.query;
	return (
		<Layout>
			<Head>
				<title>
					Félicitations vous avez terminé le sondage | Sondage Creofin
				</title>
			</Head>
			<CreofinNavbar />

			<main className="tw-text-center tw-mt-10 tw-mb-10">
				<Badge color="success" size="lg" variant="flat">
					Sondage Creofin
				</Badge>
				<div className="tw-mt-5 tw-flex tw-justify-center">
					<div className="tw-container tw-flex tw-justify-center">
						<EndCard surveyId={surveyId} />
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default End;
