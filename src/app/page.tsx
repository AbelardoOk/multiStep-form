import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <main className="justify-center items-center flex">
      <div className="bg-white rounded-xl p-4">
        <Sidebar pageNumber={1} />

        <div>
          <h1>Personal info</h1>
          <p>Please provide your name, email adress, and phone number</p>

          <form action="" className="flex flex-col gap-2">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>

            <div>
              <label htmlFor="email">Email Adress</label>
              <input type="email" name="email" id="email" />
            </div>

            <div>
              <label htmlFor="number">Phone Number</label>
              <input type="text" name="number" id="number" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
