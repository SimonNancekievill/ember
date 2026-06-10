import ActivityListItem from "../ActivityListItem";

export default function ActivityList({ entries }) {
  return (
    <ul>
      {entries.map((entry) => {
        const { activities } = entry;
        return activities.map((activity) => {
          return <ActivityListItem activity={activity} key={activity.name} />;
        });
      })}
    </ul>
  );
}
