export default function Position({ title, company, responsibilities, startDate, endDate }) {
  return (
    <div className="mt-5">
      <p>{title}</p>
      <p>{company}</p>
      <p>
        <span>{startDate}</span> - <span>{endDate}</span>
      </p>
      <ul>
        {responsibilities.map(({ key, value }) => (
          <li key={key}>{value}</li>
        ))}
      </ul>
    </div>
  );
}