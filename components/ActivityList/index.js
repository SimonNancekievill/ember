import ActivityListItem from "../ActivityListItem";

export default function ActivityList({ entries }) {
  return (
    <ul>
      {entries.map((entry) => {
        <ActivityListItem entry={entry} />;
      })}
    </ul>
  );
}
