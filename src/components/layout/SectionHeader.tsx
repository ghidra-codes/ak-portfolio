import React from "react";

interface SectionHeaderProps {
	title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
	return (
		<div className="section-header-wrapper">
			<h2 className="section-header">
				{title}
				<span className="section-header-period">.</span>
			</h2>
			<div className="section-header-line"></div>
		</div>
	);
};

export default SectionHeader;
