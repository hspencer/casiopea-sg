/* Los tríos tipográficos. Cada uno: id (= [data-trio]), nombre, familias
 * para las tarjetas, grupo (lectura cómoda / precisión geométrica) y nota
 * de carácter. */
window.TRIOS = [
	{
		id: "plex", n: "01", name: "Plex", group: "warm",
		serif: "'IBM Plex Serif', Georgia, serif",
		sans:  "'IBM Plex Sans', system-ui, sans-serif",
		mono:  "'IBM Plex Mono', monospace",
		serifName: "IBM Plex Serif", sansName: "IBM Plex Sans", monoName: "IBM Plex Mono",
		tag: "Superfamilia única",
		desc: "Una sola familia en sus tres registros. Coherencia total, voz ingenieril pero cálida, y conserva la mono que ya alojas. La apuesta más segura y sólida."
	},
	{
		id: "source", n: "02", name: "Source",
		serif: "'Source Serif 4', Georgia, serif",
		sans:  "'Source Sans 3', system-ui, sans-serif",
		mono:  "'IBM Plex Mono', monospace",
		serifName: "Source Serif 4", sansName: "Source Sans 3", monoName: "IBM Plex Mono",
		tag: "Humanista sereno",
		desc: "Serif transicional clásico-moderno + sans humanista de altura-x generosa, diseñados por Adobe para convivir. Lectura tranquila y profesional; envejece bien."
	},
	{
		id: "literata", n: "03", name: "Literata",
		serif: "'Literata', Georgia, serif",
		sans:  "'Libre Franklin', system-ui, sans-serif",
		mono:  "'IBM Plex Mono', monospace",
		serifName: "Literata", sansName: "Libre Franklin", monoName: "IBM Plex Mono",
		tag: "Editorial-literario",
		desc: "Serif slab-humanista pensada para libros (Google Play Books) + grotesca Franklin cálida en la interfaz. El binomio prensa-libro: la opción más 'página de papel'."
	},
	{
		id: "newsreader", n: "04", name: "Newsreader",
		serif: "'Newsreader', Georgia, serif",
		sans:  "'Hanken Grotesk', system-ui, sans-serif",
		mono:  "'JetBrains Mono', monospace",
		serifName: "Newsreader", sansName: "Hanken Grotesk", monoName: "JetBrains Mono",
		tag: "Revista elegante",
		desc: "Serif de prensa con tamaños ópticos e itálicas hermosas + grotesca amable. Más contraste y voz editorial; la mono JetBrains acompaña el aire contemporáneo."
	},
	{
		id: "spectral", n: "05", name: "Spectral",
		serif: "'Spectral', Georgia, serif",
		sans:  "'Work Sans', system-ui, sans-serif",
		mono:  "'IBM Plex Mono', monospace",
		serifName: "Spectral", sansName: "Work Sans", monoName: "IBM Plex Mono",
		tag: "Pantalla contemporánea",
		desc: "Serif diseñada de raíz para pantalla (Production Type) + grotesca humanista de bajo contraste. Sobrio, nítido en cuerpos pequeños, muy actual."
	},
	{
		id: "space", n: "06", name: "Space", group: "geo",
		serif: "'Crimson Pro', Georgia, serif",
		sans:  "'Space Grotesk', system-ui, sans-serif",
		mono:  "'Space Mono', monospace",
		serifName: "Crimson Pro", sansName: "Space Grotesk", monoName: "Space Mono",
		tag: "Retro-técnico preciso",
		desc: "Grotesca geométrica de proporciones fijas + su mono hermana (Space Mono es la familia madre). Aire constructivista, casi de plano técnico, equilibrado por un serif oldstyle elegante de contraste."
	},
	{
		id: "geist", n: "07", name: "Geist", group: "geo",
		serif: "'Lora', Georgia, serif",
		sans:  "'Geist', system-ui, sans-serif",
		mono:  "'Geist Mono', monospace",
		serifName: "Lora", sansName: "Geist", monoName: "Geist Mono",
		tag: "Minimalista neutro",
		desc: "Sans geométrica de dibujo limpísimo + su mono hermana, de un mismo origen. Precisión callada, sin gestos; un serif cálido de lectura (Lora) le da cuerpo editorial."
	},
	{
		id: "sora", n: "08", name: "Sora", group: "geo",
		serif: "'Bitter', Georgia, serif",
		sans:  "'Sora', system-ui, sans-serif",
		mono:  "'JetBrains Mono', monospace",
		serifName: "Bitter", sansName: "Sora", monoName: "JetBrains Mono",
		tag: "Geométrico cálido",
		desc: "Geométrica de vértices suavizados (diseñada para pantalla) + slab transicional robusto. Precisión amable, sólida en interfaz; la mono JetBrains acompaña el tono."
	},
	{
		id: "barlow", n: "09", name: "Barlow", group: "cond",
		serif: "'Source Serif 4', Georgia, serif",
		sans:  "'Barlow', system-ui, sans-serif",
		mono:  "'IBM Plex Mono', monospace",
		serifName: "Source Serif 4", sansName: "Barlow", monoName: "IBM Plex Mono",
		tag: "Semi-condensada económica",
		desc: "Grotesca californiana de bajo contraste y ancho ligeramente estrecho: rinde mucho texto por línea sin perder legibilidad. Moderna, neutra, ideal para interfaz densa."
	},
	{
		id: "archivo", n: "10", name: "Archivo", group: "cond",
		serif: "'Newsreader', Georgia, serif",
		sans:  "'Archivo', system-ui, sans-serif",
		mono:  "'JetBrains Mono', monospace",
		serifName: "Newsreader", sansName: "Archivo", monoName: "JetBrains Mono",
		tag: "Grotesca de prensa",
		desc: "Grotesca pensada para titulares y tablas, de gran economía horizontal y dibujo contemporáneo. Contrasta con la elegancia óptica de Newsreader en las citas."
	},
	{
		id: "plexcond", n: "11", name: "Plex Cond.", group: "cond",
		serif: "'IBM Plex Serif', Georgia, serif",
		sans:  "'IBM Plex Sans Condensed', system-ui, sans-serif",
		mono:  "'IBM Plex Mono', monospace",
		serifName: "IBM Plex Serif", sansName: "IBM Plex Sans Condensed", monoName: "IBM Plex Mono",
		tag: "Superfamilia condensada",
		desc: "La misma superfamilia Plex del trío 01, pero con la sans condensada: máxima coherencia y más texto por línea. Conserva por completo la mono que ya alojas."
	}
];
