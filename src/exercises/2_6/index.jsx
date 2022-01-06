import React, { useEffect, useRef, useState } from "react";

/**
 * ## Destructuring
 *
 * 1. Use the prepared Components to output the props
 * - play with ComponentA to understand how it works
 * - play with ComponentB to understand how it works
 * - play with ComponentC to understand how it works
 * - play with ComponentD to understand how it works
 * 2. Build your own Components
 * - ComponentE should add "background" and "color" to the "style" attribute
 * - ComponentF should add "src" and "alt" to an "img" and "title" to an "h3"
 */

const Code = ({ code }) => (
	<pre>
		<code>{JSON.stringify(code, null, 4)}</code>
	</pre>
);

const HTMLOutput = ({ outerRef }) => {
	const [html, setHTML] = useState(null);

	useEffect(() => {
		if (outerRef.current) {
			const { outerHTML } = outerRef.current;
			setHTML(outerHTML);
		}
	}, [outerRef]);

	return (
		<div>
			<pre>
				<code>{html}</code>
			</pre>
		</div>
	);
};

/**
 * This Component outputs all props that can be stringified (i.e. functions are ignored)
 */
const ComponentA = (props) => {
	return <Code code={props} />;
};
function foo(a = "goodbye") {
	console.log(a);
}
foo();
foo("hallo");
/**
 * This Component uses object destructuring. It only outputs the "rest"
 */

const ComponentB = ({ foo, bar, name = { first: "Sebastian" }, address, ...rest }) => {
	console.log(" -->", address?.street?.name ?? "irgendwas", name.first ?? "Alex"); // nullish operator
	console.log(" -->", address?.street?.name || "irgendwas");

	return <Code code={address?.street} />;
};

/**
 * This Component passes all props to the dom-element
 */
const ComponentC = (props) => {
	const ref = useRef(null);

	return (
		<div>
			<div ref={ref} {...props} />
			<HTMLOutput outerRef={ref} />
		</div>
	);
};

/**
 * This Component picks "color" and adds it to the style attribute
 */
const ComponentD = ({ color, style = {}, ...rest }) => {
	const ref = useRef(null);
	return (
		<div>
			<div ref={ref} {...rest} style={{ ...style, color }} />
			<HTMLOutput outerRef={ref} />
		</div>
	);
};

/**
 * This Component picks "color" and "background" and adds it to the style attribute
 * The output only shows the "style" attribute
 */
const ComponentE = (props) => {
	const ref = useRef(null);
	return (
		<div>
			<div ref={ref} {...props}>
				I should be {props.color} with a {props.background} background
			</div>
			<HTMLOutput outerRef={ref} />
		</div>
	);
};

/**
 * This Component picks "src" and "alt" and adds it to an "img"
 * This Component picks "title" and adds it to an "h3"
 * The output does not have any attributes
 */
const ComponentF = (props) => {
	const ref = useRef(null);
	return (
		<div>
			<div ref={ref} {...props}>
				<img />
				<h3 />
			</div>
			<HTMLOutput outerRef={ref} />
		</div>
	);
};

const Exercise = () => {
	return (
		<div>
			<h1>Exercise 2.6</h1>
			<h2>ComponentA</h2>
			<p>All properties are passed on</p>
			<ComponentA foo="foo" bar={`BA${"r".toUpperCase()}`} />
			<ComponentA age={26} name={{ first: "Max", last: "Harrington" }} />
			<h2>ComponentB</h2>
			<p>
				Some properties were removed by{" "}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring"
					target="_blank"
				>
					Object destructuring
				</a>{" "}
				and{" "}
				<a
					href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters"
					target="_blank"
				>
					rest parameters
				</a>
				.
			</p>
			<ComponentB foo="foo" bar={`BA${"ar".toUpperCase()}`} />
			<ComponentB age={36} name={{ first: "Max", last: "Harrington" }} />
			<ComponentB age={36} name={{ last: "Harrington" }} />
			<ComponentB age={36} address={{ street: { name: 0 } }} />
			<h2>ComponentC</h2>
			<p>All properties are passed on</p>
			<ComponentC color="red" foo="foo" bar="bar" />
			<h2>ComponentD</h2>
			<p>Color is removed and added to style</p>
			<ComponentD color="red" foo="foo" bar="bar" />
			<h2>ComponentE</h2>
			<ComponentE color="red" background="yellow" />
			<h2>ComponentF</h2>
			<ComponentF
				src="https://images.unsplash.com/photo-1502691876148-a84978e59af8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300"
				alt="A colorful passage with wooden arches"
				title="A colorful journey"
			/>
		</div>
	);
};

export default Exercise;
