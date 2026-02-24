import { useMemo, useState } from "react";
import "./App.css";

import Controls from "./components/Controls";
import ProteinTable from "./components/ProteinTable";

import { GOALS, buildWeights, formatRange, validateInputs } from "./utils/proteins";
import { buildCsv, downloadTextFile } from "./utils/csv";

export default function App() {
  const [selected, setSelected] = useState(["prise"]);
  const [minW, setMinW] = useState("50");
  const [maxW, setMaxW] = useState("100");
  const [lines, setLines] = useState("6");

  const selectedGoals = useMemo(
    () => GOALS.filter((g) => selected.includes(g.id)),
    [selected]
  );

  const errors = useMemo(
    () => validateInputs({ selected, minW, maxW, lines }),
    [selected, minW, maxW, lines]
  );

  const canRenderTable = errors.length === 0;

  const weights = useMemo(() => {
    if (!canRenderTable) return [];
    return buildWeights(minW, maxW, lines);
  }, [minW, maxW, lines, canRenderTable]);

  function toggleGoal(id) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  function handleExportCsv() {
    if (!canRenderTable) return;

    const header = ["Poids (kg)", ...selectedGoals.map((g) => g.label)];
    const rows = [header];

    for (const w of weights) {
      const row = [w, ...selectedGoals.map((g) => formatRange(w * g.min, w * g.max))];
      rows.push(row);
    }

    const csv = buildCsv(rows, ";");
    const filename = `proteines_${minW}-${maxW}_lignes-${lines}.csv`.replaceAll(" ", "_");
    downloadTextFile(filename, csv);
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1 className="title">Générateur de besoins en protéines</h1>
          <p className="subtitle">
            Sélectionne un ou plusieurs objectifs, définis un intervalle de poids et génère le tableau.
          </p>
        </header>

        <Controls
          selected={selected}
          onToggleGoal={toggleGoal}
          minW={minW}
          onMinW={setMinW}
          maxW={maxW}
          onMaxW={setMaxW}
          lines={lines}
          onLines={setLines}
          canExport={canRenderTable}
          onExport={handleExportCsv}
        />

        {errors.length > 0 && (
          <div className="alert">
            <div className="alertTitle">À corriger :</div>
            <ul className="alertList">
              {errors.map((msg) => (
                <li key={msg}>{msg}</li>
              ))}
            </ul>
          </div>
        )}

        <hr className="divider" />

        {!canRenderTable ? (
          <p className="hint">Le tableau s’affichera dès que les paramètres seront valides.</p>
        ) : (
          <ProteinTable weights={weights} goals={selectedGoals} />
        )}
      </div>
    </div>
  );
}