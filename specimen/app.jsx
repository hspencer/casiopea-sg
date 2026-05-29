/* app.jsx — monta el espécimen y el panel de Tweaks. Aplica las decisiones
 * como data-attributes en <html>/<body>, igual que el skin real. */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
	"trio": "plex",
	"mono": "auto",
	"titles": "sans",
	"body": "sans",
	"grid": false,
	"dark": false,
	"size": "medium",
	"xadjust": false
}/*EDITMODE-END*/;

function App() {
	const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
	const root = document.documentElement;

	React.useEffect(() => { root.setAttribute("data-trio", t.trio); }, [t.trio]);
	React.useEffect(() => {
		if (t.mono && t.mono !== "auto") root.setAttribute("data-mono", t.mono);
		else root.removeAttribute("data-mono");
	}, [t.mono]);
	React.useEffect(() => { root.setAttribute("data-sn-theme", t.dark ? "dark" : "light"); }, [t.dark]);
	React.useEffect(() => { root.setAttribute("data-titles", t.titles); }, [t.titles]);
	React.useEffect(() => { root.setAttribute("data-body", t.body); }, [t.body]);
	React.useEffect(() => { root.setAttribute("data-sn-font", t.size); }, [t.size]);
	React.useEffect(() => { root.setAttribute("data-xadjust", t.xadjust ? "on" : "off"); }, [t.xadjust]);
	React.useEffect(() => { document.body.setAttribute("data-grid", t.grid ? "on" : "off"); }, [t.grid]);

	const trioOptions = window.TRIOS.map((x) => ({ value: x.id, label: `${x.n} · ${x.name}` }));

	return (
		<React.Fragment>
			<Specimen
				trio={t.trio}
				onPickTrio={(id) => setTweak("trio", id)}
				dark={t.dark}
				grid={t.grid}
				onToggleDark={() => setTweak("dark", !t.dark)}
				onToggleGrid={() => setTweak("grid", !t.grid)}
			/>

			<TweaksPanel>
				<TweakSection label="Trío tipográfico" />
				<TweakSelect
					label="Conjunto"
					value={t.trio}
					options={trioOptions}
					onChange={(v) => setTweak("trio", v)}
				/>
				<TweakSelect
					label="Monoespaciada"
					value={t.mono}
					options={[
						{ value: "auto", label: "Según el trío" },
						{ value: "plex", label: "IBM Plex Mono" },
						{ value: "jetbrains", label: "JetBrains Mono" },
						{ value: "spline", label: "Spline Sans Mono" },
						{ value: "space", label: "Space Mono" },
						{ value: "geist", label: "Geist Mono" }
					]}
					onChange={(v) => setTweak("mono", v)}
				/>

				<TweakSection label="Voz serif / sans" />
				<TweakRadio
					label="Títulos"
					value={t.titles}
					options={["sans", "serif"]}
					onChange={(v) => setTweak("titles", v)}
				/>
				<TweakRadio
					label="Cuerpo"
					value={t.body}
					options={["sans", "serif"]}
					onChange={(v) => setTweak("body", v)}
				/>

				<TweakSection label="Verificar la retícula" />
				<TweakToggle label="Grilla de línea base" value={t.grid} onChange={(v) => setTweak("grid", v)} />
				<TweakToggle label="Igualar altura-x entre tríos" value={t.xadjust} onChange={(v) => setTweak("xadjust", v)} />

				<TweakSection label="Entorno" />
				<TweakToggle label="Tema oscuro" value={t.dark} onChange={(v) => setTweak("dark", v)} />
				<TweakRadio
					label="Tamaño de fuente"
					value={t.size}
					options={["small", "medium", "large"]}
					onChange={(v) => setTweak("size", v)}
				/>
			</TweaksPanel>
		</React.Fragment>
	);
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
