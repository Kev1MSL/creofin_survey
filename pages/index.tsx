import type { NextPage } from "next";
import { Badge } from "@nextui-org/react";
import Layout from "../components/Layout";
import CreofinNavbar from "../components/navbar/navbar";
import { useRouter } from "next/router";
import HomeCard from "../components/HomeCard";
import Head from "next/head";

const GetReferralCode = (): string => {
	const router = useRouter();
	const { referralCode } = router.query;
	return referralCode?.toString() ?? "";
};

const Home: NextPage = () => {
	// Retrieve the referral code from the URL
	const referralCode = GetReferralCode();
	return (
		<Layout>
			<Head>
				<title>
					Sondage Creofin | Creofin - Achetez Maintenant, Payez Après Récolte
				</title>
			</Head>
			<CreofinNavbar />
			<main className="tw-text-center tw-mt-20 tw-mb-10">
				<div>
					<Badge color="success" size="lg" variant="flat">
						Sondage Creofin
					</Badge>
					<h2 className="tw-text-4xl tw-font-bold tw-text-center tw-mt-7">
						Remplissez ce sondage en
						<span className="text-highlighter"> 5 minutes </span>et gagnez
						<span className="text-highlighter"> 500 euros.</span>
					</h2>
					<div className="tw-flex tw-justify-center">
						<HomeCard referralCode={referralCode} />
					</div>
				</div>
			</main>
		</Layout>
	);
};

export default Home;
