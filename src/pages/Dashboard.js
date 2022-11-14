const Dashboard = (props) => {
  return (
    <section className="section">
      <h4>Dashboard</h4>
      Welcome, {props.user.name.toUpperCase()}
    </section>
  );
};

export default Dashboard;
