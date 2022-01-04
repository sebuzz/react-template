import React from "react";
import "./_styles.css";

/**
 * ## Card
 *  1. Create a card with an image, a headline and a description
 *  2. Add a button
 *      When the user clicks the button
 *      Then the description toggles
 *      And The button text changes
 */
const Exercise = () => {
	const [visible, setVisible] = React.useState(false); // [Boolean, Function]
	return (
		<div className={"card__wrapper"}>
			<div className="card">
				<img
					src="https://images.unsplash.com/photo-1495594059084-33752639b9c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3520&q=80"
					alt="kdjsfhkdsjfh fish"
					className="card__image"
				/>

				<div className={"CardHeadline"}>
					<h1>Fishy</h1>
				</div>

				<div className={"card__actions"}>
					<button
						onClick={() => {
							console.log("irgendwas");
							setVisible(!visible);
						}}
						className={"card__button"}
					>
						{visible ? "Hide description" : "Show description"}
					</button>
					{visible ? (
						<div className={"CardDescription"}>
							<p>
								Lorem Contrary to popular belief, Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from 45
								BC, making it over 2000 years old. Richard McClintock, a Latin
								professor at Hampden-Sydney College in Virginia, looked up one of
								the more obscure Latin words, consectetur, from a Lorem Ipsum
								passage, and going through the cites of the word in classical
								literature, discovered the undoubtable source. Lorem Ipsum comes
								from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
								(The Extremes of Good and Evil) by Cicero, written in 45 BC. This
								book is a treatise on the theory of ethics, very popular during the
								Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
								amet..", comes from a line in section 1.10.32. The standard chunk of
								Lorem Ipsum used since the 1500s is reproduced below for those
								interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
								Malorum" by Cicero are also reproduced in their exact original form,
								accompanied by English versions from the 1914 translation by H.
								Rackham.
							</p>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Exercise;
