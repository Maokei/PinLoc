import React, { useState } from "react";

const forceUpdate = () => {
	const [value, setValue] = useState(0);
	return () => setValue((value) => ++value);
};

export { forceUpdate };
