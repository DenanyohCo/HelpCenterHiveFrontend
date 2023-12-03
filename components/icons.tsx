import * as React from "react";
import { IconSvgProps } from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
	size = 36,
	width,
	height,
	...props
}) => (
	<svg
		fill="none"
		height={size || height}
		viewBox="0 0 32 32"
		width={size || width}
		{...props}
	>
		<path
			clipRule="evenodd"
			d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
			fill="currentColor"
			fillRule="evenodd"
		/>
	</svg>
);

export const Logo2: React.FC<IconSvgProps> = ({
	size = 308,
	width,
	height,
	...props
}) => (
	<svg
		fill="none"
		height={size || height}
		viewBox="0 0 308 32"
		width={size || width}
		{...props}
	>
		<path d="M292.682 17.1642V23.4627H304.055V25.7015H290.294V6.29851H304.025V8.53731H292.682V14.9254H301.965V17.1642H292.682Z" fill="currentColor"/>
<path d="M277.141 25.7015L270.007 6.29851H272.574L278.753 23.3134H278.037L284.216 6.29851H286.723L279.649 25.7015H277.141Z" fill="currentColor"/>
<path d="M263.431 6.29851H265.82V25.7015H263.431V6.29851Z" fill="currentColor"/>
<path d="M242.932 14.8955H255.231V17.1343H242.932V14.8955ZM255.081 6.29851H257.469V25.7015H255.081V6.29851ZM240.753 6.29851H243.141V25.7015H240.753V6.29851Z" fill="currentColor"/>
<path d="M214.139 25.7015V6.29851H222.706C224.06 6.29851 225.214 6.50746 226.169 6.92537C227.124 7.32338 227.851 7.93035 228.348 8.74627C228.866 9.56219 229.124 10.5871 229.124 11.8209C229.124 12.6567 228.985 13.3731 228.706 13.9702C228.448 14.5672 228.08 15.0746 227.602 15.4925C227.124 15.8905 226.557 16.199 225.9 16.4179C225.264 16.6368 224.567 16.7761 223.811 16.8358L223.721 16.6866C224.776 16.7264 225.682 16.8557 226.438 17.0746C227.194 17.2935 227.781 17.6915 228.199 18.2687C228.617 18.8458 228.826 19.7114 228.826 20.8657V25.7015H226.438V20.8657C226.438 20.0697 226.298 19.4527 226.02 19.0149C225.761 18.5572 225.313 18.2388 224.677 18.0597C224.06 17.8607 223.204 17.7612 222.109 17.7612H216.527V25.7015H214.139ZM216.527 15.5224H222.706C224.06 15.5224 225.065 15.1841 225.721 14.5075C226.398 13.8109 226.736 12.9154 226.736 11.8209C226.736 10.7662 226.398 9.9602 225.721 9.40299C225.065 8.82587 224.06 8.53731 222.706 8.53731H216.527V15.5224Z" fill="currentColor"/>
<path d="M198.002 17.1642V23.4627H209.375V25.7015H195.614V6.29851H209.346V8.53731H198.002V14.9254H207.286V17.1642H198.002Z" fill="currentColor"/>
<path d="M176.665 6.29851H192.187V8.53731H176.665V6.29851ZM183.232 8.29851H185.62V25.7015H183.232V8.29851Z" fill="currentColor"/>
<path d="M171.509 22.8657L170.852 23.0746V6.29851H173.24V25.7015H170.852L158.255 9.16418L158.912 8.95522V25.7015H156.524V6.29851H158.912L171.509 22.8657Z" fill="currentColor"/>
<path d="M140.387 17.1642V23.4627H151.76V25.7015H137.999V6.29851H151.73V8.53731H140.387V14.9254H149.67V17.1642H140.387Z" fill="currentColor"/>
<path d="M133.479 19.2239C133.28 20.6169 132.802 21.8209 132.046 22.8358C131.289 23.8507 130.324 24.6368 129.15 25.194C127.996 25.7313 126.702 26 125.27 26C123.936 26 122.702 25.7711 121.568 25.3134C120.434 24.8358 119.439 24.1592 118.583 23.2836C117.747 22.408 117.09 21.3532 116.613 20.1194C116.135 18.8856 115.896 17.5124 115.896 16C115.896 14.4677 116.135 13.0945 116.613 11.8806C117.09 10.6468 117.747 9.59204 118.583 8.71642C119.439 7.8408 120.434 7.17413 121.568 6.71642C122.702 6.23881 123.936 6 125.27 6C126.722 6 128.026 6.27861 129.18 6.83582C130.354 7.37313 131.319 8.1592 132.076 9.19403C132.832 10.209 133.309 11.4229 133.508 12.8358H131.299C131.021 11.8408 130.583 11.005 129.986 10.3284C129.409 9.65174 128.712 9.13433 127.896 8.77612C127.081 8.41791 126.205 8.23881 125.27 8.23881C124.056 8.23881 122.911 8.53731 121.837 9.13433C120.782 9.73134 119.926 10.607 119.27 11.7612C118.613 12.9154 118.285 14.3284 118.285 16C118.285 17.6716 118.613 19.0846 119.27 20.2388C119.926 21.393 120.782 22.2687 121.837 22.8657C122.911 23.4627 124.056 23.7612 125.27 23.7612C126.205 23.7612 127.071 23.592 127.867 23.2537C128.683 22.8955 129.379 22.3781 129.956 21.7015C130.553 21.0249 130.991 20.199 131.27 19.2239H133.479Z" fill="currentColor"/>
<path d="M93.0784 18.8358V16.597H99.1679C100.362 16.597 101.327 16.2289 102.063 15.4925C102.82 14.7363 103.198 13.7612 103.198 12.5672C103.198 11.3333 102.82 10.3582 102.063 9.64179C101.327 8.90547 100.362 8.53731 99.1679 8.53731H93.556V25.7015H91.1679V6.29851H99.1679C100.063 6.29851 100.899 6.43781 101.675 6.71642C102.452 6.99502 103.128 7.40298 103.705 7.9403C104.302 8.47761 104.76 9.13433 105.078 9.91045C105.417 10.6866 105.586 11.5721 105.586 12.5672C105.586 13.5622 105.417 14.4478 105.078 15.2239C104.76 16 104.302 16.6567 103.705 17.194C103.128 17.7313 102.452 18.1393 101.675 18.4179C100.899 18.6965 100.063 18.8358 99.1679 18.8358H93.0784Z" fill="currentColor"/>
<path d="M75.9944 6.29851V23.4627H86.7407V25.7015H73.6063V6.29851H75.9944Z" fill="currentColor"/>
<path d="M57.4695 17.1642V23.4627H68.8426V25.7015H55.0814V6.29851H68.8127V8.53731H57.4695V14.9254H66.753V17.1642H57.4695Z" fill="currentColor"/>
<path d="M35.1791 14.8955H47.4776V17.1343H35.1791V14.8955ZM47.3284 6.29851H49.7164V25.7015H47.3284V6.29851ZM33 6.29851H35.3881V25.7015H33V6.29851Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.10576 15.2447C4.96475 15.3857 4.96475 15.6143 5.10576 15.7553L8.27089 18.9205C8.41191 19.0615 8.64055 19.0615 8.78157 18.9205L11.9467 15.7553C12.0877 15.6143 12.0877 15.3857 11.9467 15.2447L8.78157 12.0795C8.64055 11.9385 8.41191 11.9385 8.27089 12.0795L5.10576 15.2447ZM8.52623 18.1545L5.87178 15.5L8.52623 12.8456L11.1807 15.5L8.52623 18.1545Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0795 10.2709C9.93852 10.4119 9.93852 10.6405 10.0795 10.7816L13.2447 13.9467C13.3857 14.0877 13.6143 14.0877 13.7553 13.9467L16.9205 10.7816C17.0615 10.6405 17.0615 10.4119 16.9205 10.2709L13.7553 7.10576C13.6143 6.96475 13.3857 6.96475 13.2447 7.10576L10.0795 10.2709ZM13.5 13.1807L10.8456 10.5262L13.5 7.87178L16.1545 10.5262L13.5 13.1807Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0533 15.7553C14.9123 15.6143 14.9123 15.3857 15.0533 15.2447L18.2184 12.0795C18.3595 11.9385 18.5881 11.9385 18.7291 12.0795L21.8942 15.2447C22.0353 15.3857 22.0353 15.6143 21.8942 15.7553L18.7291 18.9205C18.5881 19.0615 18.3595 19.0615 18.2184 18.9205L15.0533 15.7553ZM15.8193 15.5L18.4738 18.1545L21.1282 15.5L18.4738 12.8456L15.8193 15.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0795 20.2184C9.93852 20.3595 9.93852 20.5881 10.0795 20.7291L13.2447 23.8942C13.3857 24.0353 13.6143 24.0353 13.7553 23.8942L16.9205 20.7291C17.0615 20.5881 17.0615 20.3595 16.9205 20.2184L13.7553 17.0533C13.6143 16.9123 13.3857 16.9123 13.2447 17.0533L10.0795 20.2184ZM13.5 23.1282L10.8456 20.4738L13.5 17.8193L16.1545 20.4738L13.5 23.1282Z" fill="currentColor"/>
	</svg>

	
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
				fill="currentColor"
			/>
		</svg>
	);
};

