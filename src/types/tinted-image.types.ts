export interface TintedImageProps {
	src: string;
	alt: string;
	wrapperClass: string;
	imageClass: string;
	children?: React.ReactNode;
	triggerPopIn?: boolean;
}

export type StaticTintedImageProps = Omit<
	TintedImageProps,
	"children" | "triggerPopIn" | "wrapperClass" | "imageClass"
>;
