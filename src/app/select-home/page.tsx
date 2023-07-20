export default function SelectHome() {
  return (
    <div>
      <div className="flex">
        <input type="checkbox" name="select-house" />
        <h1>House</h1>
      </div>
      <div className="flex">
        <input type="checkbox" name="select-apartament" />
        <h1>Apartment</h1>
      </div>
    </div>
  );
}
