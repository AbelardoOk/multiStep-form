export function Sidebar(pageNumber: any) {
  const page = pageNumber;

  return (
    <div className="rounded-lg flex flex-col justify-between bg-sidebar-desktop gap-6">
      <div className="flex flex-row gap-4">
        {page == 1 ? (
          <h2 className="text-lg font-medium rounded-full p-3 text-primary-marineBlue bg-primary-pastelBlue">1</h2>
        ) : (
          <h2 className="text-lg font-medium rounded-full p-3 border-2 border-white text-white">1</h2>
        )}
        <div className="flex flex-col justify-between">
          <p>STEP 1</p>
          <h2 className="font-medium text-white">YOUR INFO</h2>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        {page == 2 ? (
          <h2 className="text-lg font-medium rounded-full p-3 text-primary-marineBlue bg-primary-pastelBlue">2</h2>
        ) : (
          <h2 className="text-lg font-medium rounded-full p-3 border-2 border-white text-white">2</h2>
        )}
        <div className="flex flex-col justify-between">
          <p>STEP 2</p>
          <h2 className="font-medium text-white">SELECT PLAN</h2>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        {page == 3 ? (
          <h2 className="text-lg font-medium rounded-full p-3 text-primary-marineBlue bg-primary-pastelBlue">3</h2>
        ) : (
          <h2 className="text-lg font-medium rounded-full p-3 border-2 border-white text-white">3</h2>
        )}
        <div className="flex flex-col justify-between">
          <p>STEP 3</p>
          <h2 className="font-medium text-white">ADD-ONS</h2>
        </div>
      </div>

      <div className="flex flex-row gap-4">
        {page == 4 ? (
          <h2 className="text-lg font-medium rounded-full p-3 text-primary-marineBlue bg-primary-pastelBlue">4</h2>
        ) : (
          <h2 className="text-lg font-medium rounded-full p-3 border-2 border-white text-white">4</h2>
        )}
        <div className="flex flex-col justify-between">
          <p>STEP 4</p>
          <h2 className="font-medium text-white">SUMMARY</h2>
        </div>
      </div>
    </div>
  );
}
