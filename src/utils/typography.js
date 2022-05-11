import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.666,
  googleFonts: [
		{
			name: 'Zen Maru Gothic',
			styles: [
				'400',
				'500',
				'700',
			],
		},
		{
			name: 'Roboto',
			styles: [
				'400',
				'400i',
				'700',
				'700i',
			],
		},
	],
	headerFontFamily: ["Roboto","Zen Maru Gothic","serif"],
  bodyFontFamily: ["Roboto","Zen Maru Gothic","serif"],
})

export default typography
