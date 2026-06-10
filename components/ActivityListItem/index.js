export default function ActivityListItem({ activity }) {
  const { name, category } = activity;

  return (
    <li key={name}>
      <h2>{name}</h2>
      <p>{category}</p>
    </li>
  );
}
