import { formatRange } from "../utils/proteins";
import "./table.css";

export default function ProteinTable({ weights, goals }) {
  return (
    <div className="tableWrap">
      <table className="table">
        <thead>
          <tr>
            <th>Poids (kg)</th>
            {goals.map((g) => (
              <th key={g.id}>{g.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {weights.map((w) => (
            <tr key={w}>
              <td className="weight">{w}</td>
              {goals.map((g) => (
                <td key={g.id}>{formatRange(w * g.min, w * g.max)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}