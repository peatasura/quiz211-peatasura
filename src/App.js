function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];
  persons.forEach(function (persons) {});
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>

      {/* Convert me to a component! */}

      <table class="table is-bordered mb-3">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Bob</td>
            <td>male</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>

      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p id="id"></p>
      <button class="minus" id="minus">
        -
      </button>
      <button class="re" id="re">
        reset
      </button>
      <button calss="add" id="add">
        +
      </button>
    </div>
  );
}

export default App;
