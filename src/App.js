import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Rogner le texte en CSS</h1>
      <section className="textBox">
        <p className="exemple1">
          <span>Sans rognage, overflow non caché,</span> ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus cupiditate, consectetur quidem quibusdam recusandae in dignissimos, tempore consequuntur quas quasi expedita, laborum distinctio error nobis itaque alias maxime saepe!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi corporis debitis quisquam sit ea, qui enim odio saepe non, perferendis velit consequuntur sequi magnam explicabo laudantium neque accusamus, suscipit aperiam!
        </p>

        <p className='exemple2'>
          <span>white-space: nowrap, overflow hidden, text-overflow: ellipsis</span>, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi corporis debitis quisquam sit ea, qui enim odio saepe non, perferendis velit consequuntur sequi magnam explicabo laudantium neque accusamus, suscipit aperiam! ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus cupiditate, consectetur quidem quibusdam recusandae in dignissimos, tempore consequuntur quas quasi expedita, laborum distinctio error nobis itaque alias maxime saepe!
        </p>

        <p className='exemple3'>
          <span>-webkit-box, max-width, -webkit-line-clamp: 3, -webkit-box-orient: vertical</span>, ipsum dolor sit amet consectetur adipisicing elit. Quaerat necessitatibus cupiditate, consectetur quidem quibusdam recusandae in dignissimos, tempore consequuntur quas quasi expedita, laborum distinctio error nobis itaque alias maxime saepe!
        </p>
      </section>
    </div>
  );
}

export default App;
