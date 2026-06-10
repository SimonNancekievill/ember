import ActivityListItem from "../ActivityListItem";

export default function ActivityList({ entries }) {
  const { activities } = entries;
  return (
    <ul>
      {activities.map((activity) => {
        <ActivityListItem activity={activity} />;
      })}
    </ul>
  );
}
