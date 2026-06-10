export default function ActivityListItem({ activity }) {
  return (
    <li key={activity.name}>
      <h2>{activity.name}</h2>
      <p>{activity.category}</p>
    </li>
  );
}
