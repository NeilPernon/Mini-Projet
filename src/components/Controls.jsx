import { GOALS } from "../utils/proteins";
import "./controls.css";

export default function Controls({
  selected,
  onToggleGoal,
  minW,
  onMinW,
  maxW,
  onMaxW,
  lines,
  onLines,
  canExport,
  onExport,
}) {
  return (
    <section className="controls">
      <div className="controlsBlock">
        <div className="controlsLabel">Objectifs</div>

        <div className="goalGrid">
          {GOALS.map((g) => (
            <label key={g.id} className="goalItem">
              <input
                type="checkbox"
                checked={selected.includes(g.id)}
                onChange={() => onToggleGoal(g.id)}
              />
              <span>
                {g.label} <span className="muted">({g.min}–{g.max} g/kg/j)</span>
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className="controlsRow">
        <label className="field">
          <span className="fieldLabel">Poids min (kg)</span>
          <input type="number" value={minW} onChange={(e) => onMinW(e.target.value)} min={1} step="0.1" />
        </label>

        <label className="field">
          <span className="fieldLabel">Poids max (kg)</span>
          <input type="number" value={maxW} onChange={(e) => onMaxW(e.target.value)} min={1} step="0.1" />
        </label>

        <label className="field">
          <span className="fieldLabel">Nombre de lignes</span>
          <input type="number" value={lines} onChange={(e) => onLines(e.target.value)} min={1} step="1" />
        </label>

        <div className="actions">
          <button type="button" className="btn" onClick={onExport} disabled={!canExport}>
            Exporter CSV
          </button>
        </div>
      </div>
    </section>
  );
}