export const LinkedInIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
			clipRule="evenodd"
				d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const GithubIcon: React.FC<IconSvgProps> = ({
	size = 24,
	width,
	height,
	...props
}) => {
	return (
		<svg
			height={size || height}
			viewBox="0 0 24 24"
			width={size || width}
			{...props}
		>
			<path
				clipRule="evenodd"
				d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
				fill="currentColor"
				fillRule="evenodd"
			/>
		</svg>
	);
};

export const MoonFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
			fill="currentColor"
		/>
	</svg>
);

export const SunFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<g fill="currentColor">
			<path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
			<path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
		</g>
	</svg>
);

export const HeartFilledIcon = ({
	size = 24,
	width,
	height,
	...props
}: IconSvgProps) => (
	<svg
		aria-hidden="true"
		focusable="false"
		height={size || height}
		role="presentation"
		viewBox="0 0 24 24"
		width={size || width}
		{...props}
	>
		<path
			d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
			fill="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={1.5}
		/>
	</svg>
);

export const SearchIcon = (props: IconSvgProps) => (
	<svg
		aria-hidden="true"
		fill="none"
		focusable="false"
		height="1em"
		role="presentation"
		viewBox="0 0 24 24"
		width="1em"
		{...props}
	>
		<path
			d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
		<path
			d="M22 22L20 20"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		/>
	</svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props;

  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 161 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        className="fill-currentColor dark:fill-white"
        d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
      />
      <path
        className="fill-currentColor dark:fill-white"
        d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
      />
      <path
        className="fill-white dark:fill-currentColor"
        d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
      />
    </svg>
  );
};