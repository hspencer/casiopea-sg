/* Specimen.jsx — página wiki simulada que ejercita todos los registros
 * tipográficos del sistema: título, cabeceras h2–h4, cuerpo, listas,
 * enlaces (interno/externo/rojo), cita y poema (serif), código inline y
 * bloque (mono), tabla, washes de señal y controles. */

function ConstellationIcon() {
	return (
		<svg className="sn-iso" viewBox="0 0 148 148" aria-hidden="true">
			<g transform="matrix(0.892,0,0,0.892,7.41,23.33)">
				<g transform="matrix(1.1172,0,0,1.1172,-8.92,-3.72)">
					<path className="sn-i-line" d="M 22.676 21.837 L 45.501 59.142 L 77.973 52.747 C 77.973 52.747 98.206 93.357 97.975 93.357 C 97.744 93.357 130.013 63.639 130.013 63.639"></path>
					<circle className="sn-i-star" cx="22.613" cy="21.911" r="6"></circle>
					<circle className="sn-i-star" cx="45.826" cy="57.671" r="6"></circle>
					<circle className="sn-i-star" cx="77.438" cy="52.751" r="6"></circle>
					<circle className="sn-i-star" cx="97.134" cy="92.888" r="6"></circle>
					<circle className="sn-i-star" cx="129.396" cy="63.714" r="6"></circle>
				</g>
			</g>
		</svg>
	);
}

function TrioOverview({ trio, onPick }) {
	const card = (t) => (
		<button
			key={t.id}
			className={"sn-tcard" + (t.id === trio ? " is-active" : "")}
			onClick={() => onPick(t.id)}
			style={{ "--sn-tc-serif": t.serif, "--sn-tc-sans": t.sans, "--sn-tc-mono": t.mono }}
		>
			<div className="num">{t.n}</div>
			<div className="word">Casiopea</div>
			<div className="pair">Aa Gg &nbsp;<span className="m">{"{ }"}</span></div>
			<div className="name">{t.name}</div>
		</button>
	);
	const warm = window.TRIOS.filter((t) => !t.group || t.group === "warm");
	const geo = window.TRIOS.filter((t) => t.group === "geo");
	const cond = window.TRIOS.filter((t) => t.group === "cond");
	return (
		<React.Fragment>
			<div className="sn-group-label"><span>Lectura cómoda · humanista / editorial</span></div>
			<div className="sn-overview">{warm.map(card)}</div>
			<div className="sn-group-label"><span>Precisión geométrica</span></div>
			<div className="sn-overview">{geo.map(card)}</div>
			<div className="sn-group-label"><span>Moderna condensada · rendidora</span></div>
			<div className="sn-overview">{cond.map(card)}</div>
		</React.Fragment>
	);
}

