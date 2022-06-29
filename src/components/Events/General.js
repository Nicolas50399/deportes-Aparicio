const vowels = [65, 69, 73, 79, 85];

const onKeyDown = (e) => {
  if (vowels.includes(e.keyCode)) {
    e.preventDefault();
  }
};

export const General = () => {
  return (
    <div>
      <label htmlFor="entrada">teclea</label>
      <input type="text" onKeyDown={onKeyDown} />
      {/* agregar id 
      cambiar keyCode por la version actual no deprecada*/}
    </div>
  );
};