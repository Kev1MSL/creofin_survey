import React, { Component, useState } from "react";
import styles from "../../styles/Navbar.module.css";
import { Navbar } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

class CreofinNavbar extends Component {
	render() {
		return (
			<Navbar variant="sticky">
				<Navbar.Brand className="tw-flex tw-w-full md:tw-w-max lg:tw-w-max xl:tw-w-max 2xl:tw-w-max">
					<Link href="/" className="tw-text-left">
						<div>
							<Image
								src="/assets/logo/creofin-logo-light.svg"
								alt="Creofin logo"
								height={55}
								width={200}
								className="tw-cursor-pointer"
							/>
						</div>
					</Link>
					<Navbar.Toggle
						aria-label="toggle navigation"
						className="tw-ml-auto"
						showIn={"xs"}
					/>
				</Navbar.Brand>
				<Navbar.Content
					variant="underline-rounded"
					hideIn="xs"
					activeColor="primary"
				>
					<Navbar.Link isActive href="#">
						Accueil
					</Navbar.Link>
					<Navbar.Link href="#">
						Conditions et Politique de confidentialité
					</Navbar.Link>
				</Navbar.Content>
				<Navbar.Collapse>
					<Navbar.CollapseItem>
						<Link href="#" color="inherit" className="hover:tw-text-green-200">
							Accueil
						</Link>
					</Navbar.CollapseItem>
					<Navbar.CollapseItem>
						<Link href="#" color="inherit">
							Conditions et Politique de confidentialité
						</Link>
					</Navbar.CollapseItem>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default CreofinNavbar;