function Specimen({ trio, onPickTrio, dark, grid, onToggleDark, onToggleGrid }) {
	const active = window.TRIOS.find((t) => t.id === trio) || window.TRIOS[0];
	return (
		<div className="sn-shell">
			{/* ── Chrome ── */}
			<header className="sn-header">
				<a className="sn-brand" href="#">
					<ConstellationIcon />
					<span className="sn-wordmark">
						<b>Casiopea</b>
						<span>Wiki e[ad] · PUCV</span>
					</span>
				</a>
				<div className="sn-search">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
					Buscar en Casiopea
				</div>
				<button className={"sn-ctlbtn" + (grid ? " is-on" : "")} type="button" onClick={onToggleGrid} title="Mostrar la grilla de línea base" aria-pressed={grid}>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
					Grilla
				</button>
				<button className="sn-ctlbtn" type="button" onClick={onToggleDark} title="Alternar tema claro / oscuro" aria-pressed={dark}>
					{dark ? (
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>
					) : (
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
					)}
					{dark ? "Claro" : "Oscuro"}
				</button>
				<a className="sn-ctlbtn" href="../feedback.html" title="Dar feedback sobre los tríos">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
					Feedback
				</a>
			</header>

			<nav className="sn-tabs">
				<a href="#" className="is-active">Artículo</a>
				<a href="#">Discusión</a>
				<a href="#">Editar</a>
				<a href="#">Historial</a>
			</nav>

			<div className="sn-layout">
				<main className="sn-paper">
					<article className="sn-content">
						<h1 id="firstHeading">De nova stella<span className="sn-nova-dot">.</span></h1>
						<p className="sn-tagline">El tratado de 1572 con que el cielo dejó de ser inmutable — y el nombre de esta wiki.</p>
						<hr className="sn-rule" />

						{/* Cinta comparativa */}
						<div className="sn-typeblock">
							<span className="label">Elige un trío — la página entera responde</span>
						</div>
						<TrioOverview trio={trio} onPick={onPickTrio} />

						<p>
							El <strong>11 de noviembre de 1572</strong>, el astrónomo danés{" "}
							<a href="#" className="is-visited">Tycho Brahe</a> observó una estrella
							nueva y brillante en la constelación de <a href="#">Casiopea</a>. La llamó{" "}
							<em>stella nova</em> y documentó sus mediciones en un tratado que dio al
							mundo la palabra «nova». Aquello no era una estrella naciendo sino{" "}
							<a href="#">muriendo</a>: hoy se la conoce como{" "}
							<a href="#" className="is-ext">SN 1572</a>, la supernova de Tycho.
						</p>
						<p>
							Su mayor consecuencia no fue astronómica sino filosófica: demostró que
							los cielos —que la tradición aristotélica creía perfectos e inmutables—{" "}
							<strong>cambian</strong>. Fue una de las grietas por donde entró la
							revolución científica. El artículo sobre la{" "}
							<a href="#" className="is-new">mecánica del colapso estelar</a> aún no
							existe en esta wiki.
						</p>

						<h2 id="s1">Observación y registro</h2>
						<p>
							Llegó a brillar como Venus (magnitud ≈ −4), fue visible a plena luz del
							día durante semanas y se apagó en marzo de 1574. Brahe midió su posición
							noche tras noche con un sextante de su propia construcción, buscando
							—sin éxito— el <em>paralaje</em> que la situaría entre los planetas.
						</p>
						<blockquote>
							No tenía la menor duda; no había error de observación. Era una estrella
							genuina, en el lugar donde jamás se había visto estrella alguna.
							<cite>— Tycho Brahe, <em>De nova stella</em> (1573)</cite>
						</blockquote>

						<h3 id="s1a">La constelación</h3>
						<p>
							Casiopea es reconocible por su forma de <strong>W</strong> (o M, según la
							estación), cinco estrellas brillantes cerca de la estrella polar. En la
							mitología griega, Casiopea era una reina cuya vanidad la condenó a girar
							eternamente alrededor del polo celeste.
						</p>
						<div className="sn-poem">
							<span className="sn-poem-title">Fragmento</span>
							{`Cinco luces trazan la W del norte,
mano que escribe sobre el cuaderno oscuro;
una de ellas, dicen, fue nueva una vez,
ardió como el día y volvió al silencio.`}
						</div>

						<h2 id="s2">Notas editoriales</h2>
						<p>
							Las plantillas de esta wiki distinguen tres niveles de aviso. Se componen
							con los <em>washes</em> de señal del sistema, derivados por{" "}
							<code>color-mix()</code> para que el modo oscuro se voltee solo.
						</p>
						<div className="sn-notice is-info">
							<strong>Nota.</strong> Este artículo forma parte del proyecto de
							documentación del Taller de Diseño. Revisa las convenciones antes de editar.
						</div>
						<div className="sn-notice is-warn">
							<strong>En revisión.</strong> Las fechas julianas/gregorianas de este
							período requieren contraste con fuentes primarias.
						</div>

						<h3 id="s2a">Datos de la supernova</h3>
						<table>
							<thead>
								<tr><th>Parámetro</th><th>Valor</th><th>Fuente</th></tr>
							</thead>
							<tbody>
								<tr><td>Designación</td><td>SN 1572</td><td>IAU</td></tr>
								<tr><td>Tipo</td><td>Ia (termonuclear)</td><td>Krause et al.</td></tr>
								<tr><td>Distancia</td><td>8 000 – 13 000 al</td><td>Ruiz-Lapuente</td></tr>
								<tr><td>Magnitud máx.</td><td>≈ −4,0</td><td>Brahe</td></tr>
								<tr><td>Constelación</td><td>Cassiopeia</td><td>—</td></tr>
							</tbody>
						</table>

						<h2 id="s3">Para quien edita</h2>
						<h4 id="s3a">Clases disponibles desde wikitexto</h4>
						<p>
							El skin expone un puñado de clases <em>opt-in</em>. El conjunto se mantiene
							pequeño a propósito. Por ejemplo, una galería a tres columnas:
						</p>
						<pre><code>{`<div class="`}<span className="c-key">grilla cols-3</span>{`">
  [[Archivo:nova.jpg|`}<span className="c-str">Supernova de Tycho</span>{`]]
  [[Archivo:w.svg|`}<span className="c-str">La W de Casiopea</span>{`]]
  [[Archivo:sextante.png]]
</div>
`}<span className="c-com">{`// el ancho de hoja y la grilla base no se tocan`}</span></code></pre>
						<p>
							Para resaltar una tecla usa <kbd>Ctrl</kbd> + <kbd>K</kbd>, y para texto
							técnico inline, <code>--sn-baseline</code> o <code>useskin=stellanova</code>.
						</p>

						<h4 id="s3b">Controles de interfaz</h4>
						<p>Botones y campos comparten la altura de control y el aro de foco carmín:</p>
						<div className="sn-controls">
							<button className="sn-btn is-primary">Guardar cambios</button>
							<button className="sn-btn">Vista previa</button>
							<button className="sn-btn is-danger">Descartar</button>
							<input className="sn-input" placeholder="Resumen de la edición…" />
							<span className="sn-chip">borrador</span>
						</div>

						{/* Comparativa dos columnas */}
						<h2 id="s4">Sans vs. serif · mismo texto</h2>
						<p style={{ marginBottom: "var(--sn-baseline)" }}>
							<small>El mismo párrafo en los dos registros del trío. La columna izquierda usa la sans (cuerpo e interfaz); la derecha usa la serif (voz editorial). Útil para comparar el color tipográfico y el ritmo de línea base entre familias.</small>
						</p>
						<div className="sn-twocol">
							<div className="sn-twocol-col sn-twocol-sans">
								<div className="col-label">Sans · {active.sansName}</div>
								<p>El 11 de noviembre de 1572, Tycho Brahe observó una estrella nueva en la constelación de Casiopea. La llamó <em>stella nova</em> y documentó sus mediciones en un tratado que dio al mundo la palabra «nova».</p>
								<p>Su mayor consecuencia no fue astronómica sino filosófica: demostró que los cielos —que la tradición aristotélica creía perfectos e inmutables— <strong>cambian</strong>. Fue una de las grietas por donde entró la revolución científica.</p>
							</div>
							<div className="sn-twocol-col sn-twocol-serif">
								<div className="col-label">Serif · {active.serifName}</div>
								<p>El 11 de noviembre de 1572, Tycho Brahe observó una estrella nueva en la constelación de Casiopea. La llamó <em>stella nova</em> y documentó sus mediciones en un tratado que dio al mundo la palabra «nova».</p>
								<p>Su mayor consecuencia no fue astronómica sino filosófica: demostró que los cielos —que la tradición aristotélica creía perfectos e inmutables— <strong>cambian</strong>. Fue una de las grietas por donde entró la revolución científica.</p>
							</div>
						</div>

						{/* Muestrario tipográfico explícito */}
						<h2 id="s5">Trío completo · <span style={{ color: "var(--sn-nova)" }}>{active.name}</span></h2>
						<p style={{ marginBottom: "var(--sn-baseline)" }}>
							<small>{active.tag} — serif <strong>{active.serifName}</strong> · sans <strong>{active.sansName}</strong> · mono <strong>{active.monoName}</strong>. {active.desc}</small>
						</p>
						<div className="sn-aa">
							Aa<span className="sn-aa-sans">Gg</span>
						</div>
						<div className="sn-typeblock sn-waterfall">
							<span className="label">Sans · cuerpo y UI</span>
							<div className="sn-w-5">El veloz murciélago hindú comía feliz</div>
							<div className="sn-w-4">cardumen de jureles bajo el muelle de Valparaíso</div>
							<div className="sn-w-3">La grilla de línea base ordena el ritmo vertical de la lectura, 1234567890</div>
							<div className="sn-w-2">Stella Nova absorbe los estilos de 22 extensiones sin parchearlas, y resuelve tema y preferencias antes del primer paint para evitar el FOUC.</div>
							<div className="sn-w-1">áéíóú ñ ¿? ¡! «» — versalitas, cifras y signos del español sobre papel cálido.</div>
						</div>
						<div className="sn-typeblock">
							<span className="label">Serif · voz editorial</span>
							<blockquote style={{ marginTop: "var(--sn-s-2)" }}>
								La hoja flota sobre el campo gris del atelier; un único punto de luz
								carmín es la nova. Editorial, sobrio, cálido.
							</blockquote>
						</div>
						<div className="sn-typeblock">
							<span className="label">Mono · código</span>
							<pre style={{ marginTop: "var(--sn-s-2)" }}><code><span className="c-com">{`/* IBM Plex Mono · ligaduras y cifras tabulares */`}</span>{`
`}<span className="c-key">const</span>{` baseline = fsBase * `}<span className="c-str">1.65</span>{`;
=> != >= <= --> 0Oo 1Il| {`}<span className="c-key">{"}"}</span>{`[]() #&@$`}</code></pre>
						</div>
					</article>
				</main>

				<aside className="sn-aside">
					<nav className="sn-toc">
						<h2>Contenido</h2>
						<ol>
							<li><a href="#s1">Observación y registro</a></li>
							<li><a href="#s2">Notas editoriales</a></li>
							<li><a href="#s3">Para quien edita</a></li>
							<li><a href="#s4">Sans vs. serif</a></li>
							<li><a href="#s5">El trío en detalle</a></li>
						</ol>
					</nav>
				</aside>
			</div>
		</div>
	);
}

Object.assign(window, { Specimen, TrioOverview, ConstellationIcon });
